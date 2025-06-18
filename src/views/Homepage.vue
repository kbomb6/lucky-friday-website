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

const features = [
  { name: 'Create Transactions', free: 'Unlimited', pro: 'Unlimited' },
  { name: 'Create Categories', free: 'Yes', pro: 'Yes' },
  { name: 'Create Subcategories', free: 'Yes', pro: 'Yes' },
  { name: 'Auto Categorization Rules', free: 'Yes', pro: 'Yes' },
  { name: 'Custom Icons', free: 'Yes', pro: 'Yes' },
  { name: 'Custom Colors', free: 'Yes', pro: 'Yes' },
  { name: 'Net Worth Snapshots', free: 'Yes', pro: 'Yes' },
  { name: 'Import Transactions with real time data', free: 'No', pro: 'Yes' },
  { name: 'Get up to date bank balances', free: 'No', pro: 'Yes' }
];

const testimonialContainer = ref(null)

const scrollLeft = () => {
  testimonialContainer.value.scrollBy({ left: -320, behavior: 'smooth' })
}

const scrollRight = () => {
  testimonialContainer.value.scrollBy({ left: 320, behavior: 'smooth' })
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
                        <h2>Fully Customizable</h2>
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
                        <h2>Powerful Auto Categorization</h2>
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
                        <h2>Real-Time Syncing</h2>
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
                        <h2>Monthly and Annual Budgets</h2>
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
                <h2>Pricing</h2>
                <h4>Try Premium Free for 7 Days</h4>
                <div class="comparison-table">
                    <div class="table-wrapper">
                        <div class="table-row header">
                            <div class="cell feature">Features</div>
                            <div class="cell free">
                            <strong>Free forever</strong>
                            <div class="price">$0/month</div>
                            </div>
                            <div class="cell pro">
                            <strong>Premium</strong>
                            <div class="price">$12.99/month</div>
                            </div>
                        </div>
                        <div class="table-row" v-for="(feature, i) in features" :key="i">
                            <div class="cell feature">{{ feature.name }}</div>
                            <div class="cell free">{{ feature.free }}</div>
                            <div class="cell pro">{{ feature.pro }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="dark-section p-2">
            <div class="overview-card dark-overview-card mt-4">
                <div class="global-section">
                    <h2>Built with Security<br>from the Ground Up.</h2>
                    <div class="info-pairs">
                        <div class="pair">
                            <div class="info-block size-1">
                                <p>End-to-end encryption and strict privacy controls baked into every layer of the app.</p>
                            </div>
                            <div class="stat-block">🔒<br></div>
                        </div>
                        <div class="pair">
                            <div class="info-block size-2">
                                <p>We use the Industry Leader, Plaid to connect your bank account. We can't view your bank credentials and we never store them.</p>
                            </div>
                            <div class="stat-block">🔗<br></div>
                        </div>
                        <div class="pair">
                            <div class="info-block size-3">
                                <p>Your data is yours. You control your rules, your bank syncing, and categories. Want us to hard delete all of your data? No problem, just email support and it's done.</p>
                            </div>
                            <div class="stat-block">🛡️<br></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="dark-section p-2">
            <div class="overview-card dark-overview-card mt-4">
                <section class="testimonials-section">
                    <div class="testimonials-wrapper">
                    <div class="testimonials-header">
                        <h2>Hear from our Users</h2>
                        <p class="light-text">
                        Find our what existing Lucky Friday<br>
                        users think about our app.
                        </p>
                        <div class="arrow-buttons">
                        <button class="arrow-button" @click="scrollLeft">←</button>
                        <button class="arrow-button" @click="scrollRight">→</button>
                        </div>
                    </div>

                    <div ref="testimonialContainer" class="testimonials-scroll">
                        <div class="testimonial-card purple">
                        <p class="testimonial-text">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique..."
                        </p>
                        <div class="user">
                            <img src="https://i.pravatar.cc/80?img=13" alt="Emma Darcy" />
                            <div>
                            <h4>Emma Darcy</h4>
                            <p class="light-text">Travel Ready graduate</p>
                            </div>
                        </div>
                        </div>

                        <div class="testimonial-card green">
                        <p class="testimonial-text">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique..."
                        </p>
                        <div class="user">
                            <img src="https://i.pravatar.cc/80?img=11" alt="Sofia Patel" />
                            <div>
                            <h4>Sofia Patel</h4>
                            <p class="light-text">Casual Learner graduate</p>
                            </div>
                        </div>
                        </div>

                        <div class="testimonial-card purple">
                        <p class="testimonial-text">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique..."
                        </p>
                        <div class="user">
                            <img src="https://i.pravatar.cc/80?img=13" alt="Emma Darcy" />
                            <div>
                            <h4>Emma Darcy</h4>
                            <p class="light-text">Travel Ready graduate</p>
                            </div>
                        </div>
                        </div>

                        <div class="testimonial-card green">
                        <p class="testimonial-text">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique..."
                        </p>
                        <div class="user">
                            <img src="https://i.pravatar.cc/80?img=14" alt="Liam Nguyen" />
                            <div>
                            <h4>Liam Nguyen</h4>
                            <p class="light-text">Budget Pro graduate</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        </div>
        <div class="dark-section p-2">
            <div class="overview-card dark-overview-card mt-4">
                <h2>Need Help or Have Questions?</h2>
                <div class="d-flex support-block">
                    <button class="button teal-button">Browse FAQs</button>
                    <button class="button teal-outline-button">Read our documentation</button>
                    <button class="button teal-button">Contact Support</button>
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

.comparison-table {
  padding: 2rem;
  color: #d4d2d2;
  background: #212e3e;
  font-family: 'Josefin Sans', sans-serif;
  margin: 2em;
  border-radius: 8px;
}

.comparison-table h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #222;
}

.table-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-collapse: collapse;
  width: 100%;
  overflow-x: auto;
}

