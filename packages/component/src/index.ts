import type {App} from 'vue';
import _VueTinymce from './VueTinymce.vue';

// 提供 app.use 注册组件方法

const VueTinymce = Object.assign(_VueTinymce, {
  install: (app: App) => {
    app.component(_VueTinymce.name, _VueTinymce);
  },
});

export default VueTinymce;
