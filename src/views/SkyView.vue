<script setup>
import bouton from "@/components/bouton.vue";
</script>

<template>
  <main class="bg-dark_grey1 text-white">
    <div>
      <div class="">
        <img src="../assets/AfficheSkyWalker.jpg" alt="Affiche de sneakers SkyWalker" class="w-screen" />
        <img
          src="../assets/flecheScroll.png"
          alt="flèche"
          class="invisible absolute inset-2/4 top-96 z-30 mt-64 h-16 lg:visible"
          onclick="window.scrollBy(0, 900)"
        />
      </div>

      <div class="absolute right-0 z-30">
        <h2 class="mt-14 ml-5 font-aesthetic text-3xl lg:mr-36 lg:text-6xl">SNEAKERS PERSONNALISABLE</h2>
      </div>
      <div class="absolute right-20 z-10 mt-44 mr-5 w-1/2 lg:right-14 lg:mt-24 lg:w-2/6">
        <img src="../assets/HomeSkywalker.png" alt="screen de la page d'accueil du site SkyWalker" class="" />
      </div>
      <div class="z-0 mt-52"><img src="../assets/CroixProjets.png" alt="amas de petite croix" class="" /></div>
      <div class="absolute right-1/3 z-10 mr-24 -mt-24 lg:-mt-96">
        <div class="flex">
          <h3 class="font-aesthetic text-2xl lg:-mt-16 lg:text-5xl">S</h3>
          <h3 class="font-aesthetic text-xl lg:-mt-14 lg:text-3xl">ky</h3>
          <h3 class="font-aesthetic text-2xl lg:-mt-16 lg:text-5xl">W</h3>
          <h3 class="font-aesthetic text-xl lg:-mt-14 lg:text-3xl">alker</h3>
        </div>
      </div>
      <div class="absolute z-10 ml-4 w-80 lg:right-1/3 lg:mr-24 lg:-mt-80 lg:w-2/5">
        <p class="-mt-14 lg:-mt-16 lg:text-right">
          Le projet SkyWalker est un projet de marque de sneakers personnalisable créé en cours de design d’expérience lors de ma formation
          MMI. L’objectif était de réaliser une interface adapté à la cible désignée en cours, ici un vendeurs d’une vingtaine d’années.
          Mais également une interface simple d’utilisation pour être accessible par tousse pour toucher le maximum de clients potentiels.
          Le site possède donc un visuel travaillé pour avoir la meilleure ergonomie possible en gardant un esprit moderne pour plaire au
          jeune public qui est la cible principale.
        </p>
      </div>
      <div class="absolute right-14 z-10 mt-72 w-2/3 lg:right-96 lg:-mt-40 lg:mr-72 lg:w-4/12">
        <img src="../assets/PersonnalisationProfil.png" alt="screen de la page personnalisation du site SkyWalker" class="" />
      </div>
      <div class="z-10 mt-96 ml-4 w-80 pt-32 lg:absolute lg:right-1 lg:mr-28 lg:mt-3 lg:mb-96 lg:w-4/12 lg:pt-1">
        <p class="">
          La création de ce site s'est faite en plusieurs étapes, la première était de trouver un modèle adapté à la cible, un vendeur d’une
          vingtaine d’années, un modèle adapté à un jeune public mais pouvant également plaire à un public plus large. Un logo a ensuite été
          créé duquel à découler un brandboard afin d’avoir l’esprit du futur site. Des changements ont eu lieu car la première harmonie
          colorée n’était pas adaptée, la seconde harmonie sera cette fois utilisée pour réaliser l’entièreté du site. Une affiche à ensuite
          été réalisée ultérieurement.
        </p>
      </div>
      <div class="flex justify-center">
        <a
          href="https://www.figma.com/proto/v99I7zSR3Nm1hB3gjyJwKg/R303-design-d'exp_Pasquarelli?page-id=77%3A611&node-id=77%3A612&viewport=397%2C299%2C0.11&scaling=min-zoom&starting-point-node-id=77%3A612"
          ><bouton libelle="Découvrir le site" class="mt-12 mb-20 lg:mt-80"
        /></a>
      </div>
    </div>
  </main>
</template>
