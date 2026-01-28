"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";

export function FloatingPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-[9999] flex items-end gap-3 pointer-events-none"
        >
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl p-4 max-w-xs pointer-events-auto relative group">
            <button
              onClick={() => setIsVisible(false)}
              className="absolute -top-2 -right-2 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full p-1 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors shadow-sm"
            >
              <X className="w-3 h-3" />
            </button>
            
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">Welcome to Roast N Toast!</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  How can we help you today? Check out our latest offers and events!
                </p>
                <div className="mt-3 flex gap-2">
                  <a 
                    href="/offers" 
                    className="text-[10px] font-medium bg-amber-500 hover:bg-amber-600 text-white px-3 py-1.5 rounded-full transition-colors"
                  >
                    View Offers
                  </a>
                  <button 
                    onClick={() => setIsVisible(false)}
                    className="text-[10px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 px-3 py-1.5 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                  >
                    Later
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
