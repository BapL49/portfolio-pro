<script setup lang="ts">
import ContactComponent from "../homePageComponent/ContactComponent.vue";
import PresentationComponent from "../homePageComponent/PresentationComponent.vue";
import ProjectsComponent from "../homePageComponent/ProjectsComponent.vue";
import SkillsComponent from "../homePageComponent/SkillsComponent.vue";
</script>

<template>
      <section class="container_grid">
            <PresentationComponent />
            <SkillsComponent />
            <ContactComponent />
            <ProjectsComponent />
      </section>
</template>

<style scoped>
.container_grid {
      min-height: 100lvh;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
      gap: 5%;
}
</style>
