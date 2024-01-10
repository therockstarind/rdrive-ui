"use client"

import { Button, Image } from "@nextui-org/react"
import { Flex } from "@radix-ui/themes"
import * as React from "react"
import { FiShare } from "react-icons/fi"
import { toast } from "sonner"
import { useMediaQuery } from "®/hooks/use-media-query"
import { Dialog, DialogContent, DialogTrigger } from "®ui/dialog"
import { Drawer, DrawerContent, DrawerFooter, DrawerTrigger } from "®ui/drawer"


export function Share() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const hover = 'border border-border rounded-full'

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
        <Button variant="light" className="border border-border rounded-full" >
            <FiShare size={20} /> Share
        </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
          <Content />
          <ShareButton />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
      <Button variant="light" className="border border-border rounded-full" >
            <FiShare size={20} /> Share
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 mx-1"><Content /></div>
        <DrawerFooter>
        <ShareButton />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}


const Content = () => {
    return (
        <Image src="https://rdrive.org/api/og/?path=/Apple/MacBook/MacBook-Pro-(M1-Max-14-inch-2021)/" alt="" className="border border-border"/>
    )
}

const ShareButton = () => {    
    return (
        <Flex justify="between" align="center" className="space-x-4">
           <Button variant="light" className="w-full border border-border" onPress={shareCurrentUrl} >Share</Button> 
           <Button variant="light" className="w-full border border-border" onPress={reportOnWhatsApp}>Report</Button> 
        </Flex>
    )
}

const shareCurrentUrl = async () => {
    try {
        if (navigator.share) {
            await navigator.share({ url: window.location.href });
        } else {
            const url = window.location.href;
            await navigator.clipboard.writeText(url);
            toast("URL copied to clipboard", {
                description: "You can now paste the URL wherever you like.",
                action: {
                    label: "Close",
                    onClick: () => console.log("Undo copy action"),
                },
            });
        }
    } catch (error) {
        console.error('Error sharing:', error);
        toast("Error in sharing the URL");
    }
};
const reportOnWhatsApp = () => {
    const phoneNumber = "919927241144";
    const currentUrl = window.location.href;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(currentUrl)}`;

    navigator.clipboard.writeText(currentUrl).then(() => {
        window.open(whatsappUrl, '_blank');
    });
};
