<template>
    <div class="flex flex-col items-start gap-4">
        <div class="flex flex-col items-start px-4 gap-4 mb-4">
            <!-- <img src="../assets/avatar.jpg" class="w-40 ml-4 rounded-full"/>
            <span class="text-3xl font-bold ml-4">Hello, I'm Binh Pham.</span> -->
            
            <span class="max-w-xl ml-4 text-left">Hi, I'm Binh, a multidisciplinary engineer with his hands on multiple stuff, from computer graphics and software engineering to hardware design, even photography and illustrations. Here is the place where you can see all of my work.</span>
            

            <span class="max-w-xl ml-4 text-left">You can also find me at </span>

            <div class="flex flex-row gap-4 px-4 w-full">
                <SocialIcon social="github" link="https://github.com/pham-tuan-binh"></SocialIcon>
                <SocialIcon social="linkedin" link="https://www.linkedin.com/in/pham-tuan-binh/"></SocialIcon>
                <SocialIcon social="threads" link="https://www.threads.net/@pham_tuan_binh"></SocialIcon>
                <SocialIcon social="instagram" link="https://www.instagram.com/pham_tuan_binh/"></SocialIcon>
                <SocialIcon social="facebook" link="https://www.facebook.com/binhpham0105"></SocialIcon>

            </div>

            <div class="flex flex-col sm:flex-row gap-4 px-4 w-full my-4">
                <Button content="Subscribe to my newsletter" type="Primary" link="https://binhsarchive.substack.com/">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="flex-shrink-0 w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                </Button>
                <Button content="Contact me" type="Secondary" link="mailto:binhpham@blog.binhph.am">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="flex-shrink-0 w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                    </svg>
                </Button>
            </div>
        </div>
        

        <ProjectContainer :content="fullstack" heading="Fullstack Projects" caption="These are projects in which I utilize my skills as a Fullstack Developer, building applications and products from the ground up." />
        <ProjectContainer :content="terminalApp" heading="Terminal Projects" caption="These are applications which I built to work in the terminal."/>
        <ProjectContainer :content="creative" heading="Creative Coding Projects" caption="These are projects in which I utilize my skills in Creative Coding, merging the technical and creative worlds."/>
        <ProjectContainer :content="illustration" heading="Illustration Projects" caption="These are my illustration albums."/>
        <ProjectContainer :content="photography" heading="Photography Projects" caption="These are my artsy photograph albums."/>
    </div>
  </template>
  
<script setup>
import ProjectContainer from "./ProjectsContainer.vue"
import SocialIcon from "./SocialIcon.vue";
import Button from "./Button.vue";

import neocoat from '../assets/neocoat.png';
import memoryCatalog from "../assets/memory-catalog.jpeg";
import ethrift from "../assets/ethrift.jpeg";
import days from "../assets/365days.jpeg";
import lego from "../assets/lego.png";
import trada from "../assets/trada.png";
import symbols from "../assets/symbols.png";
import broken from "../assets/broken.jpeg";
import square from "../assets/square.jpg";
import googly from "../assets/googly.jpg";
import openticker from "../assets/openticker.png";
import neuralnetwork from "../assets/neuralnetwork.png";
import life from "../assets/life.png";

const fullstack = [
    {
        heading: "Neocoat",
        caption: "March 1, 2022 · Binh Pham",
        src: neocoat,
        href: "https://blog.binhph.am/posts/neocoat-intro/",
    },
    {
        heading: "Memory Catalog",
        caption: "May 27, 2022 · Binh Pham",
        src: memoryCatalog,
        href: "https://blog.binhph.am/posts/memory-catalog/",
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
        href: "https://blog.binhph.am/posts/365days/",
    },
    {
        heading: "Open Ticker",
        caption: "September 17, 2023 · Binh Pham",
        src: openticker,
        href: "https://blog.binhph.am/posts/open-ticker/",
    },
];

const terminalApp = [
    {
        heading: "Neural Network from scratch",
        caption: "May 27, 2023 · Binh Pham",
        src: neuralnetwork,
        href: "https://blog.binhph.am/posts/365days/",
    },
    {
        heading: "Simulating Life in C",
        caption: "May 21, 2023 · Binh Pham",
        src: life,
        href: "https://blog.binhph.am/posts/365days/",
    },
];

const creative = [
    {
        heading: "Lego",
        caption: "January 9, 2023 · Binh Pham",
        src: lego,
        href: "https://blog.binhph.am/posts/legos/",
    },
    {
        heading: "square()",
        caption: "January 14, 2023 · Binh Pham",
        src: square,
        href: "https://blog.binhph.am/posts/square/",
    },
    {
        heading: "Googly",
        caption: "February 15, 2023 · Binh Pham",
        src: googly,
        href: "https://blog.binhph.am/posts/googly/",
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
        caption: "August 30, 2022 · Binh Pham, Nam Nguyen",
        src: broken,
        href: "https://www.instagram.com/p/Ch4SSuiBpuX/",
    },
];

function aws() {
    window.open("https://www.credly.com/badges/a580540a-ddcd-401b-a6dd-1f0819824483/public_url");
}

 </script>