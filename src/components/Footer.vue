<script setup>
import { CONFIG } from "../config.js";
</script>

<template>
  <footer class="footer">
    <img src="/assets/img/mascot.png" alt="Hello Shitty" class="footer-mascot" />
    <p class="footer-name display">hello shitty</p>
    <p class="footer-ticker">{{ CONFIG.ticker }}</p>
    <p class="footer-note">made with love and questionable decisions.</p>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--pink-soft);
  text-align: center;
  padding: 40px 20px 90px;
  position: relative;
  overflow: hidden;
}

.footer-mascot {
  width: 90px;
  margin: 0 auto 14px;
}

.footer-name {
  font-size: 22px;
  color: var(--brown-deep);
  margin: 0;
}

.footer-ticker {
  color: var(--bow-pink);
  font-weight: 700;
  margin: 4px 0 10px;
}

.footer-note {
  font-family: var(--font-hand);
  font-size: 16px;
  color: var(--brown);
  opacity: 0.7;
  margin: 0;
}
</style>
