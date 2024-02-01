"use client"

import { Tooltip } from "@nextui-org/react"
import { Command } from "cmdk"
import { ArrowDown, ArrowUp, ArrowUpLeftFromCircle, CornerDownLeft, MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"
import * as React from "react"
import { Dispatch, SetStateAction } from "react"
import { FaBrush } from "react-icons/fa"
import { FiPlus } from "react-icons/fi"
import { RiComputerLine } from "react-icons/ri"
import { VscBook } from "react-icons/vsc"
import { Demo } from "®/config/demo"
import { linksConfig } from "®/config/links"
import { useMediaQuery } from "®/hooks/use-media-query"
import { Button, Dialog, DialogContent, Drawer, DrawerContent } from "®/rdrive/ui"


export default function SearchBar({
    open,
    setOpen,
  }: {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
  }) {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl p-0 gap-0">
                  <Search runCommand={runCommand} setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent showDiv={false}>
        <div className="mt-1">
        <Search runCommand={runCommand} setOpen={setOpen} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}

function Search({ runCommand, setOpen }: {runCommand: any, setOpen: any}) {
    const ref = React.useRef<HTMLDivElement | null>(null)
  const [inputValue, setInputValue] = React.useState('')

  const [pages, setPages] = React.useState<string[]>(['Home'])
  const activePage = pages[pages.length - 1]
  const isHome = activePage === 'Home'

  const popPage = React.useCallback(() => {
    setPages((pages) => {
      const x = [...pages]
      x.splice(-1, 1)
      return x
    })
  }, [])

  const onKeyDown = React.useCallback(
    (e: KeyboardEvent) => {
      if (isHome || inputValue.length) {
        return
      }

      if (e.key === 'Backspace') {
        e.preventDefault()
        popPage()
      }
    },
    [inputValue.length, isHome, popPage],
  )
const placeholder: Record<string, string> = {
    Home: "Search for anything...",
    Posts: "Search Posts...",
    Theme: "Change Theme...",
  };
  function bounce() {
    if (ref.current) {
      ref.current.style.transform = 'scale(0.96)'
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.transform = ''
        }
      }, 100)

      setInputValue('')
    }
  }

  return (
    <Command
    ref={ref}
    className="vercel"
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key === 'Enter') {
            bounce()
          }

          if (isHome || inputValue.length) {
            return
          }

          if (e.key === 'Backspace') {
            e.preventDefault()
            popPage()
            bounce()
          }
        }}>
          <div className="mx-2 mt-1">
            {pages.map((p) => (
              <div
                key={p}
                cmdk-vercel-badge=""
                onClick={() => {
                  if (p !== activePage) {
                    popPage();
                    bounce();
                  }
                }}
                className="cursor-pointer"
              >
                {p}
              </div>
            ))}
          </div>
    <Command.Input autoFocus
          placeholder={placeholder[activePage]}
          onValueChange={(value) => {
            setInputValue(value)
          }}/>
        <Command.List>
      <Command.Empty>No results found.</Command.Empty>
        {activePage === 'Home' && <Home Theme={() => setPages([...pages, 'Theme'])} Post={() => setPages([...pages, 'Posts'])} runCommand={runCommand} />}
        {activePage === 'Theme' && <Theme runCommand={runCommand} />}
        {activePage === 'Posts' && <Post runCommand={runCommand} />}
    </Command.List>
    <Footer setOpen={setOpen} />
    </Command>
  )
}

function Home({ runCommand, Theme, Post }: {runCommand: any, Theme: Function, Post: Function}) {
        const router = useRouter();
  return (
      <>
      <Command.Group heading="Posts">
        <Command.Item onSelect={() => {Post()}}>
          <VscBook size={24} /> Search Posts... <Shortcut>P</Shortcut>
        </Command.Item>
        <Command.Item>
           <FiPlus size={24} /> Create New Post..
        </Command.Item>
      </Command.Group>
        <Command.Group heading="Navigation">
        {linksConfig.searchList.map((links) => ( 
    <Command.Item onSelect={() => runCommand(() => router.push(`${links.href}`))}> 
      <div className="text-[24px]">{links.icon && <links.icon/>}</div>
                <div className='flex flex-1 items-center gap-2'>
                    <div className="flex flex-col flex-1">
                      <div className="flex-1 line-clamp-1">{links.title}</div>
                      <div className="text-xs text-muted-foreground line-clamp-1">{links.description}</div>
                    </div>
                </div>
    </Command.Item>
          ))}
        </Command.Group>
        <Command.Group heading="General">
        <Command.Item onSelect={() => {Theme()}}>
          <FaBrush size={24} /> Change Theme... <Shortcut>T</Shortcut>
        </Command.Item>
      </Command.Group>
      </>
  )
}
function Post({ runCommand }: {runCommand: any}) {
        const router = useRouter();
  return (
      <>
        {Demo.post.map((post) => ( 
      <Command.Item onSelect={() => runCommand(() => router.push(`${post.href}`))}> 
          <VscBook size={24} /> {post.title}
      </Command.Item>
          ))}
      </>
  )
}
function Theme({ runCommand }: {runCommand: any}) {
        const { setTheme } = useTheme();
  return (
              <>
            <Command.Item onSelect={() => runCommand(() => setTheme("light"))}>
              <SunIcon size={24} />Change Theme to Light<Shortcut>L</Shortcut>
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => setTheme("system"))}>
              <RiComputerLine size={24} />Change Theme to System<Shortcut>S</Shortcut>
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => setTheme("dark"))}>
              <MoonIcon size={24} />Change Theme to Dark<Shortcut>D</Shortcut>
            </Command.Item>
          </>
  )
}
function Shortcut({children,}: {children: React.ReactNode}) {
  return (
      <div cmdk-vercel-shortcuts=""><kbd>{children}</kbd></div>   
  )
}
function Footer({ setOpen }: {setOpen: any}) {
  return (
    <div className="border-t border-border flex justify-between items-center p-2 cursor-default">
          <Tooltip content="ESC" placement="bottom"><Button variant="outline" size="icon" className="h-6 w-6" onClick={() => setOpen(false)}><ArrowUpLeftFromCircle className="w-3 h-3"/></Button></Tooltip>
          <div className="flex gap-3 items-center">
          <Tooltip content="UP" placement="bottom"><Button variant="outline" size="icon" className="h-6 w-6"><ArrowUp className="w-4 h-4"/></Button></Tooltip>
          <Tooltip content="Down" placement="bottom"><Button variant="outline" size="icon" className="h-6 w-6"><ArrowDown className="w-4 h-4"/></Button></Tooltip>
          <Tooltip content="Enter" placement="bottom"><Button variant="outline" size="icon" className="h-6 w-6"><CornerDownLeft className="w-4 h-4"/></Button></Tooltip>
          </div>   
    </div>
  )
}
