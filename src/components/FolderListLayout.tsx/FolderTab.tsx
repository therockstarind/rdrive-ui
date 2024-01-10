"use client"
import { Avatar, Box, Checkbox, DropdownMenu, Flex, Tabs, Text, TextArea } from "@radix-ui/themes"
import { BookOpen, List, MessageSquareText } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Markdown from "../markdown"
import { Card } from "®ui/card"

type TocItem = {
    id: string;
    title: string;
  };
  
const FolderTab = () => {
    const [toc, setToc] = useState<TocItem[]>([]);
    const router = useRouter();
    return (
        <Card className="my-4 bg-background">
            <Tabs.Root defaultValue="readme">
                <div className="sticky top-0 md:top-[57px] z-40">
                    <div className="flex bg-background border-b border-border justify-between items-center overflow-hidden my-1 px-4">
                    <Tabs.List size="2" className="!shadow-none">
                        <Tabs.Trigger value="readme"><BookOpen className="w-5 h-5 mr-2"/> README</Tabs.Trigger>
                        <Tabs.Trigger value="comments"><MessageSquareText className="w-5 h-5 mr-2"/> Comments</Tabs.Trigger>
                    </Tabs.List>
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <List className="h-5 w-5 LinkText" />
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content size="2" side="bottom" align="end" sideOffset={18}>
                            {toc.map((item, index) => (
                                index === 0 ? (
                                    <>
                                        <DropdownMenu.Item key={index} onSelect={() => router.push(`#${item.id}`)}>
                                            <Text size="5">{item.title}</Text>
                                        </DropdownMenu.Item>
                                        <DropdownMenu.Separator />
                                    </>
                                ) : (
                                    <DropdownMenu.Item key={index} onSelect={() => router.push(`#${item.id}`)}>
                                        {item.title}
                                    </DropdownMenu.Item>
                                )
                            ))}
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                    </div>
                </div>
                <Box mx={{initial: '4', md: '6'}} my="4">
                    <Tabs.Content value="readme">
                    <Markdown src="/sample.md" TOCGenerated={setToc}/>
                    </Tabs.Content>
                    <Tabs.Content value="comments">
                        <Flex gap="3">
                            <Avatar
                                size="2"
                                src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                                fallback="A"
                                radius="full"
                            />
                            <Box grow="1">
                                <TextArea placeholder="Write a comment…" style={{ height: 80 }} />
                            <Flex gap="3" mt="3" justify="between">
                                <Flex align="center" gap="2" asChild>
                                    <Text as="label" size="2">
                                    <Checkbox />
                                    <Text>Send to group</Text>
                                    </Text>
                                </Flex>
                            </Flex>
                            </Box>
                        </Flex>
                        </Tabs.Content>
                </Box>
            </Tabs.Root>
            </Card>
    )
}

export default FolderTab