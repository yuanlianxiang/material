<!-- @format -->

<script setup lang="ts">
import ComponentList from "../packages/list.json";
import { reactive } from "vue";

interface IComponentParams {
  compName: string;
  compZhName: string;
  compDesc?: string;
  compClassName?: string;
}

const data = reactive({
  links: ComponentList.map((item: IComponentParams) => ({
    path: `/components/${item.compName}`,
    name: item.compZhName,
  })),
});
</script>

<template>
  <div class="ar-plugin-doc">
    <aside>
      <div class="sub-title">基础组件</div>
      <router-link v-for="(link, index) in data.links" :key="index" :to="link.path">
        <div class="component-name">{{ link.name }}</div>
      </router-link>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style lang="less" scoped>
html,
body {
  margin: 0;
  padding: 0;
}
.ar-plugin-doc {
  display: flex;
  min-height: 100vh;
  overflow: hidden;
  aside {
    width: 200px;
    padding: 15px;
    border-right: 1px #c3dcd5 solid;
    display: flex;
    flex-direction: column;
    .sub-title {
      font-weight: bold;
    }
    .component-name {
      padding: 5px;
    }
  }
  main {
    width: 100%;
    height: calc(100vh - 30px);
    flex: 1;
    padding: 15px;
    overflow: auto;
  }
}
</style>
