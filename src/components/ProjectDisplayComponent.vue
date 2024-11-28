<script lang="ts" setup>
const props = defineProps<{
      projectName: string;
      projectDescription: string;
      imageFileName: string;
}>();

const getImageUrl = () => {
      return new URL(`../assets/images/${props.imageFilename}`);
};
</script>

<template>
      <div class="card">
            <h3>{{ projectName }}</h3>

            <p>{{ projectDescription }}</p>

            <span class="opacifier"></span>
            <img
                  class="image"
                  :src="getImageUrl()" />
      </div>
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

      background-color: red;
      border-radius: var(--border-radius);
      box-shadow: var(--box-shadow);
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
</style>
