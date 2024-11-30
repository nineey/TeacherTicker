<script setup lang="ts">
import Header from "~/components/Header.vue";
</script>

<template>

  <div class="content-wrapper">
    <Header />
    <div class="content-container"></div>
    <slot />
  </div>
</template>

<style>
.content-container {
  padding: 1em;
}

</style>
