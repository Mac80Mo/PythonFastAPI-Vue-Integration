<template>
  <div>
    <button @click="toggleTheme" style="position:fixed;top:1rem;right:1rem;z-index:1000;">
      {{ theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode' }}
    </button>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      theme: 'light'
    }
  },
  mounted() {
    // Theme aus localStorage laden
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      this.theme = savedTheme;
    }
    this.applyTheme();
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', this.theme);
      this.applyTheme();
    },
    applyTheme() {
      const body = document.body;
      body.classList.remove('theme-light', 'theme-dark');
      body.classList.add(`theme-${this.theme}`);
    }
  }
}
</script>
