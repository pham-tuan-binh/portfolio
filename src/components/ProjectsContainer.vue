<template>
  <div class="flex flex-col items-start p-4 gap-4">
    <div class="flex flex-col items-start gap-4">
        <span class="text-3xl font-bold ml-4">{{ heading }}</span>
        <span class="ml-4 max-w-xl">{{ caption }}</span>
    </div>
    <div class="flex gap-4 flex-wrap">
       <Project v-for="item in content" :heading="item.heading" :caption="item.caption" :src="item.src" :href="item.href" :key="item.heading"/>
        <!-- <div class="self-center w-12 h-12 bg-white rounded-full ml-12 flex items-center justify-center drop-shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </div> -->
    </div>

  </div>
</template>


<script setup>
import Project from "./Project.vue";

defineProps({
    heading: String,
    caption: String,
    content: Object,
})

</script>

<style>

</style>