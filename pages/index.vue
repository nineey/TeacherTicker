<script setup lang="ts">

const props = defineProps({
  count: String,
  testText: String,
  testList: [],
  testArray: {}
})


const response = await useFetch("/api/hello")
console.log(response.api)

const count = ref<{"string" : "string"}>(3)

const counter = (direction: String) => {
  if (direction === "down") {
    count.value = {"test": "test"}
  }
  else {
    count.value++
  }
}

</script>

<template>
  <div class="text-red-900">Index Page</div>
  <div>{{count}}</div>
  <button @click="counter('down')">Down</button>
  <button @click="counter('up')">Up</button>

</template>