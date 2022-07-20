<script lang="ts" setup>
import { Vue } from "vue";
const onClick = (num: Number) => console.log(`click button ${num}`);
</script>

<template>
  <div>
    <ui-button type="primary" size="mini" @click="onClick(1)">第一个</ui-button>
    <ui-button type="success" size="small" @click="onClick(2)">第二个</ui-button>
    <ui-button type="warning" size="medium" @click="onClick(3)">第三个</ui-button>
    <ui-button type="danger" size="medium" @click="onClick(3)">第四个</ui-button>
  </div>
</template>
