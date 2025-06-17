import { createRouter, createWebHistory } from 'vue-router';
import PitchDeck from '../views/PitchDeck.vue';
import OnePage from '../views/OnePage.vue';
import Demo from '../views/Demo.vue';
import Signup from '../views/Signup.vue'
import Homepage from '../views/Homepage.vue'

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
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
  },
  {
    path: '/',
    name: 'homepage',
    component: Homepage,
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
