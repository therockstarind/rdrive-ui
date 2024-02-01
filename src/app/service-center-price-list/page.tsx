'use client'
import AnimatedHeading from '®/components/FramerMotion/AnimatedHeading'
import Markdown from '®/components/markdown'
import { fromLeftVariant } from '®/lib/FramerMotionVariants'
import { Page, Text } from '®rdrive/ui'

export default function PriceList() {
  return (
    <Page className="max-w-5xl">
      <AnimatedHeading variants={fromLeftVariant}>
        <Text size="text-3xl lg:text-4xl" font="font-bold" align="text-center">
          All Brand Service Center Price List
        </Text>
      </AnimatedHeading>
      <Markdown src="https://rdrive.org/api/raw/?path=/assets/price-list/readme.md" />
    </Page>
  )
}
