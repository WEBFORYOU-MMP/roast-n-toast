"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "./ThemeToggle"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { scrollY } = useScroll()

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(var(--background), 0)", "rgba(var(--background), 0.8)"]
  )
    const backdropFilter = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"])

    const [headerHeight, setHeaderHeight] = React.useState(0)
    const headerRef = React.useRef<HTMLElement>(null)

    React.useEffect(() => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight)
      }
    }, [])

      return (
        <>
          <motion.nav
            ref={headerRef}
            style={{ backgroundColor, backdropFilter }}
            className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between border-b border-white/10 transition-colors duration-500"
          >
              <Link href="/" className="group">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 overflow-hidden rounded-full border border-primary/20">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/55D7DFDB-95A1-4994-9227-044842B9795E-1767713898800.png?width=8000&height=8000&resize=contain"
                      alt="Roast N Toast Logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </Link>

            <div className="flex items-center gap-4 md:gap-8">
              <div className="hidden md:flex items-center gap-6 text-sm uppercase tracking-widest font-medium">
                  <Link href="/#menu" className="hover:text-primary transition-colors">Menu</Link>
                    <Link href="/events" className="hover:text-primary transition-colors">Events</Link>
                    <Link href="/offers" className="hover:text-primary transition-colors">Offers</Link>
                    <Link href="/music-and-socials" className="hover:text-primary transition-colors">
                    MUSIC SOCIALS
                  </Link>
                </div>
                  <div className="flex items-center gap-2 md:gap-4">
                    <a 
                      href="https://wa.me/918297977877?text=Hi%20Roast%20N%20Toast%20Team%20%F0%9F%91%8B%0AI%E2%80%99d%20like%20to%20reserve%20a%20table.%0AKindly%20confirm%20the%20availability.%0AThank%20you%21"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden lg:flex bg-[#E0B12D] text-black px-4 md:px-6 py-2 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-[#E0B12D]/90 transition-all shadow-[0_0_15px_rgba(224,177,45,0.3)] hover:scale-105 active:scale-95 whitespace-nowrap"
                    >
                      Reserve Now
                    </a>
                  <ThemeToggle />
                <button 
                  className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </motion.nav>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                style={{ top: headerHeight }}
                className="fixed left-0 right-0 z-40 bg-background/95 backdrop-blur-xl md:hidden flex flex-col items-center py-8 gap-6 text-lg xs:text-xl uppercase tracking-[0.2em] font-display border-b border-white/10 overflow-hidden"
              >
                <Link href="/#menu" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Menu</Link>
                    <Link href="/events" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Events</Link>
                    <Link href="/offers" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Offers</Link>
                      <Link href="/music-and-socials" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">MUSIC SOCIALS</Link>
                      <a 
                        href="https://wa.me/918297977877?text=Hi%20Roast%20N%20Toast%20Team%20%F0%9F%91%8B%0AI%E2%80%99d%20like%20to%20reserve%20a%20table.%0AKindly%20confirm%20the%20availability.%0AThank%20you%21"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#E0B12D] text-black px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#E0B12D]/90 transition-all shadow-[0_0_15px_rgba(224,177,45,0.3)] mt-4"
                        onClick={() => setIsOpen(false)}
                      >
                        Reserve Now
                      </a>
                  </motion.div>
              )}
          </AnimatePresence>
        </>
      )


}
