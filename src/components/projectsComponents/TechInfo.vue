<script lang="ts" setup>
defineProps<{
      techName: string;
}>();
</script>

<template>
      <div class="container_icon_text">
            <slot></slot>
            <span class="tech_name">{{ techName }}</span>
      </div>
</template>

<style scoped>
.container_icon_text {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      width: 30%;
      max-width: 100px;

      padding: 20px;

      border-radius: var(--border-radius);

      background-color: var(--secondary);
}
</style>
