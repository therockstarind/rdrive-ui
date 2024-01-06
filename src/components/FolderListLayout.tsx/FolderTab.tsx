"use client"
import { Avatar, Box, Checkbox, Flex, Tabs, Text, TextArea } from "@radix-ui/themes"
import { BookOpen, MessageSquareText } from "lucide-react"
import { Card } from "../ui/card"
import { ReadmeDemo } from "./ReadmeDemo"

const FolderTab = () => {
    return (
        <Card className="my-4 bg-background">
            <Tabs.Root defaultValue="readme">
                <Box mx="4" mt="1" mb="2" className="sticky top-0 md:top-[57px] z-40 bg-background">
                <Tabs.List size="2">
                    <Tabs.Trigger value="readme"><BookOpen className="w-5 h-5 mr-2"/> README</Tabs.Trigger>
                    <Tabs.Trigger value="comments"><MessageSquareText className="w-5 h-5 mr-2"/> Comments</Tabs.Trigger>
                </Tabs.List>
                </Box>
                <Box mx={{initial: '4', md: '6'}} my="4">
                    <Tabs.Content value="readme">
                        <ReadmeDemo />
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