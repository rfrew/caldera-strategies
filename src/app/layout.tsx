import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Caldera Strategies | Policy Design. Governance. Advocacy. Evaluation.",
    template: "%s | Caldera Strategies",
  },
  description:
    "Collaborative approaches to transformative public policy. Caldera Strategies partners with public agencies, nonprofits, and community leaders to design, strengthen, and transform public policy.",
  openGraph: {
    title: "Caldera Strategies",
    description: "Policy Design. Governance. Advocacy. Evaluation.",
    url: "https://calderastrategies.co",
    siteName: "Caldera Strategies",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
