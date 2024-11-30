<script setup lang="ts">

// imports
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const checkIn = ref(false)
const checkOut =ref(false)

const timeStamp = ref([]);
const timeIn = ref({
  hours: new Date().getHours(),
  minutes: new Date().getMinutes()
});

const timeOut = ref({
  hours: 0,
  minutes: 0,
});

const writeTimeStamp = () => {
  if (!checkIn.value) {
    timeIn.value.hours = useTimestamp().hours
    timeIn.value.minutes = useTimestamp().minutes
  }
  else {
    timeOut.value.hours = useTimestamp().hours
    timeOut.value.minutes = useTimestamp().minutes
    checkOut.value = true
  }

  checkIn.value = !checkIn.value
};

const date = ref();

watch(date, () => {
  console.log(date.value.getDate())
})

onMounted(() => {
  const today = new Date();
  date.value = today;

  timeIn.value.hours = today.getHours()
  timeIn.value.minutes = today.getMinutes()
})


</script>

<template>

  <div class="content-container">
  <h1 class="font-bold mb-5">Zeiterfassung</h1>
    <button :disabled="checkOut" type="button" @click="writeTimeStamp()" class="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg p-5 py-2.5 me-2 mb-2 disabled:bg-slate-300">{{checkIn ? "Check-Out" : "Check-In"}}</button>
  <p>Ausgewählter Tag: {{ date }}</p>
    <div class="mt-5 justify-between flex flex-row justify-between	">
      Ankunft:
      <VueDatePicker class="basis-1/4" v-model="timeIn" time-picker text-input/>

      Abfahrt:
      <VueDatePicker class="basis-1/4" v-model="timeOut" time-picker text-input/>
      <VueDatePicker class="basis-1/4" v-model="date" inline auto-apply />
    </div>
   <ul>
     <li v-for="stamp in timeStamp">
       {{ stamp}}
     </li>
   </ul>
  </div>

</template>