<script setup>
import bouton from "@/components/bouton.vue";
</script>

<template>
  <main class="bg-dark_grey1">
    <div class="absolute right-0 z-30"><h2 class="mt-14 mr-36 font-aesthetic text-6xl text-white">CONTACT</h2></div>

    <div class="ml-auto mr-auto grid w-7/12">
      <form action="https://formsubmit.co/theopasquarelli68@gmail.com" method="POST" class="mt-52">
        <div class="grid grid-cols-2">
          <input type="text" placeholder="Votre nom" class="mb-6 w-96 border-b-2 bg-transparent pb-2 text-justify text-xl text-grey" />

          <input type="text" placeholder="Prénom" class="mb-6 ml-14 w-96 border-b-2 bg-transparent pb-2 text-justify text-xl text-grey" />
        </div>

        <div class="grid grid-cols-2">
          <input type="text" placeholder="E-mail" class="mb-6 w-96 border-b-2 bg-transparent pb-2 text-justify text-xl text-grey" />

          <input
            type="text"
            placeholder="Nom de votre entreprise"
            class="mb-6 ml-14 w-96 border-b-2 bg-transparent pb-2 text-justify text-xl text-grey"
          />
        </div>

        <textarea name="" placeholder="" class="mt-4 h-52 w-full rounded-sm bg-grey2 text-xl text-dark_grey1"> </textarea>

        <bouton libelle="Envoyer" class="mb-20 mt-8 ml-4"></bouton>
      </form>
    </div>
  </main>
</template>
