import { createRouter, createWebHistory } from 'vue-router';
// const Pitchdeck = () => import('@/views/PitchDeck.vue')
import PitchDeck from '../views/PitchDeck.vue';
// const OnePage = () => import('@/views/OnePage.vue')
import OnePage from '../views/OnePage.vue';
// const Demo = () => import('@/views/Demo.vue')
import Demo from '../views/Demo.vue';

const routes = [
  {
    path: '/pitchdeck',
    name: 'pitchdeck',
    component: PitchDeck,
  },
  {
    path: '/onepage',
    name: 'onepage',
    component: OnePage,
  },
  {
    path: '/demo',
    name: 'demo',
    component: Demo,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
