<template>
  <div class="m-4 mt-10 md:mx-20 md:mt-20 ">
    <!-- <header class="ml-4 mb-24">
      <div class="flex flex-row gap-4 items-center bg-white w-40 h-12 rounded-full drop-shadow-sm md:hover:scale-110 md:hover:drop-shadow-lg ease-in-out duration-300 " @click="handleClick">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6 ml-4 mb-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
        </svg>
        <span class="align-center">
          Homepage
        </span>
      </div>
    </header> -->
    <Portfolio/>
    <footer class="footer my-8 mx-4 flex flex-col items-center justify-center ">
      <img src="./assets/vaselogo.png" class="w-24">
      <span class="">© 2024 <a href="https://binhph.am">Binh's Archive</a></span>
    </footer>
  </div>
</template>

<script setup>
import Portfolio from "./components/Portfolio.vue"

document.addEventListener("mousemove", (event) => {
      document.mousePosX = event.clientX;
      document.mousePosY = event.clientY;
});

const handleClick = () => {
  window.open('https://binhph.am');
}

</script>