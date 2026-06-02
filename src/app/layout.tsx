import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
});

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Pohánka és Társa Kft. - Könyvelés és Adótanácsadás",
    template: "%s | Pohánka és Társa Kft.",
  },
  description: "Professzionális könyvelési szolgáltatások, bérszámfejtés és adótanácsadás KKV-k számára Pohánka Józsefné szakmai vezetésével.",
  keywords: ["könyvelés", "adótanácsadás", "bérszámfejtés", "Pohánka és Társa", "könyvelő iroda"],
  authors: [{ name: "Pohánka Józsefné" }],
  creator: "Pohánka és Társa Kft.",
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: "https://konyveles.pohankaestarsa.com",
    title: "Pohánka és Társa Kft. - Könyvelés és Adótanácsadás",
    description: "Megbízható könyvelési háttér az Ön vállalkozásának.",
    siteName: "Pohánka Könyvelés",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pohánka és Társa Kft. - Könyvelés",
    description: "Profi könyvelési szolgáltatások és adótanácsadás.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hu"
      className={`${inter.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans text-slate-900 bg-slate-50">
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
