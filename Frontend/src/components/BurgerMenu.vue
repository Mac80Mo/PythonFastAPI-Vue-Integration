<template>
  <div>
    <button @click="toggleMenu" class="burger-btn" :aria-expanded="menuOpen" aria-label="Menü öffnen">☰</button>

    <!-- Teleport sidebar to body to avoid stacking context issues -->
    <Teleport to="body">
      <div v-if="menuOpen" class="burger-sidebar" role="dialog" aria-modal="true">
        <ul>
          <li><router-link @click.native="toggleMenu" to="/">{{ t('nav.home') }}</router-link></li>
          <li><router-link @click.native="toggleMenu" to="/about">{{ t('nav.about') }}</router-link></li>
          <li><router-link @click.native="toggleMenu" to="/contact">{{ t('nav.contact') }}</router-link></li>
          <!-- Weitere Links hier -->
        </ul>
        <button @click="toggleMenu" class="burger-close-btn" aria-label="Schließen">×</button>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLocale } from '@/composables/useLocale'

const menuOpen = ref(false)
function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

const { t } = useLocale()
</script>
