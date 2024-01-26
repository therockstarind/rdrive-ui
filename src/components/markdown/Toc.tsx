"use client"
import { List } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '®ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../ui/command';

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
      <Command>
          <CommandInput placeholder="Filter headings"/>
                  <CommandList className="border-t border-border">
                          <CommandEmpty>No content found.</CommandEmpty>
                      <CommandGroup heading="On this page">
                          {toc.map((item) => (
                              <CommandItem key={item.id} onSelect={() => runCommand(() => router.push(`#${item.id}`))}
                                  className={`${
                                    item.level === 1 ? '': 
                                    item.level === 2 ? 'pl-6': 
                                    item.level === 3 ? 'pl-8':
                                    'pl-10'
                                }`}
                              >
                                  <div className="line-clamp-1">{item.title}</div>
                              </CommandItem>
                          ))}
                      </CommandGroup>
                  </CommandList>
      </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Toc;
