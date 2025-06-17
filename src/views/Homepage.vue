<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
function getDelay(index) {
  const randomDelay = Math.random() * 1.2 + 0.1;
  return `animation-delay: ${randomDelay}s`;
}
</script>

<template>
    <div>
        <div class="half-section teal-background circle-gradient">
            <div class="half-section top-section">
                <!-- <h1 class="headline">Welcome to the most customizable budgeting app</h1> -->
                <!-- <h1 class="headline">Your budget. Your way.</h1> -->
                 <h1 class="headline">
                    <span v-for="(char, index) in 'LUCKY FRIDAY'" :key="index" class="letter" :style="getDelay(index)">
                        {{ char }}
                    </span>
                </h1>
                <img src="../assets/darklogo.png" class="logo-mtn"/>
            </div>
        </div>
        <div class="half-section dark-section">
            Homepage
        </div>
    </div>
</template>

<style scoped>
.section {
    height: 100vh;
}

.half-section {
    height: 50vh;
}

.teal-background {
    background-color: #004751;
}

.dark-section {
    background-color: #171e29;
}

.circle-gradient {
    background: radial-gradient(
    circle at 50% 0%,
    #004751 20%,
    #171e29 80%
  );
}

.top-section {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 100%;
  position: relative;
  z-index: 1;
}

.top-section img {
  width: 50%;
  z-index: 3;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  z-index: 1;
}

.headline-container {
  z-index: 2;
  position: relative;
  display: flex;
  gap: 2em;
}

.headline {
  color: white;
  font-family: 'Codystar', sans-serif;
  font-size: clamp(2.5rem, 8vw, 6rem);
  color: #48ffcd;
  text-align: center;
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: 10px;
  z-index: 2;
}

.letter {
  opacity: 0;
  animation: fadeInGlow 1.4s forwards ease-out;
}

@keyframes fadeInGlow {
  0% {
    opacity: 0;
    filter: blur(4px);
    text-shadow: none;
    transform: translateY(10px);
  }
  70% {
    opacity: 1;
    filter: blur(0px);
    text-shadow: 0 0 10px #48ffcd, 0 0 20px #004751;
    transform: translateY(0);
  }
  100% {
    text-shadow: 0 0 6px #48ffcd;
    opacity: 1;
    filter: none;
    text-shadow: none;
  }
}
</style>