'use client'
import { Avatar, Button, Image } from '@nextui-org/react'
import { MdAdd } from 'react-icons/md'
import { Flex, Text } from '®/rdrive/ui'
import { DiscoverType } from '®/types'
import { Comments, DisLike, Like } from '../icons'
import { siteConfig } from '®/config/site'

const Discover: React.FC<{ feed: DiscoverType }> = ({ feed }) => {
  return (
    <Flex
      display="group flex-col rounded-2xl"
      gap="gap-2"
      color="shadow dark:bg-default-100"
    >
      <Image
        src={feed?.image}
        alt="Banner"
        className="rounded-b-none rounded-t-2xl object-cover"
        width="1280"
        height="640"
      />
      <Flex display="flex-col" gap="gap-2" m="p-2">
        <Flex align="items-center" gap="gap-2">
          <Image
            src={feed?.author?.avatar || siteConfig.fallback}
            className="h-6 w-6"
            alt={feed?.author?.name}
          />
          <Text size="text-xs">{feed?.author?.name}</Text>
          <Flex className="group">
            <Button
              size="sm"
              className="hidden h-6 gap-1 px-1 text-xs group-hover:flex"
              startContent={<MdAdd />}
            >
              Follow
            </Button>
          </Flex>
          <Flex gap="gap-0.5">
            <Text size="text-xs">•</Text>
            <Text size="text-xs">1h</Text>
          </Flex>
        </Flex>

        <Text
          as="h1"
          font="font-semibold"
          size="text-lg leading-[24px]"
          display="line-clamp-2"
        >
          {feed?.title}
        </Text>
        <Flex gap="gap-2">
          <Button
            className="min-w-unit-0 gap-0.5 px-1"
            size="sm"
            variant="light"
          >
            <Like />
            {feed?.likes}
          </Button>
          <Button isIconOnly size="sm" variant="light">
            <DisLike />
          </Button>
          <Button className="min-w-unit-0 gap-1 px-1" size="sm" variant="light">
            <Comments />
            {feed?.commentsNum}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Discover
