import Image from "next/image";
import Header from "./header";
import { AnimatePresence, motion } from "framer-motion";
import { PageWrapper } from "@/components/PageWrapper";
import Link from "next/link";

export default function Home() {
  return (
    <PageWrapper>
      <main className="flex min-h-screen flex-col pt-24">
        <Contents />
      </main>
    </PageWrapper>
  );
}

function Contents() {
  return (
    <>
      <h1>Hello!</h1>
      <p>{"I'm"} Alex, an undergraduate CS student at UMass Amherst. I have many interests, including but not limited to: </p>
      <ul>
        <li>Cybersecurity</li>
        <li></li>
        <li>Tetris</li>
        <li>Beat saber</li>
      </ul>
      <Image
      src="/20240521_192316.jpg"
      alt=""
      width={1000}
      height={100}
      priority
       />


    </>
  )
}