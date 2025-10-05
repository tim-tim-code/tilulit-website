import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "DaLinSi",
    subtitle: "Gemeinsam helfen",
    description:
      "Eine Non-Profit-Organisation, die Spenden für Bildung und Kinderhilfe sammelt. Wir haben eine Website geschaffen, die Vertrauen weckt – mit klaren Informationen, einfachen Spendenwegen und einer warmen Gestaltung.",
    tags: ["Non-Profit", "Spenden", "Bildung"],
  },
  {
    title: "Major Dreams",
    subtitle: "Mode mit Vision",
    description:
      "Eine junge Modemarke, die Professionalität und Haltung zeigen will. Wir entwickelten ein cleanes Design, das Mode und Marke verbindet – schlicht, aber mit Charakter.",
    tags: ["Mode", "E-Commerce", "Branding"],
  },
  {
    title: "PianoFlow",
    subtitle: "Musikunterricht organisiert",
    description:
      "Ein Buchungssystem für Klavierschüler, das den Unterricht vereinfacht. Schüler können selbst Termine buchen – praktisch und zeitsparend für beide Seiten.",
    tags: ["Buchungssystem", "Bildung", "Musik"],
  },
];

export function Projects() {
  return (
    <section id="projekte" className="py-16 px-4 md:py-24 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 soft-shadow-lg">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Unsere Projekte
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Einblicke in erfolgreiche Projekte, die wir begleiten durften
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="p-6 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 hover:shadow-md transition-all flex flex-col h-full">
                <div className="mb-2">
                  <div className="text-sm font-mono text-primary mb-1">
                    {project.subtitle}
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-3">{project.title}</h3>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-white/60 text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="w-full bg-white/40 hover:bg-white/60">
                  Projekt ansehen <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
