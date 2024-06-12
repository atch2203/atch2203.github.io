'use client'

import Image from "next/image";
import Nav from "./nav";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  return (
    <main >
      <Contents />
    </main>
  );
}

function Contents() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <motion.div animate={{ x: 100 }} exit={{opacity: 100}}>test</motion.div>
    </div>
  )
}