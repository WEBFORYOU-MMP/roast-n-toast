import { EventsClient } from "@/components/EventsClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Upcoming Events & Nightlife | Roast N Toast Hyderabad",
  description: "Join us for the most happening events in Hyderabad. From live music to themed club nights, experience the best nightlife at Roast N Toast Madinaguda.",
  keywords: ["Hyderabad Events", "Nightlife Hyderabad", "Club Events Madinaguda", "Live Music Hyderabad", "Parties in Hyderabad"],
  alternates: {
    canonical: "/events",
  },
}

export default function EventsPage() {
  return <EventsClient />
}
