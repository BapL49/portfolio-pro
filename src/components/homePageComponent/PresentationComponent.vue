<script setup lang="ts"></script>

<template>
      <RouterLink class="link_container" :to="{ name: 'about' }">
            <div class="container">
                  <span>test</span>
            </div>
      </RouterLink>
</template>

<style scoped>
.link_container {
      grid-area: 1 / 1 / 2 / 3;
}

.container {
      display: flex;
}
</style>
