"use client";

import { Button, Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useMediaQuery } from "®/hooks/use-media-query";
import { AuthorType, UserDetailsType, UserType } from "®/types";
import { AspectRatio, Avatar, Drawer, DrawerContent, DrawerTrigger, Flex, Grid, HoverCard, HoverCardContent, HoverCardTrigger, Text } from "®rdrive/ui";

const fallback = (str: string | undefined): string => {
  return str ? str.charAt(0).toUpperCase() : '';
};
const User: React.FC<{ user?: UserType }> = ({ user }) => (
  <Flex gap="gap-2">
    <Avatar radius="full" src={user?.img || ''} alt={user?.name} fallback={fallback(user?.name)} />
    <Grid>
      <Text as="h1" font="font-bold" display="flex" align="items-center" gap="gap-0.5">
        {user?.name}
        {user?.name && <RiVerifiedBadgeFill className="text-blue-500" />}
      </Text>
      <Text as="p" size="text-xs" align="text-start tracking-tighter" color="text-muted-foreground">
        {user?.description}
      </Text>
    </Grid>
  </Flex>
);

const UserDetails: React.FC<{ user?: UserDetailsType }> = ({ user }) => (
  <Flex display="flex-col" gap="gap-3">
    <Flex className="relative">
      <AspectRatio ratio={16 / 9} className="rounded-b-[100px] rounded-t-xl sm:rounded-md overflow-hidden opacity-90">
        <Image src={user?.coverimg} alt={`${user?.name} Cover`} className="rounded-none object-cover" width="100%" height="100%" />
      </AspectRatio>
      <Link href={`/${user?.username}` || ''} passHref>
      <Avatar
        src={user?.img || ''}
        fallback={fallback(user?.name)}
        className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 rounded-full w-32 h-32 text-3xl"
      />
      </Link>
    </Flex>
    <Flex display="flex-col" align="items-center" m="mt-9">
      <Link href={`/${user?.username}` || ''} passHref>
      <Text as="h1" size="text-2xl" font="font-bold" display="flex" align="items-center" gap="gap-2">
        {user?.name}
        <RiVerifiedBadgeFill className="text-blue-500" size={20} />
      </Text>
      </Link>
      <Text size="text-xs sm:text-sm" color="text-muted-foreground">
        @{user?.username}
      </Text>
    </Flex>
    {/* Counts */}
    <Flex justify="justify-around" align="items-center">
      {['post', 'followers', 'following'].map((key) => (
          <Button radius="sm" variant="light" key={key} className="flex flex-col border border-border bg-default/20 dark:bg-default/40 h-auto gap-0 p-0 py-1">
          <Text as="h1" size="text-2xl" font="font-bold">
            {user?.[key]}
          </Text>
          <Text size="text-xs" color="text-muted-foreground">
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </Text>
          </Button> 
      ))}
    </Flex>
        <Flex />
  </Flex>
);

const Author: React.FC<AuthorType> = ({ author, authordetails }) => {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
        <HoverCard open={open} onOpenChange={setOpen}>
            <HoverCardTrigger className="cursor-pointer">
                <User user={author}/>
            </HoverCardTrigger>
            <HoverCardContent className="p-2 w-80" align="start" sideOffset={8}>
                <UserDetails user={authordetails} />
            </HoverCardContent>
        </HoverCard>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
          <User user={author} />
      </DrawerTrigger>
      <DrawerContent>
        <div className="p-1">
        <UserDetails user={authordetails} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default Author;