import VueTinymce from '@panhezeng/vue-tinymce';
import {createApp} from 'vue';
import App from './App.vue';

const app = createApp(App);

app.use(VueTinymce);

app.mount('#app');
