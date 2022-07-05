<script lang="ts" setup>
const emits = defineEmits(["click"])
</script>

<template>
  <button class="ui-button" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<style lang="less" scoped>
.ui-button {
  appearance: none;
  padding: 5px 10px;
  background-color: antiquewhite;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  &:active {
    background-color: aquamarine;
  }
  &:not(:last-child) {
    margin-right: 15px;
  }
}
</style>