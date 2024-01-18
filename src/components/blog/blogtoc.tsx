"use client"

import { Button, Listbox, ListboxItem, Tooltip } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { LuMenuSquare } from "react-icons/lu";
import { useMediaQuery } from "®/hooks/use-media-query";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "®ui/command";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "®ui/dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "®ui/drawer";

type TocItem = {
  id: string;
  title: string;
  level?: number;
};

type TocListProps = {
  toc: TocItem[];
  onNavigate: (id: string) => void;
};

const TocList: FC<TocListProps> = ({ toc, onNavigate }) => {
  return (
      <Command>
          <CommandInput placeholder="Table of Content"/>
          <Listbox variant="light" className="p-0">
              <ListboxItem key="" className="p-0">
                  <CommandList className="border-t border-border">
                          <CommandEmpty>No content found.</CommandEmpty>
                      <CommandGroup heading="On this page">
                          {toc.map((item) => (
                              <CommandItem key={item.id} onSelect={() => onNavigate(item.id)}
                                  className={`${
                                    item.level === 1 ? 'font-bold text-xl' : 
                                    item.level === 2 ? 'pl-8 text-muted-foreground' : 
                                    item.level === 3 ? 'pl-12 text-muted-foreground' :
                                    'pl-16 text-muted-foreground'
                                }`}
                              >
                                  {item.title}
                              </CommandItem>
                          ))}
                      </CommandGroup>
                  </CommandList>
              </ListboxItem>
          </Listbox>
      </Command>
  );
};


type DesktopTocProps = {
  toc: TocItem[];
  onNavigate: (id: string) => void;
};

const DesktopToc: FC<DesktopTocProps> = ({ toc, onNavigate }) => (
  <>
  <Tooltip content="Table of Content">
    <DialogTrigger asChild>
      <Button radius="full" isIconOnly variant="light" className="border border-border bg-default/20 dark:bg-default/40">
        <LuMenuSquare size={20} />
      </Button>
    </DialogTrigger>
  </Tooltip> 
  <DialogContent className="max-w-2xl p-0 gap-0">
      <DialogHeader />
          <TocList toc={toc} onNavigate={onNavigate} />
    </DialogContent></>
);

type MobileTocProps = {
  toc: TocItem[];
  onNavigate: (id: string) => void;
};

const MobileToc: FC<MobileTocProps> = ({ toc, onNavigate }) => (
  <>
  <Tooltip content="Table of Content">
    <DrawerTrigger asChild>
      <Button size="sm" radius="full" isIconOnly variant="light" className="border border-border bg-default/20 dark:bg-default/40">
        <LuMenuSquare size={20} />
      </Button>
    </DrawerTrigger>
  </Tooltip>
  <DrawerContent>
          <TocList toc={toc} onNavigate={onNavigate} />
    </DrawerContent></>
);

type BlogTocProps = {
  toc: TocItem[];
};

const BlogToc: FC<BlogTocProps> = ({ toc }) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const router = useRouter();

  const onNavigate = (id: string) => {
      setOpen(false);
      router.push(`#${id}`);
  };

  return isDesktop ? (
      <Dialog open={open} onOpenChange={setOpen}>
          <DesktopToc toc={toc} onNavigate={onNavigate} />
      </Dialog>
  ) : (
      <Drawer open={open} onOpenChange={setOpen}>
          <MobileToc toc={toc} onNavigate={onNavigate} />
      </Drawer>
  );
};

export default BlogToc;