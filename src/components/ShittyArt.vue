<script setup></script>

<template>
  <section class="art section" id="art">
    <p class="eyebrow art-eyebrow reveal">04 / the gallery</p>
    <h2 class="art-title display reveal">SHITTY IS ART</h2>

    <div class="art-frame reveal">
      <img src="/assets/img/shitty-is-art.webp" alt="Hello Shitty, oil on canvas, priceless" loading="lazy" />
    </div>

    <div class="art-plaque reveal">
      <p class="art-plaque-title">HELLO SHITTY</p>
      <p class="art-plaque-meta">Unknown Artist &middot; 2026</p>
      <p class="art-plaque-value">estimated value: priceless</p>
    </div>
  </section>
</template>

<style scoped>
.art {
  background: linear-gradient(180deg, #241811 0%, #17100c 100%);
  text-align: center;
  color: var(--cream);
}

.art-eyebrow {
  color: var(--nose-yellow);
  opacity: 0.85;
}

.art-title {
  font-size: clamp(34px, 5.5vw, 58px);
  color: var(--cream);
  margin: 0 0 40px;
}

.art-frame {
  max-width: 680px;
  margin: 0 auto;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.55);
}

.art-frame img {
  width: 100%;
}

.art-plaque {
  margin: 32px auto 0;
  max-width: 420px;
  border-top: 2px solid rgba(246, 204, 77, 0.35);
  padding-top: 18px;
}

.art-plaque-title {
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: 0.08em;
  font-size: 15px;
  margin: 0 0 4px;
  color: var(--nose-yellow);
}

.art-plaque-meta {
  font-size: 14px;
  opacity: 0.7;
  margin: 0 0 10px;
}

.art-plaque-value {
  font-family: var(--font-hand);
  font-size: 20px;
  color: var(--cream);
  margin: 0;
}
</style>
