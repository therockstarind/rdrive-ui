'use client'
import { Button } from '@nextui-org/react'
import { BsStar } from 'react-icons/bs'
import { fromRightVariant } from '®/lib/FramerMotionVariants'
import AnimatedHeading from '../FramerMotion/AnimatedHeading'
import { Share } from '../Share'
import { Eye } from '../icons'
import { Flex } from '®rdrive/ui'

const StarShare = () => {
  const hover = 'border border-border rounded-full'
  return (
    <AnimatedHeading variants={fromRightVariant}>
      <Flex
        gap="gap-3"
        align="items-center"
        justify="justify-center"
        display="sm:hidden"
      >
        <Button variant="light" className={`${hover}`}>
          <Eye /> 3
        </Button>
        <Share />
        <Button variant="light" className={`${hover}`}>
          <BsStar size={20} /> 5
        </Button>
      </Flex>
      <Flex
        gap="gap-3"
        align="items-center"
        justify="justify-center"
        display="hidden sm:flex"
      >
        <Button size="sm" variant="light" className={`${hover}`}>
          <BsStar size={20} /> 5
        </Button>
        <Share />
        <Button size="sm" variant="light" className={`${hover}`}>
          <Eye /> 3
        </Button>
      </Flex>
    </AnimatedHeading>
  )
}
export default StarShare
