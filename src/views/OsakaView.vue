text-3xl lg:
<script setup>
import bouton from "@/components/bouton.vue";
</script>

<template>
  <main class="bg-dark_grey1 text-white">
    <div class="">
      <div
        class="absolute top-44 left-24 z-20 flex font-aesthetic text-gray-900 lg:inset-0 lg:top-0 lg:left-0 lg:content-center lg:items-center lg:justify-center"
      >
        <h1 class="text-3xl lg:text-8xl">O</h1>
        <h1 class="mt-1 text-2xl lg:text-6xl">SAKA</h1>
        <h1 class="text-3xl lg:ml-4 lg:text-8xl">2025</h1>
      </div>

      <div class="">
        <img src="../assets/Afficheosaka.png" alt="Aperçu affiche Osaka 2025" class="w-screen" />
        <img
          src="../assets/flecheScroll.png"
          alt="flèche"
          class="invisible absolute inset-2/4 top-96 z-30 mt-64 h-16 lg:visible"
          onclick="window.scrollBy(0, 900)"
        />
      </div>
      <div class="absolute right-0 z-30">
        <h2 class="mt-14 ml-5 font-aesthetic text-3xl lg:mr-36 lg:text-6xl">EXPOSITION UNIVERSELLE 2025</h2>
      </div>
      <div class="absolute right-20 z-10 mt-36 mr-5 w-1/2 lg:right-14 lg:mt-24 lg:w-2/6">
        <img src="../assets/osaka1.png" alt="Affiche Osaka 2025 n°1" class="" />
      </div>
      <div class="z-0 mt-52"><img src="../assets/CroixProjets.png" alt="amas de petite croix" class="" /></div>
      <div class="absolute right-1/3 z-10 mr-24 -mt-32 lg:-mt-96"><h3 class="lg:-mt-20 font-aesthetic text-2xl lg:text-5xl">OSAKA 2025</h3></div>
      <div class="absolute z-10 ml-4 w-80 lg:right-1/3 lg:mr-24 lg:-mt-80 lg:w-2/5">
        <p class="-mt-20 lg:-mt-16 lg:text-right">
          Ces 2 affiches pour l’exposition universelle 2025 à Osaka ont été réalisées dans le cadre d’un exercice de culture artistique. Le
          but de cette édition est de mettre en avant les innovations de chaque pays, c’est donc ce qu’il fallait représenter dans les
          affiches. Sur ces affiches nous retrouvons des bâtiments d’un style futuriste avec de nombreuses plantes. L’objectif était de
          représenter des bâtiments autosuffisant qui représentent l’avenir mais en noir et blanc pour rappeler qu’il est urgent d’agir pour
          protéger la planète. Plusieurs langues sont présentes sur l’affiche pour exposer le côté international.
        </p>
      </div>
      <div class="absolute lg:right-96 right-14 z-10 lg:-mt-40 mt-72 lg:mr-72 lg:w-4/12 w-2/3"><img src="../assets/osaka2.png" alt="Affiche Osaka 2025 n°2" class="" /></div>
      <div class="lg:absolute lg:right-1 z-10 mt-96 pt-72 lg:pt-0 lg:mr-28 lg:mt-3 lg:mb-96 lg:w-4/12 w-80 ml-4">
        <p class="">
          Ce projet a été créé à deux et réfléchi à deux, mon binôme a également créé des variantes de ces affiches sous un format de carte
          postal. L’aspect principal de l’exposition universelle est de montrer de nouvelles innovations et nous avons essayé de garder cela
          jusque dans la création des affiches. Pour cela nous avons utilisé une nouvelle IA créative DALL.E pour créer les photos des
          bâtiments. Les autres outils utilisés sont InDesign et Photoshop, des outils plus commun mais essentiels.
        </p>
      </div>
      <div class="lg:pt-44 lg:mt-96 flex justify-center">
        <br>
      </div>
    </div>
  </main>
</template>

<script></script>
