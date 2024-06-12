'use client'

import Nav from "../nav";
import Image from "next/image";
import {motion} from "framer-motion";

export default function Home() {
  return (
    <main >
      <Contents />
    </main>
  );
}

function Contents(){
  return(
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>aboutme</h1>
      <Image
        src="/Happy_Negative_Galaxy.png"
        alt="Alex Tong"
        width={500}
        height={4}
      />
      <h1>aboutme</h1>
      <h1>aboutme</h1>
      <Image
        src="/Happy_Negative_Galaxy.png"
        alt="Alex Tong"
        width={500}
        height={4}
      />
      <Image
        src="/Happy_Negative_Galaxy.png"
        alt="Alex Tong"
        width={500}
        height={4}
      />
    </div>
  )
}