"use client"

import * as React from "react"
import Image from "next/image"

export function Offers() {
  return (
    <section id="offers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">Special Offers</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-2xl aspect-[1/1.4] rounded-2xl overflow-hidden shadow-2xl border border-primary/10">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/WhatsApp-Image-2026-01-17-at-20.23.23-1769575264356.jpeg?width=8000&height=8000&resize=contain"
              alt="Roast N Toast Special Offers"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
