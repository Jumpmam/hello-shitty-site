<script setup>
import { ref } from "vue";
import gsap from "gsap";

const stage = ref(null);
const mascot = ref(null);
const message = ref(null);
const flushed = ref(false);
const returned = ref(false);
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
  flushed.value = false;
  returned.value = false;

  flushSound();

  const tl = gsap.timeline({
    onComplete: () => {
      busy.value = false;
    },
  });

  tl.to(stage.value, {
    keyframes: [
      { x: -6, y: -3, duration: 0.05 },
      { x: 7, y: 2, duration: 0.05 },
      { x: -5, y: 3, duration: 0.05 },
      { x: 4, y: -2, duration: 0.05 },
      { x: 0, y: 0, duration: 0.05 },
    ],
  })
    .to(
      mascot.value,
      {
        rotate: 540,
        scale: 0,
        y: 60,
        duration: 0.9,
        ease: "power2.in",
      },
      "<"
    )
    .call(() => {
      flushed.value = true;
    })
    .to({}, { duration: 1.1 })
    .call(() => {
      flushed.value = false;
      returned.value = true;
      gsap.set(mascot.value, { rotate: -20, scale: 0, y: -40 });
      gsap.to(mascot.value, {
        rotate: 0,
        scale: 1,
        y: 0,
        duration: 0.7,
        ease: "back.out(1.8)",
      });
    })
    .to({}, { duration: 1.4 })
    .call(() => {
      returned.value = false;
    });
}
</script>

<template>
  <section class="climax section" id="climax">
    <img
      src="/assets/img/bathroom-walls.webp"
      alt=""
      class="climax-walls"
      aria-hidden="true"
    />

    <p class="eyebrow climax-eyebrow reveal">06 / the climax</p>
    <h2 class="climax-title display reveal">THE BATHROOM</h2>

    <div class="climax-stage" ref="stage">
      <div class="climax-floor" aria-hidden="true"></div>

      <img
        ref="mascot"
        src="/assets/img/mascot.png"
        alt="Hello Shitty on the bathroom floor"
        class="climax-mascot"
      />

      <transition name="pop">
        <p v-if="flushed" ref="message" class="climax-message climax-message--flushed">
          WTF<br /><span>you flushed shitty</span>
        </p>
      </transition>
      <transition name="pop">
        <p v-if="returned" class="climax-message climax-message--back">
          she came back
        </p>
      </transition>
    </div>

    <button class="climax-flush" type="button" @click="doFlush" :disabled="busy">
      DO NOT FLUSH
    </button>
    <p class="climax-hint">(you know you want to)</p>
  </section>
</template>

<style scoped>
.climax {
  background: #7a8a3a;
  text-align: center;
  padding-top: 0;
  color: var(--cream);
}

.climax-walls {
  width: 100%;
  display: block;
}

.climax-eyebrow {
  margin-top: 40px;
  color: var(--nose-yellow);
  opacity: 0.9;
}

.climax-title {
  font-family: var(--font-graffiti);
  font-weight: 400;
  font-size: clamp(32px, 6vw, 62px);
  color: var(--cream);
  text-shadow: 0 3px 0 rgba(0, 0, 0, 0.25);
  margin: 4px 0 30px;
}

.climax-stage {
  position: relative;
  width: min(90vw, 420px);
  height: 260px;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.climax-floor {
  position: absolute;
  bottom: 0;
  left: 50%;
  translate: -50% 0;
  width: 220px;
  height: 40px;
  background: radial-gradient(closest-side, rgba(63, 39, 23, 0.4), transparent 70%);
  border-radius: 50%;
}

.climax-mascot {
  width: 180px;
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 12px 16px rgba(0, 0, 0, 0.3));
}

.climax-message {
  position: absolute;
  top: 10%;
  left: 50%;
  translate: -50% 0;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 34px;
  color: var(--white);
  text-shadow: 0 3px 0 rgba(0, 0, 0, 0.3);
  margin: 0;
}

.climax-message--flushed span {
  display: block;
  font-family: var(--font-hand);
  font-size: 20px;
  font-weight: 400;
}

.climax-message--back {
  color: var(--nose-yellow);
  font-size: 26px;
}

.pop-enter-active {
  transition: all 0.3s var(--ease-soft);
}

.pop-enter-from {
  opacity: 0;
  scale: 0.6;
}

.climax-flush {
  margin-top: 34px;
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

.climax-hint {
  font-family: var(--font-hand);
  font-size: 16px;
  margin-top: 10px;
  opacity: 0.8;
}
</style>
