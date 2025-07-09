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
    <div id="support" class="view dark-section">
        <div class="overview-card dark-overview-card mt-4">
            <h2>Need Help or Have Questions?</h2>
            <div class="d-flex support-block mt-4">
                <!-- <button class="button teal-button">Browse FAQs</button> -->
                <button class="button teal-outline-button" @click="goToDocumentation">Read our documentation</button>
                <button class="button teal-button" @click="contactSupport">Contact Support</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>