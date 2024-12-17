<script setup lang="ts">
import {useStore} from "~/composables/useStore";
import {insertDateToDB} from "~/composables/useInsertToDB";

// props
const checkedInBoolean = ref<boolean>(false);
const logTimeCheckIn = ref()
const logTimeCheckOut = ref()
const breakTime = ref(0)
const trackOfCheckInAndOut = ref({
  checkIn: false,
  checkOut: false,
})

// functions
const timestampToString = (date: Date) => {
  return date.toLocaleTimeString("de-CH", { hour: "2-digit", minute: "2-digit" })
}

const checkInOrOut = async (checkedIn: boolean) => {
  if (!checkedIn) {
    logTimeCheckIn.value = timestampToString(new Date())
    checkedInBoolean.value = true;
    trackOfCheckInAndOut.value.checkIn = true;

  }
  else {
    logTimeCheckOut.value = timestampToString(new Date())
    checkedInBoolean.value = false;
    await insertDateToDB(`${logTimeCheckIn.value}:00`, `${logTimeCheckOut.value}:00`)
    trackOfCheckInAndOut.value.checkOut = true;
  }
}

const calculateTotalTime = () => {
  if (logTimeCheckIn.value && logTimeCheckOut.value) {
    const checkInHour = Number(logTimeCheckIn.value.slice(0,2))
    const checkInMinute = Number(logTimeCheckIn.value.slice(3,5))

    const checkOutHour = Number(logTimeCheckOut.value.slice(0,2))
    const checkOutMinute = Number(logTimeCheckOut.value.slice(3,5))

    // Calculate total working time.
    const totalWorkingTime = ((checkOutHour * 60) + checkOutMinute) - ((checkInHour * 60) + checkInMinute)

    // Minus the break time. Return result in hours, rounded to one decimal
   return ((totalWorkingTime - (breakTime.value) * 60) / 60).toFixed(1)
  }

}


// Persistance
// onMounted(() => {
//   logTimeCheckIn.value = localStorage.getItem('logTimeCheckIn')
//   logTimeCheckOut.value = localStorage.getItem('logTimeCheckOut')
//
// })
//
// watch([logTimeCheckIn, logTimeCheckOut], () => {
//   localStorage.setItem('logTimeCheckIn', logTimeCheckIn.value)
//   console.log(localStorage.getItem('logTimeCheckIn'))
//
//   localStorage.setItem('logTimeCheckOut', logTimeCheckOut.value)
//   console.log(localStorage.getItem('logTimeCheckOut'))
//
// });


</script>

<template>
<div>

    <!-- Fixed: Removed redundant :class binding -->
    <div class="bg-[#ECD7C1] transition-all w-48 duration-500 h-12 flex items-center rounded-2xl">
      <button @click="checkInOrOut(checkedInBoolean)" :disabled="trackOfCheckInAndOut.checkOut" :class="{'on': checkedInBoolean}" class="w-28 h-12 btn-test bg-[#FAF0E6] rounded-2xl shadow-md disabled:opacity-50">
        {{checkedInBoolean ? "Check-Out" : "Check-In"}}
      </button>
    </div>

    <p class="mt-5 mb-5">
      Ausgewählter Tag: {{ useStore.selectedDate.toLocaleDateString('de-DE', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}) }}
    </p>

    <input v-model="logTimeCheckIn" type="time" id="appt" name="appt" min="09:00" max="22:00" required class="bg-gray-100 rounded-2xl px-3 py-2 mr-2" />
    <input v-model="logTimeCheckOut" type="time" id="appt" name="appt" min="09:00" max="18:00" required class="bg-gray-100 rounded-2xl px-3 py-2" />

    <div class="mt-5">
      <p class="font-bold">Pause</p>
      <div class="flex justify-start items-center">
        <input v-model="breakTime" type="number" id="break-time" aria-label="Break-time" name="appt-2" class="bg-[#ECD7C1] rounded-2xl px-3 py-2 w-20" />
        <span class="m-3">Stunde(n)</span>
      </div>
    </div>

    <div class="mt-5">Total Arbeitszeit heute (Stunden): {{ calculateTotalTime() }}</div>

</div>
</template>

<style scoped>
.btn-test {
  transition-property: all;
  transition-duration: 200ms;
  transition-timing-function: ease-out;
}

.on {
  transform: translateX(5em);
  font-weight: bold;
}

input[type="time"]::-webkit-calendar-picker-indicator {
  display: none;
}

textarea:focus, input:focus{
  outline: none;
  background-color: var(--cta-color);
}



</style>