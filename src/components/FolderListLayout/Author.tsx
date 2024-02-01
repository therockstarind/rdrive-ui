'use client'

import { Button, Image } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import { useMediaQuery } from '®/hooks/use-media-query'
import { UserType } from '®/types'
import {
  AspectRatio,
  Avatar,
  Drawer,
  DrawerContent,
  DrawerTrigger,
  Flex,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '®rdrive/ui'

const fallback = (str: string | undefined): string => {
  return str ? str.charAt(0).toUpperCase() : ''
}
const User: React.FC<{ user?: UserType }> = ({ user }) => (
  <div className="flex gap-2">
    <Avatar
      radius="full"
      src={user?.avatar || ''}
      alt={user?.name}
      fallback={fallback(user?.name)}
    />
    <div>
      <h1 className="flex items-center gap-0.5 font-bold">
        {user?.name}
        {user?.name && <RiVerifiedBadgeFill className="text-blue-500" />}
      </h1>
      <p className="text-start text-xs tracking-tighter text-muted-foreground">
        {user?.description}
      </p>
    </div>
  </div>
)

const UserDetails: React.FC<{ user?: UserType }> = ({ user }) => (
  <div className="flex flex-col gap-3">
    <div className="relative flex">
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
        />
      </AspectRatio>
      <Link href={`/${user?.username}` || ''} passHref>
        <Avatar
          src={user?.avatar || ''}
          fallback={fallback(user?.name)}
          className="absolute -bottom-10 left-1/2 h-32 w-32 -translate-x-1/2 transform rounded-full text-3xl"
        />
      </Link>
    </div>
    <div className="mt-9 flex flex-col items-center">
      <Link href={`/${user?.username}` || ''} passHref>
        <h1 className="flex items-center gap-2 text-2xl font-bold">
          {user?.name}
          <RiVerifiedBadgeFill className="text-blue-500" size={20} />
        </h1>
      </Link>
      <p className="text-xs text-muted-foreground sm:text-sm">
        @{user?.username}
      </p>
    </div>
    {/* Counts */}
    <div className="flex items-center justify-around">
      {['post', 'followers', 'following'].map((key) => (
        <Button
          radius="sm"
          variant="light"
          key={key}
          className="flex h-auto flex-col gap-0 border border-border bg-default/20 p-0 py-1 dark:bg-default/40"
        >
          <h1 className="text-2xl font-bold">{user?.[key]}</h1>
          <p className="text-xs text-muted-foreground">
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </p>
        </Button>
      ))}
    </div>
    <div />
    {/* For non Follow user , the button should be clickable and take to follow or unfollow the user and for it self it shloud show view profile or maybe edit */}
    <Button
      radius="full"
      variant="light"
      className="mx-4 border border-border bg-default/20 dark:bg-default/40"
    >
      Follow
    </Button>
    <Flex />
  </div>
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
