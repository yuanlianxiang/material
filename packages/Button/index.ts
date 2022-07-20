import { App, Plugin } from "vue"
import uiButton from "./src/index.vue"

export const ButtonPlugin: Plugin = {
  install(app: App) {
    app.component("ui-button", uiButton)
  }
}

export { uiButton }