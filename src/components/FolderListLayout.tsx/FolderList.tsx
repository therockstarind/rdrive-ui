"use client";
import { Flex, Grid, Text } from "@radix-ui/themes";
import { ArrowDownToLine } from "lucide-react";
import React, { useState } from "react";
import FileIcon, { getExtension } from "®/utils/getFileIcon";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "®ui/command";
import Preview from "®ui/preview";
import { Author } from "./Author";
import { useRouter } from "next/navigation";
import { getPreviewType } from "®/utils/getPreviewType";

type ListItem = {
  href: string;
  title: string;
  size: string;
  date: string;
  download: string;
  width: number | string;
  height: number | string;
};

const List: ListItem[] = [
  {
    href: '/Folder/',
    title: 'Folder',
    size: '8 MB',
    date: '12 Jan 2024',
    download: '',
    width: '',
    height: '',
  },
  {
    href: '/images/lyra.png',
    title: 'Lyra',
    size: '8 MB',
    date: '12 Jan 2024',
    download: '0',
    width: '',
    height: '',
  },
  {
    href: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    title: 'Big Buck Bunny',
    size: '122.79 MB',
    date: '12 Jan 2024',
    download: '0',
    width: '',
    height: '',
  },
  {
    href: '/sample.md',
    title: 'Sample',
    size: '1.89 MB',
    date: '12 Jan 2024',
    download: '0',
    width: '',
    height: '',
  },
];

const FolderList = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ListItem | null>(null);
  const router = useRouter();

  const SelectItem = (item: ListItem) => {
    const previewType = getPreviewType(getExtension(item.href))
    if (previewType) {
      setSelectedItem(item);
      setOpen(true);
    } else {
      router.push(item.href);
    }
  };  
  
return (
    <Command>
      <Flex justify="end" mt="1" mb="4" mx="2" align="center">
      <div className="GoToFile">
      <CommandInput placeholder="Go to file" className="h-8"/>
      </div>
      </Flex>
      <Grid className="border border-border rounded-md">
        <Flex className="bg-default/10 dark:bg-default/30 border-b border-border" justify="between" px="2" align="center" p="1">
            <Author />
            <Text as="p" size="2" color="gray">{List.length} items</Text>
          </Flex>
        <CommandList className="h-full max-h-60 sm:max-h-64 md:max-h-80 lg:max-h-92 pr-1">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
          {List.map((list, index) => (
          <React.Fragment key={list.title + index}>
            <CommandItem className="my-1" onSelect={() => SelectItem(list)}>
            <div className='flex flex-1 items-center gap-4'>
                <div className="text-lg"><FileIcon name={list.href} /></div>
                    <div className="flex flex-col sm:flex-row flex-1 sm:gap-2 sm:items-center">
                    <div className="flex-1 line-clamp-1 text-base">{list.title}</div>
                        <div className="flex gap-2 sm:gap-6 sm:font-mono text-xs text-nowrap text-muted-foreground line-clamp-1">
                            <div>{list.size}</div>
                            <div>•</div>
                            <div>{list.date}</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">{list.download}<ArrowDownToLine className="w-4 h-4" /></div>
                </div>
            </CommandItem><CommandSeparator />
            </React.Fragment>
            ))}
          </CommandGroup>
        </CommandList>
        </Grid>
        {selectedItem && (
        <Preview  open={open}  setOpen={setOpen}  
              src={selectedItem.href}  
              title={selectedItem.title}  
              width={selectedItem.width}  
              height={selectedItem.height} 
        />)}
    </Command>
)
}
export default FolderList;