"use client"

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { LuTextQuote } from "react-icons/lu";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "®ui/command";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "®ui/dialog";
import Tooltip from "®ui/tooltip";

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
                  <CommandList className="border-t border-border">
                          <CommandEmpty>No content found.</CommandEmpty>
                      <CommandGroup heading="On this page">
                          {toc.map((item) => (
                              <CommandItem key={item.id} onSelect={() => onNavigate(item.id)}
                                  className={`${
                                    item.level === 1 ? 'font-bold text-lg': 
                                    item.level === 2 ? 'pl-6': 
                                    item.level === 3 ? 'pl-8 line-clamp-1':
                                    'pl-10'
                                }`}
                              >
                                  <div className="line-clamp-1">{item.title}</div>
                              </CommandItem>
                          ))}
                      </CommandGroup>
                  </CommandList>
      </Command>
  );
};

type TocProps = {
  toc: TocItem[];
  onNavigate?: (id: string) => void;
};

const BlogToc: FC<TocProps> = ({ toc }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const onNavigate = (id: string) => {
      setOpen(false);
      router.push(`#${id}`);
  };

  return (
      <Dialog open={open} onOpenChange={setOpen}>
          <Tooltip content="Table of Content">
    <DialogTrigger asChild>
      <Button size="sm" isIconOnly radius="full" variant="light" className="border border-border bg-default/20 dark:bg-default/40">
        <LuTextQuote size={20} />
      </Button>
    </DialogTrigger>
  </Tooltip> 
  <DialogContent className="max-w-2xl p-0 gap-0 translate-y-0 bottom-0 sm:translate-y-[-50%] sm:bottom-none">
      <DialogHeader />
          <TocList toc={toc} onNavigate={onNavigate} />
    </DialogContent>
      </Dialog>
  )
};

export default BlogToc;