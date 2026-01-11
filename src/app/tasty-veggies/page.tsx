"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Image from "next/image"

const veggies = [
  {
    title: "Signature Classics",
    description: "Palak Paneer & Szechwan Fried Rice",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/VBNM-1768145665051.jpeg?width=8000&height=8000&resize=contain"
  },
  {
    title: "Gourmet Starters",
    description: "Cilantro Cottage Cheese Skewers & Paneer Popcorn",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/45786HH-1768145664922.jpeg?width=8000&height=8000&resize=contain"
  },
  {
    title: "Popular Favorites",
    description: "Mexican Veg Cheese Burger & Tandoori Mushroom",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/BHY-1768145665009.jpeg?width=8000&height=8000&resize=contain"
  },
  {
    title: "Pasta Delights",
    description: "Veggie with Basil & Parsley Pesto and Veggie Alfredo Pasta",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/BNMFGHJ-1768145665041.jpeg?width=8000&height=8000&resize=contain"
  },
  {
    title: "Oriental Fusion",
    description: "American Veg Chopsuey & Singapore Noodles",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/CVBNM-1768145665207.jpeg?width=8000&height=8000&resize=contain"
  },
  {
    title: "Continental Specials",
    description: "Veggie Stroganoff & Grill Cottage Cheese Steak",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/DFGHJK-1768145665403.jpeg?width=8000&height=8000&resize=contain"
  },
  {
    title: "Tandoori Treasures",
    description: "Achari Paneer Tikka & Tandoori Malai Broccoli",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/ERTUY-1768145665029.jpeg?width=8000&height=8000&resize=contain"
  },
  {
    title: "Indian Soul Food",
    description: "Dal Tadka & Veg Maratha",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/FG-1768145665467.jpeg?width=8000&height=8000&resize=contain"
  },
  {
    title: "Chef's Selection",
    description: "Butter Sauteed Vegetable & Cheesy Jalapeno Pepper Balls",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/GHIJNBFE-1768145664897.jpeg?width=8000&height=8000&resize=contain"
  },
  {
    title: "Italian Heritage",
    description: "Penne Arrabiata Pasta & Spaghetti Aglio E Olio",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/GHJKTYUI-1768145665787.jpeg?width=8000&height=8000&resize=contain"
  }
]

export default function TastyVeggiesPage() {
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-display tracking-widest mb-4">
            TASTY VEGGIES
          </h1>
          <div className="h-1 w-24 bg-primary mx-auto mb-6" />
          <p className="text-xl text-zinc-400 font-light tracking-wide max-w-2xl mx-auto">
            Experience the finest vegetarian delicacies crafted with passion and royal heritage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {veggies.map((item, index) => (
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
                <p className="text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
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
