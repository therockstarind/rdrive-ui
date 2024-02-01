'use client'

import Link from 'next/link'
import FooterLinks from './Link'
import SocialFooter from './Social'
import { Button, Image, Kbd } from '@nextui-org/react'
import { useHotkeys } from 'react-hotkeys-hook'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { siteConfig } from '®/config/site'
import useDeviceOS from '®/hooks/useDeviceOS'
import React from 'react'
import SearchBar from '../SearchBar'

const Footer = () => {
  const os = useDeviceOS()
  const [open, setOpen] = React.useState(false)
  const openSearch = () => setOpen(true)
  useHotkeys(`${os === 'mac' ? 'meta' : 'ctrl'}+k`, (e) => {
    openSearch()
    e.preventDefault()
  })
  return (
    <footer className="w-full border-t border-border p-4 text-sm md:p-2">
      <main className="mx-auto my-4 mb-20 w-full max-w-7xl space-y-4 md:mb-6 md:space-y-8">
        <ul className="grid grid-cols-2 justify-between gap-2 md:flex">
          <li className="hidden md:flex">
            <SocialFooter />
          </li>
          <FooterLinks />
        </ul>

        <div className="hidden items-center justify-between md:flex">
          <Link href="/" passHref className="flex items-center gap-1">
            <Image
              src={siteConfig.logo}
              alt={siteConfig.name}
              isBlurred
              width={40}
              height={40}
            />
            <p className="LinkText">&copy; {new Date().getFullYear()}</p>
          </Link>
          <div className="flex items-center">
            <Button
              size="sm"
              className="LinkText hidden gap-2 overflow-hidden rounded-full lg:flex"
              variant="light"
              onPress={openSearch}
            >
              Command Menu
              <Kbd className="border border-border bg-background text-xs shadow-none">
                {os === 'windows' ? 'Ctrl' : '⌘'}
              </Kbd>
              <Kbd className="border border-border bg-background text-xs shadow-none">
                K
              </Kbd>
            </Button>
            <SearchBar open={open} setOpen={setOpen} />
            <ThemeSwitcher />
          </div>
        </div>

        <div className="flex items-center justify-between md:hidden">
          <SocialFooter />
          <ThemeSwitcher />
        </div>
      </main>
    </footer>
  )
}
export default Footer
