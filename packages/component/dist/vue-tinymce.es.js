import { defineComponent, ref, watch, onMounted, onBeforeUnmount, nextTick, openBlock, createElementBlock, createElementVNode } from "vue";
import tinymce from "tinymce";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = defineComponent({
  name: "VueTinymce",
  props: {
    modelValue: {
      type: String,
      required: true
    },
    updateEvent: {
      type: String,
      default: "beforeaddundo undo redo keyup focusout"
    },
    url: {
      type: String,
      default: "https://unpkg.com/tinymce@%5E6.1.0"
    },
    baseUrl: {
      type: String,
      default: "https://unpkg.com"
    },
    config: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  emits: ["update:modelValue", "content-change"],
  setup(props, context) {
    const editorElement = ref(null);
    let editor = null, tinymceConfig = {};
    function setTinymceConfig() {
      if (editorElement.value) {
        tinymceConfig = Object.assign({}, {
          allow_script_urls: true,
          remove_script_host: false,
          convert_urls: false,
          relative_urls: false,
          branding: false,
          indentation: "2px",
          fontsize_formats: "12px 14px 16px 18px 20px 24px",
          plugins: "preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons",
          contextmenu: "link image table",
          image_advtab: true,
          menubar: "file edit view insert format tools table help",
          toolbar: "undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl"
        }, props.config);
        const baseUrl = props.baseUrl;
        const zhCN = "zh_CN";
        const enUS = "en_US";
        if (tinymceConfig.language === enUS) {
          delete tinymceConfig.language;
          delete tinymceConfig.language_url;
        } else {
          if (!tinymceConfig.language) {
            tinymceConfig.language = zhCN;
          }
          if (!tinymceConfig.language_url && tinymceConfig.language === zhCN) {
            tinymceConfig.language_url = `${baseUrl}/@panhezeng/vue-tinymce@latest/dist/langs/${tinymceConfig.language}.js`;
          }
          if (!tinymceConfig.font_formats && tinymceConfig.language === zhCN) {
            tinymceConfig.font_formats = 'Andale Mono="andale mono", times;Arial=arial, helvetica, sans-serif;Arial Black="arial black", "avant garde";Book Antiqua="book antiqua", palatino;Comic Sans MS="comic sans ms", sans-serif;Courier New="courier new", courier;Georgia=georgia, palatino;Helvetica=helvetica;Impact=impact, chicago;Symbol=symbol;Tahoma=tahoma, arial, helvetica, sans-serif;Terminal=terminal, monaco;Times New Roman="times new roman",times;Trebuchet MS="trebuchet ms", geneva;Verdana=verdana, geneva;Webdings=webdings;Wingdings=wingdings';
            if (window.navigator.platform.indexOf("Win") > -1) {
              tinymceConfig.font_formats = `\u5FAE\u8F6F\u96C5\u9ED1="Microsoft YaHei";\u9ED1\u4F53=SimHei;\u5B8B\u4F53=SimSun;\u4EFF\u5B8B=FangSong;\u6977\u4F53=KaiTi;${tinymceConfig.font_formats || ""}`;
              tinymceConfig.content_style = 'body { font-size: 14px; font-family: "Microsoft YaHei"; }';
            } else if (window.navigator.platform.indexOf("Mac") > -1) {
              tinymceConfig.font_formats = `\u9ED1\u4F53=STHeiti;\u5B8B\u4F53=STSong;\u4EFF\u5B8B=STFangsong;\u6977\u4F53=STKaiti;${tinymceConfig.font_formats || ""}`;
              tinymceConfig.content_style = "body { font-size: 14px; font-family: STHeiti; }";
            } else if (window.navigator.platform.indexOf("Linux") > -1) {
              tinymceConfig.font_formats = `\u9ED1\u4F53="Source Han Sans SC";\u5B8B\u4F53="Source Han Serif SC";${tinymceConfig.font_formats || ""}`;
              tinymceConfig.content_style = 'body { font-size: 14px; font-family: "Source Han Sans SC"; }';
            }
          }
        }
        if (!tinymceConfig.external_plugins) {
          tinymceConfig.external_plugins = {};
        }
        if (!tinymceConfig.external_plugins["textindentoutdent"]) {
          const keys = Object.keys(tinymceConfig);
          for (let i = keys.length - 1; i >= 0; i--) {
            const key = keys[i];
            if (key && typeof key === "string" && key.indexOf("toolbar") !== -1 && /\btext(indent|outdent)\b/g.test(String(tinymceConfig[key]))) {
              if (tinymceConfig.language === zhCN) {
                tinymceConfig.external_plugins["textindentoutdentzhcn"] = `${baseUrl}/@panhezeng/tinymce-plugin-text-indent-outdent@latest/dist/textindentoutdent/langs/zh_CN.js`;
              }
              tinymceConfig.external_plugins["textindentoutdent"] = `${baseUrl}/@panhezeng/tinymce-plugin-text-indent-outdent@latest/dist/textindentoutdent/plugin.min.js`;
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
            if (typeof props.config.init_instance_callback === "function") {
              props.config.init_instance_callback(editor);
            }
          }
        };
      }
    }
    function setContent() {
      nextTick().then(() => {
        if (editorElement.value && editor && editor.getContent() !== props.modelValue) {
          editor.setContent(props.modelValue);
        }
      });
    }
    function contentChange() {
      nextTick().then(() => {
        if (editorElement.value && editor) {
          const content = editor.getContent();
          context.emit("update:modelValue", content);
          context.emit("content-change", content);
        }
      });
    }
    function destroy() {
      try {
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
        if (editorElement.value) {
          destroy();
          setTinymceConfig();
          tinymce.init(tinymceConfig);
        }
      });
    }
    watch(() => props.modelValue, setContent);
    watch(() => props.config, () => {
      init();
    }, { deep: true });
    onMounted(() => {
      tinymce.EditorManager.baseURL = props.url;
      init();
    });
    onBeforeUnmount(() => {
      destroy();
    });
    return { editorElement };
  }
});
const _hoisted_1 = { class: "vue-tinymce-comp" };
const _hoisted_2 = { ref: "editorElement" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("textarea", _hoisted_2, null, 512)
  ]);
}
var _VueTinymce = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const VueTinymce = Object.assign(_VueTinymce, {
  install: (app) => {
    app.component(_VueTinymce.name, _VueTinymce);
  }
});
export { VueTinymce as default };
