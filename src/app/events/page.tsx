"use client"

import * as React from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import Image from "next/image"

const eventImages = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/Screenshot-2026-01-10-at-10.11.57-PM-1768065674634.png?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/Screenshot-2026-01-10-at-10.12.24-PM-1768065674573.png?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/Screenshot-2026-01-10-at-10.13.19-PM-1768065674169.png?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/Screenshot-2026-01-10-at-10.13.40-PM-1768065673924.png?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/Screenshot-2026-01-10-at-10.13.56-PM-1768065674001.png?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/Screenshot-2026-01-10-at-10.55.40-PM-1768065972119.png?width=8000&height=8000&resize=contain"
]

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-display tracking-widest uppercase mb-4 text-primary">
            Events
          </h1>
          <p className="text-muted-foreground tracking-[0.3em] uppercase text-sm">
            Experience the vibrant nightlife at Roast N Toast
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventImages.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-[3/4] overflow-hidden rounded-lg group"
            >
              <Image
                src={src}
                alt={`Event ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white font-display tracking-widest uppercase border border-white/50 px-6 py-2 backdrop-blur-sm">
                  View Event
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
