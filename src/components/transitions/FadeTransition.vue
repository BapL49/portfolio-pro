<script lang="ts" setup>
defineProps<{
      appear?: boolean;
}>();
</script>

<template>
      <Transition
            name="fade"
            :appear="appear">
            <slot></slot>
      </Transition>
</template>

<style>
/* transitions */
.fade-enter-active {
      transition: opacity 0.5s ease-in-out;
}

.fade-enter-from {
      opacity: 0;
}
</style>
