"use client"

import * as React from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, Music2, Share2 } from "lucide-react"

export default function MusicSocialsPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white pt-24 overflow-x-hidden">
      <Navbar />
      
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#B01616]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#E0B12D]/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1F7A2E]/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-display tracking-[0.1em] uppercase mb-6"
          >
            Music <span className="text-[#E0B12D]">&</span> Socials
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 tracking-[0.4em] uppercase text-sm md:text-base"
          >
            The Heartbeat of Hyderabad Nightlife
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-[#E0B12D]" />
              <span className="text-[#E0B12D] font-bold uppercase tracking-widest">Connect With Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display uppercase leading-tight">
              Follow Our Journey <br /> on Instagram
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Stay updated with our latest events, exclusive offers, and the vibrant atmosphere at Roast N Toast. Witness the magic through our lens.
            </p>
            <Link
              href="https://www.instagram.com/roastntoasthyd/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-[#E0B12D] text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#E0B12D]/90 transition-all group"
            >
              <Instagram className="w-5 h-5" />
              Follow @roastntoasthyd
              <Share2 className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 border-2 border-[#E0B12D]/30 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 border border-[#B01616]/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-8 border border-[#1F7A2E]/30 rounded-full animate-[spin_25s_linear_infinite]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4/5 h-4/5 rounded-full overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2000&auto=format&fit=crop" 
                  alt="Nightlife"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-10 left-0 right-0 text-center">
                  <Music2 className="w-12 h-12 mx-auto text-[#E0B12D] animate-bounce" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Brand Colors Accent */}
        <div className="flex justify-center gap-12 opacity-50">
          <div className="group flex flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-full border border-[#E0B12D] flex items-center justify-center group-hover:bg-[#E0B12D] transition-all">
              <span className="text-[#E0B12D] group-hover:text-black font-display text-2xl">R</span>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-[#E0B12D]">Roast</span>
          </div>
          <div className="group flex flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-full border border-[#1F7A2E] flex items-center justify-center group-hover:bg-[#1F7A2E] transition-all">
              <span className="text-[#1F7A2E] group-hover:text-black font-display text-2xl">N</span>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-[#1F7A2E]">Nature</span>
          </div>
          <div className="group flex flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-full border border-[#B01616] flex items-center justify-center group-hover:bg-[#B01616] transition-all">
              <span className="text-[#B01616] group-hover:text-black font-display text-2xl">T</span>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-[#B01616]">Toast</span>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
