<script setup></script>

<template>
  <div class="overflow-x-scroll">
    <ul class="flex">
      <li class="flex-none">
        <img src="../assets/mer.jpg" class="h-screen w-screen" />
        <div>
          <RouterLink to="/about"
            ><div class="-ml-48 flex justify-center">
              <div class="relative z-10 -mt-96 flex justify-center">
                <h2 class="-mt-8 font-aesthetic text-8xl text-white">T</h2>
                <h2 class="font-aesthetic text-6xl text-white">HÉO</h2>
                <h2 class="-mt-8 ml-5 font-aesthetic text-8xl text-white">P</h2>
                <h2 class="font-aesthetic text-6xl text-white">ASQUARELLI</h2>
              </div>
              <img src="../assets/fleche.png" class="-mt-72 -ml-80 h-12" /></div
          ></RouterLink>
          <div class="ml-16">
            <p class="relative -mt-80 ml-80 h-10 w-36 rotate-12 rounded-xl border-2 border-white pt-1 text-center font-okine text-white">
              Web designer
            </p>
          </div>
        </div>
      </li>

      <li class="flex-none">
        <img src="../assets/AfficheSkyWalker.jpg" class="h-screen w-screen blur-sm" />
        <div>
          <RouterLink to="/skywalker"
            ><div class="-ml-24 flex justify-center">
              <div class="relative z-10 -mt-96 flex justify-center">
                <h2 class="-mt-8 font-aesthetic text-8xl text-white">S</h2>
                <h2 class="font-aesthetic text-6xl text-white">KY</h2>
                <h2 class="-mt-8 font-aesthetic text-8xl text-white">W</h2>
                <h2 class="font-aesthetic text-6xl text-white">ALKER</h2>
              </div>
              <img src="../assets/fleche.png" class="relative z-20 -mt-72 -ml-60 h-12" /></div
          ></RouterLink>
          <div class="ml-16">
            <p class="relative -mt-80 ml-96 w-36 rotate-12 rounded-xl border-2 border-white text-center font-okine text-white">
              Sneakers personnalisées
            </p>
          </div>
        </div>
      </li>

      <li class="h-screen w-screen flex-none">
        <img src="../assets/13bpm.png" class="h-screen w-screen blur-sm" />
        <div>
          <RouterLink to="/13bpm"
            ><div class="-ml-24 flex justify-center">
              <div class="relative z-10 -mt-96 -ml-16 flex justify-center">
                <h2 class="-mt-8 font-aesthetic text-8xl text-white">F</h2>
                <h2 class="font-aesthetic text-6xl text-white">ESTIVAL</h2>
                <h2 class="-mt-8 font-aesthetic ml-4 text-8xl text-white">13 BPM</h2>
              </div>
              <img src="../assets/fleche.png" class="relative z-20 -mt-72 -ml-80 h-12" /></div
          ></RouterLink>
          <div class="ml-16">
            <p class="relative h-9 pt-1 -mt-80 ml-80 w-36 rotate-12 rounded-xl border-2 border-white text-center font-okine text-white">
              Festival rap
            </p>
          </div>
        </div>
      </li>

      <li class="h-screen w-screen flex-none">
        <img src="../assets/osaka.png" class="h-screen w-screen blur-sm" />
        <div>
          <RouterLink to="/osaka2025"
            ><div class="-ml-24 flex justify-center">
              <div class="relative z-10 -mt-96 -ml-10 flex justify-center">
                <h2 class="-mt-8 font-aesthetic text-8xl text-white">O</h2>
                <h2 class="font-aesthetic text-6xl text-white">SAKA</h2>
                <h2 class="-mt-8 ml-4 font-aesthetic text-8xl text-white">2025</h2>
              </div>
              <img src="../assets/fleche.png" class="relative z-20 -mt-72 -ml-72 h-12" /></div
          ></RouterLink>
          <div class="ml-16">
            <p class="relative -mt-80 ml-96 h-9 w-36 rotate-12 rounded-xl bg-opacity-30 bg-black border-2 border-white pt-1 text-center font-okine text-white">
              Expo universelle
            </p>
          </div>
        </div>
      </li>

      <li class="h-screen w-screen flex-none">
        <img src="../assets/corsaire.png" class="h-screen w-screen blur-sm" />
        <div>
          <RouterLink to="/petitcorsaire"
            ><div class="-ml-28 flex justify-center">
              <div class="relative z-10 -mt-96 -ml-5 flex justify-center">
                <h2 class="-mt-8 font-aesthetic text-8xl text-slate-50">P</h2>
                <h2 class="font-aesthetic text-6xl text-slate-50">ETIT</h2>
                <h2 class="-mt-8 font-aesthetic ml-4 text-8xl text-slate-200">C</h2>
                <h2 class="font-aesthetic text-6xl text-slate-200">ROSAIRE</h2>
              </div>
              <img src="../assets/fleche.png" class="relative z-20 -mt-72 -ml-72 h-12" /></div
          ></RouterLink>
          <div class="ml-16">
            <p class="relative h-9 pt-1 -mt-80 ml-96 w-36 rotate-12 rounded-xl border-2 border-white text-center font-okine text-white">
              Illustration
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>

  <!-- <div id="default-carousel" class="relative" data-carousel="slide">
    <div class="relative h-screen w-screen rounded-lg">
      <div class="duration-700 ease-in-out" data-carousel-item>
        <img
          src="@/assets/AfficheSkyWalker.jpg"
          class="absolute top-1/2 left-1/2 z-0 block w-full -translate-x-1/2 -translate-y-1/2"
          alt="..."
        />
      </div>
      <div class="duration-700 ease-in-out" data-carousel-item>
        <img src="@/assets/13bpm.png" class="absolute top-1/2 left-1/2 z-0 block w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
      </div>
      <div class="duration-700 ease-in-out" data-carousel-item>
        <img
          src="@/assets/AfficheSkyWalker.jpg"
          class="absolute top-1/2 left-1/2 z-0 block w-full -translate-x-1/2 -translate-y-1/2"
          alt="..."
        />
      </div>
      <div class="duration-700 ease-in-out" data-carousel-item>
        <img src="@/assets/13bpm.png" class="absolute top-1/2 left-1/2 z-0 block w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
      </div>
      <div class="duration-700 ease-in-out" data-carousel-item>
        <img
          src="@/assets/AfficheSkyWalker.jpg"
          class="z- 0 absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
          alt="..."
        />
      </div>
    </div>
    <div class="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
      <button type="button" class="h-3 w-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
      <button type="button" class="h-3 w-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
      <button type="button" class="h-3 w-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
      <button type="button" class="h-3 w-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
      <button type="button" class="h-3 w-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
=    <button
      type="button"
      class="group absolute top-0 left-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
      data-carousel-prev
    >
      <span
        class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10"
      >
        <svg
          aria-hidden="true"
          class="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button
      type="button"
      class="group absolute top-0 right-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
      data-carousel-next
    >
      <span
        class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10"
      >
        <svg
          aria-hidden="true"
          class="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div> -->
</template>

<script>
export default {};
</script>
