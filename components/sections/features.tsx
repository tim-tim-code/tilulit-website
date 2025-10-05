import { Check } from "lucide-react";

const features = [
  {
    title: "Verständlich",
    description:
      "Wir erklären technische Lösungen in einfachen Worten – ohne Fachjargon, dafür mit Geduld.",
  },
  {
    title: "Zuverlässig",
    description:
      "Klare Absprachen und pünktliche Ergebnisse. Wir halten, was wir versprechen.",
  },
  {
    title: "Flexibel",
    description:
      "Ob kleines Projekt oder große Vision – wir passen uns euren Bedürfnissen an.",
  },
];

export function Features() {
  return (
    <section className="py-16 px-4 md:py-24 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 soft-shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text & Features */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Kompetenzen, die dein Projekt{" "}
              <span className="text-primary">voranbringen</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Wir verbinden technisches Know-how mit einem menschlichen Ansatz.
              Eure Ziele stehen im Mittelpunkt – wir liefern die passende
              Lösung.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image with Stats */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden soft-shadow-lg">
              {/* Placeholder for image - replace with actual image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-violet-100 via-purple-50 to-pink-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-4xl">✨</span>
                  </div>
                  <p className="text-foreground/60 text-sm">
                    Professionelle Lösungen
                  </p>
                </div>
              </div>

              {/* Stats Overlays */}
              <div className="absolute top-8 left-8 bg-emerald-400 text-white px-4 py-3 rounded-xl soft-shadow">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-xs uppercase tracking-wide">
                  Jahre Erfahrung
                </div>
              </div>

              <div className="absolute bottom-8 right-8 bg-violet-400 text-white px-4 py-3 rounded-xl soft-shadow">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-xs uppercase tracking-wide">
                  Projekte
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
