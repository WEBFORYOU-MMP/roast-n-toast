"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Image from "next/image"

const barImages = [
  {
    id: 1,
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/33501_source_1767357035-removebg-preview-1769509236823.png?width=8000&height=8000&resize=contain",
    title: "Chivas Regal 12"
  },
  {
    id: 2,
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/bangkok-thailand-may-28-2018-600nw-1587613642-removebg-preview-1769509236783.png?width=8000&height=8000&resize=contain",
    title: "Budweiser"
  },
  {
    id: 3,
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/Johnnie-walker-black-litro-licorea_800x800-removebg-preview-1769509239459.png?width=8000&height=8000&resize=contain",
    title: "Johnnie Walker Black Label"
  }
]

export default function BarImagesPage() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })
  
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-[0.2em] text-primary mb-4 uppercase">
            Bar Collection
          </h1>
          <div className="h-1 w-24 bg-primary mx-auto" />
        </motion.div>

        <div className="relative max-w-5xl mx-auto space-y-24" ref={containerRef}>
          {barImages.map((image, index) => (
            <Card 
              key={image.id} 
              image={image} 
              index={index} 
              total={barImages.length} 
              progress={scrollYProgress}
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <motion.a
            href="https://drive.google.com/file/d/1NIzKWFO9bac1ZV-z5AI7eOoC4rdbye1h/view?usp=sharing"
          >
            Explore More
          </motion.a>
        </motion.div>
      </div>

      <Footer />
    </main>
  )
}

function Card({ image, index, total, progress }: { image: any, index: number, total: number, progress: any }) {
  const start = index / total
  const end = (index + 1) / total
  
  const isEven = index % 2 === 0
  
  // Refined ranges for cinematic entry and stack exit
  const entryStart = start
  const entryEnd = start + (end - start) * 0.4
  const exitStart = end - (end - start) * 0.2
  const exitEnd = end

    const x = useTransform(
      progress, 
      [entryStart, entryEnd], 
      [isEven ? "-120%" : "120%", "0%"]
    )
  
  const scale = useTransform(
    progress,
    [entryStart, entryEnd, exitStart, exitEnd],
    [0.8, 1, 1, 0.9]
  )
  
  const cardOpacity = useTransform(
    progress,
    [entryStart, entryEnd, exitStart, exitEnd],
    [0, 1, 1, 0.6]
  )
  
  return (
    <div className="sticky top-0 h-screen flex items-center justify-center">
      <motion.div 
        style={{ 
          x,
          opacity: cardOpacity,
          scale
        }}
        className="relative w-[90%] md:w-[80%] h-[70vh] rounded-[3rem] overflow-hidden bg-zinc-900/60 border border-primary/30 backdrop-blur-2xl p-8 md:p-16 flex flex-col items-center justify-center shadow-[0_0_100px_rgba(0,0,0,0.8)] group"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="relative w-full h-4/5 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <Image
              src={image.url}
              alt={image.title}
              fill
              className="object-contain drop-shadow-[0_0_30px_rgba(224,177,45,0.3)] transition-transform duration-700 group-hover:scale-105"
              priority={index < 2}
            />
          </motion.div>
        </div>
        
        <div className="mt-8 text-center z-10">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl md:text-5xl font-display tracking-[0.3em] text-primary uppercase font-bold"
          >
            {image.title}
          </motion.h2>
          <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-primary/30 transition-all duration-700 mx-auto" />
        </div>
      </motion.div>
    </div>
  )
}
