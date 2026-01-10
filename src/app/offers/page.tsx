"use client"

import * as React from "react"
import { Navbar } from "@/components/Navbar"
import { motion } from "framer-motion"

export default function OffersPage() {
  return (
    <main className="w-screen h-screen bg-white overflow-hidden flex flex-col items-center justify-center relative">
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center z-10"
      >
        <h1 className="text-black text-6xl md:text-8xl font-display tracking-widest uppercase mb-4">
          Offers
        </h1>
        <p className="text-gray-500 tracking-[0.5em] uppercase text-sm">
          Coming Soon
        </p>
      </motion.div>

      {/* Subtle brand touch */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 opacity-20">
        <div className="w-3 h-3 rounded-full bg-[#E0B12D]" />
        <div className="w-3 h-3 rounded-full bg-[#1F7A2E]" />
        <div className="w-3 h-3 rounded-full bg-[#B01616]" />
      </div>
    </main>
  )
}
