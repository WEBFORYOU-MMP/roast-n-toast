import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Roast N Toast",
  description: "Privacy Policy for Roast N Toast website. Learn about how we handle your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-pirata tracking-wider mb-8">
          Privacy Policy – Roast N Toast
        </h1>

        <p className="mb-6 text-sm md:text-base leading-relaxed">
          This website is static and informational only. Roast N Toast does not collect, store, or process any personal information from visitors.
        </p>

        <h2 className="text-xl md:text-2xl font-pirata tracking-wide mb-4">Key Points</h2>
        <ul className="list-disc list-inside space-y-3 text-sm md:text-base leading-relaxed mb-8">
          <li>No forms, logins, reservations, or payments are collected through this website.</li>
          <li>Basic technical data (such as IP address or browser type) may be automatically logged by hosting providers for security and performance purposes only.</li>
          <li>This website may contain links to third-party platforms. Roast N Toast is not responsible for their privacy practices.</li>
          <li>While reasonable security measures are used, no internet transmission is completely secure.</li>
          <li>Roast N Toast may update this Privacy Policy at any time without prior notice.</li>
        </ul>

        <p className="text-sm md:text-base leading-relaxed">
          If you have questions, please contact us through the details available on the website.
        </p>
      </div>
    </main>
  );
}
