"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import Link from "next/link"

const ambienceData = [
  {
    day: {
        title: "Elegant Dining",
        text: "Experience the perfect blend of luxury and comfort in our meticulously designed dining spaces. As one of the Best restaurants to visit in Hyderabad with family, we provide bright, natural lighting that complements the warm, refined atmosphere.",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/N1-1768069191275.jpeg"
      },
    night: {
      title: "Nightlife Electrified",
      text: "As the sun sets, Roast N Toast transforms into the Best bar and restaurant to visit in Hyderabad. High-energy beats, neon lights, and an electrifying atmosphere make us the Top restaurants to visit in Hyderabad for nightlife.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/night-electrified-1768074449884.jpeg?width=8000&height=8000&resize=contain"
    }
  },
    {
      day: {
        title: "Refined Flavours",
        text: "Our culinary artisans bring you the Best places to eat in Hyderabad, featuring the finest Italian and Indian cuisine, prepared with passion and served with elegance for all our guests.",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/vcvc-1767709258240.jpeg"
      },
        night: {
          title: "Premium Bar Experience",
          text: "Indulge in our curated selection of fine wines and craft cocktails. Known as the Best restaurants to visit in Hyderabad at night, our mixologists create liquid art for your pleasure.",
          image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1769597154532.png?width=8000&height=8000&resize=contain"
        }
    },
        {
          day: {
            title: "Gourmet Platters",
            text: "Experience the art of sharing with our exquisitely curated platters. We are one of the Popular restaurants in Hyderabad for those seeking artisanal cheeses and savory delights.",
            image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/PLATTERS-1768069833489.jpg"
          },
        night: {
          title: "Signature Sharing",
          text: "Elevate your evening with our signature sharing boards, making us one of the Best restaurants to visit in Hyderabad for couples seeking a sophisticated lounge experience.",
          image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/non-veg-platter-500x500-1768074632795.webp?width=8000&height=8000&resize=contain"
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
            <div className={`w-full md:w-1/2 flex flex-col justify-center px-6 py-12 sm:px-12 sm:py-16 md:px-24 ${isDark ? 'bg-card' : 'bg-cream/30'}`}>
              <motion.div
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-primary font-display tracking-[0.4em] uppercase text-xs sm:text-sm mb-3 sm:mb-4 block">
                  {isDark ? "The Night" : "The Day"}
                </span>
                <h3 className={`text-2xl sm:text-3xl md:text-6xl mb-4 sm:mb-6 md:mb-8 tracking-wider ${isDark ? 'font-display text-white' : 'font-serif text-foreground'}`}>
                  {content.title}
                </h3>
                <p className="text-sm sm:text-base md:text-xl text-muted-foreground leading-relaxed max-w-lg mb-6 sm:mb-8 md:mb-12">
                  {content.text}
                </p>
              </motion.div>
            </div>
          </div>
        )
      })}

        {/* Bar & Drinks Visual Focus for Night Mode */}
          {isDark && (
            <section className="py-16 sm:py-24 bg-black overflow-hidden">
               <div className="flex whitespace-nowrap">
                 <motion.div 
                  animate={{ x: [0, "-50%"] }}
                  transition={{ 
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="flex gap-4 px-2"
                >
                  {[
                    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/bv-vb-1767709258377.jpeg",
                    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/WhatsApp-Image-2026-01-06-at-19.47.42-1767709258235.jpeg",
                    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/vxcgdxhb-1767709258232.jpeg",
                    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/N1-1768069191275.jpeg",
                    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/bv-vb-1767709258377.jpeg",
                    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/WhatsApp-Image-2026-01-06-at-19.47.42-1767709258235.jpeg",
                    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/vxcgdxhb-1767709258232.jpeg",
                    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/N1-1768069191275.jpeg"
                  ].map((img, i) => (
                      <div 
                        key={i}
                        className="h-48 xs:h-64 md:h-96 w-[240px] xs:w-[300px] md:w-[450px] flex-shrink-0 rounded-lg overflow-hidden relative group"
                      >
                        <img src={img} alt="Drink" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      </div>
                  ))}
                </motion.div>
              </div>
            </section>
          )}

          {!isDark && (
            <section className="py-16 sm:py-24 bg-cream/30 border-t border-primary/10 overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 mb-12 sm:mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <span className="text-primary font-display tracking-[0.4em] uppercase text-xs sm:text-sm mb-3 sm:mb-4 block">
                    Events & Celebrations
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground mb-4">
                    Fun Place To Host
                  </h2>
                  <div className="h-1 w-16 sm:w-20 bg-primary/30 mx-auto" />
                </motion.div>
              </div>
                
              <div className="flex whitespace-nowrap">
                <motion.div 
                  animate={{ x: [0, "-50%"] }}
                  transition={{ 
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="flex gap-4 sm:gap-6 px-3"
                >
                  {[
                    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/WhatsApp-Image-2026-01-09-at-23.29.51-1-1768072767209.jpeg",
                    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/WhatsApp-Image-2026-01-09-at-23.29.51-2-1768072767986.jpeg",
                    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/WhatsApp-Image-2026-01-09-at-23.29.51-3-1768072767518.jpeg",
                    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/WhatsApp-Image-2026-01-09-at-23.29.51-4-1768072768179.jpeg",
                    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/WhatsApp-Image-2026-01-09-at-23.29.51-5-1768072768336.jpeg",
                    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/WhatsApp-Image-2026-01-09-at-23.29.51-1768072926653.jpeg",
                    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/WhatsApp-Image-2026-01-09-at-23.29.51-1-1768072767209.jpeg",
                    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/WhatsApp-Image-2026-01-09-at-23.29.51-2-1768072767986.jpeg",
                    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/WhatsApp-Image-2026-01-09-at-23.29.51-3-1768072767518.jpeg",
                    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/WhatsApp-Image-2026-01-09-at-23.29.51-4-1768072768179.jpeg",
                    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/WhatsApp-Image-2026-01-09-at-23.29.51-5-1768072768336.jpeg",
                    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/WhatsApp-Image-2026-01-09-at-23.29.51-1768072926653.jpeg"
                  ].map((img, i) => (
                    <div 
                      key={i}
                      className="aspect-[16/9] h-48 sm:h-64 md:h-80 flex-shrink-0 rounded-xl overflow-hidden shadow-lg border border-primary/10 bg-white"
                    >
                      <img src={img} alt="Host your event" className="h-full w-full object-contain" />
                    </div>
                  ))}
                </motion.div>
              </div>
          </section>
        )}

        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Roast N Toast is consistently ranked among the <span className="text-primary font-medium">Best restaurants to visit in Hyderabad</span> and <span className="text-primary font-medium">Top restaurants to visit in Hyderabad</span>. Whether you&apos;re looking for the <span className="text-primary font-medium">Best restaurant with bar in Hyderabad</span> or <span className="text-primary font-medium">Must visit restaurants in Hyderabad</span>, we offer an unparalleled experience. Come discover why we are a top choice for those seeking a premium <span className="text-primary font-medium">restaurant and bar</span> in the city.
          </p>
        </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-12 text-center bg-background"
      >
        <Link
          href="/ambiance"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg tracking-widest hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(224,177,45,0.3)]"
        >
          EXPLORE AMBIANCE
        </Link>
      </motion.div>
    </section>
  )
}
