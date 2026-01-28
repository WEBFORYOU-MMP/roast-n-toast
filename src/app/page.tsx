import { HomeClient } from "@/components/HomeClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Roast N Toast Hyderabad | Best Restaurant & Nightclub in Madinaguda",
  description: "Experience fine dining by day and electrifying nightlife by night at Roast N Toast Hyderabad. Best multicuisine restaurant and premium club in Madinaguda.",
  keywords: ["Roast N Toast", "Hyderabad Restaurant", "Nightclub Hyderabad", "Madinaguda Dining", "Best Pub in Hyderabad", "Fine Dining Hyderabad"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Roast N Toast Hyderabad | Best Restaurant & Nightclub",
    description: "Experience fine dining by day and electrifying nightlife by night at Roast N Toast Hyderabad.",
    url: "https://roastntoasthyd.com",
    siteName: "Roast N Toast",
    images: [
      {
        url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/55D7DFDB-95A1-4994-9227-044842B9795E-1767713898800.png",
        width: 1200,
        height: 630,
        alt: "Roast N Toast Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
}

export default function Home() {
  return <HomeClient />
}
