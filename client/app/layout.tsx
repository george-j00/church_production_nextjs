import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import Head from "next/head";

import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

// const inter = Inter({ subsets: ["latin"] });
const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "St.Antony's Jacobite Syrian Cathedral",
  description: "Website of St.Antony's Jacobite Syrian Cathedral",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>St.Antony's Jacobite Syrian Cathedral</title>
        <meta name="description" content="Website of St.Antony's Jacobite Syrian Cathedral" />
        <meta name="keywords" content="St.Antony, Jacobite, Syrian, Cathedral, Church" />
      </Head>
      <body className={inter.className}>
        <header>
        </header>
        <main>{children}</main>
        <footer>
        </footer>
      </body>
    </html>
  );
}
