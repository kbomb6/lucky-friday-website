<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'

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

const goToDocumentation = () => {
    window.location.href="https://lucky-friday.helpscoutdocs.com/";
}

const contactSupport = () => {
    window.location.href = "mailto:support@luckyfridayapp.com?subject=Support%20Request";
}
</script>

<template>
    <div id="pricing" class="view dark-section">
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
</template>

<style scoped>
</style>