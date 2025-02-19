<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
      name: string;
      description: string;
      customer: string;
      businessSegment: string;
      productionDate: string;
      link: string;
      imageFilename: string;
}>();

const getImageUrl = computed(() => {
      return `/images/${props.imageFilename}`;
});
</script>

<template>
      <section class="section">
            <div class="container_head">
                  <Transition
                        appear
                        name="title">
                        <h1 class="h1">{{ name }}</h1>
                  </Transition>
                  <Transition
                        appear
                        name="top-to-bottom"
                        style="transition-delay: 0.3s">
                        <h2 class="h2">{{ description }}</h2>
                  </Transition>
                  <Transition
                        appear
                        name="fade">
                        <img
                              :src="getImageUrl"
                              alt="illustration du site web réalisé pour Sublimis"
                              class="img_project" />
                  </Transition>
            </div>

            <Transition
                  appear
                  name="top-to-bottom"
                  style="transition-delay: 0.5s">
                  <div class="container_info_project">
                        <div class="info">
                              <span class="info_category">Client :</span>
                              <span class="info_content">{{ customer }}</span>
                        </div>
                        <div class="info">
                              <span class="info_category">Secteur d'activité :</span>
                              <span class="info_content">{{ businessSegment }}</span>
                        </div>
                        <div class="info">
                              <span class="info_category">Date de réalisation :</span>
                              <span class="info_content">{{ productionDate }}</span>
                        </div>
                        <div class="info">
                              <a
                                    :href="link"
                                    class="info_content_link"
                                    target="_blank"
                                    >Lien vers le projet
                                    <svg
                                          class="icon"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 512 512">
                                          <path
                                                d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
                                    </svg>
                              </a>
                        </div>
                  </div>
            </Transition>

            <div class="tech_stack">
                  <h3>Technologies utilisées</h3>
                  <div class="container_tech">
                        <slot></slot>
                  </div>
            </div>
      </section>
</template>

<style scoped>
/* transitions */

.top-to-bottom-enter-active,
.title-enter-active,
.fade-enter-active {
      transition: all 0.5s ease 0.25s;
}

.title-enter-from {
      transform: translateX(-300px);
      opacity: 0;
}

.top-to-bottom-enter-from {
      transform: translateY(-70px);
      opacity: 0;
}

.fade-enter-from {
      opacity: 0;
}

.section {
      height: fit-content;
}

/* head */

.container_head {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: inherit;

      width: 100%;

      padding: 30px;

      border-radius: var(--border-radius);

      background-color: var(--secondary);
}

.h1 {
      text-decoration: underline var(--accent);
}

.h2 {
      font-size: var(--font-smallest);
}

.img_project {
      width: 100%;
      height: 200px;

      object-fit: cover;

      border-radius: var(--border-radius);
}

/* info project */

.container_info_project {
      display: flex;
      flex-direction: column;

      justify-content: center;
      gap: 40px;

      width: 100%;

      padding: 30px;

      background-color: var(--primary);

      border-radius: var(--border-radius);
}

.info {
      display: flex;
      flex-direction: column;
      gap: 10px;
}

.info_category,
.info_content,
.info_content_link {
      color: var(--background);
}

.info_category {
      font-weight: 300;
      font-size: small;
}

.info_content {
      font-weight: bold;
}

.info_content_link {
      text-decoration: underline;
}

.icon {
      width: 20px;
      margin-left: 8px;
      margin-bottom: 3px;
}

/* tech stack */

.tech_stack {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 40px;

      width: 100%;
}

.container_tech {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 30px 15px;

      width: 100%;
}

/* responsive  */

@media screen and (min-width: 768px) {
      .h2 {
            font-size: var(--font-smaller);
      }

      .img_project {
            height: 250px;
      }

      .container_info_project {
            flex-direction: row;
            align-items: center;
      }

      .container_tech {
            gap: 30px 50px;
      }
}

@media screen and (min-width: 1024px) {
      .container_info_project {
            justify-content: space-around;
      }
}
</style>
