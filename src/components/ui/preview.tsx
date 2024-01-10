"use client"

import * as React from "react"
import { Dispatch, SetStateAction } from "react"
import { useMediaQuery } from "®/hooks/use-media-query"
import { Dialog, DialogContent } from "®ui/dialog"
import { Drawer, DrawerContent } from "®ui/drawer"
import { ScrollArea } from "./scroll-area"


export default function Preview({
    open,
    setOpen,
    children,
  }: {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    children: React.ReactNode;
  }) {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl lg:max-w-3xl p-0">
        <ScrollArea type="always" className="max-h-[80dvh] overflow-hidden p-3">
            {children}
        </ScrollArea>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
      <ScrollArea type="always" className="p-2 overflow-scroll">
            {children}
      </ScrollArea>
      </DrawerContent>
    </Drawer>
  )
}