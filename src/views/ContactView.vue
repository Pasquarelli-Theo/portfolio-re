<script setup>
import bouton from "@/components/bouton.vue";
</script>

<template>
  <main class="bg-dark_grey1">
    <div class="absolute right-0 z-30"><h2 class="mt-14 mr-36 font-aesthetic lg:text-6xl text-3xl text-white">CONTACT</h2></div>

    <p class="absolute font-okine text-white top-64 lg:left-28 left-2 text-lg">Envie de collaborer ou de me contacter ? Envoyez nous un message !</p>
    <hr class="w-72 border-white absolute lg:top-72 top-80 mt-2 lg:left-40 left-12">

    <div class="ml-auto pt-12 mr-auto grid w-7/12">
      <form action="https://formsubmit.co/theopasquarelli68@gmail.com" method="POST" class="mt-52">
        <div class="lg:grid lg:grid-cols-2">
          <input
            type="text"
            name="nom"
            placeholder="Votre nom"
            class="mb-6 lg:w-96 border-b-2 bg-transparent pb-2 font-okine font-light text-justify text-xl text-grey"
          />

          <input
            type="text"
            name="prenom"
            placeholder="Prénom"
            class="mb-6 lg:ml-14 lg:w-96 border-b-2 bg-transparent pb-2 font-okine font-light text-justify text-xl text-grey"
          />
        </div>

        <div class="lg:grid lg:grid-cols-2">
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            class="mb-6 lg:w-96 border-b-2 bg-transparent pb-2 font-okine font-light text-justify text-xl text-grey"
          />

          <input
            type="text"
            name="entreprise"
            placeholder="Nom de votre entreprise"
            class="mb-6 lg:ml-14 lg:w-96 border-b-2 bg-transparent pb-2 font-okine font-light text-justify text-xl text-grey"
          />
        </div>

        <p class="font-okine font-light text-xl pt-3 text-light_grey2">Votre message</p><textarea name="message" placeholder="" class="mt-4 h-52 w-full rounded-sm bg-grey2 text-xl text-dark_grey1"> </textarea>

        <bouton libelle="Envoyer" class="mb-20 mt-8 ml-4"></bouton>
      </form>
    </div>
  </main>
</template>
