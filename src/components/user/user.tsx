'use client'
import React from 'react'
import { FeedsType, UserType } from '®/types'
import { FadeContainer } from '®lib/FramerMotionVariants'
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  Flex,
} from '®rdrive/ui'
import AnimatedDiv from '../FramerMotion/AnimatedDiv'
import FeedCard from '../blog/feedcard'
import { UserDetails } from './userprofile'

const User: React.FC<{ user?: UserType; post?: FeedsType[] }> = ({
  user,
  post,
}) => (
  <AnimatedDiv variants={FadeContainer}>
    {/* Container */}
    <Flex display="flex-col sm:flex-row" gap="gap-4">
      {/* User */}
      <Flex className="md:w-1/3" display="flex-col" gap="gap-3">
        <UserDetails user={user!} />
        {/* <UserSocial user={user!} /> */}
      </Flex>

      {/* Card */}
      <Flex className="md:w-2/3" display="flex-col" gap="gap-3">
        <Command>
          <Flex
            border="rounded-full border border-border"
            display="sticky top-0.5 z-50 flex-col"
            color="bg-background/70 backdrop-blur-lg"
            m="mx-4 mb-3 mt-1"
          >
            <CommandInput placeholder="Search Post" />
          </Flex>
          <CommandEmpty>No result found</CommandEmpty>
          <Flex className="grid gap-2 sm:grid-cols-2">
            {post?.map((feed) => (
              <CommandItem
                key={feed.title}
                className="aria-selected:bg-transparent"
              >
                <FeedCard feed={feed} />
              </CommandItem>
            ))}
          </Flex>
        </Command>
      </Flex>
    </Flex>
  </AnimatedDiv>
)

export default User
