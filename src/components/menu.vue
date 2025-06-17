<template>
  <header class="site-header">
    <nav class="nav-left">
      <RouterLink to="/pitchdeck" class="transparent-button">Pitch Deck</RouterLink>
      <RouterLink to="/demo" class="transparent-button">Demo</RouterLink>
      <RouterLink to="/onepage" class="transparent-button">One Page</RouterLink>
    </nav>
    <RouterLink to="/login" class="login-button">Log In</RouterLink>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
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
  font-family: 'League Spartan', sans-serif;
}

.nav-left {
  display: flex;
  gap: 0.5rem;
}

.nav-left a,
.login-button {
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: opacity 0.3s ease;
  border-radius: 8px;
  padding: 0.5em 1em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  background-color: transparent;
  color: white;
  text-decoration: none;
  line-height: 1;
  border: 1px solid transparent;
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