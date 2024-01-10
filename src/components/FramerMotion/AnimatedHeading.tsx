"use client";
import { motion } from "framer-motion";
import { AnimatedTAGProps } from "®/lib/types";

export default function AnimatedHeading({
  variants,
  className,
  children,
  infinity,
}: AnimatedTAGProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: !infinity }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
