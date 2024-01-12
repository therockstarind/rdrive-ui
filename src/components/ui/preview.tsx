import * as React from "react";
import { Dispatch, SetStateAction } from "react";
import { useMediaQuery } from "®/hooks/use-media-query";
import { Dialog, DialogContent } from "®ui/dialog";
import { Drawer, DrawerContent } from "®ui/drawer";
import { ImagePreview, MarkdownPreview, VideoPreview } from "../FilePreview";
import { ScrollArea } from "./scroll-area";

type PreviewProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  src: string;
  title?: string;
  width?: number | string;
  height?: number | string;
  type: 'img' | 'video' | 'md';
};

export default function Preview({ open, setOpen, src, title, width, height, type }: PreviewProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // Function to render the correct preview based on type
  const Preview = () => {
    switch (type) {
      case 'img':
        return <ImagePreview src={src} title={title} width={width} height={height} />;
      case 'video':
        return <VideoPreview src={src} title={title} width={width} height={height} />;
      case 'md':
        return <MarkdownPreview src={src} />;
      default:
        return null;
    }
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl lg:max-w-3xl p-0">
          <ScrollArea type="always" className="max-h-[80dvh] overflow-hidden p-3">
            {Preview()}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <ScrollArea type="always" className="p-2 overflow-y-scroll">
          {Preview()}
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  )
}