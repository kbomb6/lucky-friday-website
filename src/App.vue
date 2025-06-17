<template>
  <div id="app">
    <SiteHeader></SiteHeader>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import SiteHeader from './components/menu.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400&display=swap');

body {
  margin: 0;
  font-family: 'Lora', serif;
  background-color: #000;
  color: #fff;
}

* {
  box-sizing: border-box;
}
</style>