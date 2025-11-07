<template>
  <nav class="navbar">
    <div class="navbar-left">
      <BurgerMenu />
    </div>
    <div class="navbar-right">
      <button class="theme-toggle" @click="toggleTheme">
        {{ theme === 'light' ? '🌙' : '☀️' }}
      </button>
    </div>
  </nav>
</template>

<script setup>
import BurgerMenu from './BurgerMenu.vue'
import { useTheme } from '@/composables/useTheme'

const { theme, toggleTheme } = useTheme()
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  background: transparent; /* transparent navbar */
  z-index: 2000; /* high level, below button-specific z-index */
  pointer-events: none; /* make container transparent for clicks; enable for children */
}
.navbar-left, .navbar-right {
  pointer-events: auto; /* allow clicks inside */
  display: flex;
  align-items: center;
}
.theme-toggle {
  background: transparent;
  border: 1px solid var(--color-text-secondary);
  color: var(--color-text-primary);
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 4px;
}
.theme-toggle:hover {
  background: var(--color-text-secondary);
  color: var(--color-bg);
}
</style>