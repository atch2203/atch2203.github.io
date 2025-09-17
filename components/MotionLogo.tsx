import { motion } from "framer-motion";
import { UnderLink } from "./MotionLink";

export const MotionLogo = ({ children, className, href }: { children: React.ReactNode, className?: string, href: string }) =>
(
  <div className={className}>
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{scale:0.9}}
      style={{ width: 50, height: 50 }}
    >
      <UnderLink href={href}>
        {children}
      </UnderLink>
    </motion.div>
  </div>
)