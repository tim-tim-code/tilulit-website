import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Palette, Wrench, Search, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Webdesign & Umsetzung",
    description:
      "Vom Entwurf bis zum Launch – Websites, die einfach funktionieren und gut aussehen.",
  },
  {
    icon: Wrench,
    title: "Technische Betreuung",
    description:
      "Wir kümmern uns um Updates, Sicherheit und Support – ruhig im Hintergrund.",
  },
  {
    icon: Search,
    title: "SEO & Sichtbarkeit",
    description:
      "Wir helfen, dass deine Seite gefunden wird – mit Struktur, Geduld und gesundem Menschenverstand.",
  },
  {
    icon: Lightbulb,
    title: "Individuelle Lösungen",
    description:
      "Wenn du eine besondere Idee hast – wir finden einen Weg, sie digital umzusetzen.",
  },
];

export function Services() {
  return (
    <section className="py-16 px-4 md:py-24 bg-warm-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vier Bereiche, mit denen wir euch unterstützen
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="soft-shadow border-0">
              <CardHeader>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
