<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
      projectName: string;
      projectDescription: string;
      imageFilename: string;
      link: string;
}>();

const getImageUrl = computed(() => {
      return `/src/assets/images/${props.imageFilename}`;
});
</script>

<template>
      <router-link
            :to="{ name: link }"
            class="card">
            <h3 class="title">{{ projectName }}</h3>

            <p class="paragraph">{{ projectDescription }}</p>

            <span class="opacifier"></span>
            <img
                  class="image"
                  :src="getImageUrl" />
      </router-link>
</template>

<style scoped>
.card {
      width: 100%;
      height: 25vh;

      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      gap: 10px;

      padding: 20px;

      position: relative;

      border-radius: var(--border-radius);
      box-shadow: var(--box-shadow);

      overflow: hidden;
}

.card:hover {
      .title,
      .paragraph,
      .opacifier {
            opacity: 0;
      }
}

.image {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;
      z-index: -2;
}

.opacifier {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      background-color: rgba(0, 0, 0, 0.3);

      z-index: -1;
}

.opacifier,
.title,
.paragraph {
      transition: all 0.3s;
}

.paragraph {
      color: var(--text);
}

@media screen and (min-width: 768px) {
      .card {
            width: 45%;
      }
}
</style>
