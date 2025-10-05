import type { Metadata } from "next";
import { Inter, Manrope, Source_Code_Pro } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tilulit – Webdesign, Webentwicklung & IT-Dienstleistungen",
  description: "Moderne Webseiten und digitale Lösungen für Ihr Unternehmen. Professionelles Webdesign, Webentwicklung und IT-Beratung aus einer Hand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} ${manrope.variable} ${sourceCodePro.variable} font-sans`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