.table-row {
  display: contents;
}

.cell {
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  text-align: center;
  font-size: 1rem;
}

.feature {
  text-align: left;
  font-weight: 600;
}

.header .cell {
  font-weight: bold;
  font-size: 1.1rem;
  border-bottom: 2px solid #000;
}

.price {
  font-weight: normal;
  font-size: 0.9rem;
  color: #999595;
  margin-top: 0.25rem;
}

.pro .price {
    color: black;
}

.pro {
  background-color: green;
}

.global-section {
  font-family: 'Josefin Sans', sans-serif;
  text-align: left;
}

.global-section h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  margin-bottom: 2rem;
}

.info-pairs {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.pair {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  align-items: stretch;
}

.info-block {
  background: #ffeecf;
  padding: 1.5rem;
  border-radius: 1rem;
  font-size: 1rem;
  flex-grow: 1;
  color: #3a3d41;
}

.size-1 {
  flex: 0 0 60%;
}

.size-2 {
  flex: 0 0 70%;
}

.size-3 {
  flex: 0 0 80%;
}

.stat-block {
  background: #ffdba3;
  border-radius: 1rem;
  padding: 2rem 1.5rem;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1;
  color: #111;
  flex-shrink: 0;
  width: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.stat-block span {
  display: block;
  font-size: 1rem;
  font-weight: normal;
  margin-top: 0.25rem;
  color: #444;
}

@media (max-width: 768px) {
  .pair {
    flex-direction: column;
    align-items: stretch;
  }
  .stat-block {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .table-wrapper {
    display: block;
  }

  .table-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 1rem;
  }

  .header {
    display: none;
  }

  .feature {
    grid-column: span 2;
    font-size: 1.1rem;
    background: #f0f0f0;
  }

  .cell {
    border-bottom: none;
    border-top: 1px solid #ddd;
  }

  .pro {
    background-color: #d7f7e3;
  }
}

.testimonials-section {
  color: white;
}

.testimonials-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

.testimonials-header {
  max-width: 300px;
  flex: 0 0 auto;
}

.testimonials-header h2 {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 1rem;
}

.testimonials-header .light-text {
  font-size: 1rem;
  color: #c5c5c5;
  text-align: left;
}

.arrow-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.arrow-button {
  background: #ff6c6c;
  border: none;
  color: white;
  font-size: 1.25rem;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.arrow-button:hover {
  transform: scale(1.1);
}

.testimonials-scroll {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 1.5rem;
  padding-bottom: 1rem;
  flex: 1;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.testimonial-card {
  flex: 0 0 300px;
  padding: 2rem;
  border-radius: 1.5rem;
  scroll-snap-align: start;
  background: #ccc;
  color: #1a1a1a;
}

.testimonial-text {
  font-size: 1rem;
  margin-bottom: 2rem;
  line-height: 1.4;
}

.user {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user img {
  width: 60px;
  height: 60px;
  border-radius: 999px;
}

.testimonial-card h4 {
  margin: 0;
  font-weight: 700;
}

.testimonial-card .light-text {
  font-size: 0.9rem;
  margin-top: 0.25rem;
  color: #555;
}

.purple {
  background-color: #c3b5f5;
}

.green {
  background-color: #aef5c3;
}

@media (max-width: 768px) {
  .testimonials-wrapper {
    flex-direction: column;
  }
  .testimonials-scroll {
    flex-direction: column;
    overflow-x: hidden;
  }
}

.support-block {
    gap: 2em;
    justify-content: center;
    align-items: center;
}
</style>