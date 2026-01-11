"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

const ambienceData = [
  {
    day: {
        title: "Elegant Dining",
        text: "Experience the perfect blend of luxury and comfort in our meticulously designed dining spaces. Bright, natural lighting complements the warm, refined atmosphere.",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/N1-1768069191275.jpeg"
      },
    night: {
      title: "Nightlife Electrified",
      text: "As the sun sets, Roast N Toast transforms into Hyderabad's premier nightlife destination. High-energy beats, neon lights, and an electrifying atmosphere await.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/vxcgdxhb-1767709258232.jpeg"
    }
  },
    {
      day: {
        title: "Refined Flavours",
        text: "Our culinary artisans bring you the finest Italian and Indian cuisine, prepared with passion and served with elegance.",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/vcvc-1767709258240.jpeg"
      },
      night: {
        title: "Premium Bar Experience",
        text: "Indulge in our curated selection of fine wines, craft cocktails, and premium spirits. Our bartenders are masters of mixology, creating liquid art for your pleasure.",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/bfbb-v-1767709258234.jpeg"
      }
    },
      {
        day: {
          title: "Gourmet Platters",
          text: "Fun Place to Host. Experience the art of sharing with our exquisitely curated platters, featuring a premium selection of artisanal cheeses, seasonal fruits, and savory delights.",
          image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/PLATTERS-1768069833489.jpg"
        },
      night: {
        title: "Signature Sharing",
        text: "Elevate your evening with our signature sharing boards, perfectly crafted to complement your favorite wines and cocktails in our sophisticated lounge.",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/PLATTERS-1768069833489.jpg"
      }
    },
    {
      day: null,
      night: {
        title: "Music & Socials",
        text: "Experience the ultimate rhythm of the night with our resident DJs and live musical performances. From soulful melodies to high-energy beats, every night is a celebration.",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/Screenshot-2026-01-10-at-10.13.40-PM-1768065673924.png"
      }
    }

]

export function Ambience() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <section id="ambience" className="overflow-hidden bg-background">
      {ambienceData.map((item, index) => {
        const content = isDark ? item.night : item.day
        if (!content) return null
        
        const isEven = index % 2 === 0

        return (
          <div key={index} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} min-h-screen`}>
            {/* Image Side */}
            <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen overflow-hidden">
              <motion.div
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url("${content.image}")` }}
              />
            </div>

            {/* Text Side */}
            <div className={`w-full md:w-1/2 flex flex-col justify-center px-12 py-24 md:px-24 ${isDark ? 'bg-card' : 'bg-cream/30'}`}>
              <motion.div
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-primary font-display tracking-[0.4em] uppercase text-sm mb-4 block">
                  {isDark ? "The Night" : "The Day"}
                </span>
                <h3 className={`text-4xl md:text-6xl mb-8 tracking-wider ${isDark ? 'font-display text-white' : 'font-serif text-foreground'}`}>
                  {content.title}
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mb-12">
                  {content.text}
                </p>
              </motion.div>
            </div>
          </div>
        )
      })}

      {/* Bar & Drinks Visual Focus for Night Mode */}
      {isDark && (
        <section className="py-24 px-6 bg-black">
           <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/bv-vb-1767709258377.jpeg",
              "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/WhatsApp-Image-2026-01-06-at-19.47.42-1767709258235.jpeg",
              "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/vxcgdxhb-1767709258232.jpeg",
                "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/N1-1768069191275.jpeg"
            ].map((img, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="h-64 md:h-96 rounded-lg overflow-hidden relative group"
                >
                  <img src={img} alt="Drink" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </motion.div>
            ))}
          </motion.div>
        </section>
      )}
    </section>
  )
}
