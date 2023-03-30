import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import vDrag from './directives/v-drag'

const app = createApp(App)

app.directive('drag', vDrag);

app.use(createPinia())
app.use(router)

app.mount('#app')
