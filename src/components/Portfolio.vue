<template>
    <div class="flex flex-col items-start gap-4">
        <ProjectContainer :content="fullstack" heading="fullstack projects" caption="dude, i'm crazy in these projects, from dealing with nodejs and mongodb to react and vue, even arduino and espressif products; i'm the x engineer with the magical ability to do anything." />
        <ProjectContainer :content="terminalApp" heading="terminal projects" caption="it's the de-facto terminal projects that every student has to do; but wait, is that a neural network built from scratch in c++?"/>
        <ProjectContainer :content="creative" heading="creative coding projects" caption="engineers without taste in art? not me, cause i can combine them babe, the beauty of art and coding."/>
        <ProjectContainer :content="illustration" heading="illustration projects" caption="i even have illustrations album, both of them have reached over 50000 people across online showcases in viet nam."/>
        <ProjectContainer :content="photography" heading="photography projects" caption="this is actually an album with over 300 photos, but the particular photo listed here was showcased to 2000 people in an art exhibition in hai phong, viet nam."/>
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