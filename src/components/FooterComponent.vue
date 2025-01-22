<script lang="ts" setup>
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const thisYear = new Date().getFullYear();
</script>

<template>
      <footer class="footer">
            <div class="container_social_networks">
                  <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FontAwesomeIcon
                              :icon="faGithub"
                              class="icon" />
                  </a>

                  <a
                        href="https://www.linkedin.com/in/baptiste-luel/"
                        target="_blank"
                        rel="noopener noreferrer"
                        ><FontAwesomeIcon
                              :icon="faLinkedin"
                              class="icon"
                  /></a>
            </div>
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

.container_social_networks {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 20px;
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

.icon {
      font-size: 1.5em;
}
</style>
