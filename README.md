# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

```
material
├─ build
│  ├─ vite.base.config.js
│  ├─ vite.doc.config.js
│  └─ vite.lib.config.js
├─ docs                           文档网页
│  ├─ assets
│  │  ├─ index.78a56fba.css
│  │  ├─ index.a388a8c6.js
│  │  └─ README.c359b0ae.js
│  ├─ favicon.ico
│  └─ index.html
├─ index.html
├─ package.json
├─ packages                       组件文件
├─ public
│  └─ favicon.ico
├─ README.md
├─ script                         生成组件模板
├─ src
│  ├─ api
│  │  └─ request.ts
│  ├─ App.vue
│  ├─ assets
│  │  ├─ logo.png
│  │  ├─ markdown.css
│  │  └─ prism.css
│  ├─ components
│  │  └─ preview.vue
│  ├─ env.d.ts
│  ├─ main.ts
│  └─ router
│     └─ index.ts
├─ tsconfig.json
├─ tsconfig.node.json
├─ vite.config.ts
└─ yarn.lock

```