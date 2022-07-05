import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    name: "Button",
    path: "/components/Button",
    component: () => import("../../packages/Button/docs/README.md")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router