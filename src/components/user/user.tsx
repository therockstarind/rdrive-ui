"use client"
import { Button, Image } from "@nextui-org/react"
import { AspectRatio, Separator } from "@radix-ui/themes"
import { motion } from "framer-motion"
import { RiVerifiedBadgeFill } from "react-icons/ri"
import { Demo } from "®/config/demo"
import { FadeContainer, fromLeftVariant } from "®lib/FramerMotionVariants"
import { Avatar, Card, Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, Flex, Text } from "®rdrive/ui"
import AnimatedDiv from "../FramerMotion/AnimatedDiv"
import FeedCard from "../blog/feedcard"
import { FeedsType, UserType } from "®/types"
import React from "react"
import { Counts } from "®/lib/utils"

const fallback = (str: string | undefined): string => {
  return str ? str.charAt(0).toUpperCase() : '';
};

const User: React.FC<{ user?: UserType, post?: FeedsType[]  }> = ({ user, post }) => (
    <AnimatedDiv variants={FadeContainer}>
        {/* Container */}
        <Flex display="flex-col sm:flex-row" gap="gap-4">
            {/* User */}
            <Flex className="md:w-1/3" display="flex-col" gap="gap-3">
            <div className="relative">
                    <AspectRatio ratio={16 / 9} className="rounded-b-[100px] sm:rounded-md overflow-hidden opacity-90">
                            <Image src={user?.coverimg} alt={`${user?.name} Cover`} className="rounded-none object-cover" width="100%" height="100%" />
                    </AspectRatio>
                    <Avatar
                        src={user?.avatar || ''}
                        fallback={fallback(user?.name)}
                        className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 rounded-full w-32 h-32 text-3xl"   
                    />
            </div>
            <Flex display="flex-col" align="items-center" m="mt-9">
                    <Text as="h1" size="text-2xl" font="font-bold" display="flex" align="items-center" gap="gap-2">
                        {user?.name}
                        <RiVerifiedBadgeFill className="text-blue-500" size={20}/>
                    </Text>
                    <Text size="text-xs sm:text-sm" color="text-muted-foreground">@{user?.username}</Text>
            </Flex>
            <div />
            {/* Counts */}
            <Flex justify="justify-around" align="items-center">
                  {['post', 'followers', 'following'].map((key, index) => (
                    <React.Fragment key={key}>
                      {index > 0 && <Separator className="h-8" orientation="vertical" />}
                      <Flex display="flex-col" align="items-center" gap="gap-1">
                        <Text as="h1" size="text-2xl" font="font-bold">
                          {Counts(user?.[key])}
                        </Text>
                        <Text size="text-xs sm:text-sm" color="text-muted-foreground">
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </Text>
                      </Flex>
                    </React.Fragment>
                  ))}
            </Flex>
            <Flex />
                {/* This button will be follow or edit based on user */}
            <Button radius="full" variant="light" className="mx-4 border border-border bg-default/20 dark:bg-default/40">
                Follow
            </Button> 
            <div />
            {/* Social Icon */}
            <Flex justify="justify-center overflow-auto">
            {user?.social?.map((social, index) => (
                <motion.div key={index} variants={fromLeftVariant} className="mx-4">
                    <Button isIconOnly size="lg" variant="light" href={social.link}>
                        <Image src={social.icon} alt='' />
                    </Button>
                </motion.div>
            ))}
            </Flex>
            <Card className="mx-auto p-3">
                <Text as="p" color="text-muted-foreground" size="text-sm">About</Text>
                <Text as="h1" size="text-base">
                    {user?.bio}
                </Text>
            </Card>
            </Flex>
            {/* Card */}
            <Flex className="md:w-2/3" display="flex-col" gap="gap-3" p="p-1 sm:p-0">
                <Command>
                    <Flex border="border border-border rounded-full" display="sticky top-0.5 z-50 flex-col" color="bg-background/70 backdrop-blur-lg" m="mx-4 mt-1 mb-3">
                        <CommandInput placeholder="Search Post"  />
                    </Flex>
                  <CommandEmpty>No result found</CommandEmpty>
                  <CommandGroup>
                    <Flex className="grid sm:grid-cols-2 gap-2">
                        {post?.map((feed) => (
                            <CommandItem key={feed.title} className="aria-selected:bg-transparent">
                                <FeedCard feed={feed}/>
                            </CommandItem>
                        ))}
                    </Flex>
                  </CommandGroup>
                </Command>
             </Flex>
        </Flex>
    </AnimatedDiv>
);

export default User;
