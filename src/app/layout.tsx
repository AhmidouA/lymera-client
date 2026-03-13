// src/app/layout.tsx
import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import MobileNav from "@/components/layout/MobileNav";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { jsonLdBeautySalon } from "@/lib/seo";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Institut Lymera — Épilation Laser, Onglerie & Drainage à Jacou",
  description:
    "Institut Lymera à Jacou (34830) — Épilation laser définitive V2 Corpoderm, onglerie haute précision, drainage lymphatique. Note 5/5 sur 39 avis. Réservez en ligne.",
  metadataBase: new URL("https://lymera.fr"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Anti-flash dark mode — doit être en premier */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('selectedTheme') || 'light';
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {/* JSON-LD SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBeautySalon) }}
        />
      </head>
      <body className={`${dmSans.variable} ${cormorant.variable} font-sans antialiased min-h-screen flex flex-col`}>
          <ThemeProvider>
            <Header />      {/* desktop lg+ */}
            <MobileNav />   {/* mobile < lg */}
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
      </body>
    </html>
  );
}