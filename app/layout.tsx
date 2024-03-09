import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pamilya Market",
  description: "Fairview's freshest! Nourish your family with quality meats, fish, veggies & more.",
  icons: {
    icon: '/images/logo/pamilyaMarketLogo.png',
    shortcut: '/images/logo/pamilyaMarketLogo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          {children}
      </body>
    </html>
  );
}
