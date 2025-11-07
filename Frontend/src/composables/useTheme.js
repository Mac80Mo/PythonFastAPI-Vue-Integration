import { ref, onMounted } from "vue";

export function useTheme() {
  const theme = ref("light");

  const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
    localStorage.setItem("theme", theme.value);
    applyTheme();
  };

  const applyTheme = () => {
    const body = document.body;
    body.classList.remove("theme-light", "theme-dark");
    body.classList.add(`theme-${theme.value}`);
  };

  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme;
    }
    return "light";
  };

  onMounted(() => {
    theme.value = getInitialTheme();
    applyTheme();
  });

  return {
    theme,
    toggleTheme,
  };
}
