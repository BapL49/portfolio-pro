<template>
      <RouterLink class="link_container" :to="{ name: 'contact' }">
            <div class="container">
                  <span>test</span>
            </div>
      </RouterLink>
</template>

<style scoped>
.link_container {
      grid-area: 2 / 2 / 3 / 3;
}
</style>
