"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "1",
    title: "Website Design",
    description:
      "Schöne, funktionale Websites – für Marken, Vereine und kreative Projekte.",
    gradient: "from-slate-200 via-gray-100 to-slate-100",
  },
  {
    number: "2",
    title: "Web Application",
    description:
      "Maßgeschneiderte Web-Apps mit modernen Technologien wie React und Next.js.",
    gradient: "from-cyan-200 via-blue-100 to-sky-100",
  },
  {
    number: "3",
    title: "Branding Digital",
    description:
      "Konsistente digitale Markenidentität – von Logo bis zur kompletten Website.",
    gradient: "from-blue-300 via-indigo-200 to-blue-200",
  },
  {
    number: "4",
    title: "IT Solutions",
    description:
      "Technische Beratung, Systeme und Lösungen für euren digitalen Erfolg.",
    gradient: "from-gray-300 via-slate-200 to-gray-200",
  },
  {
    number: "5",
    title: "Platform & Services",
    description:
      "Komplexe Plattformen – von Buchungssystemen bis zu Community-Portalen.",
    gradient: "from-sky-200 via-cyan-100 to-blue-100",
  },
];

export function ServicesLavv() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Unsere Leistungen
          </h2>
          <Button variant="outline" className="hidden md:flex items-center gap-2 rounded-full">
            Alle Leistungen
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((service) => (
            <div
              key={service.number}
              className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`}
              >
                {/* 3D Element Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center opacity-60">
                  <div className="w-24 h-24 bg-white/30 backdrop-blur-sm rounded-2xl transform rotate-12 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* Number Badge */}
                <div className="text-sm font-mono text-white/60">
                  {"{"} {service.number} {"}"}
                </div>

                {/* Bottom Content */}
                <div>
                  <h3 className="font-heading text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <button className="flex items-center gap-2 text-white text-sm font-medium group-hover:gap-3 transition-all">
                    Mehr erfahren
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
