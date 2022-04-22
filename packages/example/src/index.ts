import { createApp } from 'vue';
import App from './App.vue';
import VueTinymce from '@panhezeng/vue-tinymce';

const app = createApp(App);

app.use(VueTinymce);

app.mount('#app');
