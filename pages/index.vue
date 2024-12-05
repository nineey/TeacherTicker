<script setup>
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import {store} from "~/composables/store.ts";

const user = useSupabaseUser();
const checkIn = ref(false)
const checkOut =ref(false)
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

onMounted(() => {
  const today = new Date();
  store.selectedDate.value = today;
  console.log(store.selectedDate.value)

  timeIn.value.hours = today.getHours()
  timeIn.value.minutes = today.getMinutes()
})

</script>

<template>

  <div class="content-container">
    <p class="mb-3">Aktueller User: {{user.email}}</p>




    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 h-48">
      <DailyTimer></DailyTimer>
      <div class="bg-[#D9B99B] rounded-xl p-6">01</div>
      <div class="bg-[#D9B99B] rounded-xl p-6">
        <VueDatePicker class="basis-1/4" v-model="store.selectedDate" inline auto-apply />
      </div>
    </div>

  </div>


</template>