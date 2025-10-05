"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Linkedin, Instagram, Youtube } from "lucide-react";
import { useState } from "react";

const footerLinks = {
  services: [
    { name: "Webdesign", href: "#" },
    { name: "IT-Lösungen", href: "#" },
    { name: "Beratung", href: "#" },
  ],
  company: [
    { name: "Über uns", href: "#" },
    { name: "Kontakt", href: "#kontakt" },
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-warm border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Image
              src="/logo.png"
              alt="Tilulit Logo"
              width={120}
              height={40}
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Wir gestalten digitale Lösungen, die Menschen verbinden – klar,
              ruhig und wirkungsvoll.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold mb-4 text-sm">
              Leistungen
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold mb-4 text-sm">
              Unternehmen
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading font-semibold mb-4 text-sm">
              Newsletter
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Bleib auf dem Laufenden mit neuen Projekten und Insights.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Deine E-Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 rounded-xl border border-input bg-white/80 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
              />
              <Button size="sm" onClick={() => console.log("Subscribe:", email)}>
                →
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Tilulit. Alle Rechte vorbehalten.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="w-8 h-8 rounded-full bg-foreground/5 hover:bg-foreground/10 flex items-center justify-center transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-4 h-4 text-foreground/60" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
