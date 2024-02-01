'use client'

import { Separator } from '@radix-ui/themes'
import { FadeContainer } from '®/lib/FramerMotionVariants'
import { Flex, Grid } from '®rdrive/ui'
import AnimatedDiv from '../FramerMotion/AnimatedDiv'
import FeedCard from '../blog/feedcard'
import YouTube from '../markdown/YouTube'
import FolderList from './FolderList'
import FolderTab from './FolderTab'
import Header from './Header'
import ImageCard from './ImageCard'

const FolderListLayout = () => {
  return (
    <AnimatedDiv variants={FadeContainer}>
      {/* Header & LikeShare */}
      <Flex display="flex-col hidden sm:flex" m="mb-4">
        <Header />
        <Separator size="4" />
      </Flex>
      {/* Container */}
      <Flex display="flex-col-reverse sm:flex-row" gap="gap-2 md:gap-3">
        {/* List & Readme & Comment */}
        <Flex size="md:w-3/4" display="flex-col" gap="gap-3">
          <FolderList />
          <FolderTab />
          <Grid display="grid sm:hidden" gap="gap-3">
            <YouTube id="PV08KlJeKuQ" />
            <FeedCard feed={feed} />
          </Grid>
        </Flex>
        {/* List Image & Details */}
        <Flex size="md:w-1/4" display="flex-col" gap="gap-3">
          <ImageCard />
          <Flex display="sm:hidden flex-col">
            <Header />
          </Flex>
          <Grid
            display="hidden sm:grid"
            className="sticky top-0.5 z-40"
            gap="gap-3"
          >
            <YouTube id="PV08KlJeKuQ" />
            <FeedCard feed={feed} />
          </Grid>
        </Flex>
      </Flex>
    </AnimatedDiv>
  )
}
export default FolderListLayout

const feed = {
  title: 'Step-by-Step Guide to Settings - Demo 1',
  img: 'https://www.minterapp.com/wp-content/uploads/2022/11/image4-1280x640.png',
  date: '1 day',
  time: '05:00',
  views: 1200,
  likes: 85,
  href: '/blogs/preview',
  author: {
    name: 'Rock Star',
    username: 'rockstar',
    img: 'https://cdn3d.iconscout.com/3d/premium/thumb/boy-7215504-5873316.png',
  },
}
