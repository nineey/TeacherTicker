<script setup lang="ts">
import {useStore} from "~/composables/useStore";
import {reactive} from "vue";

const timestampToString = (date: Date) => {
  return date.toLocaleTimeString("de-CH", { hour: "2-digit", minute: "2-digit" })
}

const checkedInBoolean = ref<boolean>(false);
const logTimeCheckIn = ref<string | undefined>()
const logTimeCheckOut = ref<string | undefined>()
const timeLogger = reactive({
  selectedDate: useStore.selectedDate, timeIn: logTimeCheckIn, timeOut: logTimeCheckOut
});

const checkInOrOut = (checkedIn: boolean) => {
  if (!checkedIn) {
    logTimeCheckIn.value = timestampToString(new Date())
    checkedInBoolean.value = true;
  }
  else {
    logTimeCheckOut.value = timestampToString(new Date())
    checkedInBoolean.value = false;
  }
}

watchEffect(() => {
  timeLogger.selectedDate = useStore.selectedDate;
  timeLogger.timeIn = logTimeCheckIn.value
  timeLogger.timeOut = logTimeCheckOut.value
})


</script>

<template>
    <div class="bg-[#D9B99B] rounded-xl p-6"><h1 class="font-bold mb-5">Zeiterfassung</h1>

      <div :class="checkedInBoolean ? 'bg-gray-100' : 'bg-gray-100'" class="w-64 transition-all duration-500 h-16 flex items-center rounded-2xl">
        <button @click="checkInOrOut(checkedInBoolean)" :class="{'on': checkedInBoolean}" class="w-32 h-16 btn-test bg-white rounded-2xl shadow-md">{{checkedInBoolean ? "Check-Out" : "Check-In"}}</button>
      </div>


      <p class="mt-5 mb-5">Ausgewählter Tag: {{ useStore.selectedDate.toLocaleDateString('de-DE', {weekday: 'long', year: 'numeric', month: 'long',day: 'numeric',}) }}</p>

      <input v-model="logTimeCheckIn" type="time" id="appt" name="appt" min="09:00" max="22:00" value="00:00" required class="bg-gray-100 rounded-2xl px-3 py-2 mr-2" />
      <input v-model="logTimeCheckOut" type="time" id="appt" name="appt" min="09:00" max="18:00" value="00:00" required class="bg-gray-100 rounded-2xl px-3 py-2" />

  </div>

</template>

<style scoped>
.btn-test {
  transition-property: all;
  transition-duration: 200ms;
  transition-timing-function: ease-out;
}

.on {
  transform: translateX(128px)
}

input[type="time"]::-webkit-calendar-picker-indicator {
  display: none;
}

textarea:focus, input:focus{
  outline: none;
  background-color: var(--main-bg-color);
}

</style>