<script lang="ts" setup></script>

<template>
      <footer class="footer">
            <span class="span_copyright">
                  Fait avec passion par
                  <a
                        class="link"
                        href="https://github.com/BapL49"
                        target="_blank"
                        rel="noopener noreferrer">
                        Luel Baptiste
                  </a>
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

      background-color: var(--secondary);
}

.span_copyright {
      font-size: small;
      letter-spacing: 0.03em;

      .link {
            opacity: 0.8;
            text-decoration: underline;
      }
}
</style>
