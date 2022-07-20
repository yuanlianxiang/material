<!-- @format -->

<script lang="ts" setup>
import { defineEmits } from "vue";

const props = withDefaults(
  defineProps<{
    type?: string;
    disabled?: boolean;
    size?: string;
    round?: boolean;
    loading?: boolean;
    icon?: string;
    circle?: boolean;
    autofocus?: boolean;
  }>(),
  { type: "primary", disabled: false, size: "small", round: false, loading: false, icon: "", circle: false, autofocus: false }
);
const emit = defineEmits(["click"]);

const handleClick = (evt: MouseEvent) => {
  emit("click", evt);
};
</script>

<template>
  <button
    :class="[
      'ui-button',
      type ? 'ui-button--' + type : '',
      size ? 'ui-button-' + size + '--size' : '',
      {
        'is-round': round,
        'is-disabled': disabled,
        'is-circle': circle,
        'is-loading': loading
      },
    ]"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    @click="handleClick"
  >
    <i class="ui-button-icon iconfont form-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>