const steps = [
  {
    number: "01",
    title: "Gespräch",
    description: "Wir hören zu und verstehen dein Ziel.",
  },
  {
    number: "02",
    title: "Entwurf",
    description: "Wir zeigen, wie es aussehen und funktionieren kann.",
  },
  {
    number: "03",
    title: "Umsetzung",
    description: "Wir bauen die Seite Schritt für Schritt, transparent und gemeinsam.",
  },
  {
    number: "04",
    title: "Begleitung",
    description: "Nach dem Start sind wir weiter da, wenn du uns brauchst.",
  },
];

export function Process() {
  return (
    <section className="py-16 px-4 md:py-24 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 soft-shadow-lg">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Unser Ablauf
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparenter Prozess – einfach und menschlich erklärt
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 hover:shadow-md transition-all">
                  <div className="text-4xl font-heading font-bold text-primary mb-3">
                    {step.number}
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
