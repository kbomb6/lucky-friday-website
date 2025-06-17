<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'

</script>

<template>
    <div>
        <div class="half-section teal-background circle-gradient">
            <div class="half-section top-section">
                <!-- <h1 class="headline">Welcome to the most customizable budgeting app</h1> -->
                <!-- <h1 class="headline">Your budget. Your way.</h1> -->
                 <div class="headline-container">
                    <h1 class="headline">Lucky</h1>
                    <h1 class="headline">Friday</h1>
                 </div>
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
}

.headline {
  color: white;
  /* font-family: 'League Spartan', sans-serif; */
  font-family: 'Codystar', sans-serif;
  font-size: clamp(2.5rem, 8vw, 6rem);
  color: #48ffcd;
  /* color: #005864; */
  text-align: center;
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: 10px;
}
</style>