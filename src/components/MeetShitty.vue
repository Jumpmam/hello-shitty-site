<script setup>
const notes = [
  { text: "100% shitty", style: "top: 6%; left: 4%; rotate: -8deg;" },
  { text: "very cute", style: "top: 14%; right: 3%; rotate: 6deg;" },
  { text: "probably smells", style: "bottom: 16%; left: 2%; rotate: -4deg;" },
  { text: "do not eat", style: "bottom: 6%; right: 4%; rotate: 5deg;" },
];

const fragments = [
  { label: "cute ears", style: "top: 8%; left: 30%;" },
  { label: "cute bow", style: "top: 4%; right: 28%;" },
  { label: "cute smell", style: "bottom: 10%; left: 50%;" },
];
</script>

<template>
  <section class="meet section" id="meet">
    <div class="meet-tiles" aria-hidden="true"></div>

    <h2 class="meet-title display reveal">SHE'S SHITTY.</h2>

    <div class="meet-stage reveal">
      <img src="/assets/img/mascot.png" alt="Hello Shitty" class="meet-mascot" />
      <span
        v-for="(f, i) in fragments"
        :key="i"
        class="meet-fragment"
        :style="f.style"
      >{{ f.label }}</span>
    </div>

    <span
      v-for="(n, i) in notes"
      :key="i"
      class="meet-note"
      :style="n.style"
    >{{ n.text }}</span>
  </section>
</template>

<style scoped>
.meet {
  background: var(--pink);
  text-align: center;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.meet-tiles {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 253, 251, 0.35), rgba(255, 253, 251, 0.35)),
    repeating-linear-gradient(0deg, rgba(107, 66, 38, 0.08) 0 2px, transparent 2px 64px),
    repeating-linear-gradient(90deg, rgba(107, 66, 38, 0.08) 0 2px, transparent 2px 64px);
}

.meet-title {
  font-size: clamp(40px, 7vw, 88px);
  color: var(--brown-deep);
  position: relative;
  margin: 0 0 40px;
}

.meet-stage {
  position: relative;
  width: min(80vw, 420px);
}

.meet-mascot {
  width: 100%;
  position: relative;
  z-index: 2;
}

.meet-fragment {
  position: absolute;
  font-family: var(--font-hand);
  font-size: clamp(16px, 2vw, 22px);
  color: var(--bow-pink);
  font-weight: 700;
  z-index: 3;
}

.meet-note {
  position: absolute;
  font-family: var(--font-hand);
  font-size: clamp(15px, 1.8vw, 20px);
  color: var(--brown);
  opacity: 0.7;
}

@media (max-width: 640px) {
  .meet-note {
    display: none;
  }
}
</style>
