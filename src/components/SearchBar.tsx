"use client"

import { Kbd, Tooltip } from "@nextui-org/react"
import { ArrowDown, ArrowUp, ArrowUpLeftFromCircle, CornerDownLeft, MoonIcon, SunIcon } from "lucide-react"
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
import { Button } from "./ui/button"


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
        <DialogContent className="max-w-2xl lg:max-w-3xl p-0 gap-0 h-[50vh]">
            {Content}
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent showDiv={false} className="h-[55vh] overflow-hidden">
      {Content}
      </DrawerContent>
    </Drawer>
  )
}

function Search({ runCommand }: {runCommand: any}) {
    const { setTheme } = useTheme();
    const router = useRouter();
  return (
    <Command>
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
                <h1>Change Theme to  Light</h1>
              <CommandShortcut>L</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
              <RiComputerLine className="mr-2 h-4 w-4" />
                <h1>Change Theme to  System</h1>
              <CommandShortcut>S</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
              <MoonIcon className="mr-2 h-4 w-4" />
              <h1>Change Theme to  Dark</h1>
              <CommandShortcut>D</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
  </Command>
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