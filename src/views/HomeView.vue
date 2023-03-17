<script setup></script>
<template>
  <div class="overflow-x-scroll">
    <ul class="flex">
      <li class="relative flex-none">
        <img src="../assets/mer.jpg" alt="Photo de la mer" class="h-auto w-screen" />
        <div class="absolute inset-0 bottom-1/4 z-20 flex content-center items-center justify-center">
          <RouterLink to="/about">
            <div class="">
              <div class="flex">
                <h2 class="font-aesthetic text-9xl text-white">T</h2>
                <h2 class="mt-4 font-aesthetic text-xxl text-white">HÉO</h2>
                <h2 class="ml-5 font-aesthetic text-9xl text-white">P</h2>
                <h2 class="mt-4 font-aesthetic text-xxl text-white">ASQUARELLI</h2>
              </div>
              <div class="flex justify-center">
                <h2 class="font-aesthetic text-9xl text-white">P</h2>
                <h2 class="mt-4 font-aesthetic text-xxl text-white">ORTFOLIO</h2>
              </div>
              <img src="../assets/fleche.png" alt="flèche" class="absolute inset-1/2 z-20 mt-32 -ml-8 flex h-12 content-center" /></div
          ></RouterLink>
          <div class="absolute">
            <RouterLink to="/design"
              ><p
                class="relative right-96 top-36 h-10 w-36 rotate-12 rounded-xl border-2 border-white pt-1 text-center font-okine text-white hover:bg-white hover:text-black"
              >
                Web design
              </p></RouterLink
            >
            <RouterLink to="/graphisme"
              ><p
                class="relative left-96 top-16 h-10 w-36 -rotate-12 rounded-xl border-2 border-white pt-1 text-center font-okine text-white hover:bg-white hover:text-black"
              >
                Graphisme
              </p></RouterLink
            >
            <RouterLink to="/illustration"
              ><p
                class="relative left-96 bottom-48 h-10 w-36 rotate-12 rounded-xl border-2 border-white pt-1 text-center font-okine text-white hover:bg-white hover:text-black"
              >
                Illustration
              </p></RouterLink
            >
          </div>
        </div>
      </li>

      <li class="relative flex-none">
        <img src="../assets/AfficheSkyWalker.jpg" alt="affiche de sneakers SkyWalker" class="h-auto w-screen blur-sm" />
        <div class="absolute inset-0 bottom-1/4 z-20 flex content-center items-center justify-center">
          <RouterLink to="/skywalker">
            <div class="">
              <div class="flex">
                <h2 class="-mt-8 font-aesthetic text-9xl text-white">S</h2>
                <h2 class="-mt-4 font-aesthetic text-xxl text-white">KY</h2>
                <h2 class="-mt-8 font-aesthetic text-9xl text-white">W</h2>
                <h2 class="-mt-4 font-aesthetic text-xxl text-white">ALKER</h2>
              </div>
              <img src="../assets/fleche.png" alt="flèche" class="absolute inset-1/2 z-20 mt-32 -ml-8 flex h-12 content-center" />
            </div>
            <div class="absolute">
              <RouterLink to="/design"
                ><p
                  class="relative right-32 top-3 h-10 w-36 rotate-12 rounded-xl border-2 border-white pt-1 text-center font-okine text-white hover:bg-white hover:text-black"
                >
                  Web design
                </p></RouterLink
              >
            </div>
          </RouterLink>
        </div>
      </li>

      <li class="relative flex-none">
        <img src="../assets/13bpm.png" alt="affiche du festival 13bpm" class="h-auto w-screen blur-sm" />
        <div class="absolute inset-0 bottom-1/4 z-20 flex content-center items-center justify-center">
          <RouterLink to="/13bpm">
            <div class="">
              <div class="flex">
                <h2 class="-mt-8 font-aesthetic text-9xl text-white">F</h2>
                <h2 class="-mt-4 font-aesthetic text-xxl text-white">ESTIVAL</h2>
                <h2 class="-mt-8 ml-4 font-aesthetic text-9xl text-white">13 BPM</h2>
              </div>
              <img src="../assets/fleche.png" alt="flèche" class="absolute inset-1/2 z-20 mt-32 -ml-8 flex h-12 content-center" />
            </div>
            <div class="absolute">
              <RouterLink to="/design"
                ><p
                  class="relative left-96 bottom-52 ml-64 h-10 w-36 rotate-12 rounded-xl border-2 border-white pt-1 text-center font-okine text-white hover:bg-white hover:text-black"
                >
                  Web design
                </p></RouterLink
              >
            </div>
          </RouterLink>
        </div>
      </li>

      <li class="relative h-auto w-screen flex-none">
        <img src="../assets/osaka.png" alt="Aperçu affiche Osaka 2025" class="h-auto w-screen blur-sm" />
        <div class="absolute inset-0 bottom-1/4 z-20 flex content-center items-center justify-center">
          <RouterLink to="/osaka2025">
            <div class="">
              <div class="flex">
                <h2 class="-mt-8 font-aesthetic text-9xl text-gray-900">O</h2>
                <h2 class="-mt-4 font-aesthetic text-xxl text-gray-900">SAKA</h2>
                <h2 class="-mt-8 ml-4 font-aesthetic text-9xl text-gray-900">2025</h2>
              </div>
              <img src="../assets/flecheDark.png" alt="flèche" class="absolute inset-1/2 z-20 mt-32 -ml-8 flex h-12 content-center" />
            </div>
            <div class="absolute">
              <RouterLink to="/graphisme"
                ><p
                  class="relative left-96 top-3 ml-44 h-10 w-36 -rotate-12 rounded-xl border-2 border-gray-900 pt-1 text-center font-okine text-gray-900 hover:bg-gray-900 hover:text-white"
                >
                  Graphisme
                </p></RouterLink
              >
            </div>
          </RouterLink>
        </div>
      </li>

      <li class="relative h-auto w-screen flex-none">
        <img src="../assets/corsaire.png" alt="Aperçu carte Petit Corsaire" class="h-auto w-screen blur-sm" />
        <div class="absolute inset-0 bottom-1/4 z-20 flex content-center items-center justify-center">
          <RouterLink to="/petitcorsaire">
            <div class="">
              <div class="flex">
                <h2 class="-mt-8 font-aesthetic text-9xl text-gray-900">P</h2>
                <h2 class="-mt-4 font-aesthetic text-xxl text-gray-900">ETIT</h2>
                <h2 class="-mt-8 ml-4 font-aesthetic text-9xl text-gray-900">C</h2>
                <h2 class="-mt-4 font-aesthetic text-xxl text-gray-900">ROSAIRE</h2>
              </div>
              <img src="../assets/flecheDark.png" alt="flèche" class="absolute inset-1/2 z-20 mt-32 -ml-8 flex h-12 content-center" />
            </div>
            <div class="absolute">
              <RouterLink to="/illustration"
                ><p
                  class="relative right-40 bottom-48 h-10 w-36 -rotate-12 rounded-xl border-2 border-gray-900 pt-1 text-center font-okine text-gray-900 hover:bg-gray-900 hover:text-white"
                >
                  Illustration
                </p></RouterLink
              >
            </div>
          </RouterLink>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>
