"use client"
import { Avatar, Box, Checkbox, Flex, Tabs, Text, TextArea } from "@radix-ui/themes"
import { BookOpen, MessageSquareText } from "lucide-react"
import { useState } from "react"
import { Card } from "®ui/card"
import Markdown from "../markdown"
import Toc from "../markdown/Toc"

type TocItem = {
    id: string;
    title: string;
  };
  
const FolderTab = () => {
    const [toc, setToc] = useState<TocItem[]>([]);
    const [readmeTab, setReadmeTab] = useState('readme');
    return (
        <Card className="my-4 bg-background">
            <Tabs.Root defaultValue="readme" onValueChange={setReadmeTab}>
                <div className="sticky top-0 md:top-[57px] z-40">
                    <div className="flex bg-background border-b border-border justify-between items-center overflow-hidden my-1 px-4">
                    <Tabs.List size="2" className="!shadow-none">
                        <Tabs.Trigger value="readme"><BookOpen className="w-5 h-5 mr-2"/> README </Tabs.Trigger>
                        <Tabs.Trigger value="comments"><MessageSquareText className="w-5 h-5 mr-2"/> Comments</Tabs.Trigger>
                    </Tabs.List>
                    {readmeTab === 'readme' && <Toc toc={toc} />}
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