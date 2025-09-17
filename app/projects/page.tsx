'use client'

import { PageWrapper } from "@/components/PageWrapper";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

export default function Home() {
  return (
    <PageWrapper>
      <main className="flex flex-col">
        <Contents />
      </main>
    </PageWrapper>
  )
}

const carouselResponsive = {
  superLargeDesktop: {
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
const carouselHeight = 500;


function Contents() {
  return (
    <>
      <h1>Projects</h1>
      <div className="flex md:flex-row max-md:flex-col">
        <div className="md:pr-12 my-auto">
          <h2>FTC</h2>
          <p>I competed in FTC from 2019-2023 in 4410 ARC Lightning, and was team captain for both 2021-2022 Freight Frenzy and 2022-2023 Power Play. <br />
            While we did not place well in 2022, in 2023 we created a competitive (and really, really cool!) robot that placed 5th in states.
          </p></div><br />
        <div className="md:ml-auto md:w-[50%] md:p-8">
          <Carousel responsive={carouselResponsive}
            swipeable={false}
            draggable={false}
            showDots={true}
            infinite={true}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-0-px"
            className="z-0"
          >
            <div className="flex justify-center" >
              <iframe height={carouselHeight} width={carouselHeight * 16 / 9} src="https://www.youtube.com/embed/uBv53YcixVM?si=uyoVvTsIk5Rt35bI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
            <div style={{ height: carouselHeight }}>
              <Image src="/robotics/coverrobot.png" alt="robot" layout="fill" objectFit="contain" />
            </div>
            <div style={{ height: carouselHeight }}>
              <Image src="/robotics/robotup.jpg" alt="robot" layout="fill" objectFit="contain" />
            </div>
            <div style={{ height: carouselHeight }}>
              <Image src="/robotics/robot.png" alt="robot" layout="fill" objectFit="contain" />
            </div>
            <div style={{ height: carouselHeight }}>
              <Image src="/robotics/robothalfup.jpg" alt="robot" layout="fill" objectFit="contain" />
            </div>
            <div style={{ height: carouselHeight }}>
              <Image src="/robotics/minicad.png" alt="robot" layout="fill" objectFit="contain" />
            </div>
          </Carousel></div>
      </div>
      <div className="flex md:flex-row max-md:flex-col pt-8">
        <div className="md:pr-12 my-auto">
          <h2>Seaperch</h2>
          <p>I competed in Seaperch for the 2022 and 2023 season in the Orcas, both times we qualified for internationals, getting 7th overall in 2023.<br />
            I was in charge of the design and build team for the 2023 season.
          </p></div><br />
        <div className="md:ml-auto md:w-[50%] md:p-8">
          <Carousel responsive={carouselResponsive}
            swipeable={false}
            draggable={false}
            showDots={true}
            infinite={true}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div style={{ height: carouselHeight }}>
              <Image src="/seaperch/underwater.jpg" alt="robot" layout="fill" objectFit="contain" />
            </div>
            <div style={{ height: carouselHeight }}>
              <Image src="/seaperch/rov.jpg" alt="robot" layout="fill" objectFit="contain" />
            </div>
            <div style={{ height: carouselHeight }}>
              <Image src="/seaperch/obstaclecourse.png" alt="robot" layout="fill" objectFit="contain" />
            </div>
            <div style={{ height: carouselHeight }}>
              <Image src="/seaperch/missioncourse.png" alt="robot" layout="fill" objectFit="contain" />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}