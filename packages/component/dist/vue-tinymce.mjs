import { defineComponent as x, ref as S, watch as y, onMounted as k, onBeforeUnmount as w, nextTick as c, openBlock as C, createElementBlock as F, createElementVNode as E } from "vue";
import f from "tinymce";
const B = x({
  name: "VueTinymce",
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
  setup(n, o) {
    const a = S(null);
    let t = null, e = {};
    function g() {
      if (a.value) {
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
          n.config
        );
        const i = n.baseUrl, l = "zh_CN", h = "en_US";
        if (e.language === h ? (delete e.language, delete e.language_url) : (e.language || (e.language = l), !e.language_url && e.language === l && (e.language_url = `${i}/@panhezeng/vue-tinymce@latest/dist/langs/${e.language}.js`), !e.font_family_formats && e.language === l && (e.font_family_formats = 'Andale Mono="andale mono", times;Arial=arial, helvetica, sans-serif;Arial Black="arial black", "avant garde";Book Antiqua="book antiqua", palatino;Comic Sans MS="comic sans ms", sans-serif;Courier New="courier new", courier;Georgia=georgia, palatino;Helvetica=helvetica;Impact=impact, chicago;Symbol=symbol;Tahoma=tahoma, arial, helvetica, sans-serif;Terminal=terminal, monaco;Times New Roman="times new roman",times;Trebuchet MS="trebuchet ms", geneva;Verdana=verdana, geneva;Webdings=webdings;Wingdings=wingdings', window.navigator.platform.indexOf("Win") > -1 ? (e.font_family_formats = `\u5FAE\u8F6F\u96C5\u9ED1="Microsoft YaHei";\u9ED1\u4F53=SimHei;\u5B8B\u4F53=SimSun;\u4EFF\u5B8B=FangSong;\u6977\u4F53=KaiTi;${e.font_family_formats || ""}`, e.content_style = 'body { font-size: 14px; font-family: "Microsoft YaHei"; }') : window.navigator.platform.indexOf("Mac") > -1 ? (e.font_family_formats = `\u9ED1\u4F53=STHeiti;\u5B8B\u4F53=STSong;\u4EFF\u5B8B=STFangsong;\u6977\u4F53=STKaiti;${e.font_family_formats || ""}`, e.content_style = "body { font-size: 14px; font-family: STHeiti; }") : window.navigator.platform.indexOf("Linux") > -1 && (e.font_family_formats = `\u9ED1\u4F53="Source Han Sans SC";\u5B8B\u4F53="Source Han Serif SC";${e.font_family_formats || ""}`, e.content_style = 'body { font-size: 14px; font-family: "Source Han Sans SC"; }'))), e.external_plugins || (e.external_plugins = {}), !e.external_plugins.textindentoutdent) {
          const r = Object.keys(e);
          for (let s = r.length - 1; s >= 0; s--) {
            const u = r[s];
            if (u && typeof u == "string" && u.indexOf("toolbar") !== -1 && /\btext(indent|outdent)\b/g.test(String(e[u]))) {
              e.language === l && (e.external_plugins.textindentoutdentzhcn = `${i}/@panhezeng/tinymce-plugin-text-indent-outdent@latest/dist/textindentoutdent/langs/zh_CN.js`), e.external_plugins.textindentoutdent = `${i}/@panhezeng/tinymce-plugin-text-indent-outdent@latest/dist/textindentoutdent/plugin.min.js`;
              break;
            }
          }
        }
        e.target = a.value, e.setup = () => {
          b();
        }, e.init_instance_callback = (r) => {
          a.value && (t = r, d(), t.on(n.updateEvent, v), typeof n.config.init_instance_callback == "function" && n.config.init_instance_callback(t));
        };
      }
    }
    function d() {
      c().then(() => {
        a.value && t && t.getContent() !== n.modelValue && t.setContent(n.modelValue);
      });
    }
    function v() {
      c().then(() => {
        if (a.value && t) {
          const i = t.getContent();
          o.emit("update:modelValue", i), o.emit("content-change", i);
        }
      });
    }
    function p() {
      try {
        a.value && t && (t.plugins.autosave && t.plugins.autosave.removeDraft(), f.PluginManager.remove("autosave"), t.remove(), t.destroy(), t = null);
      } catch {
        return;
      }
    }
    function _() {
      c().then(() => {
        a.value && (p(), g(), f.init(e));
      });
    }
    y(() => n.modelValue, d), y(
      () => n.config,
      () => {
        _();
      },
      { deep: !0 }
    );
    function b() {
      const i = document.querySelector(".tox-promotion");
      i && (i.style.display = "none");
    }
    return k(() => {
      f.EditorManager.baseURL = n.url, _();
    }), w(() => {
      p();
    }), { editorElement: a };
  }
}), T = (n, o) => {
  const a = n.__vccOpts || n;
  for (const [t, e] of o)
    a[t] = e;
  return a;
}, z = { class: "vue-tinymce-comp" }, V = { ref: "editorElement" };
function $(n, o, a, t, e, g) {
  return C(), F("div", z, [
    E("textarea", V, null, 512)
  ]);
}
const m = /* @__PURE__ */ T(B, [["render", $]]), O = Object.assign(m, {
  install: (n) => {
    n.component(m.name, m);
  }
});
export {
  O as default
};
