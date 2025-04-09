import { createRouter, createWebHashHistory } from 'vue-router';
import PitchDeck from '../views/PitchDeck.vue';
import OnePage from '../views/OnePage.vue';
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
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
