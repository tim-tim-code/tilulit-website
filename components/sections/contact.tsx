"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="kontakt" className="py-16 px-4 md:py-24 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 soft-shadow-lg">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Lust, gemeinsam etwas aufzubauen?
            </h2>
            <p className="text-lg text-muted-foreground">
              Schreib uns kurz, was du vorhast – wir antworten persönlich.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Nachricht
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Nachricht senden
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Wir melden uns in der Regel innerhalb eines Tages.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
