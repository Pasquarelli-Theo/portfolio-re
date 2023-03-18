<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "@vue/reactivity";
</script>

<template>
  <header class="sticky top-0 z-40 mt-10 h-14 w-full bg-white">
    <div class="flex h-full w-full items-center justify-between">
      <div class="w-52">
        <RouterLink to="/">
          <img src="@/assets/logoNoir.svg" alt="Logo de Théo Pasquarelli" class="ml-10 h-16 lg:h-auto" />
        </RouterLink>
      </div>

      <!--Bouton pour afficher menu-->
      <button
        class="relative p-1"
        aria-controls="menu"
        :aria-expanded="menuOuvert"
        @click="menuOuvert = !menuOuvert"
        :class="[menuOuvert ? 'hidden' : '']"
      >
        <img src="@/assets/Menu.svg" alt="icone menu" class="mr-10 mb-10" />
        <span class="sr-only">Menu</span>
      </button>

      <!--Bouton pour cacher menu-->
      <div @click="menuOuvert = !menuOuvert" :class="[menuOuvert ? '' : 'hidden']" class="mr-20 mb-16">
        <button class="fixed z-[99]" aria-controls="menu" :aria-expanded="menuOuvert">
          <img src="@/assets/menu_fermer.svg" alt="icone croix du menu" class="h-6 w-auto" />
          <span class="sr-only">Menu</span>
        </button>
      </div>

      <!--Menu hamburger déroulé-->
      <div
        class="fixed inset-0 z-[90] translate-x-full motion-safe:transition-transform motion-safe:duration-1000"
        :class="[' bg-light_grey1  text-black', menuOuvert ? 'translate-x-0' : '']"
      >
        <div class="m-5 flex items-center">
          <router-link to="/">
            <logo class="stroke-purtext-purple stroke-2" />
          </router-link>
        </div>
        <div class="mt-20 ml-20 lg:ml-10 flex items-center justify-center">
          <ul @click="menuOuvert = !menuOuvert">
            <div class="items-between flex flex-col">
              <li class="mt-20 -ml-24 font-aesthetic text-3xl lg:text-6xl text-black hover:text-purple">
                <router-link class="" to="/"> 1. HOME </router-link>
              </li>
              <li class="-mt-5 font-aesthetic text-3xl lg:text-6xl text-black hover:text-red-700">
                <router-link class="" to="/projets"> 2. PROJETS </router-link>
              </li>
              <li class="-mt-5 -ml-16 font-aesthetic text-3xl lg:text-6xl text-black hover:text-purple">
                <router-link class="" to="/about"> 3. À PROPOS </router-link>
              </li>
              <li class="-mt-5 ml-20 font-aesthetic text-3xl lg:text-6xl text-black hover:text-red-700">
                <router-link class="" to="/contact"> 4. CONTACT </router-link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </header>

  <Suspense>
    <router-view />
  </Suspense>

  <footer class="h- bg-black text-white">
    <br />
    <div class="ml-8 grid grid-flow-row-dense grid-cols-2">
      <img src="@/assets/logoBlanc.svg" alt="Logo de Théo Pasquarelli" class="m-8 lg:w-44 bg-black" />
      <div class="-ml-96 mt-10 pl-10">
        <p class="-ml-36 font-okine text-xs">+33(0)6 62 92 47 75</p>
        <a href="mailto:theopasquarelli68@gmail.com" class="-ml-36 font-okine text-xs">theopasquarelli68@gmail.com</a>
      </div>
    </div>

    <div class="absolute right-0 lg:-mt-32 -mt-24 mr-5 lg:mr-28 flex">
      <img src="@/assets/linkedin.png" alt="Logo LinkedIn" class="w-12" />
    </div>
  </footer>
</template>

<script>
let menuOuvert = ref();
menuOuvert.value = false;
</script>

<style></style>
