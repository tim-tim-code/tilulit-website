import { Heart, Shield, MessageCircle } from "lucide-react";

const values = [
  {
    icon: MessageCircle,
    title: "Verständlich",
    description: "Wir erklären, statt zu überfordern.",
  },
  {
    icon: Shield,
    title: "Zuverlässig",
    description: "Klare Absprachen, pünktliche Ergebnisse.",
  },
  {
    icon: Heart,
    title: "Ehrlich",
    description: "Keine versteckten Kosten, kein Fachjargon.",
  },
];

export function Philosophy() {
  return (
    <section className="py-16 px-4 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg md:text-xl leading-relaxed text-foreground mb-8">
            Tilulit ist ein kleines Studio für Webdesign und IT-Lösungen.
            <br />
            Wir glauben, dass Technik ruhig, verständlich und schön sein kann.
            <br />
            Unser Ziel: Projekte online sichtbar machen – ohne Schnickschnack,
            aber mit Seele.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
