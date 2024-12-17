<script setup lang="ts">

import {useStore, useStore2} from "~/composables/useStore";
import VueDatePicker from "@vuepic/vue-datepicker";


</script>

<template>
  <VueDatePicker id="customCSS" v-model="useStore.selectedDate" inline auto-apply :enable-time-picker="false" />
</template>

<style scoped>

.dp__flex_display {
}
.dp__main :deep(.dp__theme_light) {
  --dp-font-size: 1rem;
  --dp-font-family: "Inter", sans-serif;
  --dp-background-color: #ECD7C1;
  --dp-text-color: #2E2E2E;
  --dp-hover-color: gray;
  --dp-hover-text-color: #fff;
  --dp-hover-icon-color: #2E2E2E;
  --dp-primary-color: #FAF0E6;
  --dp-primary-text-color: #000;
  --dp-secondary-color: #B59475;
  --dp-border-color: #FAF0E6;
  --dp-menu-border-color: none;
  --dp-border-color-hover: #519E34;
  --dp-disabled-color: #519E34;
  --dp-scroll-bar-background: #D9B99B;
  --dp-scroll-bar-color: #D9B99B;
  --dp-success-color: #519E34;
  --dp-success-color-disabled: #519E34;
  --dp-icon-color: #FAF0E6;
  --dp-danger-color: #519E34;
  --dp-highlight-color: #519E34;
  border-radius: 1em;


}



</style>