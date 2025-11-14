<template>
  <nav class="navbar">
    <div class="navbar-left">
      <BurgerMenu />
    </div>
    <div class="navbar-right">
      <button class="language-toggle" @click="toggleLocale" aria-label="Sprache wechseln">
        {{ locale === 'de' ? '🇩🇪' : '🇬🇧' }}
      </button>
      <button class="theme-toggle" @click="toggleTheme">
        {{ theme === 'light' ? '🌙' : '☀️' }}
      </button>
    </div>
  </nav>
</template>

<script setup>
import BurgerMenu from './BurgerMenu.vue'
import { useTheme } from '@/composables/useTheme'
import { useLocale } from '@/composables/useLocale'

const { theme, toggleTheme } = useTheme()
const { locale, toggleLocale } = useLocale()
</script>