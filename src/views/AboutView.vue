<script setup>
import bouton from "@/components/bouton.vue";
</script>

<template>
  <main class="bg-dark_grey1">
    <div class="flex justify-center">
      <h2 class="font-aesthetic text-4xl lg:text-8xl text-white">T</h2>
      <h2 class="mt-2 lg:mt-5 font-aesthetic text-2xl lg:text-7xl text-white">HÉO</h2>
      <h2 class="ml-4 font-aesthetic text-4xl lg:text-8xl text-white">P</h2>
      <h2 class="mt-2 lg:mt-5 font-aesthetic text-2xl lg:text-7xl text-white">ASQUARELLI</h2>
    </div>
    <div class="relative z-20 lg:-ml-28 flex justify-center">
      <img src="../assets/info.png" alt="Photo de Théo Pasquaelli divisé en plusieurs blocs" class="lg:h-auto h-72" />
    </div>
    <div class="absolute right-0 z-0 -mt-40"><img src="../assets/CroixProjets.png" alt="amas de petite croix" class="lg:h-auto h-72" /></div>
    <h4 class="ml-4 lg:ml-44 font-arsenica text-2xl lg:text-4xl text-white">Designer & Web Designer</h4>
    <div class="flex justify-center">
      <p class="mt-10 w-9/12 font-okineR text-base text-white">
        Bonjour ! Je m’appelle Théo Pasquarelli et je vous souhaite la bienvenue sur mon portfolio. Depuis toujours je suis passionné par la
        création et principalement le dessin qui m’a occupé durant des années et m’occupe encore. Exercer un métier créatif était donc une
        évidence pour moi. Mes domaines de prédilections sont le graphisme et le web design cependant tout type de création m’intéresse, la
        vidéo, la musique et en général la plupart des pratiques artistiques. C’est avec envie et impatience que je me lance à présent dans
        le monde du design et du web design, je suis ouvert à tout type de projet et ai hâte d’emmagasiner de l’expérience.
      </p>
    </div>
    <h4 class="ml-4 lg:ml-44 font-arsenica text-2xl lg:text-4xl mt-20 text-white">Parcours et compétences</h4>
    <div class="flex justify-center">
      <p class="mt-10 w-9/12 font-okineR text-base text-white">
        Après avoir obtenu mon baccalauréat général option mathématiques et physique chimie, je me suis dirigé vers un BUT Métiers du
        Multimédia et de l’Internet (MMI) à Montbéliard. En plus de mes capacités artistiques acquises lors de nombreuses années de pratique
        personnelle, ce BUT m’a permis d’obtenir de nombreuses compétences dans plusieurs domaines. En design et graphisme majoritairement
        mais également en audiovisuel, en communication ainsi que des notions de développement web.
      </p>
    </div>
    <div class="lg:mt-24 lg:mr-36 lg:ml-36 m-5 grid grid-flow-row-dense grid-cols-4">
      <div class="text-center">
        <img src="../assets/illustrator.png" alt="Logo d'Illustrator" class="inline-flex lg:w-16 w-10" />
        <p class="font-okineL text-sm font-light text-white">Illustrator</p>
      </div>
      <div class="text-center">
        <img src="../assets/figma.png" alt="Logo de Figma" class="inline-flex lg:h-auto lg:w-16 h-10" />
        <p class="font-okineL text-sm font-light text-white">Figma</p>
      </div>
      <div class="text-center">
        <img src="../assets/photoshop.png" alt="Logo de Photoshop" class="inline-flex lg:w-16 w-10" />
        <p class="font-okineL text-sm font-light text-white">Photoshop</p>
      </div>
      <div class="text-center">
        <img src="../assets/indesign.png" alt="Logo de InDesign" class="inline-flex lg:w-16 w-10" />
        <p class="font-okineL text-sm font-light text-white">InDesign</p>
      </div>
    </div>

    <div class="lg:mt-16 lg:mb-16 lg:mr-72 lg:ml-72 m-5 grid grid-flow-row-dense grid-cols-3">
      <div class="text-center">
        <img src="../assets/after.png" alt="Logo d'After Effect" class="inline-flex lg:w-16 w-10" />
        <p class="font-okineL text-sm font-light text-white">After</p>
      </div>
      <div class="text-center">
        <img src="../assets/premiere.png" alt="Logo de PremierePro" class="inline-flex lg:h-auto lg:w-16 h-10" />
        <p class="font-okineL text-sm font-light text-white">Premiere Pro</p>
      </div>
      <div class="text-center">
        <img src="../assets/vscode.png" alt="Logo de VS Code" class="inline-flex lg:h-16 h-10" />
        <p class="font-okineL text-sm font-light text-white">VS Code</p>
      </div>
    </div>

    <div class="lg:h-auto h-80 lg:grid lg:grid-flow-row-dense lg:grid-cols-2 bg-white">
      <div>
        <br />
        <p class="mt-9 mb-16 lg:ml-64 ml-2 w-80 font-arsenica text-xl lg:text-4xl font-semibold">Envie de collaborer sur une projet ?</p>
      </div>
      <div class="mt-20">
        <RouterLink to="/contact"><p class="-ml-44 text-center text-2xl font-medium">Me contacter</p></RouterLink>
        <div class="text-center">
          <a href="mailto:theopasquarelli68@gmail.com" class="font-okineR text-lg text-grey">theopasquarelli68@gmail.com</a>
        </div>
      </div>
    </div>
  </main>
</template>

