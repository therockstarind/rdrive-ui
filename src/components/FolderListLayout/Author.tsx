'use client'

import React from 'react'
import { useMediaQuery } from '®/hooks/use-media-query'
import { UserType } from '®/types'
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '®rdrive/ui'
import { User, UserDetails } from '../user/userprofile'

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
