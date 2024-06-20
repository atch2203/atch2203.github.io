import Image from "next/image";
import Header from "./header";
import { AnimatePresence, motion } from "framer-motion";
import { PageWrapper } from "@/components/PageWrapper";
import Link from "next/link";

export default function Home() {
  return (
    <PageWrapper>
      <main className="flex flex-col md:min-h-[calc(100vh-160px)]">
        <Contents />
      </main>
    </PageWrapper>
  );
}

function Contents() {
  return (
    <>
      <div className="flex md:flex-row max-md:flex-col my-auto">
        <div className="md:mr-12 my-auto">
          <h1>Hello!</h1>
          <p className="">{"I'm"} atch2203, an undergraduate CS student at UMass Amherst. <br />
            I am currently exploring and learning many things, ranging from cybersecurity to diabolo tricks and everything in between. </p>
        </div>
        <div className="md:w-[100%] relative my-auto" >
          <Image
            src="/me/grandcanyon.jpg"
            alt=""
            width={1000}
            height={1000}
            className="object-cover w-full h-auto"
          />
        </div>
      </div>
    </>
  )
}