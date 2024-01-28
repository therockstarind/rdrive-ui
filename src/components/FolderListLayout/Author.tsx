"use client"

import { Avatar, Box } from "@radix-ui/themes"
import * as React from "react"
import { useMediaQuery } from "®/hooks/use-media-query"
import { Drawer, DrawerContent, DrawerTrigger } from "®ui/drawer"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "®ui/hover-card"
import { Text } from "®rdrive/ui"


export function Author() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
        <HoverCard open={open} onOpenChange={setOpen}>
            <HoverCardTrigger>
                <User />
            </HoverCardTrigger>
            <HoverCardContent>
                <User />
            </HoverCardContent>
        </HoverCard>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
          <User />
      </DrawerTrigger>
      <DrawerContent>
        <User />
      </DrawerContent>
    </Drawer>
  )
}

const User = () => {
    return (
        <main className="p-1 flex gap-2 items-center">
        <Avatar size="3" src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop" fallback="T" />
        <Box>
          <Text as="h1" font="font-bold" size="text-base">
            Teodros Girmay
          </Text>
          <Text size="text-xs" color="text-muted-foreground">
            Software & Hardware
          </Text>
        </Box>
        </main>
    )
  }