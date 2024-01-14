"use client"
import { Image } from "@nextui-org/react"
import { Avatar, Flex, Grid, Text } from "@radix-ui/themes"
import { Timer } from "lucide-react"
import { Card, CardDescription, CardTitle } from "../ui/card"

export function BlogCard() {
  return (
    <Card className="p-2">
      <Image src="https://cdn.gtricks.com/2023/03/3-ways-to-easily-turn-off-talkback-on-android-720x340.jpg" alt="" />
      <div>
          <CardTitle className="text-lg line-clamp-2">How to Enable/Disable TalkBack on Xiaomi 12 Pro</CardTitle>
          <CardDescription className="line-clamp-3">First and foremost, open the Settings application, which you can find on the Home Screen or in the Main Menu.</CardDescription>
      </div>
      <div className="flex justify-between items-center">
        <Flex  className="flex gap-2 items-center" mt="2">
        <Avatar radius="full" src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop" fallback="T" />
        <Grid>
        <Text as="div" size="3" weight="bold">
            Teodros Girmay
          </Text>
          <Text as="p" size="1" color="gray">
            2h ago
          </Text>
        </Grid>
        </Flex>
        <Flex align="center" gap="1" className="text-sm text-muted-foreground">
          <Timer className="w-5 h-5"/>5 min
        </Flex>  
      </div>
    </Card>
  )
}
