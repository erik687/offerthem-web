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
  title: "OffertHem | Jämför mäklare & få högre slutpris",
  description: "Jämför lokala mäklare kostnadsfritt. Hitta bästa mäklaren för din försäljning och maximera din vinst. Verifierade mäklare i hela Sverige.",
  metadataBase: new URL('https://www.offerthem.cloud'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
