import { TastyVeggiesClient } from "@/components/TastyVeggiesClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gourmet Vegetarian Cuisine | Roast N Toast Hyderabad",
  description: "Experience the finest vegetarian delicacies at Roast N Toast Hyderabad. From Signature Classics to Oriental Fusion, we offer the best veg dining in Madinaguda.",
  keywords: ["Vegetarian Restaurant Hyderabad", "Veg Dining Madinaguda", "Paneer Tikka Hyderabad", "Veggie Alfredo Pasta", "Best Veg Food Hyderabad"],
  alternates: {
    canonical: "/tasty-veggies",
  },
}

export default function TastyVeggiesPage() {
  return <TastyVeggiesClient />
}
