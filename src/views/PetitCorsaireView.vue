<script setup>
import bouton from "@/components/bouton.vue";
</script>

<template>
  <main class="bg-dark_grey1 text-white">
    <div>
      <div
        class="absolute top-44 left-24 z-20 flex font-aesthetic text-gray-900 lg:inset-0 lg:top-0 lg:left-0 lg:content-center lg:items-center lg:justify-center"
      >
        <h1 class="text-3xl lg:text-8xl">P</h1>
        <h1 class="mt-1 text-2xl lg:text-6xl">ETIT</h1>
        <h1 class="ml-4 text-3xl lg:text-8xl">C</h1>
        <h1 class="mt-1 text-2xl lg:text-6xl">ORSAIRE</h1>
      </div>
      <div class="">
        <img src="../assets/Affichecorsaire.png" alt="Aperçu carte Petit Corsaire" class="w-screen" />
        <img
          src="../assets/flecheScroll.png"
          alt="flèche"
          class="invisible absolute inset-2/4 top-96 z-30 mt-64 h-16 lg:visible"
          onclick="window.scrollBy(0, 900)"
        />
      </div>
      <div class="absolute right-0 z-30">
        <h2 class="mt-14 ml-5 font-aesthetic text-3xl lg:mr-36 lg:text-6xl">ILLUSTRATION, STYLE DE CASSANDRE</h2>
      </div>
      <div class="absolute mt-40 right-14 z-10 lg:mt-32 lg:mr-5 w-2/3 lg:w-3/6">
        <img src="../assets/PetitCorsaire.png" alt="Carte postale Petit Corsaire" class="" />
      </div>
      <div class="z-0 mt-52"><img src="../assets/CroixProjets.png" alt="amas de petite croix" class="" /></div>
      <div class="absolute z-10 lg:ml-80 ml-4 -mt-48 lg:-mt-96 lg:pl-24">
        <div class="flex">
          <h3 class="lg:-mt-16 font-aesthetic text-2xl lg:text-5xl">P</h3>
          <h3 class="lg:-mt-14 font-aesthetic text-2xl lg:text-3xl">ETIT</h3>
          <h3 class="lg:-mt-16 ml-2 font-aesthetic text-2xl lg:text-5xl">C</h3>
          <h3 class="lg:-mt-14 font-aesthetic text-2xl lg:text-3xl">ORSAIRE</h3>
        </div>
      </div>
      <div class="right- absolute z-10 ml-4 lg:ml-36 -mt-80 w-80 lg:w-4/12">
        <p class="lg:-mt-16 mt-44 lg:text-right">
          Cette illustration à été réalisée dans le cadre d’un exercice en culture artistique, l’objectif était de créer une illustration
          en reproduisant le style du graphiste Ukrainien Cassandre. Cette illustration à dû être produite au format carte postal, un format
          qui s’oublie depuis quelques années. L’idée de cette illustration m'est venue en voyant l’illustration <u>Normandie</u> de
          Cassandre représentant un immense bateau. J’ai donc voulu prendre cette affiche à contre pied en faisant un bateau de petite
          taille avec un seul passager, on peut d’ailleurs voir le bateau de <u>Normandie</u> au fond de l’illustration. Le manga
          <u>One Piece</u> a également eu une influence, d’où le titre qui est une référence directe au Grand corsaire de l’œuvre.
        </p>
      </div>

      <div class="lg:absolute mt-72 lg:ml-0 ml-4 right-1 z-10 lg:-mt-32 lg:mr-28 w-80 lg:w-5/12">
        <p class="">
          Avant de créer cette illustration il a fallu mener des recherches sur les œuvres de Cassandre et surtout les analyser, les étudier
          afin de pouvoir reproduire son style. Comme dit ci-dessus l’illustration Normandie a eu une grande importance pour l’inspiration
          mais également pour le visuel directement. Lors de la création sur Illustrator, un croquis fait il y a plusieurs années m’est
          revenu à l’esprit et m’a inspiré. Ce croquis représentait un vieil homme en train de pêcher seul dans une petite barque. Ce
          travail est donc une accumulation de nombreuses inspirations et influences.
        </p>
      </div>
      <div class="flex justify-center lg:mt-24">
        <br />
      </div>
    </div>
  </main>
</template>
