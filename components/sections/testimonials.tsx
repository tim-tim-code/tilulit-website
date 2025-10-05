import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Es ist selten, dass Technik so einfach erklärt wird. Tilulit hat uns durch den ganzen Prozess begleitet.",
    author: "Sarah M.",
    role: "DaLinSi Team",
    avatar: "S",
  },
  {
    quote:
      "Wir wollten eine Website, die unsere Vision zeigt. Tilulit hat genau das geschaffen – klar und professionell.",
    author: "Alex K.",
    role: "Major Dreams",
    avatar: "A",
  },
  {
    quote:
      "Das Buchungssystem vereinfacht meinen Unterricht enorm. Meine Schüler können jetzt selbst Termine buchen – super praktisch.",
    author: "Laura T.",
    role: "PianoFlow",
    avatar: "L",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 px-4 md:py-24 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 soft-shadow-lg">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Was unsere Kunden sagen
            </h2>
            <p className="text-lg text-muted-foreground">
              Ehrliches Feedback von echten Projekten
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 hover:shadow-md transition-all">
                <Quote className="w-10 h-10 text-primary/30 mb-6" />
                <p className="text-gray-800 text-lg leading-relaxed mb-8 font-medium">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center font-heading font-semibold text-primary">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
