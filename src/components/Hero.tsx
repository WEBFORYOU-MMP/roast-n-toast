"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import Image from "next/image"

export function Hero() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="h-screen w-full bg-background" />

  const isDark = resolvedTheme === "dark"

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={isDark ? "night" : "day"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
            {isDark ? (
                <div className="h-full w-full relative overflow-hidden bg-black">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover opacity-100"
                  >
                    <source src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/hero-night.mp4-1767711098930.mp4" type="video/mp4" />
                  </video>
                </div>
            ) : (
              <div 
                className="h-full w-full bg-cover bg-center transition-transform duration-[10s] hover:scale-110"
                  style={{ backgroundImage: 'url("https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/mhi-1768062257429.png?width=8000&height=8000&resize=contain")' }}
              />
            )}
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col items-center"
        >
            <div className="mb-6 h-24 w-24 md:h-32 md:w-32 relative overflow-hidden rounded-full border-2 border-primary/50 backdrop-blur-sm shadow-xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/55D7DFDB-95A1-4994-9227-044842B9795E-1767713898800.png?width=8000&height=8000&resize=contain"
                alt="Roast N Toast Logo"
                fill
                className="object-cover"
              />
            </div>
            
            <h1 className="mb-8 text-4xl sm:text-6xl md:text-8xl font-bold font-display flex items-center justify-center flex-wrap gap-x-4 md:gap-x-8">
              <span style={{ color: '#E0B12D' }}>ROAST</span>
              <span className="inline-flex items-center justify-center rounded-full border-[4px] md:border-[10px] border-[#1F7A2E] text-[#1F7A2E] w-[1.1em] h-[1.1em] text-[0.8em] leading-none shrink-0">
                N
              </span>
              <span style={{ color: '#B01616' }}>TOAST</span>
            </h1>

            <div className={`px-4 py-3 md:px-12 md:py-6 rounded-xl backdrop-blur-md shadow-lg transition-all duration-500 ${
              isDark 
                ? 'bg-black/40 border border-white/10' 
                : 'bg-white/40 border border-black/5'
            }`}>
              <p className={`max-w-xl text-sm sm:text-lg md:text-xl uppercase tracking-[0.2em] md:tracking-[0.3em] ${isDark ? 'text-neon-red' : 'text-black'}`}>
                {isDark ? "CLUB | KITCHEN" : "Fine Continental & Indian Cuisine"}
              </p>
            </div>


            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12"
          >
            <div className="h-16 w-[1px] bg-primary animate-bounce mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
