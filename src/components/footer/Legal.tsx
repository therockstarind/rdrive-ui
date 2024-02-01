'use client'

import { Listbox, ListboxItem } from '@nextui-org/react'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import * as React from 'react'
import { useMediaQuery } from '®/hooks/use-media-query'
import { Drawer, DrawerContent, DrawerTrigger } from '®ui/drawer'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '®ui/dropdown-menu'

export function LegalLinks() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Link href={``} className="LinkText flex items-center gap-1">
            Legal
            <ChevronDown
              className={`h-4 w-4 transform transition-transform ${
                open ? 'rotate-180' : ''
              }`}
            />
          </Link>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48 bg-background">
          <DropdownMenuGroup>
            <Link href="/about" passHref>
              <DropdownMenuItem>
                About Us
                <DropdownMenuShortcut>A</DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>
            <Link href="/privacy" passHref>
              <DropdownMenuItem>
                Privacy Policy
                <DropdownMenuShortcut>P</DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>
            <Link href="/terms" passHref>
              <DropdownMenuItem>
                Terms of Service
                <DropdownMenuShortcut>T</DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <Link href="/" passHref>
              <DropdownMenuItem>
                Report & Feedback
                <DropdownMenuShortcut>R</DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Link href={``} className="LinkText flex items-center gap-1">
          Legal
          <ChevronDown
            className={`h-4 w-4 transform transition-transform ${
              open ? 'rotate-180' : ''
            }`}
          />
        </Link>
      </DrawerTrigger>
      <DrawerContent>
        <Listbox aria-label="Legal Links" className="mt-2">
          <ListboxItem key="A" endContent="A" href="/about">
            About Us
          </ListboxItem>
          <ListboxItem key="P" endContent="P" href="/privacy">
            Privacy Policy
          </ListboxItem>
          <ListboxItem key="T" endContent="T" showDivider href="/terms">
            Terms of Service
          </ListboxItem>
          <ListboxItem
            key="F"
            className="text-primary"
            color="secondary"
            endContent="F"
            href=""
          >
            Report & Feedback
          </ListboxItem>
        </Listbox>
      </DrawerContent>
    </Drawer>
  )
}
