"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <div className="flex items-center gap-4 bg-muted/50 p-1 rounded-full border border-border/50">
      <button
        onClick={() => setTheme("light")}
        className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-500 relative ${
          !isDark ? "text-primary-foreground font-medium" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {!isDark && (
          <motion.div
            layoutId="toggle-bg"
            className="absolute inset-0 bg-primary rounded-full shadow-lg"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <Sun className={`w-4 h-4 relative z-10 ${!isDark ? "animate-pulse" : ""}`} />
        <span className="relative z-10 text-sm tracking-wider">☀️ Day</span>
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-500 relative ${
          isDark ? "text-primary-foreground font-medium" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {isDark && (
          <motion.div
            layoutId="toggle-bg"
            className="absolute inset-0 bg-primary rounded-full shadow-lg"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <Moon className={`w-4 h-4 relative z-10 ${isDark ? "animate-pulse" : ""}`} />
        <span className="relative z-10 text-sm tracking-wider">🌙 Night</span>
      </button>
    </div>
  )
}
