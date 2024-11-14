<script setup lang="ts">
const props = defineProps<{
      routeName: string;
}>();
</script>

<template>
      <RouterLink :to="{ name: props.routeName }" class="link_container">
            <slot></slot>
      </RouterLink>
</template>

<style scoped>
.link_container {
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: var(--borde-radius);
      box-shadow: var(--box-shadow);
      background-color: var(--secondary);
}
</style>
