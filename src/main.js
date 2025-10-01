import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'
import vuetify from './plugins/vuetify'
import './assets/css/main.css'
import '@mdi/font/css/materialdesignicons.css';
import App from './App.vue'
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')
