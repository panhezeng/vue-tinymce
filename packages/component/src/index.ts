import VueTinymce from "./VueTinymce.vue";

// // 提供 app.use 注册组件方法

// // 单个
// import { App } from "vue";
// export { VueTinymce };
// export default {
//   install (app: App) => {
//     app.component(VueTinymce.name, VueTinymce);
//   },
// };
// // 批量
// import { App, Component } from "vue";
// export { VueTinymce };
// const components: { [name: string]: Component } = {
//   VueTinymce,
// };
// export default {
//   install(app: App) {
//     for (const component in components) {
//       app.component(components[component].name!, components[component]);
//     }
//   },
// };

export default VueTinymce;
