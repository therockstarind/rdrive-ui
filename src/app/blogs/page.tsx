'use client'
import AnimatedDiv from '®/components/FramerMotion/AnimatedDiv'
import AnimatedVariant from '®/components/FramerMotion/AnimatedVariant'
import FeedCard from '®/components/blog/feedcard'
import { Demo } from '®/config/demo'
import {
  FadeContainer,
  fromLeftVariant,
  fromTopVariant,
} from '®/lib/FramerMotionVariants'
import { Page } from '®rdrive/ui'

export default function Blog() {
  return (
    <Page>
      <AnimatedDiv
        variants={FadeContainer}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
      >
        {Demo.post.map((feed) => (
          <AnimatedVariant
            variants={fromLeftVariant}
            mobileVariants={fromTopVariant}
          >
            <FeedCard feed={feed} />
          </AnimatedVariant>
        ))}
      </AnimatedDiv>
    </Page>
  )
}
