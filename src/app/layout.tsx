import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import MobileNav from "@/components/layout/MobileNav";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";
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
  metadataBase: new URL("https://lymera.fr"),
  title: {
    default: "Institut Lymera — Épilation Laser, Onglerie & Drainage à Jacou",
    template: "%s | Lymera",
  },
  description:
    "Institut Lymera à Jacou (34830) — Épilation laser définitive V2 Corpoderm, onglerie haute précision, drainage lymphatique. À 10 min de Montpellier. Note 5/5 sur Planity.",
  keywords: [
    "épilation laser Jacou",
    "épilation laser Montpellier",
    "onglerie Jacou",
    "drainage lymphatique Jacou",
    "institut esthétique Jacou",
    "Lymera",
    "épilation définitive Montpellier",
    "prothésiste ongulaire Jacou",
  ],
  authors: [{ name: "Institut Lymera" }],
  creator: "Institut Lymera",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Institut Lymera",
    images: [{ url: "/og/default.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [
      { url: "apple-touch-icon.png", sizes: "16x16" },
      { url: "apple-touch-icon.png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  verification: {
    google: "À_REMPLIR_APRÈS_DÉPLOIEMENT", // Google Search Console
  },
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
      </head>
      <body className={`${dmSans.variable} ${cormorant.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <ThemeProvider>
          <Header />
          <MobileNav />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}