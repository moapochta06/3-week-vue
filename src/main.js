import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import '@/assets/global.scss'
createApp(App).use(router).mount('#app');