"use client"

import { Kbd } from "@nextui-org/react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"
import * as React from "react"
import { Dispatch, SetStateAction } from "react"
import { RiComputerLine } from "react-icons/ri"
import { linksConfig } from "®/config/links"
import { useMediaQuery } from "®/hooks/use-media-query"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "®ui/command"
import { Dialog, DialogContent } from "®ui/dialog"
import { Drawer, DrawerContent } from "®ui/drawer"


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
  const Content = (
    <>
      <Search runCommand={runCommand} />
      <Footer setOpen={setOpen} />
    </>
  );
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl p-0 gap-0">
            {Content}
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent showDiv={false}>
        {Content}
      </DrawerContent>
    </Drawer>
  )
}

function Search({ runCommand }: {runCommand: any}) {
    const { setTheme } = useTheme();
    const router = useRouter();
  return (
    <Command className="h-[55vh]">
    <CommandInput placeholder="Type a command or search..."/>
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        {linksConfig.searchList.map((links) => ( 
    <CommandItem onSelect={() => runCommand(() => router.push(`${links.href}`))}> 
        <div className="text-lg mr-2">{links.icon && <links.icon/>}</div>
         <div>
            <h1 className="line-clamp-1">{links.title}</h1>
            <p className="text-xs text-muted-foreground line-clamp-1">{links.description}</p>
        </div>
      <CommandShortcut>{links.title.charAt(0).toUpperCase()}</CommandShortcut>
    </CommandItem>
          ))}
    </CommandGroup>
        <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
              <SunIcon className="mr-2 h-4 w-4" />
              Light
              <CommandShortcut>L</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
              <RiComputerLine className="mr-2 h-4 w-4" />
              System
              <CommandShortcut>S</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
              <MoonIcon className="mr-2 h-4 w-4" />
              Dark
              <CommandShortcut>D</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
  </Command>
  )
}

function Footer({ setOpen }: {setOpen: any}) {
  return (
    <div className="border-t border-border flex justify-between items-center p-2 cursor-default h-10">
        <div><Kbd keys={["escape"]} onClick={() => setOpen(false)}></Kbd></div>
          <div className="flex gap-3 items-center">
            <Kbd keys={["up"]}></Kbd>
            <Kbd keys={["down"]}></Kbd>
            <Kbd keys={["enter"]}></Kbd>
          </div>   
    </div>
  )
}