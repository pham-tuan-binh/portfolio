<template>
  <div class="w-full -mb-8  sm:w-72 sm:h-72 flex sm:flex-row flex-col items-center z-0 ">
    <canvas ref="avatar" class="w-full -mb-8" width="1024" height="1024"></canvas>
    
    <!-- <img class="hidden sm:block" src="/src/assets/bubble/desktop_bubble.png"/> -->
  </div>
</template>

<script setup>
import { ref, onMounted} from 'vue'
import World from '../threejs/world.js'

const avatar = ref();

onMounted(async () => {
  const world = new World(avatar.value);
  

  await world.init();

  world.start();
  // const world = new World(avatarContainer.value);
});

</script>

<style>

</style>