<script lang="ts" setup>
const thisYear = new Date().getFullYear();
const yearsOfExperience = thisYear - 2022;
const age = thisYear - 2006;
</script>

<template>
      <section class="section">
            <div class="presentation_text">
                  <h1>Développeur web Full stack</h1>
                  <p class="paragraphe">
                        Je m'appelle Baptiste, j'ai {{ age }} ans et je suis actuellement en première année de
                        <strong>licence création d'application web</strong>. J'ai commencé le développement
                        web il y a plus de {{ yearsOfExperience }} ans. <br />
                        Les
                        <strong>différents projets réalisés</strong> mon permis d'apprendre des
                        <strong>compétences importantes</strong> et d'engranger un maximum d'expérience.
                  </p>
            </div>
      </section>
</template>

<style scoped>
.section {
      width: 100%;

      justify-content: space-between;
      align-items: center;
}

.presentation_text {
      display: flex;
      flex-direction: column;
      gap: 25px;
}

.paragraphe {
      line-height: 1.4em;
}
</style>
