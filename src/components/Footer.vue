<template>
    <footer>
      <img :src="VaseLogo" class="w-24">
      <span class="">© 2024 <a href="https://binhph.am">Binh's Archive</a></span>
      <div class="flex flex-row gap-4 p-4">
            <SocialIcon social="github" link="https://github.com/pham-tuan-binh"></SocialIcon>
            <SocialIcon social="linkedin" link="https://www.linkedin.com/in/pham-tuan-binh/"></SocialIcon>
            <SocialIcon social="threads" link="https://www.threads.net/@pham_tuan_binh"></SocialIcon>
            <SocialIcon social="instagram" link="https://www.instagram.com/pham_tuan_binh/"></SocialIcon>
            <SocialIcon social="facebook" link="https://www.facebook.com/binhpham0105"></SocialIcon>
        </div>
    </footer>
</template>

<script setup>
import VaseLogo from "../assets/vaselogo.png";
import SocialIcon from "./SocialIcon.vue";
</script>

<style>

</style>