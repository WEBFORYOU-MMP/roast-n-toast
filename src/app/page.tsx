"use client"

import * as React from "react"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Menu } from "@/components/Menu"
import { Ambience } from "@/components/Ambience"
import { Footer } from "@/components/Footer"
import { motion, useScroll, useSpring } from "framer-motion"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  React.useEffect(() => {
    const handleInteraction = () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch((err) => {
          console.warn(`Error attempting to enable full-screen mode: ${err.message}`)
        })
      }
      // Remove listeners after first successful attempt or even after one interaction 
      // to avoid repeatedly trying if blocked
      cleanup()
    }

    const cleanup = () => {
      window.removeEventListener("click", handleInteraction)
      window.removeEventListener("touchstart", handleInteraction)
      window.removeEventListener("scroll", handleInteraction)
    }

    window.addEventListener("click", handleInteraction)
    window.addEventListener("touchstart", handleInteraction)
    window.addEventListener("scroll", handleInteraction)

    return cleanup
  }, [])

  return (
    <main className="relative min-h-screen selection:bg-primary selection:text-primary-foreground">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <section className="relative">
        <Hero />
      </section>

      <section className="relative">
        <Menu />
      </section>

      <section className="relative">
        <Ambience />
      </section>

      <Footer />
    </main>
  )
}
