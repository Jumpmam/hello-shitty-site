<script setup>
const facts = [
  { k: "SPECIES", v: "shitty" },
  { k: "PERSONALITY", v: "cute" },
  { k: "SMELL", v: "yes" },
  { k: "IQ", v: "probably 3" },
  { k: "FAVORITE PLACE", v: "your bathroom" },
  { k: "MARKET CAP", v: "hopefully stupid" },
];
</script>

<template>
  <section class="facts section" id="facts">
    <h2 class="facts-title display reveal">official documentation</h2>

    <div class="facts-grid">
      <div class="fact-card reveal" v-for="f in facts" :key="f.k">
        <p class="fact-k">{{ f.k }}</p>
        <p class="fact-v">{{ f.v }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.facts {
  background: var(--pink-soft);
  text-align: center;
}

.facts-title {
  font-size: clamp(30px, 5vw, 52px);
  color: var(--brown-deep);
  margin: 0 0 44px;
}

.facts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 18px;
  max-width: 980px;
  margin: 0 auto;
}

.fact-card {
  background: var(--white);
  border: 3px solid var(--ink);
  border-radius: 20px;
  padding: 24px 18px;
  box-shadow: 0 6px 0 rgba(27, 20, 15, 0.12);
  transition: transform 0.25s var(--ease-soft);
}

.fact-card:hover {
  transform: rotate(-2deg) translateY(-4px);
}

.fact-card:nth-child(even):hover {
  transform: rotate(2deg) translateY(-4px);
}

.fact-k {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.06em;
  color: var(--bow-pink);
  margin: 0 0 8px;
}

.fact-v {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(18px, 2.2vw, 24px);
  color: var(--brown-deep);
  margin: 0;
}
</style>
