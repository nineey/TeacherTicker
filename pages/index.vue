<script setup lang="ts">
import '@vuepic/vue-datepicker/dist/main.css'
import WeeklyOverview from "~/components/WeeklyOverview.vue";

const user = useSupabaseUser();

const quoteOfTheDay = ref<{} | null>(null);

const getQuotes = async () => {
  const {data: quote} = await useFetch('/api/dailyQuote', {});
  console.log(quote.value.api.quote);
  quoteOfTheDay.value = {author: quote.value.api.author, quote: quote.value.api.quote};
}

getQuotes()

const { quoteTest } = await useFetch('/api/dailyQuote', {});


</script>

<template>

    <p class="mb-3" v-if="user">Aktueller User: {{user.email}}</p>

  <p v-if="quoteOfTheDay">Quote of the day: "{{ quoteOfTheDay.quote }}" by {{ quoteOfTheDay.author }}</p>
<p>{{ quoteTest }}</p>
  <div class="flex gap-4 flex-wrap md:flex-nowrap">

    <div>
      <h1 class="font-bold mb-5">Zeiterfassung</h1>
        <div class="flex bg-[#ECD7C1] rounded-2xl h-full">
          <div class="bg-[#D9B99B] rounded-xl p-6">
            <DailyTimer class="" />
          </div>
          <div>
          <DatePicker class=""/>
          </div>
        </div>
    </div>

    <div class="xl:mt-0 mt-20">
      <h1 class="font-bold mb-5">Übersicht</h1>
      <div class="bg-[#D9B99B] rounded-xl p-6 grow shrink h-full">
        <WeeklyOverview />
      </div>
    </div>

  </div>

</template>

<style scoped>


</style>


