<script setup></script>
<template>
  <div class="overflow-x-scroll">
    <ul class="flex">
      <li class="relative flex-none">
        <img src="../assets/mer.jpg" class="h-auto w-screen" />
        <div class="absolute inset-0  z-20 flex bottom-1/4 content-center items-center justify-center">
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
              <img src="../assets/fleche.png" class="absolute inset-1/2 z-20 mt-32 -ml-8 flex h-12 content-center" />
            </div>
            <div class="absolute">
              <p class="relative h-10 w-36 rotate-12 rounded-xl border-2 border-white pt-1 text-center font-okine text-white">
                Web designer
              </p>
            </div>
          </RouterLink>
        </div>
      </li>

      <li class="flex-none relative">
        <img src="../assets/AfficheSkyWalker.jpg" class="h-auto w-screen blur-sm" />
        <div class="absolute inset-0 z-20 flex bottom-1/4 content-center items-center justify-center">
          <RouterLink to="/skywalker">
            <div class="">
              <div class="flex">
                <h2 class="-mt-8 font-aesthetic text-9xl text-white">S</h2>
                <h2 class="font-aesthetic -mt-4 text-xxl text-white">KY</h2>
                <h2 class="-mt-8 font-aesthetic text-9xl text-white">W</h2>
                <h2 class="font-aesthetic -mt-4 text-xxl text-white">ALKER</h2>
              </div>
              <img src="../assets/fleche.png" class="absolute inset-1/2 z-20 mt-32 -ml-8 flex h-12 content-center" />
            </div>
            <div class="absolute">
              <p class="relative h-16 w-36 right-20 rotate-12 rounded-lg border-2 border-white pt-1 text-center font-okine text-white">
                Sneakers personnalisées
            </p>
            </div>
          </RouterLink>
        </div>
      </li>

      <li class=" flex-none relative">
        <img src="../assets/13bpm.png" class="h-auto w-screen blur-sm" />
        <div class="absolute inset-0 z-20 flex bottom-1/4 content-center items-center justify-center">
          <RouterLink to="/13bpm">
            <div class="">
              <div class="flex">
                <h2 class="-mt-8 font-aesthetic text-9xl text-white">F</h2>
                <h2 class="font-aesthetic -mt-4 text-xxl text-white">ESTIVAL</h2>
                <h2 class="-mt-8 ml-4 font-aesthetic text-9xl text-white">13 BPM</h2>
              </div>
              <img src="../assets/fleche.png" class="absolute inset-1/2 z-20 mt-32 -ml-8 flex h-12 content-center" />
            </div>
            <div class="absolute">
              <p class="relative h-10 w-36 rotate-12 right-20 rounded-xl border-2 border-white pt-1 text-center font-okine text-white">
               Festival rap
            </p>
            </div>
          </RouterLink>
        </div>
      </li>

      <li class="h-auto w-screen flex-none relative">
        <img src="../assets/osaka.png" class="h-auto w-screen blur-sm" />
        <div class="absolute inset-0 z-20 flex bottom-1/4 content-center items-center justify-center">
          <RouterLink to="/osaka2025">
            <div class="">
              <div class="flex">
                <h2 class="-mt-8 font-aesthetic text-9xl text-white">O</h2>
                <h2 class="font-aesthetic -mt-4 text-xxl text-white">SAKA</h2>
                <h2 class="-mt-8 ml-4 font-aesthetic text-9xl text-white">2025</h2>
              </div>
              <img src="../assets/fleche.png" class="absolute inset-1/2 z-20 mt-32 -ml-8 flex h-12 content-center" />
            </div>
            <div class="absolute">
              <p class="relative h-10 right-20 w-36 rotate-12 rounded-xl border-2 border-white pt-1 text-center font-okine text-white">
               Expo universelle
            </p>
            </div>
          </RouterLink>
        </div>
      </li>

      <li class="h-auto w-screen flex-none relative">
        <img src="../assets/corsaire.png" class="h-auto w-screen blur-sm" />
        <div class="absolute inset-0 z-20 flex bottom-1/4 content-center items-center justify-center">
          <RouterLink to="/petitcorsaire">
            <div class="">
              <div class="flex">
                <h2 class="-mt-8 font-aesthetic text-9xl text-slate-50">P</h2>
                <h2 class="font-aesthetic -mt-4 text-xxl text-slate-50">ETIT</h2>
                <h2 class="-mt-8 ml-4 font-aesthetic text-9xl text-slate-200">C</h2>
                <h2 class="font-aesthetic -mt-4 text-xxl text-slate-200">ROSAIRE</h2>
              </div>
              <img src="../assets/fleche.png" class="absolute inset-1/2 z-20 mt-32 -ml-8 flex h-12 content-center" />
            </div>
            <div class="absolute">
              <p class="relative right-20 h-10 w-36 rotate-12 rounded-xl border-2 border-white pt-1 text-center font-okine text-white">
               Illustration
            </p>
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
