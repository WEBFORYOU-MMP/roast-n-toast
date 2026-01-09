"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "./ThemeToggle"
import { motion, useScroll, useTransform } from "framer-motion"

export function Navbar() {
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(var(--background), 0)", "rgba(var(--background), 0.8)"]
  )
  const backdropFilter = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"])

  return (
    <motion.nav
      style={{ backgroundColor, backdropFilter }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between border-b border-transparent transition-colors duration-500"
    >
      <Link href="/" className="group">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-primary/20">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/55D7DFDB-95A1-4994-9227-044842B9795E-1767713898800.png?width=8000&height=8000&resize=contain"
                alt="Roast N Toast Logo"
                fill
                className="object-cover"
              />
            </div>
          <div className="flex flex-col">
            <span className="text-xl font-display tracking-[0.2em] font-bold group-hover:text-primary transition-colors">
              ROAST N TOAST
            </span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              Hyderabad
            </span>
          </div>
        </motion.div>
      </Link>

      <div className="flex items-center gap-8">
        <div className="hidden md:flex items-center gap-6 text-sm uppercase tracking-widest font-medium">
          <Link href="#menu" className="hover:text-primary transition-colors">Menu</Link>
          <Link href="#ambience" className="hover:text-primary transition-colors">Ambience</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>
        <ThemeToggle />
      </div>
    </motion.nav>
  )
}
