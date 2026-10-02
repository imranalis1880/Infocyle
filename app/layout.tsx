import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono, Poppins } from "next/font/google";
import React from "react";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://infocyle.com"),
  title: {
    default: "Infocyle | Technology Holding Company",
    template: "%s | Infocyle",
  },
  description:
    "Engineering the future of systems. Infocyle builds and scales intelligent platforms at the intersection of computational logic, education, and full-stack architecture.",
  keywords: [
    "Infocyle",
    "Vectra Labs",
    "EdTech",
    "Systems Architecture",
    "Technology Holding Company",
    "Deep Tech",
    "Computational Logic",
  ],
  authors: [{ name: "Infocyle Technologies" }],
  creator: "Infocyle Technologies",
  publisher: "Infocyle Technologies",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Infocyle | Technology Holding Company",
    description: "Engineering the future of systems.",
    url: "https://infocyle.com",
    siteName: "Infocyle",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/infocyle-logo-launch.jpg",
        width: 1200,
        height: 630,
        alt: "Infocyle Logo Launch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Infocyle | Technology Holding Company",
    description: "Engineering the future of systems.",
    images: ["/images/infocyle-logo-launch.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  verification: {
    // You can paste your Google Search Console verification code here if using the HTML tag method
    google: "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${spaceMono.variable} ${poppins.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        {/* Structured Data (JSON-LD) for Google Knowledge Graph & Organization indexing */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Infocyle",
              "url": "https://infocyle.com",
              "logo": "https://infocyle.com/logo.png",
              "description":
                "Technology holding company engineering intelligent systems, deep-tech platforms, and mobile-first EdTech curricula.",
              "founders": [
                { "@type": "Person", "name": "Imran Ali S", "jobTitle": "CEO" },
                { "@type": "Person", "name": "Sreerag PP", "jobTitle": "CTO" },
                { "@type": "Person", "name": "Farhan A", "jobTitle": "COO" },
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "infocyle.tech@gmail.com",
                "contactType": "Customer Support",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
