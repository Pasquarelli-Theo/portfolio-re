<script setup>
import bouton from "@/components/bouton.vue";
</script>

<template>
  <main class="bg-dark_grey1 text-white">
    <div>
      <div class="">
        <img src="../assets/Affiche13bpm.png" alt="affiche du festival 13bpm" class="w-screen" />
        <img
          src="../assets/flecheScroll.png"
          alt="flèche"
          class="invisible absolute inset-2/4 top-96 z-30 mt-64 h-16 lg:visible"
          onclick="window.scrollBy(0, 900)"
        />
      </div>
      <div class="absolute z-30 lg:right-0">
        <h2 class="mt-14 ml-5 font-aesthetic text-3xl text-slate-300 lg:mr-36 lg:text-6xl">FESTIVAL DE RAP</h2>
      </div>
      <div class="absolute right-20 z-10 mt-36 mr-5 w-1/2 lg:right-14 lg:mt-24 lg:w-2/6">
        <img src="../assets/Home13BPM.png" alt="screen de la page d'accueil du site 13bpm" class="" />
      </div>
      <div class="z-0 mt-52"><img src="../assets/CroixProjets.png" alt="amas de petite croix" class="" /></div>
      <div class="absolute right-1/3 z-10 mr-24 -mt-24 lg:-mt-96">
        <h3 class="font-aesthetic text-2xl lg:-mt-20 lg:text-5xl">13 BPM</h3>
      </div>
      <div class="absolute z-10 ml-4 w-80 lg:right-1/3 lg:mr-24 lg:-mt-80 lg:w-2/5">
        <p class="-mt-16 lg:text-right">
          Le projet 13 BPM est un projet de festival de rap créé en cours de culture artistique lors de ma formation MMI. L’objectif était
          de créer un festival de musique de A à Z, du lieu à la liste des artistes en passant par une partie de la communication. 13 BPM
          est un festival de rap, il fallait donc retranscrire l’esprit hip-hop à travers l’harmonie coloré et le design du site. Le site
          possède un visuel brut pour retranscrire cela, montrer le principal sans artifice, se focaliser sur l’essentiel comme une forme de
          rap le faisait et le fait encore de nos jours.
        </p>
      </div>
      <div class="absolute lg:right-96 right-16 z-10 lg:-mt-40 mt-64 lg:mr-72 lg:w-4/12 w-2/3">
        <img src="../assets/Dinos.png" alt="screen de la page Dinos du site 13bpm" class="" />
      </div>
      <div class="lg:absolute lg:right-1 z-10 mt-96 pt-32 lg:pt-12 lg:mr-28 lg:mt-3 lg:mb-96 lg:w-4/12 w-80 ml-4">
        <p class="">
          Comme expliqué ci-dessus, j’ai créé le projet 13 BPM en totalité, développement du site compris bien que ce ne soit pas mon
          domaine principal. Le site à été développé dans des conditions particulières, lors d’une SAE (situation d'apprentissage et
          d'évaluation), l’équivalent des partiels dans ma formation, d’une durée de quatre jours seulement. Le site a été créé sur VS Code
          en utilisant du HTML5, CSS3? Tailwind CSS et VueJS avec une base de données Firebase pour gérer la liste des artistes et la
          gestion des comptes.
        </p>
      </div>
      <div class="flex justify-center">
        <a href="http://13bpm.theopasquarelli.fr/"><bouton libelle="Découvrir le site" class="lg:mt-96 mt-12 mb-20" /></a>
      </div>
    </div>
  </main>
</template>
