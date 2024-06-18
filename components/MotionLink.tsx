'use client'

import {motion} from "framer-motion";
import Link from "next/link";

export const UnderLink = ({children, className, href}: {children: React.ReactNode, className?: string, href: string}) =>
  (
    <motion.span>
      <Link className={"hover:text-blue-500 underline text-skin-accent decoration-dashed underline-offset-4 " + className} href={href}>
        {children}
      </Link>
    </motion.span>
  )