<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import rulesImg from '@/assets/screenshots/grocery-rules.png'
import transactionsList from '@/assets/screenshots/transactions.png'
import budget from '@/assets/screenshots/budget.png'

function getDelay(index) {
  const fadeInDelay = (Math.random() * 1.2 + 0.1).toFixed(2);
  const glowDelay = (Math.random() * 3).toFixed(2);
  const glowDuration = (Math.random() * 2 + 3).toFixed(2);
  return `animation-delay: ${fadeInDelay}s, ${glowDelay}s; animation-duration: 1.4s, ${glowDuration}s;`;
}
</script>

<template>
    <div class="homepage">
        <div class="half-section teal-background circle-gradient">
            <div class="half-section top-section">
                 <h1 class="headline">
                    <span v-for="(char, index) in 'Your Budget. Your Way.'" :key="index" class="letter" :style="getDelay(index)">
                        {{ char }}
                    </span>
                </h1>
                <img src="../assets/darklogo.png" class="logo-mtn"/>
            </div>
        </div>
        <div class="dark-section p-2">
            <div class="features-section overview-card dark-overview-card mt-4">
                <div class="features-header">
                <h2>The #1 app for managing your money</h2>
                <p class="light-grey-text">
                    100,000+ users trust Lucky Friday to take control of their budgets with smart tools,
                    customizable insights, and privacy-first design.
                </p>
                </div>

                <div class="features-steps">
                <div class="feature-card purple">
                    <h2>Step 1 of 3</h2>
                    <h3>Link accounts</h3>
                    <p>Securely connect your banks and credit cards to see everything in one place.</p>
                    <!-- <img src="/screens/link-accounts.png" alt="Link accounts screenshot" /> -->
                </div>

                <div class="feature-card green">
                    <h2>Step 2 of 3</h2>
                    <h3>Track spending</h3>
                    <p>Use custom categories and smart rules to stay on top of every dollar.</p>
                    <!-- <img src="/screens/track-spending.png" alt="Track spending screenshot" /> -->
                </div>

                <div class="feature-card yellow">
                    <h2>Step 3 of 3</h2>
                    <h3>Feel in control</h3>
                    <p>See your net worth, set monthly goals, and gain peace of mind over time.</p>
                    <!-- <img src="/screens/net-worth.png" alt="Net worth screenshot" /> -->
                </div>
                </div>
            </div>
        </div>
        <div class="dark-section p-2">
            <div class="overview-card dark-overview-card features-section mt-4">
                <div class="d-flex flex-row column-wrapper">
                    <div class="even-column">
                        <h3>No Ads. Ever.</h3>
                        <p class="light-grey-text">
                            We hate ads. Even our free accounts won't show you a single ad.
                        </p>
                    </div>
                    <div class="even-column">
                        <h3>Full Control</h3>
                        <p class="light-grey-text">
                            You should be able to budget however you want. So whether you used zero-based budgeting or flexible budgeting, we have got you covered.
                        </p>
                    </div>
                    <div class="even-column">
                        <h3>Financial Overview</h3>
                        <p class="light-grey-text">
                            We are the only budgeting app that has customization throughout categories and accounts, monthly AND annual budget sheets, and net worth sheets.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="dark-section p-2">
            <div class="overview-card dark-overview-card features-section mt-4">
                <div class="d-flex flex-row column-wrapper">
                    <div class="even-column">
                        image here
                    </div>
                    <div class="even-column">
                        <h3>Fully Customizable</h3>
                        <p class="light-grey-text">
                            Create your own categories, subcategories, icons, and colors. Your budget should fit your brain, not the other way around.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="dark-section p-2">
            <div class="overview-card dark-overview-card features-section mt-4">
                <div>
                    <div>
                        <h3>Powerful Auto Categorization</h3>
                        <p class="light-grey-text">
                            Automate your spending insights with unlimited rules that you control. No confusing AI guesses, just exactly how you want it.
                        </p>
                    </div>
                     <div>
                        <img :src="rulesImg" alt="Rules Screenshot" />
                    </div>
                </div>
            </div>
        </div>
        <div class="dark-section p-2">
            <div class="overview-card dark-overview-card features-section mt-4">
                <div class="d-flex flex-row column-wrapper">
                    <div class="even-column">
                        <h3>Real-Time Syncing</h3>
                        <p class="light-grey-text">
                            Connect your bank accounts securely with Plaid and get up-to-date insights across devices.
                        </p>
                    </div>
                    <div class="even-column transactions-list">
                        <img :src="transactionsList" alt="Transactions Screenshot" />
                    </div>
                </div>
            </div>
        </div>
        <div class="dark-section p-2">
            <div class="overview-card dark-overview-card features-section mt-4">
                <div class="d-flex flex-row column-wrapper">
                    <div class="even-column budget-image">
                        <img :src="budget" alt="Budgets screenshot">
                    </div>
                    <div class="even-column">
                        <h3>Monthly and Annual Budgets</h3>
                        <p class="light-grey-text">
                            You should be able to budget however you want. So whether you used zero-based budgeting or flexible budgeting, we have got you covered.
                        </p>
                    </div>
                    <div class="even-column">
                        annual budget image here
                    </div>
                </div>
            </div>
        </div>
        <div class="dark-section p-2">
            <div class="overview-card dark-overview-card mt-4">
                <h3>Pricing</h3>
                <h4>Try Premium Free for 7 Days</h4>
            </div>
        </div>
        <div class="dark-section p-2">
            <div class="overview-card dark-overview-card mt-4">
                <h3>Built with Security from the Ground Up</h3>
                <ul class="text-start">
                    <li>We use the Industry Leader, Plaid to connect your bank account. We can't view your bank credentials and we never store them.</li>
                    <li>Your data is yours. You control your rules, your bank syncing, and categories. Want us to hard delete all of your data? No problem, just email support and it's done.</li>
                    <li>End-to-end encryption and strict privacy controls baked into every layer of the app.</li>
                </ul>
            </div>
        </div>
        <div class="dark-section p-2">
            <div class="overview-card dark-overview-card mt-4">
                What our users say
            </div>
        </div>
        <div class="dark-section p-2">
            <div class="overview-card dark-overview-card mt-4">
                <h3>Need Help or Have Questions?</h3>
                <div class="d-flex">
                    <button class="button blue-button">Browse FAQs</button>
                    <button class="button blue-outline-button">Read our documentation</button>
                    <button class="button blue-button">Contact Support</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.homepage {
    background: #171e29;
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
  font-size: clamp(1rem, 3rem, 5rem);
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

.features-section {
  padding: 4rem 2rem;
  text-align: center;
}

.features-header h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  color: white;
}

.features-header h2 {
    font-weight: 800;
    font-size: clamp(1.5rem, 4.5vw, 2rem);
}

.features-header p {
  max-width: 700px;
  margin: 0 auto 1rem;
  font-size: clamp(1rem, 2.5vw, 1.25rem);
}

.features-steps {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 3rem;
  gap: 2rem;
}

.feature-card {
  flex: 1 1 300px;
  max-width: 320px;
  border-radius: 1rem;
  padding: 2rem 1.5rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
  text-align: left;
  background: #f0f0f0;
}

.feature-card h2 {
  font-size: 0.9rem;
  font-weight: 600;
  color: #555;
  margin-bottom: 0.5rem;
}

.feature-card h3 {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.feature-card p {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.feature-card img {
  width: 100%;
  border-radius: 0.5rem;
  margin-top: auto;
}

.purple {
  background-color: #e7ddf9;
}
.green {
  background-color: #d6f4da;
}
.yellow {
  background-color: #fff1cc;
}

.even-column {
  flex: 1 1 0;
  min-width: 250px;
  max-width: 100%;
  padding: 1rem;
  color: white;
}

.column-wrapper {
    gap: 2em;
}

.transactions-list img, .budget-image img {
    max-height: 500px;
    text-align: center;
}
</style>