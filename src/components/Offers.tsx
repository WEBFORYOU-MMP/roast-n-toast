"use client"

import * as React from "react"
import Image from "next/image"

const offerImages = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/WhatsApp-Image-2026-01-17-at-20.23.23-1769575264356.jpeg?width=8000&height=8000&resize=contain",
    alt: "Roast N Toast Special Offers"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/WhatsApp-Image-2026-02-04-at-22.42.48-1770280711563.jpeg?width=8000&height=8000&resize=contain",
    alt: "50% Off on Liquor Bill - Special Offer for Groups"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/image-1770281039313.png?width=8000&height=8000&resize=contain",
    alt: "15% Off on Total Bill - Fri, Sat, Sun 6PM to 12AM"
  }
]

export function Offers() {
  return (
    <section id="offers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">Special Offers</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {offerImages.map((offer, index) => (
            <div 
              key={index}
              className="relative aspect-[1/1.2] rounded-2xl overflow-hidden shadow-2xl border border-primary/10 hover:scale-[1.02] transition-transform duration-300"
            >
              <Image
                src={offer.src}
                alt={offer.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
