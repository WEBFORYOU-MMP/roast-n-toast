"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import Image from "next/image"
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
      <footer className={`py-12 md:py-16 px-6 border-t ${isDark ? 'bg-black border-white/10' : 'bg-cream/50 border-primary/10'}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          <div className="flex flex-col gap-6 sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 md:h-16 md:w-16 overflow-hidden rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1ce5c9de-8ddd-4715-9c1b-b453bb62ccf7/55D7DFDB-95A1-4994-9227-044842B9795E-1767713898800.png?width=8000&height=8000&resize=contain"
                    alt="Roast N Toast Logo"
                    fill
                    className="object-cover"
                  />
                </div>
              <span className="text-xl md:text-2xl font-display tracking-[0.2em] font-bold">ROAST N TOAST</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Experience the duality of premium dining and electrifying nightlife in the heart of Hyderabad.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://www.instagram.com/roastntoasthyd/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
              </a>
              <Facebook className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
            </div>
          </div>


        <div>
          <h4 className={`text-lg mb-6 tracking-widest uppercase ${isDark ? 'text-gold' : 'text-primary'}`}>Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li><a href="#menu" className="hover:text-primary transition-colors">Menu</a></li>
              <li><a href="#ambience" className="hover:text-primary transition-colors">Ambience</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Reservations</a></li>
              <li><a href="/events" className="hover:text-primary transition-colors">Events</a></li>
            </ul>
        </div>

        <div>
          <h4 className={`text-lg mb-6 tracking-widest uppercase ${isDark ? 'text-gold' : 'text-primary'}`}>Contact Us</h4>
          <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Madinaguda, Hyderabad</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@roastntoast.com</li>
          </ul>
        </div>

        <div>
          <h4 className={`text-lg mb-6 tracking-widest uppercase ${isDark ? 'text-gold' : 'text-primary'}`}>Hours</h4>
          <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
            <li className="flex justify-between"><span>Day Mode:</span> <span>11:00 AM - 06:00 PM</span></li>
            <li className="flex justify-between font-bold text-primary"><span>Night Mode:</span> <span>07:00 PM - 02:00 AM</span></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-muted text-center text-xs text-muted-foreground tracking-widest uppercase flex flex-col md:flex-row justify-between items-center gap-4">
        <span>© 2026 Roast N Toast. All Rights Reserved.</span>
        <span>Developed by <a href="#" className="hover:text-primary transition-colors">webforyou</a></span>
      </div>
    </footer>
  )
}
