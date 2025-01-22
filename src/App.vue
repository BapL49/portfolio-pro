<script setup lang="ts">
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import PageTransition from "./components/transitions/PageTransition.vue";
</script>

<template>
      <HeaderComponent />
      <main>
            <PageTransition>
                  <RouterView />
            </PageTransition>
      </main>
      <FooterComponent />
</template>
