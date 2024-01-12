"use client";
import { Flex, Grid, Text } from "@radix-ui/themes";
import { ArrowDownToLine } from "lucide-react";
import React, { useState } from "react";
import { BsImage } from "react-icons/bs";
import { FaMarkdown, FaVideo } from "react-icons/fa";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "®ui/command";
import Preview from "®ui/preview";
import { Author } from "./Author";

type ListItem = {
  href: string;
  title: string;
  size: string;
  date: string;
  download: string;
  icon: JSX.Element;
  width: number | string;
  height: number | string;
  type: string;
};

const List: ListItem[] = [
  {
    href: '/images/lyra.png',
    title: 'Lyra',
    size: '8 MB',
    date: '12 Jan 2024',
    download: '0',
    icon: <BsImage />,
    width: '',
    height: '',
    type: 'img',
  },
  {
    href: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    title: 'Big Buck Bunny',
    size: '122.79 MB',
    date: '12 Jan 2024',
    download: '0',
    icon: <FaVideo  />,
    width: '',
    height: '',
    type: 'video',
  },
  {
    href: '/sample.md',
    title: 'Sample',
    size: '1.89 MB',
    date: '12 Jan 2024',
    download: '0',
    icon: <FaMarkdown  />,
    width: '',
    height: '',
    type: 'md',
  },
];

const FolderList = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ListItem | null>(null);

  const SelectItem = (item: ListItem) => {
    setSelectedItem(item);
    setOpen(true);
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
            <Text as="p" size="2" color="gray">15 items</Text>
          </Flex>
        <CommandList className="h-full max-h-60 sm:max-h-64 md:max-h-80 lg:max-h-92 pr-1">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
          {List.map((list, index) => (
          <React.Fragment key={list.title + index}>
            <CommandItem className="my-1" onSelect={() => SelectItem(list)}>
              <div className="text-lg mr-2.5">{list.icon}</div>
              {/* Mobile View */}
              <Grid display={{ initial: 'grid', md: 'none' }} align="center">
                <Text size="2" className="truncate">{list.title}</Text>
                <Flex className="text-xs text-muted-foreground" gap="2" align="center"><Text>{list.date}</Text>•<Text>{list.size}</Text></Flex>
              </Grid>
              {/* Desktop View */}
              <Flex align="center" display={{ initial: 'none', md: 'flex' }} className="w-full">
                <Flex className="w-2/3">
                  <Text size="3" className="line-clamp-1">{list.title}</Text>
                </Flex>
                <div className="w-1/3 text-nowrap font-mono text-xs text-muted-foreground flex justify-between px-8">
                  <Text>{list.date}</Text>
                  <Text>{list.size}</Text>
                </div>
              </Flex>
              <CommandShortcut><Flex gap="1" align="center" justify="center"><Text size="2">{list.download}</Text><ArrowDownToLine className="w-4 h-4" /></Flex></CommandShortcut>
            </CommandItem><CommandSeparator />
            </React.Fragment>
            ))}
          </CommandGroup>
        </CommandList>
        </Grid>
        {selectedItem && (<Preview  open={open}  setOpen={setOpen}  src={selectedItem.href}  title={selectedItem.title}  width={selectedItem.width}  height={selectedItem.height} type={selectedItem.type} />)}
    </Command>
)
}
export default FolderList;
