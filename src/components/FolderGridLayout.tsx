'use client'
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Tab,
  Tabs,
} from '@nextui-org/react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Demo } from '®/config/demo'
import { siteConfig } from '®/config/site'
import {
  FadeContainer,
  fromLeftVariant,
  fromTopVariant,
} from '®/lib/FramerMotionVariants'
import { Text } from '®rdrive/ui'
import AnimatedDiv from './FramerMotion/AnimatedDiv'
import AnimatedVariant from './FramerMotion/AnimatedVariant'
import FeedCard from './blog/feedcard'
import Discover from './card/discover'

const FolderGridLayout = () => {
  const router = useRouter()
  return (
    <Card className="overflow-clip bg-default-50 p-2 sm:p-4">
      {/* bg-default-100 */}
      <Tabs
        aria-label="Tabs"
        radius="full"
        classNames={{
          base: 'sticky top-0.5 z-30',
          tab: 'min-w-fit',
        }}
      >
        <Tab key="discover" title="Discover">
          <AnimatedDiv
            variants={FadeContainer}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5"
          >
            {Demo.post.map((feed) => (
              <AnimatedVariant
                variants={fromLeftVariant}
                mobileVariants={fromTopVariant}
              >
                <Discover feed={feed} />
              </AnimatedVariant>
            ))}
          </AnimatedDiv>
        </Tab>
        <Tab key="android" title="Android">
          <AnimatedDiv
            variants={FadeContainer}
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
          >
            {Demo.items.map((card, index) => (
              <motion.div key={index} variants={fromLeftVariant}>
                <Card
                  isHoverable
                  isPressable
                  isFooterBlurred
                  onPress={() =>
                    router.push('/Xiaomi-12-Pro-(Dimensity-Edition)')
                  }
                  className="flex w-full items-center justify-center border border-border bg-transparent shadow-none dark:data-[hover=true]:bg-default/40"
                >
                  <Image
                    alt={card.title}
                    className="mx-auto my-10 h-40 object-contain px-8 pb-8 lg:h-48"
                    src={card.img || siteConfig.fallback}
                    isBlurred
                    isZoomed
                  />
                  <CardFooter className="dark:bg-default-40 absolute bottom-0 z-10 flex flex-col border-t-1 border-border bg-default/10 dark:bg-default/30">
                    <Text
                      as="h1"
                      size="line-clamp-1 text-sm"
                      align="text-center"
                    >
                      {card.title}
                    </Text>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatedDiv>
        </Tab>
        <Tab key="apps" title="Apps"></Tab>
        <Tab key="games" title="Games"></Tab>
        <Tab key="apple" title="Apple"></Tab>
        <Tab key="windows" title="Windows"></Tab>
        <Tab key="linux" title="Linux"></Tab>
      </Tabs>
    </Card>
  )
}

export default FolderGridLayout
