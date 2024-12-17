<template>
  <div>Random</div>
  <div>{{ first }}</div>
  <div>{{ selectedDate}}</div>
  <button @click="selectedDate++">Count</button>
</template>
<script setup lang="ts">

import {useSuperHero} from "~/composables/useName";
import {toRefs} from "vue";
import {useStore2} from "~/composables/useStore";

const {first, last} = useSuperHero();

const {selectedDate} = toRefs(useStore2());


</script>