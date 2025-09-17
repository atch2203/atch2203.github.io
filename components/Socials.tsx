'use client' 

import { socialobjs } from "@/utils/socials";
import { MotionLogo } from "./MotionLogo";
import Image from "next/image";

export default function Socials(){
  return (<span className="flex">
    {socialobjs.filter(s => s.active).map((s, i) => {
      return (
      <MotionLogo
        key={i}
        href={s.href}
        className="p-2"
      >
        <Image 
        src={"/linkicons/"+s.name}
        alt={s.linkTitle}
        width={50}
        height={50}
        priority
        />
      </MotionLogo>
    )})}
  </span>);
}