"use client";
import { Flex, Grid, Text } from "@radix-ui/themes";
import { ArrowDownToLine } from "lucide-react";
import { BsFillRecordCircleFill } from "react-icons/bs";
import { FaArchive, FaFolder } from "react-icons/fa";
import { MdInstallDesktop } from "react-icons/md";
import { SiApple } from "react-icons/si";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "®ui/command";
import { Author } from "./Author";
import React from "react";


const List = [
  {
    href: '/Apps',
    title: 'Apple',
    size: '42.89 GB',
    date: '24 Dec 2022',
    download: '0',
    icon: <FaFolder  />,
  },
  {
    href: '/Games',
    title: 'FRP-Files',
    size: '122.79 GB',
    date: '24 Dec 2022',
    download: '0',
    icon: <FaFolder  />,
  },
  {
    href: '/FRP',
    title: 'Pixel-Rom',
    size: '21.89 GB',
    date: '24 Dec 2022',
    download: '0',
    icon: <FaFolder  />,
  },
  {
    href: '/Drivers',
    title: 'ice-eea-global-images-V13-0-3-0-SGMEUXM-20220915-0000-00-12-0-dc6cb84563.zip',
    size: '2.89 GB',
    date: '24 Dec 2022',
    download: '5',
    icon: <FaArchive  />,
  },
  {
    href: '/Flash-Tool',
    title: 'Windows-11.iso',
    size: '11.89 GB',
    date: '24 Dec 2022',
    download: '9',
    icon: <BsFillRecordCircleFill  />,
  },
  {
    href: '/iCloud',
    title: 'iRemovel-Pro.pkg',
    size: '5.98 GB',
    date: '24 Dec 2022',
    download: '0',
    icon: <SiApple  />,
  },
  {
    href: '/service-center-price-list',
    title: 'Office.exe',
    size: '8.80 GB',
    date: '24 Dec 2022',
    download: '8',
    icon: <MdInstallDesktop  />,
  },
  {
    href: '/sponsor',
    title: 'Chrome.exe',
    size: '1.89 GB',
    date: '24 Dec 2022',
    download: '3',
    icon: <MdInstallDesktop  />,
  },
  {
    href: '/sponsor',
    title: 'AFTool BBKG 5 1 28 MTK + Qulcm By Rock Star.rar',
    size: '1.89 GB',
    date: '24 Dec 2022',
    download: '3',
    icon: <MdInstallDesktop  />,
  },
  {
    href: '/sponsor',
    title: 'DFU Flash Tool v2 03.zip',
    size: '1.89 GB',
    date: '24 Dec 2022',
    download: '3',
    icon: <MdInstallDesktop  />,
  },  {
    href: '/sponsor',
    title: 'flashtool 0 9 22 3 windows.zip',
    size: '1.89 GB',
    date: '24 Dec 2022',
    download: '3',
    icon: <MdInstallDesktop  />,
  },  {
    href: '/sponsor',
    title: 'FRP Motorola 2017.rar',
    size: '1.89 GB',
    date: '24 Dec 2022',
    download: '3',
    icon: <MdInstallDesktop  />,
  },  {
    href: '/sponsor',
    title: 'Miracle Box 2 58 crack By Rock Star.zip',
    size: '1.89 GB',
    date: '24 Dec 2022',
    download: '3',
    icon: <MdInstallDesktop  />,
  },  {
    href: '/sponsor',
    title: 'MTK GAME OVER TOOL 2022.7z',
    size: '1.89 GB',
    date: '24 Dec 2022',
    download: '3',
    icon: <MdInstallDesktop  />,
  },  {
    href: '/sponsor',
    title: 'Qpst By Rock Star.rar',
    size: '1.89 GB',
    date: '24 Dec 2022',
    download: '3',
    icon: <MdInstallDesktop  />,
  },
];

const FolderList = () => {
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
        <CommandList className="h-60 sm:h-64 md:h-80 lg:h-92 pr-1">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
          {List.map((list, index) => (
          <React.Fragment key={list.title + index}>
            <CommandItem className="my-1">
              <div className="text-[28px] md:text-2xl mr-2.5">{list.icon}</div>
              {/* Mobile View */}
              <Grid display={{ initial: 'grid', md: 'none' }} align="center">
                <Text size="2" className="line-clamp-1">{list.title}</Text>
                <Flex className="text-xs text-muted-foreground" gap="2" align="center"><Text>{list.date}</Text>•<Text>{list.size}</Text></Flex>
              </Grid>
              {/* Desktop View */}
              <Flex align="center" display={{ initial: 'none', md: 'flex' }} className="w-full">
                <Flex className="w-2/3">
                  <Text size="3" className="line-clamp-1">{list.title}</Text>
                </Flex>
                <div className="w-1/3 text-nowrap font-mono text-xs text-muted-foreground mx-auto flex justify-around">
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
    </Command>
)
}
export default FolderList;
