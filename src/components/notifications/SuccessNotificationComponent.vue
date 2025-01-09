<script lang="ts" setup>
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

defineProps<{
      message: string;
}>();
</script>

<template>
      <div class="div_success">
            <FontAwesomeIcon
                  class="icon_success"
                  :icon="faCheckCircle" />
            <span>{{ message }}</span>
      </div>
</template>

<style scoped>
.div_success {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 30px;

      width: 100%;
      min-height: 70px;

      padding: 20px;

      background-color: #88e788;

      border-radius: var(--border-radius);
}

.icon_success {
      height: 25px;
}

.div_success,
.icon_success {
      color: var(--background);
}
</style>
