<template>
  <div class="header-style">

  <div class="header-title">
    <span id="title-style-thin">TEACHER</span> <br />
    <span id="title-style-bold">TICKER</span>
  </div>
    <div class="header-nav">
  <NuxtLink class="nav-element" to="/">Zeiterfassung</NuxtLink><br />
  <NuxtLink class="nav-element" to="/stats">Auswertung</NuxtLink>
    </div>
  </div>

</template>

<style>
.header-style {
  background-color: #2E2E2E;
  color: #fff;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  padding: 1em;
  margin-top: 2em;
}

.header-nav {
  display: flex;
  gap: 0.5em;
}

.header-nav .nav-element {
  background-color: #4F4F4F;
  padding: 1em;
  border-radius: 16px;
}

.header-nav .nav-element:hover {
  background-color: #848484;
  padding: 1em;
  border-radius: 16px;
}

.header-title {
  font-size: 22px;
  line-height: 1.2em;
}

#title-style-thin {
  font-weight: 100;
}

#title-style-bold {
  font-weight: 800;
}

</style>
<script setup lang="ts">
</script>