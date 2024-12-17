<script setup lang="ts">
const { auth } = useSupabaseClient();
const user = useSupabaseUser();

const userLogout = async () => {
  await auth.signOut();
  navigateTo('/login')
};

// const path = ref<string>();
const route = useRoute()
const path = ref()

onMounted(() => {
  path.value = route.path
})

watch(route, () => {
  path.value = route.path
})

const checkPath = (link: string) => {
  return path.value === link;
}

</script>

<template>
  <div class="header-style">

  <NuxtLink to="/" class="header-title">

    <span id="title-style-thin">TEACHER</span> <br />
    <span id="title-style-bold">TICKER</span>
    </NuxtLink>
    <div class="header-nav">
  <NuxtLink v-if="user" to="/" class="nav-element" :class="{checkPath: 'inactive'}">Zeiterfassung</NuxtLink>
  <NuxtLink v-if="user" class="nav-element"  to="/stats">Auswertung</NuxtLink>
      <figure
          class="inline-flex h-12 w-12 items-center justify-center rounded-full"
      >
        <img v-if="user"
            class="rounded-full"
            src="https://xsgames.co/randomusers/avatar.php?g=pixel"
            alt=""
        />
      </figure>
      <!-- logout -->
      <button v-if="user"
          @click="userLogout"
          class="ml-3 font-bold text-black transition-colors duration-500 hover:text-red"
      >
        <svg fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 384.971 384.971" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g id="Sign_Out"> <path d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03 C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03 C192.485,366.299,187.095,360.91,180.455,360.91z"></path> <path d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279 c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179 c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z"></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>
      </button>

      <!-- end of logout -->
    </div>
  </div>

</template>

<style>
.header-style {
  background-color: var(--primary-color);
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
  align-items: center;
}

.header-nav .nav-element {
  background-color: var(--cta-color);
  padding: 1em;
  border-radius: 16px;
}

.header-nav .nav-element:focus {
  background-color: var(--btn-disabled);
  padding: 1em;
  border-radius: 16px;
}

.header-nav .nav-element:hover {
  background-color: var(--btn-hover);
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
