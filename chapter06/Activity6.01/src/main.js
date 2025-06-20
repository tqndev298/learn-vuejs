import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from './plugins/axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const app = createApp(App)

app.use(axios)
app.use({
  install(_app) {
    _app.config.globalProperties.$baseUrl = BASE_URL
  },
})

app.use(createPinia())
app.use(router)

app.mount('#app')
