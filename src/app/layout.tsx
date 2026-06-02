import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
