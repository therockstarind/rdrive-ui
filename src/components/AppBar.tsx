'use client'

import { Badge, Button, Image } from '@nextui-org/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { ReactElement } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { siteConfig } from '®/config/site'
import { cn } from '®/lib/utils'
import { Flex, Text } from '®/rdrive/ui'
import Tooltip from '®ui//tooltip'
import SearchBar from './SearchBar'
import { NotificationsIcon } from './icons'
import Login from './user/login'

type ButtonProps = {
  className?: string
  children?: ReactElement
  tooltip: string
  onPress?: any
}

const BarButton: React.FC<ButtonProps> = ({
  children,
  tooltip,
  className,
  onPress,
}) => (
  <Tooltip content={tooltip}>
    <Button
      isIconOnly
      radius="full"
      onPress={onPress}
      className={cn(
        'border border-border bg-default/20 hover:bg-default/40 dark:bg-default/40 dark:hover:bg-default/70',
        className
      )}
    >
      <div className="text-xl">{children}</div>
    </Button>
  </Tooltip>
)
const AppBar = () => {
  const [openSearch, setSearchOpen] = React.useState(false)
  const [openLogin, setLoginOpen] = React.useState(false)
  const router = useRouter()

  return (
    <Flex justify="fixed bottom-3 z-50 mx-auto w-full max-w-sm items-center justify-between gap-2 rounded-full border border-border bg-white/70 p-1.5 backdrop-blur-md dark:bg-black/70 sm:bottom-1.5">
      <Link href="/" passHref className="flex items-center gap-1">
        <Image
          src={siteConfig.logo}
          alt={siteConfig.name}
          width={40}
          height={40}
        />
        <Text as="h1" size="text-xl" font="font-bold">
          {siteConfig.name}
        </Text>
      </Link>
      <Flex align="items-center" gap="gap-4">
        {/* <BarButton
          tooltip="Search"
          children={<GoSearch />}
          onPress={() => setSearchOpen(true)}
        /> */}
        <Badge content="99+" shape="circle" size="sm" color="success">
          <BarButton tooltip="Notifications" children={<NotificationsIcon />} />
        </Badge>
        <BarButton
          tooltip="Login"
          children={<FaUserCircle />}
          onPress={() => setLoginOpen(true)}
        />
      </Flex>
      <SearchBar open={openSearch} setOpen={setSearchOpen} />
      <Login open={openLogin} setOpen={setLoginOpen} />
    </Flex>
  )
}

export default AppBar
