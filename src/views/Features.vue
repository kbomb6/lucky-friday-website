<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'


const goToDocumentation = () => {
    window.location.href="https://lucky-friday.helpscoutdocs.com/";
}

const contactSupport = () => {
    window.location.href = "mailto:support@luckyfridayapp.com?subject=Support%20Request";
}
</script>

<template>
    <div id="features" class=" view dark-section">
            <div class="overview-card dark-overview-card features-section mt-4">
                <div class="d-flex flex-column flex-md-row column-wrapper">
                    <div class="even-column">
                        <video autoplay muted loop playsinline>
                            <source src="../assets/screenrecordings/customization.mov" type="video/mp4" />
                        </video>
                    </div>
                    <div class="even-column">
                        <h2>Fully Customizable</h2>
                        <p class="light-grey-text">
                            Budgeting isn’t one-size-fits-all. That’s why Lucky Friday lets you fully customize your categories, colors, and icons, so your finances finally make sense to you.
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
                            Tired of apps mislabeling your transactions? With Lucky Friday, you create the rules. Automatically organize your spending your way. No surprises, no confusing AI, just total control.
                        </p>
                    </div>
                     <div>
                        <video autoplay muted loop playsinline>
                            <source src="../assets/screenrecordings/rules.mov" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </div>
        <div class="dark-section p-2">
            <div class="overview-card dark-overview-card features-section mt-4">
                <div class="d-flex flex-column flex-md-row column-wrapper">
                    <div class="even-column">
                        <h2>Real-Time Syncing</h2>
                        <p class="light-grey-text">
                            Securely connect your bank, investment, and loan accounts with Plaid and see your latest balances and transactions in real time - all in one place. Track your money as it moves, categorize spending automatically, and stay in sync across all your devices.
                        </p>
                    </div>
                    <div class="even-column transactions-list">
                        <video autoplay muted loop playsinline>
                            <source src="../assets/screenrecordings/transactions.mov" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </div>
        <div class="dark-section p-2">
            <div class="overview-card dark-overview-card features-section mt-4">
                <div class="d-flex flex-column flex-md-row column-wrapper">
                    <div class="even-column budget-image">
                        <video autoplay muted loop playsinline>
                            <source src="../assets/screenrecordings/monthlybudget.mov" type="video/mp4" />
                        </video>
                    </div>
                    <div class="even-column">
                        <h2>Monthly or Annual? Do Both.</h2>
                        <p class="light-grey-text">
                            Break your budget down month-by-month, or zoom out to plan for the year ahead. Whether you're tracking everyday spending or saving for something big, we make it easy.
                        </p>
                    </div>
                    <div class="even-column">
                        <video autoplay muted loop playsinline>
                            <source src="../assets/screenrecordings/annualbudget.mov" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </div>
</template>

<style scoped>
</style>