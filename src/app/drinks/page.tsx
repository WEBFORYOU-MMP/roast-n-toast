"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Image from "next/image"

const shakes = [
  {
    title: "Mango Honey Smooth & Berry Blast Thick Shake",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/WhatsApp-Image-2026-01-11-at-17.47.23-1768146187371.jpeg?width=8000&height=8000&resize=contain"
  },
  {
    title: "Vanilla Milk Shake & Strawberry Milk Shake",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/WhatsApp-Image-2026-01-11-at-17.47.27-1768146186950.jpeg?width=8000&height=8000&resize=contain"
  },
  {
    title: "Chocolate Milk Shake & Oreo Milk Shake",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/WhatsApp-Image-2026-01-11-at-17.47.28-1768146187475.jpeg?width=8000&height=8000&resize=contain"
  }
]

const refreshingDrinks = [
  {
    title: "Virgin Mojito Mocktail & Green Angel Mocktail",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/GFFGFGF-1768146200583.jpeg?width=8000&height=8000&resize=contain"
  },
  {
    title: "Kiwi Mocktail & Virgin Cobra Mocktail",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/WhatsApp-Image-2026-01-11-at-17.46.56-1768146200586.jpeg?width=8000&height=8000&resize=contain"
  },
  {
    title: "Fall Alert Mocktail & Pink Slinger Mocktail",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/WhatsApp-Image-2026-01-11-at-17.46.57-1768146199926.jpeg?width=8000&height=8000&resize=contain"
  },
  {
    title: "Orange Muddle Mocktail & Mango Manio Mocktail",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/XCV-1768146210290.jpeg?width=8000&height=8000&resize=contain"
  }
]

export default function DrinksPage() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 })

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <main 
      className="relative min-h-screen bg-black text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <Navbar />
      
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-50 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${springX}px ${springY}px, rgba(255,184,76,0.15), transparent 80%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-10">
        {/* Shakes Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-display tracking-widest mb-4">
            SHAKES
          </h1>
          <div className="h-1 w-24 bg-primary mx-auto mb-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-24">
          {shakes.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-800 hover:border-primary/50 transition-colors"
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Title on top of images for Shakes */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/80 flex items-center justify-center p-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <h3 className="text-2xl md:text-3xl font-display tracking-wider text-primary uppercase drop-shadow-lg">
                    {item.title}
                  </h3>
                </div>
                <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/70 to-transparent">
                  <h3 className="text-lg md:text-xl font-display tracking-wider text-primary uppercase">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Refreshing Drinks Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-display tracking-widest mb-4">
            REFRESHING DRINKS
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {refreshingDrinks.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-800 hover:border-primary/50 transition-colors"
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-display tracking-wider mb-2 text-primary uppercase">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore More Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
            <motion.a
              href="https://eatoes.com/menu/roastntoasthyd"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-[#FFD700] text-black px-12 py-4 rounded-full font-bold text-lg tracking-widest hover:bg-[#FFD700]/90 transition-colors shadow-[0_0_20px_rgba(255,215,0,0.3)]"
            >
              EXPLORE MORE
            </motion.a>
        </motion.div>
      </div>

      <Footer />
    </main>
  )
}
