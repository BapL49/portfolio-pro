<template>
      <RouterLink class="link_container" :to="{ name: 'projets' }">
            <div class="container">
                  <span>test</span>
            </div>
      </RouterLink>
</template>

<style scoped>
.link_container {
      grid-area: 3 / 1 / 4 / 3;
}
</style>
