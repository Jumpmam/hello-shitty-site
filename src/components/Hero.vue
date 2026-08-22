<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { CONFIG } from "../config.js";

const mascot = ref(null);
const copied = ref(false);

function onMove(e) {
  if (!mascot.value) return;
  const rx = (e.clientY / window.innerHeight - 0.5) * -8;
  const ry = (e.clientX / window.innerWidth - 0.5) * 8;
  mascot.value.style.setProperty("--rx", rx.toFixed(2) + "deg");
  mascot.value.style.setProperty("--ry", ry.toFixed(2) + "deg");
}

async function copyCA() {
  try {
    await navigator.clipboard.writeText(CONFIG.ca);
  } catch {
    /* clipboard unavailable, ignore */
  }
  copied.value = true;
  setTimeout(() => (copied.value = false), 1600);
}

onMounted(() => window.addEventListener("pointermove", onMove));
onUnmounted(() => window.removeEventListener("pointermove", onMove));
</script>

<template>
  <section class="hero" id="top">
    <p class="hero-eyebrow eyebrow">she's here. she's shitty.</p>
    <h1 class="hero-title display">HELLO<br />SHITTY</h1>

    <img
      ref="mascot"
      src="/assets/img/mascot.png"
      alt="Hello Shitty mascot"
      class="hero-mascot"
    />

    <p class="hero-tagline">the cutest shit on the internet.</p>
    <p class="hero-ticker display">{{ CONFIG.ticker }}</p>

    <div class="hero-ctas">
      <a
        :href="CONFIG.pump || '#'"
        target="_blank"
        rel="noopener"
        class="btn btn--brown"
        :aria-disabled="!CONFIG.pump"
      >
        BUY {{ CONFIG.ticker }}
      </a>
      <a
        :href="CONFIG.x || '#'"
        target="_blank"
        rel="noopener"
        class="btn btn--outline"
        :aria-disabled="!CONFIG.x"
      >
        X / TWITTER
      </a>
    </div>

    <button class="hero-ca" type="button" @click="copyCA">
      {{ copied ? "copied. go wash your hands." : `CA: ${CONFIG.ca}` }}
    </button>

    <div class="hero-scroll">scroll if you dare</div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: radial-gradient(120% 100% at 50% 0%, var(--pink-soft) 0%, var(--pink) 70%, var(--pink) 100%);
  padding-top: 90px;
  gap: 6px;
}

.hero-eyebrow {
  margin: 0 0 6px;
}

.hero-title {
  font-size: clamp(72px, 15vw, 190px);
  color: var(--brown-deep);
  margin: 0;
  z-index: 2;
  position: relative;
  -webkit-text-stroke: 2px var(--ink);
}

.hero-mascot {
  width: clamp(220px, 34vw, 420px);
  margin: -6vw 0 -2vw;
  z-index: 3;
  position: relative;
  filter: drop-shadow(0 20px 30px rgba(107, 66, 38, 0.25));
  transform: perspective(800px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));
  transition: transform 0.25s var(--ease-soft);
  animation: float 5.5s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { translate: 0 0; }
  50% { translate: 0 -14px; }
}

.hero-tagline {
  font-size: clamp(16px, 2vw, 20px);
  color: var(--brown);
  font-weight: 700;
  margin: 10px 0 0;
}

.hero-ticker {
  font-size: clamp(22px, 3vw, 30px);
  color: var(--bow-pink);
  margin: 0 0 8px;
}

.hero-ctas {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 6px;
}

.hero-ca {
  margin-top: 16px;
  background: var(--white);
  border: 2px solid var(--brown);
  color: var(--brown);
  border-radius: 999px;
  padding: 8px 18px;
  font-size: 13px;
  font-weight: 700;
  font-family: var(--font-body);
  letter-spacing: 0.02em;
}

.hero-scroll {
  position: absolute;
  bottom: 28px;
  font-family: var(--font-hand);
  font-size: 18px;
  color: var(--brown);
  opacity: 0.6;
}

@media (max-width: 640px) {
  .hero-mascot {
    margin: -12vw 0 -4vw;
  }
}
</style>
