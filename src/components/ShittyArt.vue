<script setup></script>

<template>
  <section class="art section" id="art">
    <div class="art-frame reveal">
      <img src="/assets/img/shitty-is-art.webp" alt="Hello Shitty, framed painting" loading="lazy" />
    </div>

    <h2 class="art-title display reveal">SHITTY IS ART</h2>
    <p class="art-sub reveal">some shit belongs in a toilet.<br />some belongs in a museum.</p>
  </section>
</template>

<style scoped>
.art {
  background: var(--white);
  text-align: center;
}

.art-frame {
  max-width: 840px;
  margin: 0 auto clamp(24px, 4vw, 40px);
}

.art-frame img {
  width: 100%;
  display: block;
  border-radius: 4px;
}

.art-title {
  font-size: clamp(34px, 6vw, 64px);
  color: var(--brown-deep);
  margin: 0 0 12px;
}

.art-sub {
  font-family: var(--font-hand);
  font-size: clamp(18px, 2.2vw, 24px);
  color: var(--brown);
  opacity: 0.85;
  margin: 0;
}
</style>
