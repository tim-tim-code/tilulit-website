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
    title: "Absolute Cinema",
    subtitle: "Filmkultur verbinden",
    description:
      "Ein Projekt, das soziale Events rund um Film organisiert. Wir unterstützen beim Aufbau einer stabilen Online-Präsenz – damit Film und Gemeinschaft sichtbarer werden.",
    tags: ["Events", "Community", "Kultur"],
  },
];

export function Projects() {
  return (
    <section id="projekte" className="py-16 px-4 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Unsere Projekte
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Einblicke in erfolgreiche Projekte, die wir begleiten durften
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="soft-shadow border-0 flex flex-col">
              <CardHeader>
                <div className="mb-2">
                  <div className="text-sm font-mono text-primary mb-1">
                    {project.subtitle}
                  </div>
                  <CardTitle className="text-2xl mb-3">{project.title}</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-secondary/30 text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="w-full">
                  Projekt ansehen <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
