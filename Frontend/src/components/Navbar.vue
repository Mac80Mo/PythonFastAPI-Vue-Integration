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