<template>
    <div ref="project" @click="handleClick" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" class="w-full border-solid border border-white md:w-80 p-4 bg-zinc-50 container rounded-lg drop-shadow-sm  ease-in-out duration-0 duration-1000 cursor-pointer"> 
        <img ref="image" class="w-full object-cover rounded-lg drop-shadow-sm" :src="src" />
        <div class="flex w-full p-2">
            <div class="flex justify-start h-full flex-col place-start w-full text-left pt-4">
                <span class="text-xl font-extrabold leading-6">{{ heading }}</span>
                <span class="text-xs">{{ caption }}</span>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
import { bound } from '../utils/math';
import { getCenter } from '../utils/element';

const props = defineProps({
  heading: String,
  caption: String,
  src: String,
  href: String,
})

const project = ref();

let isMouseInside = false;

function updatePerspective() {
    if (isMouseInside) {
    const center = getCenter(project.value);


    let degreesY = bound(-(center.x - document.mousePosX) / center.x * 90, 75);
    let degreesX = bound((center.y - document.mousePosY) / center.y * 90, 75);
    
    let yOffset = (center.x - document.mousePosX) / 50;
    let xOffset = (center.y - document.mousePosY) / 50;

    // console.log(`Position: ${center.x} ${center.y}`);
    // console.log(`Mouse Event: ${event.clientX} ${event.clientY}`);
    
    project.value.style.transform = `perspective( 2000px ) rotateY(${degreesY}deg) rotateX(${degreesX}deg)`;
    
    project.value.style.boxShadow = `inset ${-yOffset}px ${-xOffset}px 0px 1px rgba(10, 10, 10, .1)`;
    // project.value.style.boxShadow = `inset ${yOffset}px ${xOffset}px 10px 1px rgba(255, 255, 255, .75)`;

    
    window.requestAnimationFrame(updatePerspective);
    }
}

function onMouseLeave() {
    isMouseInside = false;
    project.value.classList.add("duration-1000");
    project.value.classList.remove("duration-0");
    project.value.style.transform = `perspective( 2000px ) rotateY(0deg) rotateX(0deg)`;
    project.value.style.boxShadow = `inset 0px 0px 0px 0px rgba(10, 10, 10, .1)`;

}

function onMouseEnter(event) {
    isMouseInside = true;
    project.value.classList.remove("duration-1000");
    project.value.classList.add("duration-0");
    window.requestAnimationFrame(updatePerspective);
}

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

