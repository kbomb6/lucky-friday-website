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
    <div id="security" class="view dark-section">
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
                                <p>Your data belongs to you. From custom rules to bank connections, you’re in full control. <br/> Need your data permanently deleted? Just email support, we’ll take care of it, no questions asked.</p>
                            </div>
                            <div class="stat-block">🛡️<br></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<style scoped>
</style>