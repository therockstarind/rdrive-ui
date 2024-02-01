'use client'
import { ArrowDownToLine } from 'lucide-react'
import React, { useState } from 'react'
import FileIcon, { getExtension } from '®/utils/getFileIcon'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '®ui/command'
import Preview from '®ui/preview'
import { useRouter } from 'next/navigation'
import { getPreviewType } from '®/utils/getPreviewType'
import { Flex, Grid, Text } from '®rdrive/ui'
import Author from './Author'
import { Demo } from '®/config/demo'

type ListItem = {
  href: string
  title: string
  size: string
  date: string
  download: string
  width: number | string
  height: number | string
}

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
]

const FolderList = () => {
  const [open, setOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<ListItem | null>(null)
  const router = useRouter()

  const SelectItem = (item: ListItem) => {
    const previewType = getPreviewType(getExtension(item.href))
    if (previewType) {
      setSelectedItem(item)
      setOpen(true)
    } else {
      router.push(item.href)
    }
  }

  return (
    <Command>
      <Flex justify="justify-end" m="mx-2 mb-4 mt-1" align="items-center">
        <Flex className="GoToFile">
          <CommandInput placeholder="Go to file" className="h-8" />
        </Flex>
      </Flex>
      <Grid className="rounded-md border border-border">
        <Flex
          color="bg-default/10 dark:bg-default/30"
          border="border-b border-border"
          justify="justify-between"
          p="p-1 px-2"
          align="items-center"
        >
          <Author author={Demo.user} />
          <Text size="text-sm" color="text-muted-foreground">
            {List.length} items
          </Text>
        </Flex>
        <CommandList className="lg:max-h-92 h-full max-h-60 pr-1 sm:max-h-64 md:max-h-80">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {List.map((list, index) => (
              <React.Fragment key={list.title + index}>
                <CommandItem className="my-1" onSelect={() => SelectItem(list)}>
                  <Flex display="flex-1" align="items-center" gap="gap-4">
                    <Flex size="text-lg">
                      <FileIcon name={list.href} />
                    </Flex>
                    <Flex
                      display="flex-1 flex-col sm:flex-row"
                      gap="sm:gap-2"
                      align="sm:items-center"
                    >
                      <Text
                        as="h1"
                        display="flex-1"
                        size="line-clamp-1 text-base"
                      >
                        {list.title}
                      </Text>
                      <Flex
                        gap="gap-2 sm:gap-6"
                        size="line-clamp-1 text-nowrap text-xs text-muted-foreground sm:font-mono"
                      >
                        <Text>{list.size}</Text>
                        <Text>•</Text>
                        <Text>{list.date}</Text>
                      </Flex>
                    </Flex>
                    <Text display="flex" gap="gap-1" align="items-center">
                      {list.download}
                      <ArrowDownToLine className="h-4 w-4" />
                    </Text>
                  </Flex>
                </CommandItem>
                <CommandSeparator />
              </React.Fragment>
            ))}
          </CommandGroup>
        </CommandList>
      </Grid>
      {selectedItem && (
        <Preview
          open={open}
          setOpen={setOpen}
          src={selectedItem.href}
          title={selectedItem.title}
          width={selectedItem.width}
          height={selectedItem.height}
        />
      )}
    </Command>
  )
}
export default FolderList
