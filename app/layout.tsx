import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Libre_Franklin, Parisienne, Agbalumo, Dancing_Script } from "next/font/google";

export const libreFranklin = Libre_Franklin({ subsets: ["latin"] });
export const agbalumo = Agbalumo({
  subsets: ["latin"],
  weight: "400"
});
export const dancingScript = Dancing_Script({
  subsets: ["latin"],
});
export const parisienne = Parisienne({
   subsets: ["latin"],
   weight: "400",
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
  title: "Tặng Uyên <3",
  description: "Món quà nhân dịp kỉ niệm 1 năm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${libreFranklin.className} ${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        {children}
      </body>
    </html>
  );
}
