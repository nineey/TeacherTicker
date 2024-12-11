<script setup>
import '@vuepic/vue-datepicker/dist/main.css'
import WeeklyOverview from "~/components/WeeklyOverview.vue";
// import {definePageMeta} from "nuxt/dist/pages/runtime/index.js";
//
// definePageMeta({
//   middleware: [
//       'auth'
//   ]
// })

const user = useSupabaseUser();

// import { createClient } from '@supabase/supabase-js'
//
// // Create a single supabase client for interacting with your database
// const supabase = createClient('process.env.SUPABASE_URL', 'process.env.SUPABASE_KEY')
//
// async function getData() {
//   const { data: time_entries, error } = await supabase
//       .from('time_entries')
//       .select('*')
//   console.log(time_entries)
// }
//
// getData()

</script>

<template>

  <div class="content-container">
    <p class="mb-3" v-if="user">Aktueller User: {{user.email}}</p>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 h-48">
      <DailyTimer />
      <div class="bg-[#D9B99B] rounded-xl p-6">
        <DatePicker />
      </div>
      <div class="bg-[#D9B99B] rounded-xl p-6"><WeeklyOverview /></div>
    </div>

  </div>


</template>