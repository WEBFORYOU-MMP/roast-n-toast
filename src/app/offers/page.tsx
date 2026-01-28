"use client"

import * as React from "react"
import { Navbar } from "@/components/Navbar"
import { Offers } from "@/components/Offers"
import { Footer } from "@/components/Footer"

export default function OffersPage() {
  return (
    <main className="relative min-h-screen selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      
      <div className="pt-24">
        <Offers />
      </div>

      <Footer />
    </main>
  )
}
