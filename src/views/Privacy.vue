<template>
  <div>
    <div class="support-page">
      <div class="closing-text ps-2 pe-2 small-grey-text">
        <div>
          <h3>Lucky Friday Privacy Policy</h3>
          <h4>Effective Date: 04/09/2025</h4>
          <h4>Last Updated: 04/09/2025</h4>

          <p>
            Lucky Friday (“we,” “us,” or “our”) respects your privacy and is
            committed to protecting the personal and financial data you provide
            to us. This Privacy Policy explains how we collect, use, share, and
            protect your information when you use our web application and
            services (“Service”). By using the Service, you agree to the
            practices described in this Privacy Policy.
          </p>

          <h4>1. Information We Collect</h4>
          <ul>
            <li>
              <strong>a. Information You Provide</strong>
              <ul>
                <li>
                  Name, email address, and account login credentials (via Auth0)
                </li>
                <li>
                  Budget details, financial categories, notes, and custom labels
                </li>
              </ul>
            </li>
            <li>
              <strong>b. Information from Connected Financial Accounts</strong>
              <ul>
                <li>Transaction data (amounts, dates, descriptions)</li>
                <li>Account balances and types</li>
                <li>
                  Account identifiers (last 2–4 digits only; no full
                  credentials)
                </li>
              </ul>
              <p>
                We use Plaid Inc. to securely access financial data. Plaid’s
                privacy policy is available at
                <a href="https://plaid.com/legal" target="_blank"
                  >plaid.com/legal</a
                >. You may revoke Plaid access at any time from within the app
                or your financial institution.
              </p>
            </li>
            <li>
              <strong>c. Automatically Collected Information</strong>
              <ul>
                <li>IP address, browser type, and device information</li>
                <li>Usage data, including page views and actions taken</li>
                <li>Error logs and performance data</li>
              </ul>
              <p>
                We use cookies and similar technologies for session management,
                analytics, and security.
              </p>
            </li>
          </ul>

          <h4>2. How We Use Your Information</h4>
          <ul>
            <li>Provide and maintain the Service</li>
            <li>Securely connect to financial data via Plaid</li>
            <li>Authenticate your identity via Auth0</li>
            <li>Customize your budgeting experience</li>
            <li>Monitor usage and improve performance</li>
            <li>Respond to inquiries and provide support</li>
            <li>Meet legal or regulatory obligations</li>
          </ul>
          <p>
            <strong
              >We do not sell or rent your personal data to third
              parties.</strong
            >
          </p>

          <h4>3. How We Share Your Information</h4>
          <p>
            We share your data only with trusted service providers that support
            our operations:
          </p>
          <ul>
            <li><strong>Plaid</strong> – Secure financial data access</li>
            <li>
              <strong>Auth0</strong> – Authentication and identity management
            </li>
            <li>
              <strong>Microsoft Azure</strong> – Secure hosting, encryption, and
              database storage
            </li>
          </ul>
          <p>
            Each third party is contractually obligated to safeguard your data
            and comply with applicable privacy laws.
          </p>
          <p>We may also disclose information:</p>
          <ul>
            <li>To comply with legal obligations (e.g., court orders)</li>
            <li>To prevent fraud or abuse</li>
            <li>
              As part of a merger, sale, or acquisition (with notice to you)
            </li>
          </ul>

          <h4>4. Data Storage and Security</h4>
          <ul>
            <li>All data is encrypted in transit using TLS 1.2+</li>
            <li>
              Data at rest is protected using AES-256 via Azure-managed
              encryption
            </li>
          </ul>
          <p>
            Access to user data is restricted to authorized systems and
            personnel. We maintain audit logs and regularly review security
            practices.
          </p>

          <h4>5. Data Retention</h4>
          <p>
            We retain user data for as long as your account is active or as
            necessary to provide the Service. You may request deletion of your
            data at any time via your account settings or by emailing us. Some
            anonymized data may be retained for analytics and legal compliance.
          </p>

          <h4>6. Your Rights</h4>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access a copy of your data</li>
            <li>Request correction or deletion</li>
            <li>Revoke consent to data processing</li>
            <li>Opt out of analytics or cookies</li>
          </ul>
          <p>
            To exercise your rights, email us at
            <a href="mailto:support@luckyfridayapp.com"
              >support@luckyfridayapp.com</a
            >. We may ask you to verify your identity before fulfilling
            requests.
          </p>

          <h4>7. Children’s Privacy</h4>
          <p>
            The Service is not intended for children under 13 (or under 16 in
            some jurisdictions). We do not knowingly collect personal
            information from minors.
          </p>

          <h4>8. International Users</h4>
          <p>
            If you are accessing the Service from outside the United States,
            your data will be transferred to and processed in the U.S. By using
            the Service, you consent to this transfer.
          </p>

          <h4>9. Changes to This Policy</h4>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of significant changes by email or in-app notice. Continued use
            of the Service means you accept the updated policy.
          </p>

          <h4>10. Contact Us</h4>
          <p>
            If you have questions about this Privacy Policy or your personal
            data, please contact us at:
          </p>
          <p>
            📧
            <a href="mailto:support@luckyfridayapp.com"
              >support@luckyfridayapp.com</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  setup() {
  },
};
</script>
<style scoped>
a {
  color: white;
}

.closing-text {
  margin-top: 2em;
  font-style: italic;
}

.support-page {
  padding: 1em;
  font-size: 1rem;
  line-height: 1.6;
  margin-top: 4em;
  height: 100%;
  background-color: #242424;
}

ul {
    list-style: none;
}
</style>