<template>
  <footer class="app-footer" role="contentinfo">
    <div class="footer-inner">
      <span class="footer-copy">© {{ currentYear }}</span>
      <a class="footer-link" :href="imprintHref">{{ t('footer.impressum') }}</a>
    </div>
  </footer>
</template>

<script setup>
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()

const currentYear = new Date().getFullYear()
const imprintHref = '/impressum'
</script>
