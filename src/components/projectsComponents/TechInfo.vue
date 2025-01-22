<script lang="ts" setup>
defineProps<{
      techName: string;
      transitionDelay?: number;
}>();
</script>

<template>
      <Transition
            name="scale"
            appear
            :style="`transition-delay: ${transitionDelay}s`">
            <div class="container_icon_text">
                  <slot></slot>
                  <span class="tech_name">{{ techName }}</span>
            </div>
      </Transition>
</template>

<style>
/* transition only */

.scale-enter-active {
      transition: all 0.5s ease 0.25s;
}

.scale-enter-from {
      scale: 0.8;
}
</style>

<style scoped>
.container_icon_text {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      width: 30%;
      max-width: 115px;

      padding: 20px;

      border-radius: var(--border-radius);

      background-color: var(--secondary);
}
</style>
