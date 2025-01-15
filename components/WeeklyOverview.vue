<script setup lang="ts">
import {insertDateToDB} from "~/composables/useInsertToDB";
import {getTimes} from "~/composables/useLoadData";
import {useStore2} from "~/composables/useStore";
import {toRefs} from "vue";


const times: any = ref([])
const {selectedDate} = toRefs(useStore2())

onMounted(async() => {
  times.value = await getTimes()
  console.log(selectedDate)
})

watch(useStore.selectedDate, () => console.log(selectedDate))

</script>

<template>

  <table class="table w-full">
    <thead class="table-head">
    <tr>
      <th>Datum</th>
      <th>CheckIN</th>
      <th>CheckOUT</th>
      <th>Pause</th>
      <th>Arbeitszeit</th>
    </tr>
    </thead>
    <tbody class="table-body">
    <tr v-for="time in times" :key="time.uuid" class="row">
      <td class="cell">{{time.date}}</td>
      <td class="cell">{{time.timeIn}}</td>
      <td class="cell">{{time.timeOut}}</td>
      <td class="cell">Pause</td>
      <td class="cell">Arbeitszeit</td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
.cell {
  border-collapse: collapse;
  border: 1px solid black;

  padding: 0.5em 1em;
}

.table {
  border-collapse: collapse;
  border-style: hidden;
}

.table-head > .row {
  border-collapse: collapse;
  border: 2px solid black;

}
</style>