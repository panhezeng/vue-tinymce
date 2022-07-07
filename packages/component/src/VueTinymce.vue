<template>
  <div class="vue-tinymce-comp">
    <textarea ref="editorElement"></textarea>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  PropType,
  ref,
  nextTick,
  onBeforeUnmount,
  onMounted,
  watch,
} from 'vue';
import tinymce, { Editor, RawEditorOptions } from 'tinymce';
export default defineComponent({
  name: 'VueTinymce',
  props: {
    // 父组件通过 v-model 同步富文本编辑器内容
    modelValue: {
      type: String,
      required: true,
    },
    // 触发 v-model 同步更新的 tinymce Editor Events，其他 https://www.tiny.cloud/docs/advanced/events/
    updateEvent: {
      type: String,
      default: 'beforeaddundo undo redo keyup focusout',
    },
    // tinymce依赖文件的cdn url
    url: {
      type: String,
      default: 'https://unpkg.com/tinymce@%5E6.0.3',
    },
    // tinymce 依赖文件的cdn base url
    baseUrl: {
      type: String,
      default: 'https://unpkg.com',
    },
    // tinymce的init方法的config参数，本组件有默认设置，比如不要toolbar3，可以使用该组件时写上 :config="{toolbar2:''}"
    config: {
      type: Object as PropType<RawEditorOptions>,
      default() {
        return {};
      },
    },
  },
  emits: ['update:modelValue', 'content-change'],
  setup(
    props: {
      modelValue: string;
      updateEvent: string;
      url: string;
      baseUrl: string;
      config: RawEditorOptions;
    },
    context
  ) {
    const editorElement = ref<HTMLElement | null>(null);

    let editor: null | Editor = null,
      tinymceConfig: RawEditorOptions = {};

    function setTinymceConfig() {
      if (editorElement.value) {
        // 用外部配置覆盖内部默认配置
        tinymceConfig = Object.assign(
          {},
          {
            allow_script_urls: true,
            remove_script_host: false,
            convert_urls: false,
            relative_urls: false,
            // document_base_url: this.url,
            // theme_url: `${this.url}/themes/silver/theme.min.js`,
            // skin_url: `${this.url}/skins/ui/oxide`,
            branding: false,
            indentation: '2px',
            fontsize_formats: '12px 14px 16px 18px 20px 24px',
            plugins:
              'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
            contextmenu: 'link image table',
            image_advtab: true,
            menubar: 'file edit view insert format tools table help',
            // menubar: false,
            toolbar:
              'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
          },
          props.config
        ) as RawEditorOptions;
        // ============================================================================
        const baseUrl = props.baseUrl;
        const zhCN = 'zh_CN';
        const enUS = 'en_US';
        // 如果配置为默认英语，则删除语言相关配置节点
        if (tinymceConfig.language === enUS) {
          delete tinymceConfig.language;
          delete tinymceConfig.language_url;
        } else {
          // 如果语言没有配置，则默认配置为中文
          if (!tinymceConfig.language) {
            tinymceConfig.language = zhCN;
          }
          // 如果没有配置 language_url ，并且是 zhCN ，则使用本项目的语言包
          if (!tinymceConfig.language_url && tinymceConfig.language === zhCN) {
            tinymceConfig.language_url = `${baseUrl}/@panhezeng/vue-tinymce@latest/dist/langs/${tinymceConfig.language}.js`;
          }

          // 如果没有配置 font_formats ，并且是 zhCN ，则使用内部配置
          if (!tinymceConfig.font_formats && tinymceConfig.language === zhCN) {
            tinymceConfig.font_formats =
              'Andale Mono="andale mono", times;Arial=arial, helvetica, sans-serif;Arial Black="arial black", "avant garde";Book Antiqua="book antiqua", palatino;Comic Sans MS="comic sans ms", sans-serif;Courier New="courier new", courier;Georgia=georgia, palatino;Helvetica=helvetica;Impact=impact, chicago;Symbol=symbol;Tahoma=tahoma, arial, helvetica, sans-serif;Terminal=terminal, monaco;Times New Roman="times new roman",times;Trebuchet MS="trebuchet ms", geneva;Verdana=verdana, geneva;Webdings=webdings;Wingdings=wingdings';
            if (window.navigator.platform.indexOf('Win') > -1) {
              tinymceConfig.font_formats = `微软雅黑="Microsoft YaHei";黑体=SimHei;宋体=SimSun;仿宋=FangSong;楷体=KaiTi;${
                tinymceConfig.font_formats || ''
              }`;
              tinymceConfig.content_style =
                'body { font-size: 14px; font-family: "Microsoft YaHei"; }';
            } else if (window.navigator.platform.indexOf('Mac') > -1) {
              tinymceConfig.font_formats = `黑体=STHeiti;宋体=STSong;仿宋=STFangsong;楷体=STKaiti;${
                tinymceConfig.font_formats || ''
              }`;
              tinymceConfig.content_style =
                'body { font-size: 14px; font-family: STHeiti; }';
            } else if (window.navigator.platform.indexOf('Linux') > -1) {
              tinymceConfig.font_formats = `黑体="Source Han Sans SC";宋体="Source Han Serif SC";${
                tinymceConfig.font_formats || ''
              }`;
              tinymceConfig.content_style =
                'body { font-size: 14px; font-family: "Source Han Sans SC"; }';
            }
          }
        }

        if (!tinymceConfig.external_plugins) {
          tinymceConfig.external_plugins = {};
        }

        if (!tinymceConfig.external_plugins['textindentoutdent']) {
          const keys = Object.keys(tinymceConfig);
          for (let i = keys.length - 1; i >= 0; i--) {
            const key = keys[i] as keyof RawEditorOptions;
            // 如果 toolbar 配置了 textindent textoutdent 按钮，则加载 textindentoutdent 插件
            if (
              key &&
              typeof key === 'string' &&
              key.indexOf('toolbar') !== -1 &&
              /\btext(indent|outdent)\b/g.test(String(tinymceConfig[key]))
            ) {
              if (tinymceConfig.language === zhCN) {
                tinymceConfig.external_plugins[
                  'textindentoutdentzhcn'
                ] = `${baseUrl}/@panhezeng/tinymce-plugin-text-indent-outdent@latest/dist/textindentoutdent/langs/zh_CN.js`;
              }
              tinymceConfig.external_plugins[
                'textindentoutdent'
              ] = `${baseUrl}/@panhezeng/tinymce-plugin-text-indent-outdent@latest/dist/textindentoutdent/plugin.min.js`;
              break;
            }
          }
        }

        tinymceConfig.target = editorElement.value;
        tinymceConfig.init_instance_callback = (instance) => {
          if (editorElement.value) {
            editor = instance;
            setContent();
            editor.on(props.updateEvent, contentChange);
            if (typeof props.config.init_instance_callback === 'function') {
              props.config.init_instance_callback(editor);
            }
          }
        };
      }
    }

    function setContent() {
      nextTick().then(() => {
        // 如果编辑器实例已经为真，并且编辑器内容和父组件传入的内容不一样
        if (
          editorElement.value &&
          editor &&
          editor.getContent() !== props.modelValue
        ) {
          editor.setContent(props.modelValue);
        }
      });
    }

    function contentChange() {
      nextTick().then(() => {
        // 同步到父组件
        if (editorElement.value && editor) {
          const content = editor.getContent();
          context.emit('update:modelValue', content);
          context.emit('content-change', content);
        }
      });
    }

    function destroy() {
      try {
        // 销毁
        if (editorElement.value && editor) {
          if (editor.plugins.autosave) {
            editor.plugins.autosave.removeDraft();
          }
          tinymce.PluginManager.remove('autosave');
          editor.remove();
          editor.destroy();
          editor = null;
        }
      } catch (e) {
        return;
      }
    }

    function init() {
      nextTick().then(() => {
        // 编辑器实例初始化
        if (editorElement.value) {
          destroy();
          setTinymceConfig();
          tinymce.init(tinymceConfig);
        }
      });
    }

    watch(() => props.modelValue, setContent);

    watch(
      () => props.config,
      () => {
        init();
      },
      { deep: true }
    );

    onMounted(() => {
      // 从指定url加载tinymce依赖文件
      tinymce.EditorManager.baseURL = props.url;
      init();
    });

    onBeforeUnmount(() => {
      destroy();
    });

    return { editorElement };
  },
});
</script>
