'use client'
import { Button, Image } from '@nextui-org/react'
import { Separator } from '@radix-ui/themes'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import { FadeContainer, fromLeftVariant } from '®/lib/FramerMotionVariants'
import { Counts } from '®/lib/utils'
import { UserType } from '®/types'
import { Avatar, Flex, Grid, Text } from '®rdrive/ui'
import AnimatedDiv from '../FramerMotion/AnimatedDiv'
import Settings from './settings'

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

const UserDetails: React.FC<{ user?: UserType }> = ({ user }) => {
  const [openSettings, setSettingsOpen] = React.useState(false)

  return (
    <AnimatedDiv variants={FadeContainer} className="flex flex-col gap-3">
      {/* Cover image section with an Edit button and user's avatar linked to their profile. */}
      <Flex className="relative h-[150px] w-full rounded-t-large bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 subpixel-antialiased">
        {/* The user's cover image displayed with optional fallback. */}
        <Image
          src={user?.coverimg || ''}
          alt={`${user?.name} Cover Image`}
          className="h-[150px] overflow-hidden rounded-t-large object-cover"
          radius="none"
          height="300"
          width="1270"
        />
        {/* Edit button and user's avatar linked to their profile. */}
        <Button
          onPress={() => setSettingsOpen(true)}
          className="group absolute right-3 top-3 z-10 box-border h-unit-8 min-w-unit-16 whitespace-nowrap rounded-full bg-black/30 px-unit-3 text-xs text-white subpixel-antialiased backdrop-blur-md dark:bg-black/70"
        >
          Edit
        </Button>
        <Settings open={openSettings} setOpen={setSettingsOpen} />
        <Link
          href={`/${user?.username}`}
          className="absolute bottom-0 z-10 flex w-full translate-y-1/2 transform items-center justify-center"
        >
          {/* User's avatar with optional fallback. */}
          <Avatar
            src={user?.avatar || ''}
            fallback={fallback(user?.name)}
            className="h-32 w-32 rounded-full text-4xl backdrop-blur"
          />
        </Link>
      </Flex>

      {/* User information section including name, username, and badges. */}
      <Flex
        m="mt-12"
        align="items-center"
        justify="justify-center"
        display="flex-col"
      >
        {/* User's name with a verified badge if applicable. */}
        <Link
          href={`/${user?.username}`}
          className="flex items-center gap-2 text-3xl font-medium"
        >
          {user?.name}
          <RiVerifiedBadgeFill className="text-blue-500" size={20} />
        </Link>
        {/* User's username and a short bio. */}
        <Text
          display="max-w-[90%]"
          size="text-sm"
          color="text-muted-foreground"
        >
          @{user?.username}
        </Text>
      </Flex>

      {/* Badges section displaying user's badges with motion-based animation. */}
      <Flex gap="gap-2" align="items-center" justify="justify-center">
        {user?.badge?.map((badge, index) => (
          <motion.div key={index} variants={fromLeftVariant}>
            {/* Button displaying user's badge. */}
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

      {/* User statistics section displaying post, followers, and following counts. */}
      <Flex align="items-center" justify="justify-around">
        {/* Buttons linking to user's posts, followers, and following pages with corresponding counts. */}
        {['post', 'followers', 'following'].map((key, index) => (
          <React.Fragment key={key}>
            {index > 0 && <Separator className="h-8" orientation="vertical" />}
            {/* Button displaying count and type (post, followers, following). */}
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

      {/* User bio section with a gradient background. */}
      <Flex
        className="bg-gradient-to-br from-border via-emerald-400/90 to-border"
        m="mx-4"
        display="rounded-full"
        p="p-px"
      >
        {/* Text displaying user's bio or a default message if bio is not provided. */}
        <Text
          size="text-sm"
          align="text-center"
          color="bg-background"
          className="w-full"
          display="rounded-full"
          font="font-sans"
          p="px-4 py-2"
        >
          {user?.bio ??
            'Uh-oh! 🙈 It looks like RDRIVE decided to have a little snack on my bio! 🍽️ '}
        </Text>
      </Flex>
    </AnimatedDiv>
  )
}

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
