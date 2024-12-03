<script lang="ts" setup>
import ProjectDisplayComponent from "./ProjectDisplayComponent.vue";
</script>

<template>
      <section>
            <h2>Projets réalisés</h2>
            <div class="container_projects">
                  <ProjectDisplayComponent
                        image-filename="undefined"
                        project-description="undefined"
                        project-name="undefined" />
            </div>
      </section>
</template>

<style scoped>
.container_projects {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 50px;

      overflow: hidden;
}
</style>
