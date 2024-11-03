import { createApp } from 'vue'
import App from './App.vue'
// router
import router from './router'
// axios
import axios from 'axios'
// element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);
app.use(router);
app.config.globalProperties.$axios = axios;
app.use(ElementPlus);
app.mount('#app')
