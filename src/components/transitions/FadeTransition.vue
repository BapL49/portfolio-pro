<template>
      <Transition name="fade">
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
