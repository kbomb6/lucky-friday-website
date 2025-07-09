import { createRouter, createWebHistory } from 'vue-router';
import PitchDeck from '../views/PitchDeck.vue';
import OnePage from '../views/OnePage.vue';
import Demo from '../views/Demo.vue';
import Signup from '../views/Signup.vue'
import Homepage from '../views/Homepage.vue'
import Support from '../views/Support.vue'
import Features from '../views/Features.vue'
import Pricing from '../views/Pricing.vue'
import Security from '../views/Security.vue'

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
  },
  {
    path: '/support',
    name: 'support',
    component: Support,
  },
  {
    path: '/features',
    name: 'features',
    component: Features,
  },
  {
    path: '/security',
    name: 'security',
    component: Security
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: Pricing
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
