"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  delay?: number;
}

export function ProjectCard({
  title,
  subtitle,
  description,
  gradient,
  delay = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.05] soft-shadow hover:shadow-xl"
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 ${gradient}`} />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-all duration-300 group-hover:from-black/70 group-hover:via-black/30" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
        <div className="transform transition-all duration-300 group-hover:translate-y-[-8px]">
          <p className="text-primary/90 text-sm font-medium mb-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
            {subtitle}
          </p>
          <h3 className="font-heading text-2xl font-bold text-white mb-2">
            {title}
          </h3>
          <p className="text-white/80 text-sm leading-relaxed mb-4 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-300">
            {description}
          </p>
          <div className="flex items-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
            <span className="text-sm font-medium">Mehr erfahren</span>
            <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
