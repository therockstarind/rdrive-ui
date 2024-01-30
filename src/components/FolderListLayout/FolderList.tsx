"use client";
import { ArrowDownToLine } from "lucide-react";
import React, { useState } from "react";
import FileIcon, { getExtension } from "®/utils/getFileIcon";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "®ui/command";
import Preview from "®ui/preview";
import { useRouter } from "next/navigation";
import { getPreviewType } from "®/utils/getPreviewType";
import { Flex, Grid, Text } from "®rdrive/ui";
import Author from "./Author";

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
    download: '0',
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

const authorUser = {
  img: "https://cdn3d.iconscout.com/3d/premium/thumb/boy-7215504-5873316.png",
  name: "Rock Star",
  description: "2 weeks",
};
const authorDetails = {
  coverimg: "/images/lyra.png",
  img: "https://cdn3d.iconscout.com/3d/premium/thumb/boy-7215504-5873316.png",
  name: "Rock Star",
  username: "rockstar",
  post: 10,
  followers: 100,
  following: 0,
};


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
      <Flex justify="justify-end" m="mt-1 mb-4 mx-2" align="items-center">
      <Flex className="GoToFile">
      <CommandInput placeholder="Go to file" className="h-8"/>
      </Flex>
      </Flex>
      <Grid className="border border-border rounded-md">
        <Flex color="bg-default/10 dark:bg-default/30" border="border-b border-border" justify="justify-between" p="px-2 p-1" align="items-center">
            <Author author={authorUser} authordetails={authorDetails} />
            <Text size="text-sm" color="text-muted-foreground">{List.length} items</Text>
          </Flex>
        <CommandList className="h-full max-h-60 sm:max-h-64 md:max-h-80 lg:max-h-92 pr-1">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
          {List.map((list, index) => (
          <React.Fragment key={list.title + index}>
            <CommandItem className="my-1" onSelect={() => SelectItem(list)}>
            <Flex display="flex-1" align="items-center" gap="gap-4">
                <Flex size="text-lg"><FileIcon name={list.href} /></Flex>
                    <Flex display="flex-col sm:flex-row flex-1" gap="sm:gap-2" align="sm:items-center">
                    <Text as="h1" display="flex-1" size="text-base line-clamp-1">{list.title}</Text>
                        <Flex gap="gap-2 sm:gap-6" size="sm:font-mono text-xs text-nowrap text-muted-foreground line-clamp-1">
                            <Text>{list.size}</Text>
                            <Text>•</Text>
                            <Text>{list.date}</Text>
                        </Flex>
                    </Flex>
                    <Text display="flex" gap="gap-1" align="items-center">{list.download}<ArrowDownToLine className="w-4 h-4" /></Text>
                </Flex>
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