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

  console.log('Env Vars :', {
  user: import.meta.env.VITE_EMAILJS_USER_ID,
  service: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  template: import.meta.env.VITE_EMAILJS_TEMPLATE_ID
})

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        user_id: import.meta.env.VITE_EMAILJS_USER_ID,
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
  color: #48ffcd;
  overflow: hidden;
  position: relative;
  padding: 0 1em;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  height: 100dvh;
  overflow: auto;
}

.waitlist-wrapper {
  position: relative;
  margin-top: 2em;
  padding: 0 0.5em;
}

.main-text {
  position: relative;
  font-weight: bold;
}

.main-logo {
  margin-top: 1em;
  max-width: 120px;
  z-index: 5;
  position: relative;
}

.names {
  display: flex;
  flex-direction: column;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  gap: 0.5em;
}

.form-wrapper {
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0 0.5em;
}

label {
  color: #ffffff;
  font-weight: bold;
}

.submit-button {
  width: 100%;
  background: #48ffcd;
  border-radius: 30px;
  padding: 0.75em;
  margin-top: 1.5em;
  color: #004751;
  font-weight: bold;
  letter-spacing: 0.5px;
}

.success-message {
  position: relative;
  z-index: 3;
  color: #ffffff;
  margin-top: 2em;
  padding: 0 1em;
}

.success-message button {
  width: auto;
}

.input {
  padding: 0.75em;
  border-radius: 30px;
  border: 2px solid #48ffcd;
  width: 100%;
  background: transparent;
  color: white;
}

.main-text p {
  font-size: clamp(1rem, 3vw, 1.5rem);
}

.waitlist {
  font-size: clamp(2rem, 6vw, 5rem);
  margin: 0 auto;
  color: #ffffff;
}

@media (min-width: 769px) {
  .top-content {
    padding: 0 2em;
  }
  
  .waitlist-wrapper {
    margin-top: 5em;
    padding-left: 0;
    padding-right: 0;
  }
  
  .main-logo {
    margin-top: 2em;
    max-width: 150px;
  }
  
  .names {
    flex-direction: row;
    margin-top: 1em;
    margin-bottom: 1em;
    gap: 1em;
  }
  
  .submit-button {
    margin-top: 3em;
    padding: 1em;
  }
  
  .success-message {
    margin-top: 5em;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .main-logo {
    max-width: 140px;
  }
}
</style>