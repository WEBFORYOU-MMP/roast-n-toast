import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us – Roast N Toast | Restaurant & Nightlife in Hyderabad",
  description: "Roast N Toast is a unique dining and entertainment destination in Madinaguda, Hyderabad. Fine Italian & Indian cuisine by day, electrifying nightlife by night.",
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-pirata tracking-wider mb-8">
          About Us – Roast N Toast
        </h1>

        <p className="text-sm md:text-base leading-relaxed mb-6">
          Roast N Toast is a unique dining and entertainment destination where great food meets great vibes.
        </p>

        <p className="text-sm md:text-base leading-relaxed mb-6">
          By day, we&apos;re a relaxed spot serving a delicious mix of Italian and Indian cuisine, perfect for casual meals, coffee, and conversations. By night, Roast N Toast transforms into a lively space with music, DJ nights, and entertainment, creating an energetic nightlife experience.
        </p>

        <p className="text-sm md:text-base leading-relaxed mb-6">
          Located in Madinaguda, Hyderabad, our focus is simple — good food, good music, and a great atmosphere.
        </p>

        <p className="text-sm md:text-base leading-relaxed">
          Whether you&apos;re here to dine, celebrate, or unwind with friends, Roast N Toast is a place to eat, relax, and enjoy the moment.
        </p>
      </div>
    </main>
  );
}
