import { DrinksClient } from "@/components/DrinksClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Refreshing Drinks & Thick Shakes | Roast N Toast Hyderabad",
  description: "Explore our wide range of refreshing mocktails, thick shakes, and signature drinks at Roast N Toast Hyderabad. The perfect accompaniment to your meal.",
  keywords: ["Roast N Toast Drinks", "Hyderabad Mocktails", "Thick Shakes Hyderabad", "Best Shakes in Madinaguda", "Refreshing Drinks Hyderabad"],
  alternates: {
    canonical: "/drinks",
  },
}

export default function DrinksPage() {
  return <DrinksClient />
}
