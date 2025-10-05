"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "./project-card";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "DaLinSi",
    subtitle: "Gemeinsam helfen",
    description:
      "Non-Profit-Projekt, das Spenden für Bildung sammelt. Eine Website, die Vertrauen weckt.",
    gradient: "bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100",
  },
  {
    title: "Major Dreams",
    subtitle: "Mode mit Vision",
    description:
      "Moderne Modemarke mit professionellem Design. Schlicht, aber mit Charakter.",
    gradient: "bg-gradient-to-br from-amber-100 via-orange-50 to-rose-100",
  },
  {
    title: "PianoFlow",
    subtitle: "Klavierunterricht organisieren",
    description:
      "Ein Buchungssystem für Klavierschüler. Termine planen, Fortschritte verfolgen – alles an einem Ort.",
    gradient: "bg-gradient-to-br from-violet-100 via-pink-50 to-rose-100",
  },
];

export function Hero() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative min-h-[90vh] px-4 py-16 md:py-24 bg-warm overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="block text-foreground">Design.</span>
                <span className="block text-foreground">IT-Lösungen.</span>
                <span className="block text-primary">Beratung.</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Wir helfen Marken, Vereinen und Projekten, mit ruhigen, klaren
                Websites sichtbar zu werden.
              </p>
            </div>

            {/* CTA Input */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
              <input
                type="email"
                placeholder="Buche deinen Termin"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 rounded-2xl border border-input bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-base"
              />
              <Button
                size="lg"
                className="whitespace-nowrap group"
                onClick={() => {
                  // TODO: Handle booking
                  console.log("Email:", email);
                }}
              >
                Los geht's
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Kostenlose Erstberatung · Keine Verpflichtungen
            </p>
          </motion.div>

          {/* Right Column - Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <div className="lg:grid lg:grid-cols-2 lg:gap-6 space-y-6 lg:space-y-0">
              <ProjectCard {...projects[0]} delay={0.2} />
              <ProjectCard {...projects[1]} delay={0.3} />
            </div>
            <ProjectCard {...projects[2]} delay={0.4} />
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </section>
  );
}
