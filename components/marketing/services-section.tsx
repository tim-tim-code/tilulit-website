"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Code, Palette, Settings } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Webdesign",
    description:
      "Wir gestalten ansprechende und nutzerfreundliche Interfaces, die Ihre Marke perfekt repräsentieren.",
    features: [
      "UI/UX Design",
      "Responsive Layouts",
      "Prototyping & Wireframes",
    ],
  },
  {
    icon: Code,
    title: "Webentwicklung",
    description:
      "Moderne, performante Webanwendungen mit neuesten Technologien – skalierbar und zukunftssicher.",
    features: [
      "React & Next.js",
      "TypeScript",
      "API-Integration",
    ],
  },
  {
    icon: Settings,
    title: "IT-Beratung",
    description:
      "Strategische Beratung für Ihre digitale Transformation. Wir finden die richtige Lösung für Ihr Business.",
    features: [
      "Technologie-Auswahl",
      "Performance-Optimierung",
      "Wartung & Support",
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ServicesSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-mono text-4xl md:text-5xl font-bold mb-4">
            Unsere <span className="text-gradient-violet">Leistungen</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Von der Idee bis zur fertigen Lösung – wir begleiten Ihr Projekt
            mit Expertise und Leidenschaft.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={item}>
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
