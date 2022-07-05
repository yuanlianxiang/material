<script lang="ts" setup>
const onClick = (num: Number) => console.log(`click button ${num}`)
</script>

<template>
  <div>
    <ui-button @click="onClick(1)">第一个</ui-button>
    <ui-button @click="onClick(2)">第二个</ui-button>
    <ui-button @click="onClick(3)">第三个</ui-button>
  </div>
</template>
