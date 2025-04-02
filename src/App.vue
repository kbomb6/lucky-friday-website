<script setup>
</script>

<template>
  <div>
    <!-- Section 1: Top Content -->
    <div class="top-content">
      <img 
        src="@/assets/Logo.png" 
        class="main-logo"
        alt="Logo"
      >
      <div class="bg-wrapper">
        <img 
          src="@/assets/svgs/main-bg.svg" 
          class="svg-overlay"
          alt="Decorative pattern"
        >
      </div>
      <div class="main-text">
        <p>Welcome to the most customizable budgeting app on the market today.</p>
        <!-- <h1>Lucky Friday</h1> -->
      </div>
      <div class="waitlist-wrapper">
        <h2 class="waitlist">Join The Waitlist</h2>
        <div class="form-wrapper">
          <form>
            <fieldset>
              <div class="names">
                <div>
                  <label for="question1">First Name</label>
                  <input required type="text" class="input" />
                </div>
                <div>
                  <label for="question1">Last Name </label>
                  <input required type="text" class="input" />
                </div>
              </div>
              <div>
                <label for="email">Email</label>
                <input required type="email" class="input">
              </div>
            </fieldset>
            <div>
              <button class="submit-button" type="submit">
                Claim My Spot
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Section 2: App Showcase -->
    <!-- <div class="section-two">
      <h2 class="headline">The App</h2>
      <div class="svg-bg-text-container">
        <h2>150 + Beta user waitlist</h2>
      </div>
      <div class="screenshot-container">
        <div class="column-1">
          <img src="@/assets/screenshots/budget.png" alt="app screenshot">
        </div>
        <div class="column-2">
          <img src="@/assets/screenshots/rules.png" alt="app screenshot">
        </div>
        <div class="column-3"><img src="@/assets/screenshots/rules.png" alt="app screenshot"></div>
        <div class="column-4"><img src="@/assets/screenshots/rules.png" alt="app screenshot"></div>
        <div class="column-5">
          <div class="pill-content">Manual or automatic autocategorization rules</div>
          <div class="pill-content">User defined icons and colors</div>
          <div class="pill-content">Monthly or Annual budgets for 3 years</div>
          <div class="pill-content">Custom Titles and descriptions </div>
        </div>
      </div>
    </div> -->

    <!-- Section 2: App Showcase -->
    <!-- <div class="section-three">
      <h2 class="waitlist">Join the waitlist</h2>
      <div class="form-wrapper">
        <form>
          <fieldset>
            <div class="names">
              <div>
                <label for="question1">First </label>
                <input type="text" class="input" />
              </div>
              <div>
                <label for="question1">First </label>
                <input type="text" class="input" />
              </div>
            </div>
            <div>
              <label for="email">Email</label>
              <input type="email" class="input">
            </div>
          </fieldset>
        </form>
      </div>
    </div> -->

  </div>
</template>

<style scoped>

.top-content {
  height: 100vh;
  background: #004751;
  /* color: #bbff16; */
  color: #48ffcd;
  overflow: hidden;
  position: relative;
}

.waitlist-wrapper {
  position: relative;
  z-index: 3;
  margin-top: 5em;
}

.bg-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 110vw;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 1;
}

.svg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 110%;
  height: 130%;
  object-fit: cover;
  pointer-events: none;
  object-position: left;
  opacity: 0.5;
}

.main-text {
  z-index: 3;
  position: relative;
  font-weight: bold;
}

.main-logo {
  /* position: absolute;
  top: 0;
  right: 0; */
  max-width: 300px;
  z-index: 3;
}

.section-two {
  height: 100vh;
  position: relative;
  overflow: hidden;
  z-index: 2;
}

.svg-bg-text-container {
  background: url('@/assets/svgs/splotch.svg') no-repeat center center;
  background-size: contain;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25rem;
  height: 25rem;
  margin-left: 1em;
  position: absolute;
  top: -70px;
  z-index: 2;
}

.screenshot-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* width: 100vw;
  max-width: 100%; */
  box-sizing: border-box;
  padding-bottom: 2em;
  gap: 1em;
  margin: 150px 4em 3em 4em;
}

.screenshot-container img {
  max-width: 80%;
  max-height: 80%;
  height: auto;
  display: block;
}

.top-content h1 {
  font-size: 7rem;
  margin-top: 0.5em;
}

.main-text p {
  font-size: 1.5rem;
}

.headline {
  margin: 0 auto;
  font-size: 5rem;
  max-width: 500px;
  color: #1954b6;
  padding-top: 0.5em;
  position: relative;
  z-index: 3;
}

.svg-bg-text-container h2 {
  color: #29f29b;
  font-size: 2rem;
  max-width: 200px;
  position: relative;
  z-index: 3;
}

.column-5 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 80%;
}

.pill-content {
  color: #bbff16;
  background: #004751;
  padding: 2em 1em;
  border-radius: 50px;
  font-weight: bold;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.section-three {
  height: 100vh;
  background: #1954b6;
}

.waitlist {
  margin: 0 auto;
  font-size: 5rem;
  color: #1954b6;
  padding-top: 0.5em;
  color: #ffffff;
}

.names {
  display: flex;
  margin-top: 1em;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
  gap: 1em;
}

.form-wrapper {
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
}

label {
  color: #ffffff;
  font-weight: bold;
}

.submit-button {
  width: 100%;
  background: #48ffcd;
  border-radius: 30px;
  padding: 1em;
  margin-top: 3em;
  color: #004751;
  font-weight: bold;
  letter-spacing: 0.5px;
}
</style>