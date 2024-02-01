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
      <h1 className="font-bold flex items-center gap-0.5">
        {user?.name}
        {user?.name && <RiVerifiedBadgeFill className="text-blue-500" />}
      </h1>
      <p className="text-xs text-start tracking-tighter text-muted-foreground">
        {user?.description}
      </p>
    </div>
  </div>
)

const UserDetails: React.FC<{ user?: UserType }> = ({ user }) => (
  <div className="flex flex-col gap-3">
    <div className="flex relative">
      <AspectRatio
        ratio={16 / 9}
        className="rounded-b-[100px] rounded-t-xl sm:rounded-md overflow-hidden opacity-90"
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
          className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 rounded-full w-32 h-32 text-3xl"
        />
      </Link>
    </div>
    <div className="flex flex-col items-center mt-9">
      <Link href={`/${user?.username}` || ''} passHref>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          {user?.name}
          <RiVerifiedBadgeFill className="text-blue-500" size={20} />
        </h1>
      </Link>
      <p className="text-xs sm:text-sm text-muted-foreground">
        @{user?.username}
      </p>
    </div>
    {/* Counts */}
    <div className="flex justify-around items-center">
      {['post', 'followers', 'following'].map((key) => (
        <Button
          radius="sm"
          variant="light"
          key={key}
          className="flex flex-col border border-border bg-default/20 dark:bg-default/40 h-auto gap-0 p-0 py-1"
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
        <HoverCardContent className="p-2 w-80" align="start" sideOffset={8}>
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
