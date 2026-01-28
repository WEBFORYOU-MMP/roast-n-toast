"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Image from "next/image"

const indoorAmbiance = [
  {
    title: "Indoor Ambiance 1",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/image-4-1769484602258.jpeg?width=8000&height=8000&resize=contain"
  },
  {
    title: "Indoor Ambiance 2",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/image-4-1769484602276.png?width=8000&height=8000&resize=contain"
  },
  {
    title: "Indoor Ambiance 3",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/image-2-1769484602257.png?width=8000&height=8000&resize=contain"
  },
  {
    title: "Indoor Ambiance 4",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/image-1769484602257.png?width=8000&height=8000&resize=contain"
  }
]

const privateDiningRoom = [
  {
    title: "Private Dining Room 1",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/image6-1769485015291.png?width=8000&height=8000&resize=contain"
  },
  {
    title: "Private Dining Room 2",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/image7-1769485015108.png?width=8000&height=8000&resize=contain"
  }
]

export function AmbianceClient() {
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
          background: `radial-gradient(600px circle at ${springX}px ${springY}px, rgba(224,177,45,0.15), transparent 80%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-widest mb-4">
            INDOOR AMBIANCE
          </h1>
          <div className="h-1 w-24 bg-primary mx-auto mb-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {indoorAmbiance.map((item, index) => (
            <motion.div
              key={index}
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Private Dining Room Section */}
      <div className="relative z-10 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-6"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-widest mb-4">
            PRIVATE DINING ROOM
          </h2>
          <p className="text-yellow-400 font-medium tracking-[0.2em] uppercase text-sm md:text-base mb-6">
            capacity upto 25 people
          </p>
          <div className="h-1 w-24 bg-primary mx-auto mb-6" />
        </motion.div>

        <div className="flex flex-wrap w-full">
          {privateDiningRoom.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="w-full md:w-1/2 aspect-video relative overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
