import {
  d as _,
  r as F,
  w as k,
  o as B,
  t as f,
  a as S,
  n as m,
  b as g,
  c as y,
  e as l,
  f as w,
  g as x,
  h as C,
  i as $,
  j as T,
  F as E,
  k as A,
  l as D,
} from "./vendor.a213934e.js";
const V = function () {
  const a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) n(e);
  new MutationObserver((e) => {
    for (const i of e)
      if (i.type === "childList")
        for (const r of i.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && n(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(e) {
    const i = {};
    return (
      e.integrity && (i.integrity = e.integrity),
      e.referrerpolicy && (i.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (i.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    const i = o(e);
    fetch(e.href, i);
  }
};
V();
var O = (t, a) => {
  const o = t.__vccOpts || t;
  for (const [n, e] of a) o[n] = e;
  return o;
};
const j = _({
    name: "VueTinymce",
    props: {
      modelValue: { type: String, required: !0 },
      updateEvent: {
        type: String,
        default: "beforeaddundo undo redo keyup focusout",
      },
      url: {
        type: String,
        default: "https://cdn.jsdelivr.net/npm/tinymce@%5E6.0.1",
      },
      config: {
        type: Object,
        default() {
          return {};
        },
      },
    },
    emits: ["update:modelValue", "content-change"],
    setup(t, a) {
      const o = F(null);
      let n = null,
        e = {};
      function i() {
        if (o.value) {
          e = Object.assign(
            {},
            {
              allow_script_urls: !0,
              remove_script_host: !1,
              convert_urls: !1,
              relative_urls: !1,
              branding: !1,
              indentation: "2px",
              fontsize_formats: "12px 14px 16px 18px 20px 24px",
              plugins:
                "preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons",
              contextmenu: "link image table",
              image_advtab: !0,
              menubar: "file edit view insert format tools table help",
              toolbar1:
                "code | undo redo | fontsizeselect fontselect | blockquote hr | removeformat link unlink pastetext | pagebreak | charmap emoticons | fullscreen preview save print | insertfile image media template",
              toolbar2:
                "formatselect | bold italic underline strikethrough | forecolor backcolor | textindent textoutdent | indent outdent | alignleft aligncenter alignright alignjustify | bullist numlist | anchor codesample | ltr rtl",
            },
            t.config
          );
          const u = "zh_CN",
            b = "en_US";
          if (e.language === b) delete e.language, delete e.language_url;
          else {
            if (
              (e.language || (e.language = u),
              !e.language_url && e.language === u)
            ) {
              let s = "https://cdn.jsdelivr.net/npm/";
              /unpkg.com/.test(t.url) && (s = "https://unpkg.com/"),
                (e.language_url = `${s}@panhezeng/vue-tinymce@latest/dist/langs/${e.language}.js`);
            }
            !e.font_formats &&
              e.language === u &&
              ((e.font_formats =
                'Andale Mono="andale mono", times;Arial=arial, helvetica, sans-serif;Arial Black="arial black", "avant garde";Book Antiqua="book antiqua", palatino;Comic Sans MS="comic sans ms", sans-serif;Courier New="courier new", courier;Georgia=georgia, palatino;Helvetica=helvetica;Impact=impact, chicago;Symbol=symbol;Tahoma=tahoma, arial, helvetica, sans-serif;Terminal=terminal, monaco;Times New Roman="times new roman",times;Trebuchet MS="trebuchet ms", geneva;Verdana=verdana, geneva;Webdings=webdings;Wingdings=wingdings'),
              window.navigator.platform.indexOf("Win") > -1
                ? ((e.font_formats = `\u5FAE\u8F6F\u96C5\u9ED1="Microsoft YaHei";\u9ED1\u4F53=SimHei;\u5B8B\u4F53=SimSun;\u4EFF\u5B8B=FangSong;\u6977\u4F53=KaiTi;${
                    e.font_formats || ""
                  }`),
                  (e.content_style =
                    'body { font-size: 14px; font-family: "Microsoft YaHei"; }'))
                : window.navigator.platform.indexOf("Mac") > -1
                ? ((e.font_formats = `\u9ED1\u4F53=STHeiti;\u5B8B\u4F53=STSong;\u4EFF\u5B8B=STFangsong;\u6977\u4F53=STKaiti;${
                    e.font_formats || ""
                  }`),
                  (e.content_style =
                    "body { font-size: 14px; font-family: STHeiti; }"))
                : window.navigator.platform.indexOf("Linux") > -1 &&
                  ((e.font_formats = `\u9ED1\u4F53="Source Han Sans SC";\u5B8B\u4F53="Source Han Serif SC";${
                    e.font_formats || ""
                  }`),
                  (e.content_style =
                    'body { font-size: 14px; font-family: "Source Han Sans SC"; }')));
          }
          if (
            (e.external_plugins || (e.external_plugins = {}),
            !e.external_plugins.textindentoutdent)
          ) {
            const s = Object.keys(e);
            for (let d = s.length - 1; d >= 0; d--) {
              const v = s[d];
              if (
                v.indexOf("toolbar") !== -1 &&
                /\btext(indent|outdent)\b/g.test(e[v])
              ) {
                e.language === u &&
                  (e.external_plugins.textindentoutdentzhcn =
                    "https://cdn.jsdelivr.net/npm/@panhezeng/tinymce-plugin-text-indent-outdent@latest/dist/textindentoutdent/langs/zh_CN.js"),
                  (e.external_plugins.textindentoutdent =
                    "https://cdn.jsdelivr.net/npm/@panhezeng/tinymce-plugin-text-indent-outdent@latest/dist/textindentoutdent/plugin.min.js");
                break;
              }
            }
          }
          (e.target = o.value),
            (e.init_instance_callback = (s) => {
              o.value &&
                ((n = s),
                r(),
                n.on(t.updateEvent, c),
                typeof t.config.init_instance_callback == "function" &&
                  t.config.init_instance_callback(n));
            });
        }
      }
      function r() {
        m().then(() => {
          o.value &&
            n &&
            n.getContent() !== t.modelValue &&
            n.setContent(t.modelValue);
        });
      }
      function c() {
        m().then(() => {
          if (o.value && n) {
            const u = n.getContent();
            a.emit("update:modelValue", u), a.emit("content-change", u);
          }
        });
      }
      function p() {
        try {
          o.value &&
            n &&
            (n.plugins.autosave && n.plugins.autosave.removeDraft(),
            f.PluginManager.remove("autosave"),
            n.remove(),
            n.destroy(),
            (n = null));
        } catch {
          return;
        }
      }
      function h() {
        m().then(() => {
          o.value && (p(), i(), f.init(e));
        });
      }
      return (
        k(
          () => t.config,
          () => {
            h();
          },
          { deep: !0 }
        ),
        B(() => {
          (f.EditorManager.baseURL = t.url), h();
        }),
        S(() => {
          p();
        }),
        { editorElement: o }
      );
    },
  }),
  z = { class: "vue-tinymce-comp" },
  L = { ref: "editorElement" };
function M(t, a, o, n, e, i) {
  return g(), y("div", z, [l("textarea", L, null, 512)]);
}
var H = O(j, [["render", M]]),
  N = (t, a) => {
    const o = t.__vccOpts || t;
    for (const [n, e] of a) o[n] = e;
    return o;
  };
const q = _({
    name: "App",
    components: { VueTinymce: H },
    setup() {
      const t = w({ content: "init content", show: !0, locale: "" }),
        a = x(() => {
          let n = {};
          return t.locale === "en" && (n = { language: "en_US" }), n;
        });
      function o() {
        t.locale ? (t.locale = "") : (t.locale = "en");
      }
      return { data: t, config: a, switchLanguage: o };
    },
  }),
  U = l("h1", null, "VueTinymce example", -1),
  K = l("br", null, null, -1),
  P = l("br", null, null, -1),
  W = l("br", null, null, -1),
  I = l("br", null, null, -1),
  R = l("h2", null, "output", -1),
  Y = ["innerHTML"];
function G(t, a, o, n, e, i) {
  const r = A("vue-tinymce");
  return (
    g(),
    y(
      E,
      null,
      [
        U,
        l(
          "button",
          { onClick: a[0] || (a[0] = (c) => (t.data.show = !t.data.show)) },
          " \u70B9\u51FB\u52A0\u8F7D\u79FB\u9664\u7F16\u8F91\u5668\uFF0C\u6D4B\u8BD5\u521D\u59CB\u5316\u548C\u9500\u6BC1\uFF1A\uFF1A\uFF1A" +
            C(t.data.show ? "\u9500\u6BC1" : "\u52A0\u8F7D"),
          1
        ),
        K,
        P,
        l(
          "button",
          {
            onClick:
              a[1] ||
              (a[1] = (...c) => t.switchLanguage && t.switchLanguage(...c)),
          },
          "\u70B9\u51FB\u5207\u6362\u8BED\u8A00\uFF0C\u6D4B\u8BD5\u66F4\u65B0config"
        ),
        W,
        I,
        t.data.show
          ? (g(),
            $(
              r,
              {
                key: 0,
                modelValue: t.data.content,
                "onUpdate:modelValue":
                  a[2] || (a[2] = (c) => (t.data.content = c)),
                config: t.config,
              },
              null,
              8,
              ["modelValue", "config"]
            ))
          : T("", !0),
        R,
        l("div", { innerHTML: t.data.content }, null, 8, Y),
      ],
      64
    )
  );
}
var J = N(q, [["render", G]]);
const Q = D(J);
Q.mount("#app");
