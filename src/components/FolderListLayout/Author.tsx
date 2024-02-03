'use client'

import { Button, Image } from '@nextui-org/react'
import { Separator } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import { useMediaQuery } from '®/hooks/use-media-query'
import { Counts } from '®/lib/utils'
import { UserType } from '®/types'
import {
  AspectRatio,
  Avatar,
  Drawer,
  DrawerContent,
  DrawerTrigger,
  Flex,
  Text,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Grid,
} from '®rdrive/ui'

const fallback = (str: string | undefined): string => {
  return str ? str.charAt(0).toUpperCase() : ''
}
const User: React.FC<{ user?: UserType }> = ({ user }) => (
  <Flex gap="gap-2">
    <Avatar
      radius="full"
      src={user?.avatar || ''}
      alt={user?.name}
      fallback={fallback(user?.name)}
    />
    <Grid>
      <Text
        as="h1"
        align="items-center"
        gap="gap-0.5"
        font="font-bold"
        display="flex"
      >
        {user?.name}
        {user?.name && <RiVerifiedBadgeFill className="text-blue-500" />}
      </Text>
      <Text
        align="text-start"
        size="text-xs tracking-tighter"
        color="text-muted-foreground"
      >
        {user?.description}
      </Text>
    </Grid>
  </Flex>
)

const UserDetails: React.FC<{ user?: UserType }> = ({ user }) => (
  <Flex display="flex-col" gap="gap-3">
    <Flex display="relative">
      <AspectRatio
        ratio={16 / 9}
        className="overflow-hidden rounded-b-[100px] rounded-t-xl opacity-90 sm:rounded-md"
      >
        <Image
          src={user?.coverimg}
          alt={`${user?.name} Cover`}
          className="rounded-none object-cover"
          width="100%"
          height="100%"
          isBlurred
        />
      </AspectRatio>
      <Link href={`/${user?.username}` || ''} passHref>
        <Avatar
          src={user?.avatar || ''}
          fallback={fallback(user?.name)}
          className="absolute -bottom-10 left-1/2 h-32 w-32 -translate-x-1/2 transform rounded-full text-3xl backdrop-blur-sm"
        />
      </Link>
    </Flex>
    <Flex m="mt-9" display="flex-col" align="items-center">
      <Link href={`/${user?.username}` || ''} passHref>
        <Text
          as="h1"
          display="flex"
          align="items-center"
          gap="gap-2"
          size="text-2xl"
          font="font-bold"
        >
          {user?.name}
          <RiVerifiedBadgeFill className="text-blue-500" size={20} />
        </Text>
      </Link>
      <Text size="text-xs sm:text-sm" color="text-muted-foreground">
        @{user?.username}
      </Text>
    </Flex>
    {/* Counts */}
    <Flex align="items-center" justify="justify-around">
      {['post', 'followers', 'following'].map((key, index) => (
        <React.Fragment key={key}>
          {index > 0 && <Separator className="h-8" orientation="vertical" />}
          <Button
            radius="sm"
            variant="light"
            className="flex h-auto flex-col gap-0 p-0 py-1"
            href={`/${user?.username}?${key}`}
          >
            <Text as="h1" size="text-2xl" font="font-bold">
              {Counts(user?.[key])}
            </Text>
            <Text size="text-xs" color="text-muted-foreground">
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </Text>
          </Button>
        </React.Fragment>
      ))}
    </Flex>
    <Flex />
    {/* For non Follow user , the button should be clickable and take to follow or unfollow the user and for it self it shloud show view profile or maybe edit */}
    <Button
      radius="full"
      variant="light"
      className="mx-4 border border-border bg-default/20 dark:bg-default/40"
    >
      Follow
    </Button>
    <Flex />
  </Flex>
)

const Author: React.FC<UserType & { avatar?: string }> = ({
  author,
  avatar,
}) => {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const userProps = avatar ? { avatar } : author
  if (isDesktop) {
    return (
      <HoverCard open={open} onOpenChange={setOpen}>
        <HoverCardTrigger className="cursor-pointer">
          <User user={userProps} />
        </HoverCardTrigger>
        <HoverCardContent className="w-80 p-2" align="start" sideOffset={8}>
          <UserDetails user={author} />
        </HoverCardContent>
      </HoverCard>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
        <User user={userProps} />
      </DrawerTrigger>
      <DrawerContent>
        <div className="p-1">
          <UserDetails user={author} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default Author
