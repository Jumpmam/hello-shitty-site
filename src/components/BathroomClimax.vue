<script setup>
import { ref } from "vue";
import gsap from "gsap";

const stage = ref(null);
const mascot = ref(null);
const busy = ref(false);
let audioCtx = null;

function flushSound() {
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(600, now);
    filter.frequency.exponentialRampToValueAtTime(90, now + 0.9);
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.9);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.14, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.95);
    osc.connect(filter).connect(gain).connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 1);
  } catch {
    /* audio unavailable, skip silently */
  }
}

function doFlush() {
  if (busy.value) return;
  busy.value = true;

  flushSound();

  const tl = gsap.timeline({
    onComplete: () => {
      busy.value = false;
    },
  });

  // a quiet physical gag, no text: she spins away and bounces back
  tl.to(stage.value, {
    keyframes: [
      { x: -6, y: -3, duration: 0.05 },
      { x: 7, y: 2, duration: 0.05 },
      { x: -5, y: 3, duration: 0.05 },
      { x: 4, y: -2, duration: 0.05 },
      { x: 0, y: 0, duration: 0.05 },
    ],
  })
    .to(mascot.value, {
      rotate: 540,
      scale: 0,
      y: 60,
      duration: 0.9,
      ease: "power2.in",
    })
    .to({}, { duration: 0.5 })
    .call(() => {
      gsap.set(mascot.value, { rotate: -20, scale: 0, y: -40 });
    })
    .to(mascot.value, {
      rotate: 0,
      scale: 1,
      y: 0,
      duration: 0.7,
      ease: "back.out(1.8)",
    });
}
</script>

<template>
  <section class="climax" id="climax">
    <div class="climax-frame">
      <img
        src="/assets/img/bathroom-full.webp"
        alt="a destroyed bathroom with HELLO SHITTY graffiti, toilet, sink and Shitty sitting in the mess"
        class="climax-bg"
      />

      <div class="climax-stage" ref="stage">
        <img
          ref="mascot"
          src="/assets/img/mascot.png"
          alt=""
          class="climax-mascot"
        />
      </div>
    </div>

    <button class="climax-flush" type="button" @click="doFlush" :disabled="busy">
      DO NOT FLUSH
    </button>
  </section>
</template>

<style scoped>
.climax {
  background: var(--pink-soft);
  text-align: center;
  padding: clamp(20px, 4vw, 48px) 0 clamp(40px, 6vw, 70px);
}

.climax-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 1;
  overflow: hidden;
}

.climax-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
}

.climax-stage {
  position: absolute;
  left: 50%;
  bottom: 5%;
  translate: -50% 0;
  width: 14.5%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.climax-mascot {
  width: 100%;
  position: relative;
  filter: drop-shadow(0 10px 14px rgba(0, 0, 0, 0.4));
}

.climax-flush {
  margin-top: clamp(20px, 3.5vw, 34px);
  background: var(--bow-pink);
  color: var(--white);
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 20px;
  letter-spacing: 0.04em;
  padding: 18px 40px;
  border-radius: 999px;
  border: 4px solid var(--ink);
  box-shadow: 0 8px 0 rgba(0, 0, 0, 0.3);
}

.climax-flush:active:not(:disabled) {
  transform: translateY(4px);
  box-shadow: 0 4px 0 rgba(0, 0, 0, 0.3);
}

.climax-flush:disabled {
  opacity: 0.7;
  cursor: default;
}

@media (max-width: 720px) {
  .climax-frame {
    aspect-ratio: auto;
    height: 62vh;
    min-height: 380px;
  }

  .climax-stage {
    width: 24%;
  }
}
</style>
