"use client"
import { Listbox, ListboxItem } from '@nextui-org/react';
import { List } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '®ui/popover';
import { ScrollArea } from '®ui/scroll-area';

type TocItem = {
  toc: {
    id: string;
    title: string;
  }[];
};

const Toc: React.FC<TocItem> = ({ toc }) => {
  const router = useRouter();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <List className="h-5 w-5 LinkText" />
      </PopoverTrigger>
      <PopoverContent side="bottom" align="end" sideOffset={18} className="p-0">
        <ScrollArea className="h-[40dvh]" type="always">
          <Listbox items={toc} aria-label="Table of Content" className="pr-4 mb-1 overflow-x-hidden">
            {toc.map((item, index) => (
                 index === 0 ? (
              <ListboxItem
                key={index}
                variant="faded"
                textValue={item.title} 
                showDivider
                onPress={() => router.push(`#${item.id}`)}
              >
                <h1 className="text-xl !max-w-60 md:max-w-80 !truncate">
                  {item.title}
                </h1>
              </ListboxItem>
                ):(
             <ListboxItem
                    key={index}
                    variant="faded"
                    textValue={item.title} 
                    onPress={() => router.push(`#${item.id}`)}
                  >
                    <h1 className="!max-w-60 md:max-w-80 !truncate">
                      {item.title}
                    </h1>
             </ListboxItem>
            )))}
          </Listbox>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
};

export default Toc;
