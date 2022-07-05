/** @format */

import { App, Plugin } from "vue";

import { ButtonPlugin } from "./Button";

const arPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app);
  },
};

export default arPlugin;

export * from "./Button";
