<template>
      <RouterLink class="link_container" :to="{ name: 'compétences' }">
            <div class="container">
                  <span>test</span>
            </div>
      </RouterLink>
</template>

<style scoped>
.link_container {
      grid-area: 2 / 1 / 3 / 2;
}
</style>
