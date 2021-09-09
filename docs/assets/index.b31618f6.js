import {
  d as e,
  c as t,
  a as n,
  r as a,
  w as o,
  o as i,
  u as l,
  b as s,
  e as r,
  n as u,
  f as c,
  g as d,
  t as g,
  h as m,
  F as p,
  i as f,
  j as h,
} from "./vendor.9ac0a1a2.js";
var v = e({
  name: "VueTinymce",
  props: {
    modelValue: { type: String, required: !0 },
    updateEvent: {
      type: String,
      default: "beforeaddundo undo redo keyup focusout",
    },
    url: {
      type: String,
      default: "https://cdn.jsdelivr.net/npm/tinymce@%5E5.0.0",
    },
    config: { type: Object, default: () => ({}) },
  },
  emits: ["update:modelValue", "content-change"],
  setup(e, t) {
    const n = a(null);
    let r = null,
      c = {
        allow_script_urls: !0,
        remove_script_host: !1,
        convert_urls: !1,
        relative_urls: !1,
        branding: !1,
        indentation: "2px",
        fontsize_formats: "12px 14px 16px 18px 20px 24px",
        plugins:
          "print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons",
        contextmenu: "link image imagetools table",
        image_advtab: !0,
        menubar: "file edit view insert format tools table help",
        toolbar1:
          "code | undo redo | fontsizeselect fontselect | blockquote hr | removeformat link unlink pastetext | pagebreak | charmap emoticons | fullscreen preview save print | insertfile image media template",
        toolbar2:
          "formatselect | bold italic underline strikethrough | forecolor backcolor | textindent textoutdent | indent outdent | alignleft aligncenter alignright alignjustify | bullist numlist | anchor codesample | ltr rtl",
      };
    function d() {
      try {
        n.value &&
          r &&
          (r.plugins.autosave && r.plugins.autosave.removeDraft(),
          l.PluginManager.remove("autosave"),
          r.remove(),
          r.destroy(),
          (r = null));
      } catch (e) {
        return;
      }
    }
    function g() {
      u().then(() => {
        n.value &&
          (d(),
          (function () {
            if (n.value) {
              Object.assign(c, e.config);
              const a = "zh_CN",
                o = "en_US";
              if (c.language === o) delete c.language, delete c.language_url;
              else {
                if (
                  (c.language || (c.language = a),
                  !c.language_url && c.language === a)
                ) {
                  let t = "https://cdn.jsdelivr.net/npm/";
                  /unpkg.com/.test(e.url) && (t = "https://unpkg.com/"),
                    (c.language_url = `${t}@panhezeng/vue-tinymce@latest/dist/langs/${c.language}.js`);
                }
                c.font_formats ||
                  c.language !== a ||
                  ((c.font_formats =
                    'Andale Mono="andale mono", times;Arial=arial, helvetica, sans-serif;Arial Black="arial black", "avant garde";Book Antiqua="book antiqua", palatino;Comic Sans MS="comic sans ms", sans-serif;Courier New="courier new", courier;Georgia=georgia, palatino;Helvetica=helvetica;Impact=impact, chicago;Symbol=symbol;Tahoma=tahoma, arial, helvetica, sans-serif;Terminal=terminal, monaco;Times New Roman="times new roman",times;Trebuchet MS="trebuchet ms", geneva;Verdana=verdana, geneva;Webdings=webdings;Wingdings=wingdings'),
                  window.navigator.platform.indexOf("Win") > -1
                    ? ((c.font_formats =
                        '微软雅黑="Microsoft YaHei";黑体=SimHei;宋体=SimSun;仿宋=FangSong;楷体=KaiTi;' +
                        c.font_formats),
                      (c.content_style =
                        'body { font-size: 14px; font-family: "Microsoft YaHei"; }'))
                    : window.navigator.platform.indexOf("Mac") > -1
                    ? ((c.font_formats =
                        "黑体=STHeiti;宋体=STSong;仿宋=STFangsong;楷体=STKaiti;" +
                        c.font_formats),
                      (c.content_style =
                        "body { font-size: 14px; font-family: STHeiti; }"))
                    : window.navigator.platform.indexOf("Linux") > -1 &&
                      ((c.font_formats =
                        '黑体="Source Han Sans SC";宋体="Source Han Serif SC";' +
                        c.font_formats),
                      (c.content_style =
                        'body { font-size: 14px; font-family: "Source Han Sans SC"; }')));
              }
              if (
                (c.external_plugins || (c.external_plugins = {}),
                !c.external_plugins.textindentoutdent)
              ) {
                const e = Object.keys(c);
                for (let t = e.length - 1; t >= 0; t--) {
                  const n = e[t];
                  if (
                    -1 !== n.indexOf("toolbar") &&
                    /\btext(indent|outdent)\b/g.test(c[n])
                  ) {
                    c.language === a &&
                      (c.external_plugins.textindentoutdentzhcn =
                        "https://cdn.jsdelivr.net/npm/@panhezeng/tinymce-plugin-text-indent-outdent@latest/dist/textindentoutdent/langs/zh_CN.js"),
                      (c.external_plugins.textindentoutdent =
                        "https://cdn.jsdelivr.net/npm/@panhezeng/tinymce-plugin-text-indent-outdent@latest/dist/textindentoutdent/plugin.min.js");
                    break;
                  }
                }
              }
              (c.target = n.value),
                (c.init_instance_callback = (a) => {
                  n.value &&
                    ((r = a),
                    u().then(() => {
                      n.value &&
                        r &&
                        r.getContent() !== e.modelValue &&
                        r.setContent(e.modelValue);
                    }),
                    r.on(
                      e.updateEvent,
                      l.util.Delay.debounce(() => {
                        u().then(() => {
                          if (n.value && r) {
                            const e = r.getContent();
                            t.emit("update:modelValue", e),
                              t.emit("content-change", e);
                          }
                        });
                      }, 300)
                    ),
                    "function" == typeof e.config.init_instance_callback &&
                      e.config.init_instance_callback(r));
                });
            }
          })(),
          l.init(c));
      });
    }
    return (
      o(
        () => e.config,
        () => {
          g();
        },
        { deep: !0 }
      ),
      i(() => {
        (l.EditorManager.baseURL = e.url), g();
      }),
      s(() => {
        d();
      }),
      { editorElement: n }
    );
  },
});
const b = { class: "vue-tinymce-comp" },
  _ = { ref: "editorElement" };
