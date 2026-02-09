import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions – Roast N Toast",
  description: "Terms and Conditions for using the Roast N Toast website.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-pirata tracking-wider mb-4">
          Terms &amp; Conditions – Roast N Toast
        </h1>

        <p className="mb-8 text-sm md:text-base leading-relaxed italic">
          These Terms &amp; Conditions govern your use of the Roast N Toast website. By accessing this website, you agree to these terms.
        </p>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-pirata tracking-wide mb-3">1. Website Purpose</h2>
          <p className="text-sm md:text-base leading-relaxed mb-2">
            This website is informational and showcases details about Roast N Toast, including menu, events, and ambience.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            No user accounts, online payments, or direct reservations are processed through this website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-pirata tracking-wide mb-3">2. Table Booking via WhatsApp</h2>
          <ul className="list-disc list-inside space-y-2 text-sm md:text-base leading-relaxed">
            <li>Table bookings are facilitated via WhatsApp by redirecting users to the official WhatsApp platform.</li>
            <li>Roast N Toast is not responsible for WhatsApp&apos;s availability, delays, or technical issues.</li>
            <li>Booking confirmation is subject to availability and is finalized only after confirmation by our staff.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-pirata tracking-wide mb-3">3. Third-Party Services &amp; Links</h2>
          <p className="text-sm md:text-base leading-relaxed mb-2">
            This website includes third-party integrations and links, such as:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm md:text-base leading-relaxed mb-2">
            <li>WhatsApp</li>
            <li>Instagram (embedded feed)</li>
            <li>Google Maps (location redirection)</li>
          </ul>
          <p className="text-sm md:text-base leading-relaxed">
            Roast N Toast does not control and is not responsible for the content, privacy practices, or functionality of these third-party platforms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-pirata tracking-wide mb-3">4. Intellectual Property</h2>
          <p className="text-sm md:text-base leading-relaxed mb-2">
            All content on this website, including images, videos, logos, text, and branding, is the property of Roast N Toast unless stated otherwise.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            Unauthorized copying, reuse, or distribution of any content is prohibited.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-pirata tracking-wide mb-3">5. Accuracy of Information</h2>
          <p className="text-sm md:text-base leading-relaxed mb-2">
            Information such as menu items, prices, timings, events, and offers is subject to change without prior notice.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            Roast N Toast does not guarantee that all website content is always up to date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-pirata tracking-wide mb-3">6. Limitation of Liability</h2>
          <p className="text-sm md:text-base leading-relaxed mb-2">
            Use of this website is at your own risk.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            Roast N Toast shall not be liable for any direct or indirect loss arising from use of the website, WhatsApp bookings, or third-party platforms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-pirata tracking-wide mb-3">7. Changes to Terms</h2>
          <p className="text-sm md:text-base leading-relaxed mb-2">
            Roast N Toast reserves the right to update these Terms &amp; Conditions at any time without prior notice.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            Continued use of the website implies acceptance of the updated terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-pirata tracking-wide mb-3">8. Governing Law</h2>
          <p className="text-sm md:text-base leading-relaxed">
            These Terms &amp; Conditions are governed by the laws of India.
          </p>
        </section>
      </div>
    </main>
  );
}
