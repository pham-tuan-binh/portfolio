<template>
  <div @click="onClick" class="cursor-pointer">
    <FontAwesomeIcon :icon="['fab', social]" class="w-6 h-6" />
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { defineProps } from 'vue';


const props = defineProps({
    social: String,
    link: String
})

function onClick() {
    window.open(props.link, "_blank");
}

</script>

<style>

</style>