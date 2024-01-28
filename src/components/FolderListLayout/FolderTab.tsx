"use client"
import { Avatar, Tabs, TextArea } from "@radix-ui/themes"
import { BookOpen, MessageSquareText } from "lucide-react"
import { useState } from "react"
import useSmoothScrolling from "®/hooks/useSmoothScrolling"
import { Card } from "®ui/card"
import Markdown from "../markdown"
import Toc from "../markdown/Toc"
import { Flex, Grid } from "®rdrive/ui"

type TocItem = {
    id: string;
    title: string;
  };
  
const FolderTab = () => {
    const [toc, setToc] = useState<TocItem[]>([]);
    const [readmeTab, setReadmeTab] = useState('readme');
    useSmoothScrolling('a[href^="#"]', toc);
    
    return (
        <Card className="bg-background">
            <Tabs.Root defaultValue="readme" onValueChange={setReadmeTab}>
                <div className="sticky top-0 z-50 flex-1 items-center">
                    <Flex color="bg-background" border="border-b border-border" justify="justify-between" align="items-center" display="overflow-hidden" m="my-1" p="px-4">
                    <Tabs.List size="2" className="!shadow-none">
                        <Tabs.Trigger value="readme"><BookOpen className="w-5 h-5 mr-2"/> README </Tabs.Trigger>
                        <Tabs.Trigger value="comments"><MessageSquareText className="w-5 h-5 mr-2"/> Comments</Tabs.Trigger>
                    </Tabs.List>
                    {readmeTab === 'readme' && <Toc toc={toc} />}
                    </Flex>
                </div>
                <Grid m="mx-4 md:mx-6 my-4">
                    <Tabs.Content value="readme">
                    <Markdown src="/sample.md" TOCGenerated={setToc}/>
                    </Tabs.Content>
                    <Tabs.Content value="comments">
                        <Flex gap="gap-3">
                            <Avatar
                                size="2"
                                src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                                fallback="A"
                                radius="full"
                            />
                            <Grid size="w-full">
                                <TextArea placeholder="Write a comment…" style={{ height: 80 }} />
                            </Grid>
                        </Flex>
                        </Tabs.Content>
                </Grid>
            </Tabs.Root>
            </Card>
    )
}

export default FolderTab