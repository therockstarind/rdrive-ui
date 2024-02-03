'use client'
import { UserType } from '®/types'
import { Avatar, Flex, Grid, Text } from '®rdrive/ui'
import { Button, Image } from '@nextui-org/react'
import { motion } from 'framer-motion'
import React from 'react'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import { FadeContainer, fromLeftVariant } from '®/lib/FramerMotionVariants'
import { Counts } from '®/lib/utils'
import { Separator } from '@radix-ui/themes'
import AnimatedDiv from '../FramerMotion/AnimatedDiv'
import Link from 'next/link'

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
  <AnimatedDiv variants={FadeContainer}>
    <Flex
      className="color-inherit relative z-10 h-[180px] w-full shrink-0 flex-col items-center justify-end rounded-t-large bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 p-3 subpixel-antialiased"
      style={{
        backgroundImage: `url(${user?.coverimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Link
        href={`/${user?.username}`}
        className="relative z-0 box-border translate-y-12 items-center justify-center overflow-hidden rounded-full align-middle"
      >
        <Avatar
          src={user?.avatar || ''}
          fallback={fallback(user?.name)}
          className="h-32 w-32 text-4xl backdrop-blur"
        />
      </Link>
      <Button className="group absolute right-3 top-3 z-0 box-border h-unit-8 min-w-unit-16 whitespace-nowrap rounded-full bg-black/30 px-unit-3 text-xs text-white subpixel-antialiased backdrop-blur-md dark:bg-black/70">
        Edit
      </Button>
    </Flex>
    <Flex className="place-content-inherit align-items-inherit relative mt-8 w-full flex-auto flex-col gap-4 break-words p-3 text-left subpixel-antialiased">
      <Grid>
        <Link
          href={`/${user?.username}`}
          className="flex items-center gap-2 text-3xl font-medium"
        >
          {user?.name}
          <RiVerifiedBadgeFill className="text-blue-500" size={20} />
        </Link>
        <Text
          display="max-w-[90%]"
          size="text-sm"
          color="text-muted-foreground"
        >
          @{user?.username}
        </Text>
        <Flex gap="gap-2" m="my-2">
          {user?.badge?.map((badge, index) => (
            <motion.div key={index} variants={fromLeftVariant}>
              <Button
                size="sm"
                radius="full"
                variant="light"
                className="h-7 border border-border bg-default/20 px-2 dark:bg-default/40"
              >
                {badge}
              </Button>
            </motion.div>
          ))}
        </Flex>
        <Text className="text-sm text-foreground">
          {user?.bio ??
            'Uh-oh! 🙈 It looks like RDRIVE decided to have a little snack on my bio! 🍽️ '}
        </Text>
      </Grid>
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
    </Flex>
  </AnimatedDiv>
)
const UserSocial: React.FC<{ user?: UserType }> = ({ user }) => (
  <Flex justify="justify-center overflow-auto">
    {user?.social?.map((social, index) => (
      <motion.div key={index} variants={fromLeftVariant} className="mx-4">
        <Button isIconOnly size="lg" variant="light" href={social.link}>
          <Image src={social.icon} alt="" />
        </Button>
      </motion.div>
    ))}
  </Flex>
)

export { User, UserDetails, UserSocial }
