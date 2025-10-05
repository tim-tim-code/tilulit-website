"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import Link from "next/link";

export function HeroLavv() {
  return (
    <section className="relative py-8 px-4 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-white rounded-[2.5rem] p-8 md:p-12 soft-shadow-lg overflow-hidden"
        >
          {/* Hero Image Area */}
          <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-purple-100 to-orange-100" />

            {/* Logo Badge - Top Center */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2">
              <div className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-200 to-green-200 backdrop-blur-sm flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Tilulit Logo"
                  className="h-6 w-auto"
                />
              </div>
            </div>

            {/* Bottom Left Badge */}
            <div className="absolute bottom-4 left-4">
              <div className="px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-sm text-white text-xs font-medium">
                Studio
              </div>
            </div>

            {/* Bottom Right Year */}
            <div className="absolute bottom-4 right-4">
              <div className="text-sm font-medium text-gray-600">2025</div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
            {/* Left: Agency Name & Description */}
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Tilulit — Digitalagentur für Web & IT
              </h1>
            </div>

            {/* Right: Stats */}
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <div className="text-4xl font-bold mb-2">3x</div>
                <p className="text-sm text-muted-foreground mb-4">
                  Durchschnittliche Steigerung der Nutzer-Engagement durch
                  unsere Lösungen
                </p>
                <div className="flex -space-x-2">
                  {["S", "A", "L", "M"].map((initial, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-white flex items-center justify-center text-xs font-semibold"
                    >
                      {initial}
                    </div>
                  ))}
                </div>
              </div>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Users className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
