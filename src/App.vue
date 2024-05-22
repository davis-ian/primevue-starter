<template>
  <div>
    <div class="flex justify-center">
      <Button
        type="button"
        label="Search"
        icon="pi pi-search"
        :loading="loading"
        @click="load"
      />

      <Button label="Success" severity="success" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const loading = ref(false);

const load = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};
</script>

<style scoped></style>
