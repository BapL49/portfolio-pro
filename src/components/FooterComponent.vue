<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
      <footer class="footer">
            <span class="span">{{ year }} | LUEL Baptiste</span>
      </footer>
</template>

<style scoped>
.footer {
      width: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      padding: var(--padding);

      background-color: var(--secondary);
}

.span {
      text-align: center;
      font-size: small;
}
</style>
