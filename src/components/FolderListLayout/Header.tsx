'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { fromLeftVariant } from '®/lib/FramerMotionVariants'
import AnimatedHeading from '../FramerMotion/AnimatedHeading'
import StarShare from './StarShare'
import { Flex, Text } from '®rdrive/ui'

const Header = () => {
  const pathname = usePathname()
  const title = pathname.split('/').filter(Boolean).pop()
  return (
    <Flex
      justify="justify-center sm:justify-between"
      align="items-center"
      m="my-2 sm:my-4"
      display="flex-col sm:flex-row"
      gap="gap-4"
    >
      <AnimatedHeading variants={fromLeftVariant}>
        <Link href="" passHref>
          <Text
            as="h1"
            size="text-xl sm:text-3xl"
            align="text-center"
            font="font-bold line-clamp-1"
          >
            {title}
          </Text>
        </Link>
      </AnimatedHeading>
      <StarShare />
    </Flex>
  )
}

export default Header
