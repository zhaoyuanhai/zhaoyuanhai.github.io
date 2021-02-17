import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import ElementPlus from 'element-plus';
import fHeader from './components/f-header.vue';
import fFooter from './components/f-footer.vue';

createApp(App)
    .use(store)
    .use(router)
    .use(ElementPlus)
    .component("f-header", fHeader)
    .component("f-footer", fFooter)
    .mount('#app');
