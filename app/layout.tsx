'use client'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./nav";
import { AnimatePresence } from "framer-motion";
import { Router, Routes, useLocation } from "react-router-dom";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Alex's Website"
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <AnimatePresence>
        {children}
        </AnimatePresence>
      </body>
    </html>

  );
}
