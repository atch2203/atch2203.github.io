'use client'

import {motion} from "framer-motion";

export const PageWrapper = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    initial={{opacity:0,y:20}}
    animate={{opacity:1,y:0}}
    exit={{opacity:0,y:20}}
    className={"overflow-hidden mx-12 min-h-screenHeightWithoutHeader " + className}
  >
    {children}
  </motion.div>
);