"use client";
import { AnimatedTAGProps } from "®/lib/types";
import { motion } from "framer-motion";

export default function AnimatedText({
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
      transition={{ staggerChildren: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
