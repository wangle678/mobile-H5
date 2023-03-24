// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./routers/router";
import { createPinia } from 'pinia'
import 'vant/es/toast/style';
import 'vant/es/notify/style';
import "@/utils/rem.js"

const pinia = createPinia()

createApp(App)
.use(router)
.use(pinia)
.mount('#app')