v.render = function (e, a, o, i, l, s) {
  return r(), t("div", b, [n("textarea", _, null, 512)]);
};
var x = e({
  name: "App",
  components: { VueTinymce: v },
  setup() {
    const e = c({ content: "init content", show: !0, locale: "" }),
      t = d(() => {
        let t = {};
        return "en" === e.locale && (t = { language: "en_US" }), t;
      });
    return {
      data: e,
      config: t,
      switchLanguage: function () {
        e.locale ? (e.locale = "") : (e.locale = "en");
      },
    };
  },
});
const y = n("h1", null, "VueTinymce example", -1),
  k = n("br", null, null, -1),
  S = n("br", null, null, -1),
  w = n("br", null, null, -1),
  T = n("br", null, null, -1),
  j = n("h2", null, "output", -1);
x.render = function (e, a, o, i, l, s) {
  const u = f("vue-tinymce");
  return (
    r(),
    t(
      p,
      null,
      [
        y,
        n(
          "button",
          { onClick: a[1] || (a[1] = (t) => (e.data.show = !e.data.show)) },
          " 点击加载移除编辑器，测试初始化和销毁：：：" +
            g(e.data.show ? "销毁" : "加载"),
          1
        ),
        k,
        S,
        n(
          "button",
          {
            onClick:
              a[2] ||
              (a[2] = (...t) => e.switchLanguage && e.switchLanguage(...t)),
          },
          "点击切换语言，测试更新config"
        ),
        w,
        T,
        e.data.show
          ? (r(),
            t(
              u,
              {
                key: 0,
                modelValue: e.data.content,
                "onUpdate:modelValue":
                  a[3] || (a[3] = (t) => (e.data.content = t)),
                config: e.config,
              },
              null,
              8,
              ["modelValue", "config"]
            ))
          : m("", !0),
        j,
        n("div", { innerHTML: e.data.content }, null, 8, ["innerHTML"]),
      ],
      64
    )
  );
};
h(x).mount("#app");
