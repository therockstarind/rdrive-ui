"use client"

import { Button, Listbox, ListboxItem } from "@nextui-org/react"
import * as React from "react"
import { LuMenuSquare } from "react-icons/lu"
import { useMediaQuery } from "®/hooks/use-media-query"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "®ui/dialog"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "®ui/drawer"
import { ScrollArea } from "../ui/scroll-area"
import { useRouter } from "next/navigation"

type TocItem = {
    toc: {
      id: string;
      title: string;
    }[];
  };

const BlogToc: React.FC<TocItem> = ({ toc }) => {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const router = useRouter();
  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
        <Button size="sm" isIconOnly radius="full" className="bg-default/10 hover:bg-default/30 dark:hover:bg-default/70 border border-border"><LuMenuSquare size={20}/></Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl p-0">
          <DialogHeader>
          </DialogHeader>
          <ScrollArea className="h-[45dvh]" type="always">
          <Listbox items={toc} aria-label="Table of Content" className="pr-4 mb-1 overflow-x-hidden">
            {toc.map((item, index) => (
                 index === 0 ? (
              <ListboxItem
                key={index}
                variant="faded"
                textValue={item.title} 
                showDivider
                onPress={() => runCommand(() => router.push(`#${item.id}`))}
              >
                <h1 className="text-xl !truncate">
                  {item.title}
                </h1>
              </ListboxItem>
                ):(
             <ListboxItem
                    key={index}
                    variant="faded"
                    textValue={item.title} 
                    onPress={() => runCommand(() => router.push(`#${item.id}`))}
                  >
                    <h1 className="!truncate">
                      {item.title}
                    </h1>
             </ListboxItem>
            )))}
          </Listbox>
        </ScrollArea>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
      <Button size="sm" isIconOnly radius="full" className="bg-default/10 hover:bg-default/30 dark:hover:bg-default/70 border border-border"><LuMenuSquare size={20}/></Button>
      </DrawerTrigger>
      <DrawerContent>
        <ScrollArea className="h-[40dvh]" type="always">
          <Listbox items={toc} aria-label="Table of Content" className="pr-4 mb-1 overflow-x-hidden">
            {toc.map((item, index) => (
                 index === 0 ? (
              <ListboxItem
                key={index}
                variant="faded"
                textValue={item.title} 
                showDivider
                onPress={() => runCommand(() => router.push(`#${item.id}`))}
              >
                <h1 className="text-xl max-w-80 !truncate">
                  {item.title}
                </h1>
              </ListboxItem>
                ):(
             <ListboxItem
                    key={index}
                    variant="faded"
                    textValue={item.title} 
                    onPress={() => runCommand(() => router.push(`#${item.id}`))}
                  >
                    <h1 className="!max-w-60 md:max-w-80 !truncate">
                      {item.title}
                    </h1>
             </ListboxItem>
            )))}
          </Listbox>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  )
}

export default BlogToc
