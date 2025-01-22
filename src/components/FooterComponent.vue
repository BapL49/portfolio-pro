<script lang="ts" setup>
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const thisYear = new Date().getFullYear();
</script>

<template>
      <footer class="footer">
            <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><FontAwesomeIcon
                        :icon="faGithub"
                        id="icon"
            /></a>
            <span class="span_author">
                  Fait avec passion par
                  <b id="name">Luel Baptiste</b> - &copy; {{ thisYear }}
            </span>
      </footer>
</template>

<style scoped>
.footer {
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;

      background-color: var(--secondary);
}

.span_author {
      letter-spacing: 0.03em;

      #name {
            color: var(--accent);
      }
}

.span_copyright,
.span_author {
      font-size: small;
}

#icon {
      font-size: 1.5em;
}
</style>
