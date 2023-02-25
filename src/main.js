// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./routers/router";
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')