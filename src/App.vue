<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./components/Hero.vue";
import MeetShitty from "./components/MeetShitty.vue";
import ShittyFacts from "./components/ShittyFacts.vue";
import ShittyArt from "./components/ShittyArt.vue";
import ShittyProducts from "./components/ShittyProducts.vue";
import BathroomClimax from "./components/BathroomClimax.vue";
import FinalCult from "./components/FinalCult.vue";
import Footer from "./components/Footer.vue";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const reveals = document.querySelectorAll(".reveal");

  if (reduced) {
    reveals.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  reveals.forEach((el, i) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: (i % 6) * 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });
});
</script>

<template>
  <Hero />
  <MeetShitty />
  <ShittyFacts />
  <ShittyArt />
  <ShittyProducts />
  <BathroomClimax />
  <FinalCult />
  <Footer />
</template>
