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
  watchEffect,
} from "vue";
import tinymce, { Editor, RawEditorSettings } from "tinymce";
export default defineComponent({
  name: "VueTinymce",
  props: {
    // 父组件通过 v-model 同步富文本编辑器内容
    modelValue: {
      type: String,
      required: true,
    },
    // 触发 v-model 同步更新的 tinymce Editor Events，其他 https://www.tiny.cloud/docs/advanced/events/
    updateEvent: {
      type: String,
      default: "beforeaddundo undo redo keyup focusout",
    },
    // tinymce依赖文件的cdn url
    url: {
      type: String,
      default: "https://cdn.jsdelivr.net/npm/tinymce@%5E5.0.0",
    },
    // tinymce的init方法的config参数，本组件有默认设置，比如不要toolbar3，可以使用该组件时写上 :config="{toolbar2:''}"
    config: {
      type: Object as PropType<RawEditorSettings>,
      default() {
        return {};
      },
    },
  },
  emits: ["update:modelValue", "content-change"],
  setup(
    props: {
      modelValue: string;
      updateEvent: string;
      url: string;
      config: RawEditorSettings;
    },
    context
  ) {
    const editorElement = ref<HTMLElement | null>(null);

    let editor: null | Editor = null,
      tinymceConfig: RawEditorSettings = {
        allow_script_urls: true,
        remove_script_host: false,
        convert_urls: false,
        relative_urls: false,
        // document_base_url: this.url,
        // theme_url: `${this.url}/themes/silver/theme.min.js`,
        // skin_url: `${this.url}/skins/ui/oxide`,
        branding: false,
        indentation: "2px",
        fontsize_formats: "12px 14px 16px 18px 20px 24px",
        plugins:
          "print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons",
        contextmenu: "link image imagetools table",
        image_advtab: true,
        menubar: "file edit view insert format tools table help",
        // menubar: false,
        toolbar1:
          "code | undo redo | fontsizeselect fontselect | blockquote hr | removeformat link unlink pastetext | pagebreak | charmap emoticons | fullscreen preview save print | insertfile image media template",
        toolbar2:
          "formatselect | bold italic underline strikethrough | forecolor backcolor | textindent textoutdent | indent outdent | alignleft aligncenter alignright alignjustify | bullist numlist | anchor codesample | ltr rtl",
      };

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
          context.emit("update:modelValue", content);
          context.emit("content-change", content);
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
          tinymce.PluginManager.remove("autosave");
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
        const refEditor = editorElement.value;
        if (refEditor) {
          destroy();
          tinymceConfig.target = refEditor;
          tinymceConfig.init_instance_callback = (instance) => {
            if (editorElement.value) {
              editor = instance;

              if (props.config.init_instance_callback) {
                props.config.init_instance_callback(editor);
              }

              setContent();
              editor.on(
                props.updateEvent,
                tinymce.util.Delay.debounce(() => {
                  contentChange();
                }, 300)
              );
            }
          };
          tinymce.init(tinymceConfig);
        }
      });
    }

    onBeforeUnmount(() => {
      destroy();
    });

    watchEffect(() => {
      // 从指定url加载tinymce依赖文件
      tinymce.EditorManager.baseURL = props.url;
      // 用外部配置覆盖内部默认配置
      Object.assign(tinymceConfig, props.config);

      // ============================================================================
      const zhCN = "zh_CN";
      const enUS = "en_US";
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
          let langCDN = "https://cdn.jsdelivr.net/npm/";
          if (/unpkg.com/.test(props.url)) {
            langCDN = "https://unpkg.com/";
          }
          tinymceConfig.language_url = `${langCDN}@panhezeng/vue-tinymce@latest/dist/langs/${tinymceConfig.language}.js`;
        }

        // 如果没有配置 font_formats ，并且是 zhCN ，则使用内部配置
        if (!tinymceConfig.font_formats && tinymceConfig.language === zhCN) {
          tinymceConfig.font_formats =
            "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats";
          if (window.navigator.platform.indexOf("Win") > -1) {
            tinymceConfig.font_formats =
              "微软雅黑=Microsoft Yahei;黑体=SimHei;宋体=SimSun;楷体=KaiTi;隶书=STLiti;" +
              tinymceConfig.font_formats;
          } else if (window.navigator.platform.indexOf("Mac") > -1) {
            tinymceConfig.font_formats =
              "苹方=PingFang SC;黑体=STHeiti;宋体=STSong;楷体=STKaiti;隶书=STLiti;" +
              tinymceConfig.font_formats;
          } else if (window.navigator.platform.indexOf("Linux") > -1) {
            tinymceConfig.font_formats =
              "黑体=Source Han Sans SC;宋体=Source Han Serif SC;" +
              tinymceConfig.font_formats;
          }
          // tinymceConfig.content_style =
          //   'body { font-size: 14px; font-family:"微软雅黑", "苹方", Verdana, Arial, Helvetica, sans-serif;}';
        }
      }

      if (!tinymceConfig.external_plugins) {
        tinymceConfig.external_plugins = {};
      }

      if (!tinymceConfig.external_plugins["textindentoutdent"]) {
        const keys = Object.keys(tinymceConfig);
        for (let i = keys.length - 1; i >= 0; i--) {
          const key = keys[i];
          // 如果 toolbar 配置了 textindent textoutdent 按钮，则加载 textindentoutdent 插件
          if (
            key.indexOf("toolbar") !== -1 &&
            /\btext(indent|outdent)\b/g.test(tinymceConfig[key])
          ) {
            if (tinymceConfig.language === zhCN) {
              tinymceConfig.external_plugins["textindentoutdentzhcn"] =
                "https://cdn.jsdelivr.net/npm/@panhezeng/tinymce-plugin-text-indent-outdent@latest/dist/textindentoutdent/langs/zh_CN.js";
            }
            tinymceConfig.external_plugins["textindentoutdent"] =
              "https://cdn.jsdelivr.net/npm/@panhezeng/tinymce-plugin-text-indent-outdent@latest/dist/textindentoutdent/plugin.min.js";
            break;
          }
        }
      }

      nextTick().then(() => {
        init();
      });
    });

    return { editorElement };
  },
});
</script>
