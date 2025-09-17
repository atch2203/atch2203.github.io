'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { PageWrapper } from "@/components/PageWrapper";
import Scoresaber from "@/public/linkicons/sslogo.svg";
import { UnderLink } from "@/components/MotionLink";
import { MotionLogo } from "@/components/MotionLogo";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { useEffect } from "react";

export default function Home() {
  return (
    <PageWrapper>
      <main className="flex flex-col">
        <Contents />
      </main>
    </PageWrapper>
  );
}

const carouselResponsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const carouselHeight = 300;

const sections = [
  {
    title: "UMass Cybersecurity Club",
    contents: (
      <p>I play CTFs with <UnderLink href="https://ctftime.org/team/78233">SavedByTheShell</UnderLink>,
        and am currently exploring web, osint, and pwn (and misc as well!)
      </p>
    ),
    images: (
      <Image
        src="/aboutme/cybersec.png"
        alt="JSA performance"
        width={1000}
        height={1000}
        className="object-cover w-full h-auto"
      />
    )
  },
  {
    title: "UMass TASC",
    contents: (
      <p>I play diabolo and perform in various events around campus. Subscribe to <UnderLink href="https://www.youtube.com/@umasstasc">@umasstasc</UnderLink> for performance recaps.</p>
    ),
    images: (
      <Image
        src="/aboutme/bo.jpg"
        alt="AASA 2025 performance"
        width={1000}
        height={1000}
        className="object-cover w-full h-auto"
      />
    )
  },
  {
    title: "Tetris",
    contents: (
      <p>I play modern tetris
        on <UnderLink href="https://jstris.jezevec10.com/">Jstris</UnderLink> and <UnderLink href="https://tetr.io/">tetr.io</UnderLink>
        (but not tetra league!), and follow classic tetris. <br />
        Feel free to friend me on
        tetr.io <UnderLink href="https://ch.tetr.io/u/atch2203">@atch2203</UnderLink>.</p>
    ),
    images: (
      <Image
        src="/aboutme/tetrio.png"
        alt="JSA performance"
        width={1000}
        height={1000}
        className="object-cover w-full h-auto"
      />
    )
  },
  {
    title: "Beat Saber",
    contents: (
      <>
        <p>I enjoy playing Beat Saber often, and am currently top 900 global/400 US.<br />
          I also play challenge maps, and am currently CS level 12.<br />
          You can find my scoresaber and beatleader profile below.<br /></p>
        <div className="flex md:justify-end">
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
            <Image src="/linkicons/bltransparent.png"
              className="inline"
              alt="beatleader"
              width={50}
              height={100}
              priority
            />
          </MotionLogo>
        </div>
      </>
    ),
    images: (
      <div className="w-full h-auto">
        <Carousel responsive={carouselResponsive}
          swipeable={false}
          draggable={false}
          showDots={true}
          infinite={true}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass={`w-full h-full`}
          dotListClass="custom-dot-list-style"
        >
          <div>
            <iframe src="https://replay.beatleader.xyz/?scoreId=14800412" style={{aspectRatio:3/2}} className="w-full object-contain" />
          </div>
          <div>
            <iframe src="https://replay.beatleader.xyz/?scoreId=14734317" style={{aspectRatio:3/2}} className="w-full object-contain" />
          </div>
        </Carousel>
      </div>
    )
  },
  {
    title: "Other stuff",
    contents: (
      <p>
        I follow the CS2 esports scene, and occasionally watch Valorant, R6, and Rocket League.<br />
        I also sometimes watch Osu! and Beat Saber tournaments.
      </p>
    ),
    images: (
      <Image
        src="/aboutme/cs2.png"
        alt="JSA performance"
        width={1000}
        height={1000}
        className="object-cover w-full h-auto"
      />
    )
  },
  // {
  //   title: "",
  //   contents: (

  //   )
  // },
];

function Contents() {
  return (
    <>
      <h1>About Me</h1>
      {
        sections.map((obj, i) => (
          <div key={i} className={"my-4 flex max-md:flex-col " + (i % 2 === 1 && "md:text-right md:flex-row-reverse")}>
            <div className="flex flex-col md:w-[45%] my-auto">
              <h2>{obj.title}</h2>
              {obj.contents}
            </div>
            <div className="md:w-[55%] p-8">
              {obj.images}
            </div>
          </div>
        ))
      }
    </>
  )
}