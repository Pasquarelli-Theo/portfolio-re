<script setup>
import bouton from "@/components/bouton.vue";
</script>

<template>
  <main class="bg-dark_grey1">
          <div class="absolute right-0 z-30"><h2 class="mt-14 text-white mr-36 font-aesthetic text-6xl">CONTACT</h2></div>

    <div class="ml-auto mr-auto grid w-7/12 ">
      <form action="" class="mt-52">
        <div class="grid grid-cols-2">
          <input type="text" placeholder="Votre nom" class="pb-2 mb-6 w-96 bg-transparent text-justify text-xl border-b-2 text-grey" />

          <input type="text" placeholder="Prénom" class="pb-2 mb-6 w-96 ml-14 bg-transparent text-justify text-xl border-b-2 text-grey" />
        </div>

        <div class="grid grid-cols-2">
          <input type="text" placeholder="E-mail" class="pb-2 mb-6 w-96 bg-transparent text-justify text-xl border-b-2 text-grey" />

          <input type="text" placeholder="Nom de votre entreprise" class="pb-2 mb-6 w-96 ml-14 bg-transparent text-justify text-xl border-b-2 text-grey" />
        </div>

        <textarea name="" placeholder="" class="mt-4 h-52 bg-grey2 rounded-sm text-xl text-dark_grey1 w-full"> </textarea>

        <bouton libelle="Envoyer" class="mb-20 mt-8 ml-4"></bouton>
      </form>
    </div>
  </main>
</template>
