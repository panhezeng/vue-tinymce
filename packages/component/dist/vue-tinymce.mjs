import { defineComponent as S, ref as k, watch as y, onMounted as w, onBeforeUnmount as C, openBlock as T, createElementBlock as z, createElementVNode as V, nextTick as u } from "vue";
import f from "tinymce";
const E = { class: "vue-tinymce-comp" }, m = /* @__PURE__ */ S({
  __name: "VueTinymce",
  props: {
    // 父组件通过 v-model 同步富文本编辑器内容
    modelValue: {
      type: String,
      required: !0
    },
    // 触发 v-model 同步更新的 tinymce Editor Events，其他 https://www.tiny.cloud/docs/advanced/events/
    updateEvent: {
      type: String,
      default: "beforeaddundo undo redo keyup focusout"
    },
    // tinymce依赖文件的cdn url
    url: {
      type: String,
      default: "https://unpkg.com/tinymce@%5E7.3.0"
    },
    // tinymce 依赖文件的cdn base url
    baseUrl: {
      type: String,
      default: "https://unpkg.com"
    },
    // tinymce的init方法的config参数，本组件有默认设置，比如不要toolbar3，可以使用该组件时写上 :config="{toolbar2:''}"
    config: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  emits: ["update:modelValue", "content-change"],
  setup(s, { emit: b }) {
    const a = s, g = b, i = k(null);
    let t = null, e = {};
    function v() {
      if (i.value) {
        e = Object.assign(
          {},
          {
            allow_script_urls: !0,
            remove_script_host: !1,
            convert_urls: !1,
            relative_urls: !1,
            // document_base_url: this.url,
            // theme_url: `${this.url}/themes/silver/theme.min.js`,
            // skin_url: `${this.url}/skins/ui/oxide`,
            branding: !1,
            promotion: !0,
            indentation: "2px",
            font_size_formats: "12px 14px 16px 18px 20px 24px",
            plugins: "preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons",
            contextmenu: "link image table",
            image_advtab: !0,
            menubar: "file edit view insert format tools table help",
            toolbar: "undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media link anchor codesample | ltr rtl"
          },
          a.config
        );
        const n = a.baseUrl, o = "zh_CN";
        if (e.language === "en_US" ? (delete e.language, delete e.language_url) : (e.language || (e.language = o), !e.language_url && e.language === o && (e.language_url = `${n}/@panhezeng/vue-tinymce@latest/dist/langs/${e.language}.js`), !e.font_family_formats && e.language === o && (e.font_family_formats = 'Andale Mono="andale mono", times;Arial=arial, helvetica, sans-serif;Arial Black="arial black", "avant garde";Book Antiqua="book antiqua", palatino;Comic Sans MS="comic sans ms", sans-serif;Courier New="courier new", courier;Georgia=georgia, palatino;Helvetica=helvetica;Impact=impact, chicago;Symbol=symbol;Tahoma=tahoma, arial, helvetica, sans-serif;Terminal=terminal, monaco;Times New Roman="times new roman",times;Trebuchet MS="trebuchet ms", geneva;Verdana=verdana, geneva;Webdings=webdings;Wingdings=wingdings', window.navigator.platform.indexOf("Win") > -1 ? (e.font_family_formats = `微软雅黑="Microsoft YaHei";黑体=SimHei;宋体=SimSun;仿宋=FangSong;楷体=KaiTi;${e.font_family_formats || ""}`, e.content_style = 'body { font-size: 14px; font-family: "Microsoft YaHei"; }') : window.navigator.platform.indexOf("Mac") > -1 ? (e.font_family_formats = `黑体=STHeiti;宋体=STSong;仿宋=STFangsong;楷体=STKaiti;${e.font_family_formats || ""}`, e.content_style = "body { font-size: 14px; font-family: STHeiti; }") : window.navigator.platform.indexOf("Linux") > -1 && (e.font_family_formats = `黑体="Source Han Sans SC";宋体="Source Han Serif SC";${e.font_family_formats || ""}`, e.content_style = 'body { font-size: 14px; font-family: "Source Han Sans SC"; }'))), e.external_plugins || (e.external_plugins = {}), !e.external_plugins.textindentoutdent) {
          const l = Object.keys(e);
          for (let c = l.length - 1; c >= 0; c--) {
            const r = l[c];
            if (r && typeof r == "string" && r.indexOf("toolbar") !== -1 && /\btext(indent|outdent)\b/g.test(String(e[r]))) {
              e.language === o && (e.external_plugins.textindentoutdentzhcn = `${n}/@panhezeng/tinymce-plugin-text-indent-outdent@latest/dist/textindentoutdent/langs/zh_CN.js`), e.external_plugins.textindentoutdent = `${n}/@panhezeng/tinymce-plugin-text-indent-outdent@latest/dist/textindentoutdent/plugin.min.js`;
              break;
            }
          }
        }
        e.target = i.value, e.init_instance_callback = (l) => {
          i.value && (t = l, d(), t.on(a.updateEvent, h), typeof a.config.init_instance_callback == "function" && a.config.init_instance_callback(t)), x();
        };
      }
    }
    function d() {
      u().then(() => {
        i.value && t && t.getContent() !== a.modelValue && t.setContent(a.modelValue);
      });
    }
    function h() {
      u().then(() => {
        if (i.value && t) {
          const n = t.getContent();
          g("update:modelValue", n), g("content-change", n);
        }
      });
    }
    function p() {
      try {
        i.value && t && (t.plugins.autosave && t.plugins.autosave.removeDraft(), f.PluginManager.remove("autosave"), t.remove(), t.destroy(), t = null);
      } catch {
        return;
      }
    }
    function _() {
      u().then(() => {
        i.value && (p(), v(), f.init(e));
      });
    }
    y(() => a.modelValue, d), y(
      () => a.config,
      () => {
        _();
      },
      { deep: !0 }
    );
    function x() {
      const n = document.querySelector(".tox-promotion");
      n && (n.style.display = "none");
    }
    return w(() => {
      f.EditorManager.baseURL = a.url, _();
    }), C(() => {
      p();
    }), (n, o) => (T(), z("div", E, [
      V("textarea", {
        ref_key: "editorElement",
        ref: i
      }, null, 512)
    ]));
  }
}), O = Object.assign(m, {
  install: (s) => {
    s.component(m.name || "", m);
  }
});
export {
  O as default
};
