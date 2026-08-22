<script setup>
import { CONFIG } from "../config.js";
</script>

<template>
  <section class="cult section" id="cult">
    <p class="cult-line display reveal">MILLIONS OF PEOPLE SHIT EVERY DAY.</p>
    <p class="cult-line cult-line--pink display reveal">ONLY ONE IS SHITTY.</p>

    <p class="cult-sub reveal">join the movement</p>

    <div class="cult-ctas reveal">
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
        FOLLOW SHITTY
      </a>
    </div>
  </section>
</template>

<style scoped>
.cult {
  background: var(--brown-deep);
  color: var(--cream);
  text-align: center;
}

.cult-line {
  font-size: clamp(28px, 6vw, 56px);
  margin: 0;
  color: var(--cream);
}

.cult-line--pink {
  color: var(--bow-pink);
  margin-bottom: 30px;
}

.cult-sub {
  font-family: var(--font-hand);
  font-size: 22px;
  opacity: 0.85;
  margin: 0 0 22px;
}

.cult-ctas {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}

.cult .btn--outline {
  border-color: var(--cream);
  color: var(--cream);
}
</style>
