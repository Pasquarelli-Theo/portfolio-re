<script setup></script>
<template>
  <div class="lg:overflow-x-scroll">
    <ul class="lg:flex">
      <li class="relative flex-none">
        <img src="../assets/mer.jpg" alt="Photo de la mer" class="h-auto w-screen" />
        <div class="absolute inset-0 bottom-1/4 z-20 flex content-center items-center justify-center">
          <RouterLink to="/about">
            <div class="">
              <div class="flex">
                <h2 class="font-aesthetic text-lg text-white lg:text-9xl">T</h2>
                <h2 class="mt-1 font-aesthetic text-white lg:mt-4 lg:text-xxl">HÉO</h2>
                <h2 class="ml-1 font-aesthetic text-lg text-white lg:ml-5 lg:text-9xl">P</h2>
                <h2 class="mt-1 font-aesthetic text-white lg:mt-4 lg:text-xxl">ASQUARELLI</h2>
              </div>
              <div class="flex justify-center">
                <h2 class="font-aesthetic text-lg text-white lg:text-9xl">W</h2>
                <h2 class="mt-1 font-aesthetic text-white lg:mt-4 lg:text-xxl">EB</h2>
                <h2 class="font-aesthetic text-lg text-white lg:text-9xl">D</h2>
                <h2 class="mt-1 font-aesthetic text-white lg:mt-4 lg:text-xxl">ESIGNER</h2>
              </div>
              <img
                src="../assets/fleche.png"
                alt="flèche"
                class="absolute inset-1/2 z-20 mt-6 -ml-3 flex h-3 content-center lg:mt-32 lg:-ml-8 lg:h-12"
              /></div
          ></RouterLink>
          <div class="absolute">
            <RouterLink to="/design"
              ><p
                class="font-okine relative right-14 top-12 w-14 rotate-12 rounded-xl border-2 border-white text-center text-xxs text-white hover:bg-white hover:text-black lg:right-96 lg:top-36 lg:h-10 lg:w-36 lg:pt-1 lg:text-base"
              >
                Web design
              </p></RouterLink
            >
            <RouterLink to="/graphisme"
              ><p
                class="font-okine relative left-20 top-6 -rotate-12 rounded-xl border-2 border-white text-center text-xxs text-white hover:bg-white hover:text-black lg:left-96 lg:top-16 lg:h-10 lg:w-36 lg:pt-1 lg:text-base"
              >
                Graphisme
              </p></RouterLink
            >
            <RouterLink to="/illustration"
              ><p
                class="font-okine relative left-20 bottom-12 rotate-12 rounded-xl border-2 border-white text-center text-xxs text-white hover:bg-white hover:text-black lg:left-96 lg:bottom-48 lg:h-10 lg:w-36 lg:pt-1 lg:text-base"
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
                <h2 class="font-aesthetic text-lg text-white lg:text-9xl">S</h2>
                <h2 class="mt-1 font-aesthetic text-white lg:mt-4 lg:text-xxl">KY</h2>
                <h2 class="ml-1 font-aesthetic text-lg text-white lg:ml-5 lg:text-9xl">W</h2>
                <h2 class="mt-1 font-aesthetic text-white lg:mt-4 lg:text-xxl">ALKER</h2>
              </div>
              <img
                src="../assets/fleche.png"
                alt="flèche"
                class="absolute inset-1/2 z-20 mt-4 -ml-3 flex h-3 content-center lg:mt-32 lg:-ml-8 lg:h-12"
              />
            </div>
            <div class="absolute">
              <RouterLink to="/design"
                ><p
                  class="font-okine relative right-14 w-14 rotate-12 rounded-xl border-2 border-white text-center text-xxs text-white hover:bg-white hover:text-black lg:right-32 lg:top-3 lg:h-10 lg:w-36 lg:pt-1 lg:text-base"
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
                <h2 class="font-aesthetic text-lg text-white lg:text-9xl">F</h2>
                <h2 class="mt-1 font-aesthetic text-white lg:mt-4 lg:text-xxl">ESTIVAL</h2>
                <h2 class="ml-1 font-aesthetic text-lg text-white lg:ml-5 lg:text-9xl">13 BPM</h2>
              </div>
              <img
                src="../assets/fleche.png"
                alt="flèche"
                class="absolute inset-1/2 z-20 mt-5 -ml-3 flex h-3 content-center lg:mt-32 lg:-ml-8 lg:h-12"
              />
            </div>
            <div class="absolute">
              <RouterLink to="/design"
                ><p
                  class="font-okine relative left-28 bottom-12 w-14 rotate-12 rounded-xl border-2 border-white text-center text-xxs text-white hover:bg-white hover:text-black lg:left-96 lg:bottom-52 lg:ml-64 lg:h-10 lg:w-36 lg:pt-1 lg:text-base"
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
                <h2 class="font-aesthetic text-lg text-gray-900 lg:text-9xl">O</h2>
                <h2 class="mt-1 font-aesthetic text-gray-900 lg:mt-4 lg:text-xxl">SAKA</h2>
                <h2 class="ml-1 font-aesthetic text-lg text-gray-900 lg:ml-5 lg:text-9xl">2025</h2>
              </div>
              <img
                src="../assets/flecheDark.png"
                alt="flèche"
                class="absolute inset-1/2 z-20 mt-4 -ml-3 flex h-3 content-center lg:mt-32 lg:-ml-8 lg:h-12"
              />
            </div>
            <div class="absolute">
              <RouterLink to="/graphisme"
                ><p
                  class="font-okine relative left-24 w-14 -rotate-12 rounded-xl border-2 border-gray-900 text-center text-xxs text-gray-900 hover:bg-gray-900 hover:text-white lg:left-96 lg:top-3 lg:ml-44 lg:h-10 lg:w-36 lg:pt-1 lg:text-base"
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
                <h2 class="font-aesthetic text-lg text-gray-900 lg:-mt-8 lg:text-9xl">P</h2>
                <h2 class="mt-1 font-aesthetic text-gray-900 lg:mt-4 lg:text-xxl">ETIT</h2>
                <h2 class="ml-1 font-aesthetic text-lg text-gray-900 lg:ml-5 lg:text-9xl">C</h2>
                <h2 class="mt-1 font-aesthetic text-gray-900 lg:mt-4 lg:text-xxl">ROSAIRE</h2>
              </div>
              <img
                src="../assets/flecheDark.png"
                alt="flèche"
                class="absolute inset-1/2 z-20 mt-6 -ml-3 flex h-3 content-center lg:mt-32 lg:-ml-8 lg:h-12"
              />
            </div>
            <div class="absolute">
              <RouterLink to="/illustration"
                ><p
                  class="font-okine right-12 bottom-12 w-14 relative lg:right-40 lg:bottom-48 lg:h-10 lg:w-36 -rotate-12 rounded-xl border-2 border-gray-900 lg:pt-1 text-center text-xxs text-gray-900 hover:bg-gray-900 hover:text-white lg:text-base"
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
