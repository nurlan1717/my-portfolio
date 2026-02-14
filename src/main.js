import '../css/main.css'
import '@/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import az from './locales/az.json'


import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
const head = createHead()
const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('currentLocale') || 'az',
  fallbackLocale: 'en',
  messages: {
    az,
    en,
  }
})

app.use(pinia)
app.use(router)
app.use(head)
app.use(i18n)

app.mount('#app')
