'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { PageWrapper } from "@/components/PageWrapper";
import Link from "next/link";
import Scoresaber from "@/public/sslogo.svg";
import { MotionLink } from "@/components/MotionLink";
import { MotionLogo } from "@/components/MotionLogo";

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
      <h1>About Me</h1>
      <h2>UMass Cybersecurity Club</h2>
      {/* TODO */}
      <p>I play CTFs with <MotionLink href="https://ctftime.org/team/78233">SavedByTheShell</MotionLink>, and am currently exploring web, osint, and pwn ({"don't"} forget misc as well!)</p>

      <h2>UMass TASC</h2>
      {/* TODO */}
      <p>I play diabolo and perform in various events around campus. Subscribe to <MotionLink href="https://www.youtube.com/@umasstasc">@umasstasc</MotionLink> for performance recaps.</p>
      <h2>Tetris</h2>
      {/* TODO */}
      <p>I play modern tetris on <MotionLink href="https://jstris.jezevec10.com/">Jstris</MotionLink> and <MotionLink href="https://tetr.io/">tetr.io</MotionLink>(but not tetra league!), and follow classic tetris. <br />
        Feel free to friend me on tetr.io <MotionLink href="https://ch.tetr.io/u/atch2203">@atch2203</MotionLink>.</p>
      <h2>Beat Saber</h2>
      {/* TODO */}
      <p>I enjoy playing Beat Saber often, and am currently top 800 global/300 US.<br />
        I also play challenge maps, and am currently CS level 9.<br />
        You can find my scoresaber and beatleader profile below.<br /></p>
      <div className="flex">
        <MotionLogo className="px-2 inline" href="https://scoresaber.com/u/76561198246352688">
          <Image src={Scoresaber}
            className="inline"
            alt="scoresaber"
            width={50}
            height={100}
            priority
          />
        </MotionLogo>
        <MotionLogo className="px-2 inline" href="https://beatleader.xyz/u/76561198246352688">
          <Image src="/bltransparent.png"
            className="inline"
            alt="beatleader"
            width={50}
            height={100}
            priority
          />
        </MotionLogo>
      </div>
      <p>
        My best scores (imo): <Link href="https://replay.beatleader.xyz/?scoreId=14800412">1 </Link> <Link href="https://replay.beatleader.xyz/?scoreId=14734317">2</Link>
      </p>
      <h2>Other stuff</h2>
      <p>
        I follow the CS2 esports scene, and occasionally watch Valorant, R6, and Rocket League.<br />
        I also sometimes watch Osu! and Beat Saber tournaments.
      </p>
    </>
  )
}