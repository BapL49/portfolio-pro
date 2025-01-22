<template>
      <Transition name="page-transition">
            <slot></slot>
      </Transition>
</template>

<style>
/* transitions */
.page-transition-enter-active,
.page-transition-leave-active {
      transition: all 0.5s ease;
}

.page-transition-enter-from {
      opacity: 0;
      transform: translateX(-30%);
}

.page-transition-leave-to {
      transform: translateX(30%);
      opacity: 0;
}
</style>
