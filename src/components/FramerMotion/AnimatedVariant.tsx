'use client'
import { Variants, motion } from 'framer-motion'
import { AnimatedTAGProps } from '®/lib/types'

const Variant = (variants: Variants, mobileVariant?: Variants) => {
  if (
    typeof window !== 'undefined' &&
    window.matchMedia('(max-width: 768px)').matches
  ) {
    return mobileVariant
  }
  return variants
}
export default function AnimatedVariant({
  variants,
  mobileVariants,
  className,
  children,
}: AnimatedTAGProps) {
  return (
    <motion.div
      variants={Variant(variants, mobileVariants)}
      className={className}
    >
      {children}
    </motion.div>
  )
}
