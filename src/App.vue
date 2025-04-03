<script setup>
import { ref } from 'vue'

const formData = ref({
  firstName: '',
  lastName: '',
  email: ''
})

const isLoading = ref(false)
const isSuccess = ref(false)
const errorMessage = ref('')

const resetForm = ()=> {
  isSuccess.value = false;
  formData.value = { firstName: '', lastName: '', email: '' };
}

const joinWaitlist = async () => {
  isLoading.value = true;
  errorMessage.value = '';

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'service_zwwdg6c',
        template_id: 'template_jmw65r8',
        user_id: '9F-ZdlgrgAfWad2lO',
        template_params: {
          to_email: 'bauman.kellyk@gmail.com',
          name: formData.value.firstName + ' ' + formData.value.lastName,
          email: formData.value.email,
          date: new Date().toLocaleString()
        }
      })
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    isSuccess.value = true;
    
  } catch (error) {
    errorMessage.value = 'There was an error submitting your form. Please try again.';
    console.error('Submission error:', error);
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <div class="main-bg">
    <div class="top-content">
      <img
      src="/Users/work/lucky-friday-website/src/assets/Lucky Friday Bright Icon.png"
      class="main-logo"
      alt="logo">
      <!-- <div class="bg-wrapper">
        <img 
          src="@/assets/svgs/main-bg.svg" 
          class="svg-overlay"
          alt="Decorative pattern"
        >
      </div> -->
      <div class="main-text">
        <p>Welcome to Lucky Friday, the most customizable budgeting app on the market today.</p>
      </div>
      <div v-if="isSuccess" class="success-message">
        <h3 class="success-heading">Spot Claimed! 🎉</h3>
        <div class="success-content">
          <p>You're now in line for early access to <strong>Lucky Friday</strong>.</p>
          <p>We'll email <span class="highlight">{{ formData.email }}</span> when it's your turn to join.</p>
        </div>
        <button 
          class="submit-button success-button"
          @click="resetForm"
        >
          Got it!
        </button>
      </div>
      <div v-else class="waitlist-wrapper">
        <h2 class="waitlist">Join The Waitlist</h2>
        <div class="form-wrapper">
          <form @submit.prevent="joinWaitlist">
            <fieldset>
              <div class="names">
                <div>
                  <label for="question1">First Name</label>
                  <input v-model="formData.firstName" required type="text" class="input" />
                </div>
                <div>
                  <label for="question1">Last Name </label>
                  <input v-model="formData.lastName" required type="text" class="input" />
                </div>
              </div>
              <div>
                <label for="email">Email</label>
                <input v-model="formData.email" required type="email" class="input">
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

  </div>
</template>

<style scoped>

.main-bg {
  background-image: url('/src/assets/bluebg.png');
background-size: cover;
background-position: center;
background-repeat: no-repeat;
}

.top-content {
  min-height: 100dvh;
  overflow: auto;
  color: #48ffcd;
  overflow: hidden;
  position: relative;
  padding: 0 2em;
}

.waitlist-wrapper {
  position: relative;
  z-index: 3;
  margin-top: 5em;

  @media only screen 
    and (max-width: 375px) 
    and (max-height: 667px) {
    margin-top: 2em;
    padding-left: 1em;
  }
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
  margin-top: 2em;
  max-width: 150px;
  z-index: 5;
  position: relative;
}

.section-two {
  height: 100dvh;
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
  height: 100dvh;
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

.success-message {
  position: relative;
  z-index: 3;
  color: #ffffff;
  margin-top: 5em;
}

.success-message button {
  width: auto;
}

.main-text p {
  font-size: clamp(1rem, 3vw, 1.5rem);
}

.waitlist {
  font-size: clamp(2rem, 6vw, 5rem);
}
</style>