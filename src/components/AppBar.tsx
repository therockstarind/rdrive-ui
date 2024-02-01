'use client'

import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React, { ReactElement } from 'react'
import { BsAndroid2 } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import { GoSearch } from 'react-icons/go'
import { IoGameController } from 'react-icons/io5'
import { SiApple } from 'react-icons/si'
import { TbApps } from 'react-icons/tb'
import { cn } from '®/lib/utils'
import SearchBar from './SearchBar'
import Tooltip from '®ui//tooltip'
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
    <nav className="max-w-auto fixed bottom-3  z-50 mx-auto justify-center sm:bottom-1.5">
      <div className="flex items-center gap-2 rounded-full border border-border bg-white/70 p-1.5 backdrop-blur-md dark:bg-black/70">
        <BarButton
          tooltip="Android"
          children={<BsAndroid2 />}
          onPress={() => router.push('/')}
        />
        <BarButton
          tooltip="Apps"
          children={<TbApps />}
          onPress={() => router.push('/Apps')}
        />
        <BarButton
          tooltip="Games"
          children={<IoGameController />}
          onPress={() => router.push('/Games')}
        />
        <BarButton
          tooltip="Apple"
          children={<SiApple />}
          onPress={() => router.push('/Apple')}
        />
        <BarButton
          tooltip="Search"
          children={<GoSearch />}
          onPress={() => setSearchOpen(true)}
        />
        <BarButton
          tooltip="Login"
          children={<FaUserCircle />}
          onPress={() => setLoginOpen(true)}
        />
        <SearchBar open={openSearch} setOpen={setSearchOpen} />
        <Login open={openLogin} setOpen={setLoginOpen} />
      </div>
    </nav>
  )
}

export default AppBar
