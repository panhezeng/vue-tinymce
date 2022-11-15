import { defineComponent as S, ref as k, watch as y, onMounted as w, onBeforeUnmount as C, openBlock as F, createElementBlock as E, createElementVNode as B, nextTick as c } from "vue";
import f from "tinymce";
const T = { class: "vue-tinymce-comp" }, m = /* @__PURE__ */ S({
  __name: "VueTinymce",
  props: {
    modelValue: {
      type: String,
      required: !0
    },
    updateEvent: {
      type: String,
      default: "beforeaddundo undo redo keyup focusout"
    },
    url: {
      type: String,
      default: "https://unpkg.com/tinymce@%5E6.2.0"
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
  setup(s, { emit: g }) {
    const a = s, i = k(null);
    let t = null, e = {};
    function b() {
      if (i.value) {
        e = Object.assign(
          {},
          {
            allow_script_urls: !0,
            remove_script_host: !1,
            convert_urls: !1,
            relative_urls: !1,
            branding: !1,
            promotion: !0,
            indentation: "2px",
            font_size_formats: "12px 14px 16px 18px 20px 24px",
            plugins: "preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons",
            contextmenu: "link image table",
            image_advtab: !0,
            menubar: "file edit view insert format tools table help",
            toolbar: "undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl"
          },
          a.config
        );
        const n = a.baseUrl, o = "zh_CN", x = "en_US";
        if (e.language === x ? (delete e.language, delete e.language_url) : (e.language || (e.language = o), !e.language_url && e.language === o && (e.language_url = `${n}/@panhezeng/vue-tinymce@latest/dist/langs/${e.language}.js`), !e.font_family_formats && e.language === o && (e.font_family_formats = 'Andale Mono="andale mono", times;Arial=arial, helvetica, sans-serif;Arial Black="arial black", "avant garde";Book Antiqua="book antiqua", palatino;Comic Sans MS="comic sans ms", sans-serif;Courier New="courier new", courier;Georgia=georgia, palatino;Helvetica=helvetica;Impact=impact, chicago;Symbol=symbol;Tahoma=tahoma, arial, helvetica, sans-serif;Terminal=terminal, monaco;Times New Roman="times new roman",times;Trebuchet MS="trebuchet ms", geneva;Verdana=verdana, geneva;Webdings=webdings;Wingdings=wingdings', window.navigator.platform.indexOf("Win") > -1 ? (e.font_family_formats = `\u5FAE\u8F6F\u96C5\u9ED1="Microsoft YaHei";\u9ED1\u4F53=SimHei;\u5B8B\u4F53=SimSun;\u4EFF\u5B8B=FangSong;\u6977\u4F53=KaiTi;${e.font_family_formats || ""}`, e.content_style = 'body { font-size: 14px; font-family: "Microsoft YaHei"; }') : window.navigator.platform.indexOf("Mac") > -1 ? (e.font_family_formats = `\u9ED1\u4F53=STHeiti;\u5B8B\u4F53=STSong;\u4EFF\u5B8B=STFangsong;\u6977\u4F53=STKaiti;${e.font_family_formats || ""}`, e.content_style = "body { font-size: 14px; font-family: STHeiti; }") : window.navigator.platform.indexOf("Linux") > -1 && (e.font_family_formats = `\u9ED1\u4F53="Source Han Sans SC";\u5B8B\u4F53="Source Han Serif SC";${e.font_family_formats || ""}`, e.content_style = 'body { font-size: 14px; font-family: "Source Han Sans SC"; }'))), e.external_plugins || (e.external_plugins = {}), !e.external_plugins.textindentoutdent) {
          const l = Object.keys(e);
          for (let u = l.length - 1; u >= 0; u--) {
            const r = l[u];
            if (r && typeof r == "string" && r.indexOf("toolbar") !== -1 && /\btext(indent|outdent)\b/g.test(String(e[r]))) {
              e.language === o && (e.external_plugins.textindentoutdentzhcn = `${n}/@panhezeng/tinymce-plugin-text-indent-outdent@latest/dist/textindentoutdent/langs/zh_CN.js`), e.external_plugins.textindentoutdent = `${n}/@panhezeng/tinymce-plugin-text-indent-outdent@latest/dist/textindentoutdent/plugin.min.js`;
              break;
            }
          }
        }
        e.target = i.value, e.init_instance_callback = (l) => {
          i.value && (t = l, d(), t.on(a.updateEvent, v), typeof a.config.init_instance_callback == "function" && a.config.init_instance_callback(t)), h();
        };
      }
    }
    function d() {
      c().then(() => {
        i.value && t && t.getContent() !== a.modelValue && t.setContent(a.modelValue);
      });
    }
    function v() {
      c().then(() => {
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
      c().then(() => {
        i.value && (p(), b(), f.init(e));
      });
    }
    y(() => a.modelValue, d), y(
      () => a.config,
      () => {
        _();
      },
      { deep: !0 }
    );
    function h() {
      const n = document.querySelector(".tox-promotion");
      n && (n.style.display = "none");
    }
    return w(() => {
      f.EditorManager.baseURL = a.url, _();
    }), C(() => {
      p();
    }), (n, o) => (F(), E("div", T, [
      B("textarea", {
        ref_key: "editorElement",
        ref: i
      }, null, 512)
    ]));
  }
}), H = Object.assign(m, {
  install: (s) => {
    s.component(m.name, m);
  }
});
export {
  H as default
};
