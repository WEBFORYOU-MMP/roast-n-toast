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
            <Link href="/#menu" className="hover:text-primary transition-colors">Menu</Link>
            <Link href="/events" className="hover:text-primary transition-colors">Events</Link>
            <Link href="/offers" className="hover:text-primary transition-colors">Offers</Link>
            <Link href="/music-and-socials" className="hover:text-primary transition-colors">Music & Socials</Link>
            <Link href="/#contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="https://www.google.com/viewer/chooseprovider?mid=/g/11q3z8s108&g2lbs=AIBNGdWva29D1BZGmFfX3IzOeQp9ievcWKu11OEHFFd-ZiIjd2LSRnWg7fprGnDSbleihDAMr3bA44MEOo3iWYQ3yaTLKfNiNbm88ctnvNnNqn0dMgyYesY%3D&hl=en-IN&gl=in&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&utm_source=tactile&gei=5IhiaeekCc-e4-EPguDS2Ak&ei=5IhiaeekCc-e4-EPguDS2Ak&fo_s=OA&opi=79508299&orderType=1&ebb=1&cs=0&foub=mcpp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E0B12D] text-black px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#E0B12D]/90 transition-all shadow-[0_0_15px_rgba(224,177,45,0.3)] hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              Order Now
            </Link>
            <ThemeToggle />
          </div>
        </div>
    </motion.nav>
  )
}
