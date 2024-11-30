<script lang="ts" setup>
const thisYear = new Date().getFullYear();
</script>

<template>
      <footer class="footer">
            <span class="span_author">
                  Fait avec passion par
                  <a
                        class="link"
                        href="https://github.com/BapL49"
                        target="_blank"
                        rel="noopener noreferrer">
                        Luel Baptiste
                  </a>
            </span>
            <span class="span_copyright">&copy; {{ thisYear }}</span>
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

      .link {
            opacity: 0.8;
            text-decoration: underline;
      }
}

.span_copyright,
.span_author {
      font-size: small;
}
</style>
