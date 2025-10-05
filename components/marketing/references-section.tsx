"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const references = [
  {
    title: "E-Commerce Plattform",
    client: "Fashion Retailer GmbH",
    description:
      "Moderne Online-Shop-Lösung mit Payment-Integration, Produktverwaltung und responsivem Design.",
    tags: ["Next.js", "Stripe", "Sanity CMS"],
  },
  {
    title: "Corporate Website",
    client: "Tech Solutions AG",
    description:
      "Repräsentative Unternehmenswebsite mit Blog-System, mehrsprachiger Unterstützung und SEO-Optimierung.",
    tags: ["React", "TypeScript", "i18n"],
  },
  {
    title: "SaaS Dashboard",
    client: "Analytics Startup",
    description:
      "Datenvisualisierungs-Dashboard für komplexe Business-Metriken mit Echtzeit-Updates.",
    tags: ["React", "D3.js", "WebSockets"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ReferencesSection() {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-mono text-4xl md:text-5xl font-bold mb-4">
            Unsere <span className="text-gradient-violet">Referenzen</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Einblicke in erfolgreiche Projekte, die wir für unsere Kunden
            realisiert haben.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {references.map((reference) => (
            <motion.div key={reference.title} variants={item}>
              <Card className="h-full group cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{reference.title}</CardTitle>
                    <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardDescription className="text-sm font-medium text-primary">
                    {reference.client}
                  </CardDescription>
                  <CardDescription className="text-base mt-2">
                    {reference.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {reference.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
