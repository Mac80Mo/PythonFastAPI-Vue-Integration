<template>
  <div>
    <button @click="toggleMenu" class="burger-btn">☰</button>
    
    <!-- Teleport sidebar to body to avoid stacking context issues -->
    <Teleport to="body">
      <div v-if="menuOpen" class="burger-sidebar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <!-- Weitere Links hier -->
        </ul>
        <button @click="toggleMenu" class="burger-close-btn">×</button>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const menuOpen = ref(false);
function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
</script>
