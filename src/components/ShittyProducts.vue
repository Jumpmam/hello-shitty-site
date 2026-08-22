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
    <p class="eyebrow reveal">05 / the product line</p>
    <h2 class="products-title display reveal">SHITTY IS EVERYWHERE</h2>

    <div class="products-hero reveal">
      <img src="/assets/img/diapers-product.webp" alt="Hello Shitty diapers, the cutest way to deal with it" loading="lazy" />
    </div>

    <div class="products-row">
      <div class="products-card reveal" v-for="p in lineup" :key="p.name">
        <p class="products-card-name">{{ p.name }}</p>
        <p class="products-card-note">{{ p.note }}</p>
        <span class="products-card-tag">not for sale (yet)</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.products {
  background: var(--cream);
  text-align: center;
}

.products-title {
  font-size: clamp(30px, 5.5vw, 56px);
  color: var(--brown-deep);
  margin: 0 0 44px;
}

.products-hero {
  max-width: 620px;
  margin: 0 auto 48px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 24px 50px rgba(107, 66, 38, 0.18);
}

.products-hero img {
  width: 100%;
}

.products-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  max-width: 980px;
  margin: 0 auto;
}

.products-card {
  background: var(--white);
  border: 2px solid var(--brown);
  border-radius: 18px;
  padding: 18px 20px;
  min-width: 160px;
  text-align: left;
}

.products-card-name {
  font-family: var(--font-display);
  font-weight: 700;
  color: var(--brown-deep);
  margin: 0 0 4px;
  text-transform: capitalize;
}

.products-card-note {
  font-size: 13px;
  color: var(--brown);
  opacity: 0.75;
  margin: 0 0 10px;
}

.products-card-tag {
  font-family: var(--font-hand);
  font-size: 14px;
  color: var(--bow-pink);
}
</style>
