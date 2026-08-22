<script setup>
const lineup = [
  { name: "toilet paper", note: "extra soft, obviously" },
  { name: "wet wipes", note: "for emergencies" },
  { name: "eau de shitty", note: "a fragrance" },
  { name: "plush shitty", note: "huggable, allegedly" },
  { name: "shitty soap", note: "does not help" },
];
</script>

<template>
  <section class="products section" id="products">
    <div class="products-hero reveal">
      <img src="/assets/img/diapers-product.webp" alt="Hello Shitty diapers" loading="lazy" />
    </div>

    <h2 class="products-title display reveal">SHITTY IS MAIN FACE OF PAPER</h2>
    <p class="products-sub reveal">96 pieces of pure innovation.</p>

    <div class="products-row">
      <div class="products-item reveal" v-for="p in lineup" :key="p.name">
        <p class="products-item-name">{{ p.name }}</p>
        <p class="products-item-note">{{ p.note }} &middot; not for sale (yet)</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.products {
  background: var(--cream);
  text-align: center;
}

.products-hero {
  width: min(50vw, 640px);
  margin: 0 auto clamp(28px, 4vw, 44px);
  filter: drop-shadow(0 30px 60px rgba(107, 66, 38, 0.22));
}

.products-hero img {
  width: 100%;
  display: block;
}

.products-title {
  font-size: clamp(28px, 4.6vw, 48px);
  color: var(--brown-deep);
  margin: 0 0 10px;
  max-width: 720px;
  margin-inline: auto;
}

.products-sub {
  font-family: var(--font-hand);
  font-size: clamp(18px, 2vw, 22px);
  color: var(--brown);
  opacity: 0.85;
  margin: 0 0 56px;
}

.products-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 28px;
  justify-content: center;
  max-width: 820px;
  margin: 0 auto;
}

.products-item {
  text-align: left;
}

.products-item-name {
  font-family: var(--font-display);
  font-weight: 700;
  color: var(--brown-deep);
  margin: 0;
  text-transform: capitalize;
}

.products-item-note {
  font-size: 13px;
  color: var(--brown);
  opacity: 0.6;
  margin: 2px 0 0;
}

@media (max-width: 720px) {
  .products-hero {
    width: 76vw;
  }
}
</style>
