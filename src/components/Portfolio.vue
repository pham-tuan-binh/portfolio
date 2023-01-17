<template>
    <div class="flex flex-col items-start gap-4">
        <div class="flex flex-col items-start p-4 gap-4">
            <img src="../assets/avatar.jpg" class="w-40 ml-4 rounded-full"/>
            <span class="text-3xl font-bold ml-4">Hello, I'm Binh Pham.</span>
            <span class="ml-4 max-w-xl text-left">I’m multi-disciplined engineer who has his hand on a wide range of fields including FullStack IoT, Illustrations, Graphic Design, Photography and Creative Coding.</span>
        </div>
        <div class="flex flex-row flex-wrap gap-4">
            <div class="flex flex-col items-start p-4 gap-4">
                <span class="text-3xl font-bold ml-4">Education</span>
                <div class="flex flex-col items-start px-4">
                    <span class="font-bold">Budapest University of Technology and Economics</span>
                    <span class="text-xs">BSc in Electrical Engineering 2022-2026</span>
                </div>
                <div class="flex flex-col items-start px-4">
                    <span class="font-bold">Tran Phu Highschool For The Gifted, Viet Nam</span>
                    <span class="text-xs">Major in Physics</span>
                </div>
            </div>

            <div class="flex flex-col items-start p-4 gap-4">
                <span class="text-3xl font-bold ml-4">Skills</span>
                <div class="grid grid-cols-2 grid-rows-3 gap-4">
                    <div class="flex flex-col items-start px-4">
                        <span class="font-bold">Programming Languages</span>
                        <span class="text-xs">C/C++, JavaScript, Python</span>
                    </div>
                    <div class="flex flex-col items-start px-4">
                        <span class="font-bold">Database</span>
                        <span class="text-xs">SQL, MongoDb, Firestore(Firebase)</span>
                    </div>
                    <div class="flex flex-col items-start px-4">
                        <span class="font-bold">Backend</span>
                        <span class="text-xs">NodeJS, ExpressJS, Flask, Django</span>
                    </div>
                    <div class="flex flex-col items-start px-4">
                        <span class="font-bold">Project Management</span>
                        <span class="text-xs">Jira</span>
                    </div>
                    <div class="flex flex-col items-start px-4">
                        <span class="font-bold">Frontend</span>
                        <span class="text-xs">ReactJS/Native, VueJS, Svelte</span>
                    </div>
                    <div class="flex flex-col items-start px-4">
                        <span class="font-bold">Other</span>
                        <span class="text-xs">Photoshop, Illustrator, TouchDesigner</span>
                    </div>
                </div>
            </div>
        </div>

        <ProjectContainer :content="fullstack" heading="Fullstack Projects" caption="These are projects in which I utilize my skills as a Fullstack Developer, building applications and products from the ground up." />
        <ProjectContainer :content="creative" heading="Creative Coding Projects" caption="These are projects in which I utilize my skills in Creative Coding, merging the technical and creative worlds."/>
        <ProjectContainer :content="illustration" heading="Illustration Projects" caption="These are my illustration albums."/>
        <ProjectContainer :content="photography" heading="Photography Projects" caption="These are my artsy photograph albums."/>
    </div>
  </template>
  
<script setup>
import ProjectContainer from "./ProjectsContainer.vue"

import neocoat from '../assets/neocoat.png';
import memoryCatalog from "../assets/memory-catalog.jpeg";
import ethrift from "../assets/ethrift.jpeg";
import days from "../assets/365days.jpeg";
import lego from "../assets/lego.png";
import trada from "../assets/trada.png";
import symbols from "../assets/symbols.png";
import broken from "../assets/broken.jpeg";
import square from "../assets/square.jpg";

const fullstack = [
    {
        heading: "Neocoat",
        caption: "March 1, 2022 · Binh Pham",
        src: neocoat,
        href: "https://binhph.am/posts/neocoat-intro/",
    },
    {
        heading: "Memory Catalog",
        caption: "May 27, 2022 · Binh Pham",
        src: memoryCatalog,
        href: "https://binhph.am/posts/memory-catalog/",
    },
    {
        heading: "EThrift",
        caption: "August 15, 2022 · Binh Pham, Hiep Nguyen",
        src: ethrift,
        href: "https://github.com/hiepnnguyentcu/EThrift",
    },
    {
        heading: "365Days",
        caption: "September 25, 2022 · Binh Pham",
        src: days,
        href: "https://binhph.am/posts/365days/",
    },
];

const creative = [
    {
        heading: "Lego",
        caption: "January 9, 2023 · Binh Pham",
        src: lego,
        href: "https://binhph.am/posts/neocoat-intro/",
    },
    {
        heading: "square()",
        caption: "January 14, 2023 · Binh Pham",
        src: square,
        href: "https://binhph.am/posts/memory-catalog/",
    },
];

const illustration = [
    {
        heading: "Trà đá kí hoạ",
        caption: "March 6, 2020 · Binh Pham",
        src: trada,
        href: "https://www.behance.net/gallery/93353075/Tra-da-ki-ho",
    },
    {
        heading: "Symbols of Việt Nam",
        caption: "July 2, 2020 · Binh Pham",
        src: symbols,
        href: "https://www.behance.net/gallery/99939753/Symbols-Of-Vit-Nam",
    },
];

const photography = [
    {
        heading: "Broken on 365days",
        caption: "August 30, 2022 · Binh Pham",
        src: broken,
        href: "https://www.instagram.com/p/Ch4SSuiBpuX/",
    },
];

 </script>