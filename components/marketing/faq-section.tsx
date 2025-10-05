"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Wie lange dauert die Entwicklung einer Website?",
    answer:
      "Die Entwicklungsdauer hängt vom Projektumfang ab. Eine einfache Landing Page kann in 2–3 Wochen fertig sein, während komplexe Webanwendungen 2–3 Monate oder länger benötigen. Nach einem unverbindlichen Erstgespräch können wir einen realistischen Zeitplan erstellen.",
  },
  {
    question: "Welche Technologien nutzt ihr?",
    answer:
      "Wir setzen auf moderne, zukunftssichere Technologien wie React, Next.js, TypeScript und Tailwind CSS. Für Content-Management verwenden wir häufig Headless CMS wie Sanity. Die genaue Tech-Stack-Wahl richtet sich nach Ihren Anforderungen.",
  },
  {
    question: "Bietet ihr auch Wartung und Support an?",
    answer:
      "Ja, wir bieten flexible Wartungsverträge an. Von kleinen Updates bis zu kontinuierlicher technischer Betreuung – wir stellen sicher, dass Ihre Website sicher, aktuell und performant bleibt.",
  },
  {
    question: "Wie sieht der Ablauf eines Projekts aus?",
    answer:
      "Nach dem Erstgespräch erstellen wir ein Konzept und einen Kostenvoranschlag. Bei Beauftragung folgen Design-Phase, Entwicklung, Testing und schließlich der Go-Live. Sie werden in jeder Phase eingebunden und erhalten regelmäßige Updates.",
  },
  {
    question: "Was kostet eine Website bei Tilulit?",
    answer:
      "Die Kosten variieren je nach Umfang und Komplexität. Eine einfache Website startet bei ca. 3.000 €, umfangreichere Projekte können 10.000 € und mehr kosten. Kontaktieren Sie uns für ein individuelles Angebot.",
  },
];

export function FAQSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-mono text-4xl md:text-5xl font-bold mb-4">
            Häufige <span className="text-gradient-violet">Fragen</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Antworten auf die wichtigsten Fragen rund um unsere Leistungen
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
