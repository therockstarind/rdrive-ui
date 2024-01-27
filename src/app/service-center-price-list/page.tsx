"use client"
import { Heading } from "@radix-ui/themes"
import AnimatedHeading from "®/components/FramerMotion/AnimatedHeading"
import Markdown from "®/components/markdown"
import { fromLeftVariant } from "®/lib/FramerMotionVariants"

export default function PriceList() {
  return (
    <main className="mx-auto w-full max-w-5xl p-2">
      <AnimatedHeading variants={fromLeftVariant}><Heading size={{initial: '7', md: '9'}} align="center">All Brand Service Center Price List</Heading></AnimatedHeading>
      <Markdown src="https://rdrive.org/api/raw/?path=/assets/price-list/readme.md" />
    </main>
  )
}
