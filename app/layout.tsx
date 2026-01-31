import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://tortimex.com.mx"),
  title: "Tortimex | Productos de Maíz de Alta Calidad | Jalisco, México",
  description:
    "Tortimex es líder en la producción y distribución de tortillas, masa y totopos de alta calidad en Jalisco.",
  keywords: [
    "tortillas",
    "masa",
    "totopos",
    "maíz",
    "Jalisco",
    "México",
    "Guadalajara",
    "Tlaquepaque",
    "tortillería",
    "molino",
    "insumos para tortillería",
    "distribución",
  ],
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "TORTIMEX | Productos de Maíz de Alta Calidad",
    description:
      "Producción y distribución de tortillas, masa y totopos en Jalisco, México.",
    url: "https://tortimex.com.mx",
    siteName: "Tortimex",
    locale: "es_MX",
    type: "website",
  },

  /** 🔥 FAVICONS PROFESIONALES MULTI-DISPOSITIVO */
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },

      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },

      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },

      { url: "/icon.svg", type: "image/svg+xml" },
    ],

    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],

    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },

  manifest: "/site.webmanifest",

  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
