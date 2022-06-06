(function(n,l){typeof exports=="object"&&typeof module!="undefined"?module.exports=l(require("vue"),require("tinymce")):typeof define=="function"&&define.amd?define(["vue","tinymce"],l):(n=typeof globalThis!="undefined"?globalThis:n||self,n.VueTinymce=l(n.Vue,n.tinymce))})(this,function(n,l){"use strict";function y(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var f=y(l),h=(t,r)=>{const i=t.__vccOpts||t;for(const[a,e]of r)i[a]=e;return i};const b=n.defineComponent({name:"VueTinymce",props:{modelValue:{type:String,required:!0},updateEvent:{type:String,default:"beforeaddundo undo redo keyup focusout"},url:{type:String,default:"https://unpkg.com/tinymce@%5E6.0.3"},baseUrl:{type:String,default:"https://unpkg.com/"},config:{type:Object,default(){return{}}}},emits:["update:modelValue","content-change"],setup(t,r){const i=n.ref(null);let a=null,e={};function g(){if(i.value){e=Object.assign({},{allow_script_urls:!0,remove_script_host:!1,convert_urls:!1,relative_urls:!1,branding:!1,indentation:"2px",fontsize_formats:"12px 14px 16px 18px 20px 24px",plugins:"preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons",contextmenu:"link image table",image_advtab:!0,menubar:"file edit view insert format tools table help",toolbar:"undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl"},t.config);const o=t.baseUrl,u="zh_CN",w="en_US";if(e.language===w?(delete e.language,delete e.language_url):(e.language||(e.language=u),!e.language_url&&e.language===u&&(e.language_url=`${o}@panhezeng/vue-tinymce@latest/dist/langs/${e.language}.js`),!e.font_formats&&e.language===u&&(e.font_formats='Andale Mono="andale mono", times;Arial=arial, helvetica, sans-serif;Arial Black="arial black", "avant garde";Book Antiqua="book antiqua", palatino;Comic Sans MS="comic sans ms", sans-serif;Courier New="courier new", courier;Georgia=georgia, palatino;Helvetica=helvetica;Impact=impact, chicago;Symbol=symbol;Tahoma=tahoma, arial, helvetica, sans-serif;Terminal=terminal, monaco;Times New Roman="times new roman",times;Trebuchet MS="trebuchet ms", geneva;Verdana=verdana, geneva;Webdings=webdings;Wingdings=wingdings',window.navigator.platform.indexOf("Win")>-1?(e.font_formats=`\u5FAE\u8F6F\u96C5\u9ED1="Microsoft YaHei";\u9ED1\u4F53=SimHei;\u5B8B\u4F53=SimSun;\u4EFF\u5B8B=FangSong;\u6977\u4F53=KaiTi;${e.font_formats||""}`,e.content_style='body { font-size: 14px; font-family: "Microsoft YaHei"; }'):window.navigator.platform.indexOf("Mac")>-1?(e.font_formats=`\u9ED1\u4F53=STHeiti;\u5B8B\u4F53=STSong;\u4EFF\u5B8B=STFangsong;\u6977\u4F53=STKaiti;${e.font_formats||""}`,e.content_style="body { font-size: 14px; font-family: STHeiti; }"):window.navigator.platform.indexOf("Linux")>-1&&(e.font_formats=`\u9ED1\u4F53="Source Han Sans SC";\u5B8B\u4F53="Source Han Serif SC";${e.font_formats||""}`,e.content_style='body { font-size: 14px; font-family: "Source Han Sans SC"; }'))),e.external_plugins||(e.external_plugins={}),!e.external_plugins.textindentoutdent){const s=Object.keys(e);for(let m=s.length-1;m>=0;m--){const c=s[m];if(c&&typeof c=="string"&&c.indexOf("toolbar")!==-1&&/\btext(indent|outdent)\b/g.test(String(e[c]))){e.language===u&&(e.external_plugins.textindentoutdentzhcn=`${o}@panhezeng/tinymce-plugin-text-indent-outdent@latest/dist/textindentoutdent/langs/zh_CN.js`),e.external_plugins.textindentoutdent=`${o}@panhezeng/tinymce-plugin-text-indent-outdent@latest/dist/textindentoutdent/plugin.min.js`;break}}}e.target=i.value,e.init_instance_callback=s=>{i.value&&(a=s,S(),a.on(t.updateEvent,T),typeof t.config.init_instance_callback=="function"&&t.config.init_instance_callback(a))}}}function S(){n.nextTick().then(()=>{i.value&&a&&a.getContent()!==t.modelValue&&a.setContent(t.modelValue)})}function T(){n.nextTick().then(()=>{if(i.value&&a){const o=a.getContent();r.emit("update:modelValue",o),r.emit("content-change",o)}})}function p(){try{i.value&&a&&(a.plugins.autosave&&a.plugins.autosave.removeDraft(),f.default.PluginManager.remove("autosave"),a.remove(),a.destroy(),a=null)}catch{return}}function _(){n.nextTick().then(()=>{i.value&&(p(),g(),f.default.init(e))})}return n.watch(()=>t.config,()=>{_()},{deep:!0}),n.onMounted(()=>{f.default.EditorManager.baseURL=t.url,_()}),n.onBeforeUnmount(()=>{p()}),{editorElement:i}}}),v={class:"vue-tinymce-comp"},x={ref:"editorElement"};function k(t,r,i,a,e,g){return n.openBlock(),n.createElementBlock("div",v,[n.createElementVNode("textarea",x,null,512)])}var d=h(b,[["render",k]]);return Object.assign(d,{install:t=>{t.component(d.name,d)}})});
