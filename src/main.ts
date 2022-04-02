import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import zvLib from 'zv-lib'

createApp(App).use(store).use(router).use(zvLib).mount('#app')
