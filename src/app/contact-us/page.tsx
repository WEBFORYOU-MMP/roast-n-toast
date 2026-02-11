"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CheckCircle } from "lucide-react";

export default function ContactUsPage() {
  const [form, setForm] = useState({ name: "", phone_number: "", message: "", email: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [authorize, setAuthorize] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone_number.trim()) e.phone_number = "Phone number is required";
    else if (!/^[0-9+\-\s()]{7,15}$/.test(form.phone_number.trim())) e.phone_number = "Enter a valid phone number";
    if (!form.message.trim()) e.message = "Message is required";
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Enter a valid email";
    if (!authorize) e.authorize = "You must authorize to continue";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: form.name.trim(),
            phone_number: form.phone_number.trim(),
            message: form.message.trim(),
            email: form.email.trim() || null,
            authorized: authorize,
          }),
      });
      if (res.ok) {
        setSuccess(true);
          setForm({ name: "", phone_number: "", message: "", email: "" });
          setAuthorize(false);
      }
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-pirata text-center mb-2 tracking-wider">Contact Us</h1>
          <p className="text-center text-sm text-muted-foreground mb-8">We&apos;d love to hear from you. Fill out the form below and we&apos;ll get back to you.</p>

          {success ? (
            <div className="flex flex-col items-center justify-center gap-4 py-16">
              <CheckCircle className="w-16 h-16 text-green-500" />
              <p className="text-lg font-semibold text-green-600">Message submitted successfully</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-medium mb-1">Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Phone Number <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  value={form.phone_number}
                  onChange={(e) => setForm({ ...form, phone_number: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                  placeholder="Your phone number"
                />
                {errors.phone_number && <p className="text-red-500 text-xs mt-1">{errors.phone_number}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email <span className="text-gray-400">(optional)</span></label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                  placeholder="Your email (optional)"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message <span className="text-red-500">*</span></label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 transition resize-none"
                  placeholder="Your message"
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={authorize}
                      onChange={(e) => setAuthorize(e.target.checked)}
                      className="mt-1 w-4 h-4 accent-amber-600 rounded"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      I Authorize to send Notifications via SMS/RCS/Email/WhatsApp
                    </span>
                  </label>
                  {errors.authorize && <p className="text-red-500 text-xs mt-1">{errors.authorize}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold transition disabled:opacity-50"
                >
                {loading ? "Submitting..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
