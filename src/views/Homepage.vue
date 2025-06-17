<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
function getDelay(index) {
  const fadeInDelay = (Math.random() * 1.2 + 0.1).toFixed(2); // 0.1s – 1.3s
  const glowDelay = (Math.random() * 3).toFixed(2); // 0s – 3s
  const glowDuration = (Math.random() * 2 + 3).toFixed(2); // 3s – 5s
  return `animation-delay: ${fadeInDelay}s, ${glowDelay}s; animation-duration: 1.4s, ${glowDuration}s;`;
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
        <div class="half-section dark-section p-2">
            <div class="overview-card dark-overview-card light-grey-text">
                Test
            </div>
        </div>
    </div>
</template>

<style scoped>

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
  animation: fadeInGlow 1.4s forwards ease-out,
  softGlow 3s ease-in-out infinite alternate;
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

@keyframes softGlow {
  0% {
    opacity: 70%;
  }
  100% {
    opacity: 100%;
  }
}
</style>