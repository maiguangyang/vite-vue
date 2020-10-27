import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'

export default function (type) {
  const routerHistory = type === 'client' ? createWebHistory() : createMemoryHistory();

  return createRouter({
    history: routerHistory,
    routes: [
      { path: '/', component: () => import("./views/Home.vue"), props: true },
    ]
  });
}