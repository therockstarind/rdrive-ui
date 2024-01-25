"use client"
import { Listbox, ListboxItem } from '@nextui-org/react';
import { List } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '®ui/popover';
import { ScrollArea } from '®ui/scroll-area';

type TocItem = {
  toc: {
    id: string;
    title: string;
    level?: number;
  }[];
};

const Toc: React.FC<TocItem> = ({ toc }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <List className="h-5 w-5 LinkText" />
      </PopoverTrigger>
      <PopoverContent side="bottom" align="end" sideOffset={18} className="p-0">
        <ScrollArea className="h-[40dvh]" type="always">
          <Listbox items={toc} aria-label="Table of Content" className="pr-2">
            {toc.map((item) => (
              <ListboxItem
                variant="faded"
                textValue={item.title} 
                onPress={() => runCommand(() => router.push(`#${item.id}`))}
                key={item.id}  className={`${
                  item.level === 1 ? '!font-bold !max-w-64' : 
                  item.level === 2 ? 'pl-8 text-muted-foreground !max-w-64' : 
                  item.level === 3 ? 'pl-12 text-muted-foreground !max-w-64' :
                  'pl-16 text-muted-foreground !max-w-64'
              }`}
              >
                  {item.title}
              </ListboxItem>
            ))}
          </Listbox>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
};

export default Toc;
