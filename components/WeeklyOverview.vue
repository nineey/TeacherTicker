<script setup lang="ts">
import { createClient } from '@supabase/supabase-js'
import { v4 as uuidv4 } from 'uuid';
import {useStore} from "~/composables/useStore";
const config = useRuntimeConfig()

const user: any = useSupabaseUser()
const supabase = createClient(`https://lcjaywederuejijtcofn.supabase.co`, `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxjamF5d2VkZXJ1ZWppanRjb2ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxNTk3MzYsImV4cCI6MjA0ODczNTczNn0.Ga1tJHWYMP1gEQuA3IAE8lumQaUJcBY_MhsT5Y9tXDI`)
const times: any = ref([])


async function getTimes() {
  const { data } = await supabase
      .from('time_entries')
      .select()
      .eq('user', user.value.email)
      .order('date', { ascending: true })
      .limit(5)
  times.value = data
}

async function insertDateToDB() {
    const { error } = await supabase
      .from('time_entries')
      .upsert({'uuid': uuidv4(), 'user': user.value.email, 'date': useStore.selectedDate.toLocaleDateString('en-CA'), 'timeIn': '09:00:00', 'timeOut': '18:00:00'})
        .select()
  console.log(error)
}

onMounted(() => {
  getTimes()
})

</script>

<template>
<div>Weekly Overview</div>

  <button @click="insertDateToDB">Insert</button>
  <table>
    <thead>
    <tr>
      <th>Datum</th>
      <th>CheckIN</th>
      <th>CheckOUT</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="time in times" :key="time.uuid">
      <td>{{time.date}}</td>
      <td>{{time.timeIn}}</td>
      <td>{{time.timeOut}}</td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
table, th, td {
  border: 1px solid black;
}
th, td {
  padding: 8px;
  text-align: left;
}
</style>