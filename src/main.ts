import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"

import "./assets/markdown.css"
import arPlugin from "../packages"
import Preview from "./components/Preview.vue"

createApp(App).component("Preview", Preview).use(router).use(arPlugin).mount('#app')
