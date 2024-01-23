<template>
    <button v-if='type=="Primary"' @click="onClick" type="button" class="cursor-pointer w-full sm:w-auto py-3 px-4 inline-flex items-center gap-x-2  font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
        <slot></slot>
        {{ content }}
       
    </button>   
    <button v-if='type=="Secondary"' @click="onClick" type="button" class="cursor-pointer w-full sm:w-auto py-3 px-4 inline-flex items-center gap-x-2 font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
        <slot></slot>
        {{ content }}
        
    </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  content: String,
  link: String,
  type: String,
})

function onClick() {
    window.open(props.link, "_blank");
}

</script>

<style>

</style>