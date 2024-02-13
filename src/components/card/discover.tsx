'use client'
import { Avatar, Button, Image } from '@nextui-org/react'
import { PlaneIcon, Plus } from 'lucide-react'
import { MdAdd } from 'react-icons/md'
import { Flex, Text } from '®/rdrive/ui'
import { DiscoverType, FeedsType } from '®/types'
import { DisLike, Like } from '../icons'
import { GoComment } from 'react-icons/go'

const Discover: React.FC<{ feed?: FeedsType }> = ({ feed }) => {
  return (
    <Flex
      display="group flex-col rounded-2xl"
      gap="gap-2"
      color="shadow dark:bg-default-100"
    >
      <Image
        src="https://www.minterapp.com/wp-content/uploads/2022/11/image4-1280x640.png"
        alt="Banner"
        className="rounded-b-none rounded-t-2xl object-cover"
        width="1280"
        height="640"
      />
      <Flex display="flex-col" gap="gap-2" m="p-2">
        <Flex align="items-center" gap="gap-2">
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
            className="h-6 w-6"
          />
          <Text size="text-xs">Rock Star</Text>
          <Button
            size="sm"
            className="hidden h-6 gap-1 px-1 text-xs hover:visible"
            startContent={<MdAdd />}
          >
            Follow
          </Button>
          <Flex gap="gap-0.5">
            <Text size="text-xs">•</Text>
            <Text size="text-xs">1h</Text>
          </Flex>
        </Flex>

        <Text
          as="h1"
          font="font-semibold"
          size="text-lg leading-[24px]"
          display="line-clamp-3"
        >
          Step-by-Step Guide to Settings - Demo 1 Step-by-Step Guide to Settings
          - Demo 1 Step-by-Step Guide to Settings - Demo 1
        </Text>
        <Flex gap="gap-3">
          <Button
            className=" min-w-unit-0 gap-0.5 px-1"
            size="sm"
            variant="light"
          >
            <Like />
            10
          </Button>
          <Button isIconOnly size="sm" variant="light">
            <DisLike />
          </Button>
          <Button isIconOnly size="sm" variant="light">
            <GoComment size={20} />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Discover
