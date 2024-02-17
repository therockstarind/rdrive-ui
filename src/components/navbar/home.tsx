'use client'

import { Badge, Button, Image } from '@nextui-org/react'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { siteConfig } from '®/config/site'
import { cn } from '®/lib/utils'
import { Flex, Text } from '®/rdrive/ui'
import Tooltip from '®ui//tooltip'
import { NotificationsIcon } from '../icons'
import SearchBar from '../SearchBar'
import Login from '../user/login'
import { GoSearch } from 'react-icons/go'
import { usePathname, useRouter } from 'next/navigation'

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
const HomeNav = () => {
  const [openSearch, setSearchOpen] = React.useState(false)
  const [openLogin, setLoginOpen] = React.useState(false)
  const pathname = usePathname()
  const hidden = pathname === '/' ? 'hidden' : 'flex'

  return (
    <Flex justify="z-50 mx-auto w-full items-center justify-between bg-white/70 p-4 backdrop-blur-md dark:bg-black/70">
      <Link href="/" passHref className="flex items-center gap-1">
        <Image
          src={siteConfig.logo}
          alt={siteConfig.name}
          width={40}
          height={40}
          disableSkeleton
        />
        <Text as="h1" size="text-xl" font="font-bold">
          {siteConfig.name}
        </Text>
      </Link>
      <Flex align="items-center" gap="gap-4">
        <div className={`${hidden}`}>
          <BarButton
            tooltip="Search"
            children={<GoSearch />}
            onPress={() => setSearchOpen(true)}
          />
        </div>
        <Badge content="99+" shape="circle" size="sm" color="secondary">
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

export default HomeNav
