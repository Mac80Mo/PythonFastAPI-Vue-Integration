import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // Beispielroute
  // { path: '/', component: () => import('../views/Home.vue') }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
