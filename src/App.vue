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
    <Avatar class="md:-ml-4"/>

    <Introduction class="mt-4 mb-12"/>

    <Portfolio class="z-10 on-top"/>

    <Footer class="footer my-4 mx-4 flex flex-col items-center justify-center"/>
  </div>
</template>

<script setup>
import Portfolio from "./components/Portfolio.vue";
import Avatar from "./components/Avatar.vue";
import Introduction from "./components/Introduction.vue";
import Footer from "./components/Footer.vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faGithub, faFacebook, faThreads, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faGithub ,faFacebook, faThreads, faLinkedin, faInstagram);

document.addEventListener("mousemove", (event) => {
      document.mousePosX = event.clientX;
      document.mousePosY = event.clientY;
});

const handleClick = () => {
  window.open('https://binhph.am');
}

</script>

<style>
.on-top {
  transform: translate3d(0, 0, 4000px);
}

.text-body {

}
</style>