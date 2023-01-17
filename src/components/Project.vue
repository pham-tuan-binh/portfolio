<template>
    <div  @click="handleClick" class="w-full md:w-80 p-4 bg-white container rounded-lg drop-shadow-sm md:hover:scale-110 md:hover:mx-5 md:hover:drop-shadow-lg ease-in-out duration-300 cursor-pointer"> 
        <img class="w-full object-cover rounded-lg" :src="src" />
        <div class="flex w-full p-2">
            <div class="flex justify-start h-full flex-col place-start w-full text-left pt-4">
                <span class="text-xl font-extrabold leading-6">{{ heading }}</span>
                <span class="text-xs">{{ caption }}</span>
            </div>
        </div>
    </div>
</template>
  
<script setup>
const props = defineProps({
  heading: String,
  caption: String,
  src: String,
  href: String,
})

function handleClick(event) {
    window.open(props.href);
}

</script>

<style>
@keyframes appear {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
}

.container {
    

    animation: appear 1s linear;
}
</style>

