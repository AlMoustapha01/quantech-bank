import type { Metadata } from "next";
import { Anek_Bangla, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layouts/header";
const anekBangla = Anek_Bangla({
  variable: "--font-anek-bangla",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quantech Bank",
  description: "Quantech Bank",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${anekBangla.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
