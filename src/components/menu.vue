<template>
  <header class="site-header">
    <nav class="nav-left">
      <button class="transparent-button button"  @click="scrollTo('features')">Features</button>
      <button class="transparent-button button"  @click="scrollTo('pricing')">Pricing</button>
      <button class="transparent-button button"  @click="scrollTo('security')">Security</button>
      <button class="transparent-button button"  @click="scrollTo('support')">Support</button>
    </nav>
    <button class="button teal-button" @click="goToLogin">Log In</button>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

function goToLogin() {
    window.location.href = 'https://www.luckyfridayapp.com'
}
</script>

<style scoped>
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
  font-family: 'Josefin Sans'
}

.nav-left {
  display: flex;
  gap: 0.5rem;
}

.nav-left a,
.login-button {
  letter-spacing: 2px;
  transition: opacity 0.3s ease;
  border-radius: 8px;
  padding: 0.5em 1em;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  transition: border-color 0.25s;
  background-color: transparent;
  color: white;
  text-decoration: none;
  line-height: 1;
  border: 1px solid transparent;
  box-sizing: border-box;
  font-family: 'Josefin Sans'
}

.nav-left a:hover {
    border: 1px solid #0a52d8;
}

.login-button {
    background: #137b89;
    color: white;
    border: none;
}

.nav-left a:hover,
.login-button:hover {
  opacity: 0.75;
}


</style>