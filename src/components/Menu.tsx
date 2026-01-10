"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

const menuItems = [
  {
    title: "Drinks & Shakes",
    image: "https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=2000&auto=format&fit=crop",
    description: "Premium spirits, craft cocktails, and artisanal shakes."
  },
  {
    title: "Food",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000&auto=format&fit=crop",
    description: "Exquisite fine dining featuring global culinary delights."
  },
  {
    title: "Ambiance",
    image: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=2000&auto=format&fit=crop",
    description: "Immerse yourself in our royal lounge and vibrant nightlife."
  }
]

export function Menu() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <section id="menu" className="py-24 px-6 bg-background transition-colors duration-1000">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-5xl md:text-4xl mb-16 tracking-[0.2em] font-bold ${isDark ? 'font-display text-white' : 'font-serif text-foreground'}`}
        >
          Roast N Toast Day Specials .
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center group"
            >
              <div className="relative mb-8">
                {/* Rotating border/glow */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className={`absolute -inset-4 rounded-full border-2 border-dashed ${isDark ? 'border-primary/50 shadow-[0_0_30px_rgba(255,49,49,0.3)]' : 'border-primary/20 shadow-xl'}`}
                />
                
                {/* Image Circle */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="relative h-64 w-64 md:h-80 md:w-80 overflow-hidden rounded-full cursor-pointer z-10"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="h-full w-full bg-cover bg-center transition-transform duration-700"
                    style={{ backgroundImage: `url("${item.image}")` }}
                  />
                  
                    {/* Overlay on hover */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-center transition-opacity"
                    >
                      <span className="text-white font-display tracking-widest text-lg uppercase px-4 py-2 border border-white/50 bg-black/40">Explore</span>
                    </motion.div>
                </motion.div>
              </div>

              <h3 className={`text-2xl md:text-3xl mb-3 tracking-widest uppercase ${isDark ? 'font-display text-gold' : 'font-serif text-foreground'}`}>
                {item.title}
              </h3>
              <p className="text-muted-foreground tracking-wide max-w-[250px]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
