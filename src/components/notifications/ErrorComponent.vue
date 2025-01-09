<script lang="ts" setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";

defineProps<{
      message: string;
}>();
</script>

<template>
      <div class="div_error">
            <FontAwesomeIcon
                  class="icon_error"
                  :icon="faXmarkCircle" />
            <span>{{ message }}</span>
      </div>
</template>

<style scoped>
.div_error {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 30px;

      width: 100%;
      min-height: 70px;

      padding: 20px;

      background-color: red;

      border-radius: var(--border-radius);
}

.icon_error {
      height: 25px;
}
</style>
