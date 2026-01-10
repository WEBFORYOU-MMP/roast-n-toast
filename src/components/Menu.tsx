"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

const menuItemsDay = [
  {
    title: "Food",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/FOOD-1768066425606.jpeg?width=8000&height=8000&resize=contain",
    description: "Exquisite fine dining featuring global culinary delights."
  },
  {
    title: "Drinks & Shakes",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/image-1768066392523.png?width=8000&height=8000&resize=contain",
    description: "Premium spirits, craft cocktails, and artisanal shakes."
  },
  {
    title: "Ambiance",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/AMBIANCE-1768066425853.png?width=8000&height=8000&resize=contain",
    description: "Immerse yourself in our royal lounge and vibrant nightlife."
  }
]

const menuItemsNight = [
  {
    title: "Food",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/FOOD-1768066425606.jpeg?width=8000&height=8000&resize=contain",
    description: "Exquisite fine dining featuring global culinary delights."
  },
  {
    title: "BAR",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/image-1768066392523.png?width=8000&height=8000&resize=contain",
    description: "Premium spirits, craft cocktails, and signature drinks."
  },
    {
      title: "Music",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/dj-mix-resized-1768072514624.jpg?width=8000&height=8000&resize=contain",
      description: "Live DJ sets and electrifying beats all night long."
    },
  {
    title: "Ambiance",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/AMBIANCE-1768066425853.png?width=8000&height=8000&resize=contain",
    description: "Immerse yourself in our royal lounge and vibrant nightlife."
  }
]

export function Menu() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const menuItems = isDark ? menuItemsNight : menuItemsDay

  return (
    <section id="menu" className="py-24 px-6 bg-background transition-colors duration-1000">
      <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-5xl md:text-4xl mb-16 tracking-[0.2em] font-bold ${isDark ? 'font-display text-white' : 'font-serif text-foreground'}`}
          >
            {isDark ? "Food + drinks + music + ambience = pub" : "Roast N Toast Day Specials ."}
          </motion.h2>

        <div className={`flex flex-wrap justify-center items-center gap-4 md:gap-6`}>
          {menuItems.map((item, index) => (
            <React.Fragment key={item.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center group"
              >
                <div className="relative mb-8">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className={`absolute -inset-4 rounded-full border-2 border-dashed ${isDark ? 'border-primary/50 shadow-[0_0_30px_rgba(255,49,49,0.3)]' : 'border-primary/20 shadow-xl'}`}
                  />
                  
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="relative h-48 w-48 md:h-56 md:w-56 overflow-hidden rounded-full cursor-pointer z-10"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="h-full w-full bg-cover bg-center transition-transform duration-700"
                      style={{ backgroundImage: `url("${item.image}")` }}
                    />
                    
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-center transition-opacity"
                    >
                      <span className="text-white font-display tracking-widest text-lg uppercase px-4 py-2 border border-white/50 bg-black/40">Explore</span>
                    </motion.div>
                  </motion.div>
                </div>

                <h3 className={`text-xl md:text-2xl mb-3 tracking-widest uppercase ${isDark ? 'font-display text-gold' : 'font-serif text-foreground'}`}>
                  {item.title}
                </h3>
                <p className="text-muted-foreground tracking-wide max-w-[200px] text-sm">
                  {item.description}
                </p>
              </motion.div>
              
              {index < menuItems.length - 1 && (
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.1 }}
                  className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-gold' : 'text-primary'} mx-2 md:mx-4`}
                >
                  +
                </motion.span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
