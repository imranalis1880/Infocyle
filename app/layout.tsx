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

export const metadata: Metadata = {
  title: "Infocyle | Technology Holding Company",
  description: "Engineering the future of systems. Infocyle builds and scales intelligent platforms at the intersection of computational logic, education, and full-stack architecture.",
  keywords: ["Infocyle", "Vectra Labs", "EdTech", "Systems Architecture", "Technology Holding Company"],
  openGraph: {
    title: "Infocyle",
    description: "Engineering the future of systems.",
    url: "https://infocyle.com",
    siteName: "Infocyle",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
