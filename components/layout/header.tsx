import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Leistungen", href: "#leistungen" },
  { name: "Projekte", href: "#projekte" },
  { name: "Ablauf", href: "#ablauf" },
  { name: "Kontakt", href: "#kontakt" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-warm/95 backdrop-blur supports-[backdrop-filter]:bg-warm/80">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="transition-opacity hover:opacity-80">
            <Image
              src="/logo.png"
              alt="Tilulit Logo"
              width={120}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Link
              href="#kontakt"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors hidden sm:block"
            >
              Login
            </Link>
            <Button asChild size="sm">
              <Link href="#kontakt">Termin buchen</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
