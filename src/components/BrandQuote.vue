<script setup>
defineProps({
  text: { type: String, required: true },
  tone: { type: String, default: "brown" },
  size: { type: String, default: "md" },
});
</script>

<template>
  <p class="quote reveal" :class="[`quote--${tone}`, `quote--${size}`]">
    &ldquo;{{ text }}&rdquo;
  </p>
</template>

<style scoped>
.quote {
  font-family: var(--font-hand);
  text-align: center;
  max-width: 620px;
  margin: 0 auto;
  padding: clamp(28px, 5vw, 56px) 24px;
}

.quote--sm {
  font-size: clamp(18px, 2.2vw, 24px);
}

.quote--md {
  font-size: clamp(22px, 2.8vw, 32px);
}

.quote--lg {
  font-size: clamp(26px, 3.4vw, 40px);
}

.quote--brown {
  color: var(--brown);
  background: var(--pink-soft);
}

.quote--pink {
  color: var(--bow-pink);
  background: var(--white);
}

.quote--cream {
  color: var(--cream);
  background: var(--brown-deep);
}
</style>
