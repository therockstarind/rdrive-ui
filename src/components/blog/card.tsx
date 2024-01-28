"use client"
import { Card, Image } from "@nextui-org/react"
import { Avatar, Flex, Grid } from "@radix-ui/themes"
import { Timer } from "lucide-react"
import { CardDescription, CardTitle } from "../ui/card"
import { Text } from "®/rdrive/ui"

type CardItem = {
    id?: string;
    title?: string;
    description?: string;
    img?: string;
    date?: number;
    time?: number;
};

const BlogCard: React.FC<CardItem> = ({ title, description, img, date, time  }) => {
  return (
    <Card className="p-2 border border-border gap-1.5 bg-background" isHoverable shadow="none">
      <Image src={img} alt={title} width="1280" height="640" isBlurred/>
      <Grid mx="2">
          <CardTitle className="text-lg line-clamp-2">{title}</CardTitle>
          <CardDescription className="line-clamp-3">{description}</CardDescription>
      </Grid>
      <Flex justify="between" align="center" mx="2">
        <Flex  className="flex gap-2 items-center" mt="2">
        <Avatar radius="full" src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop" fallback="T" />
        <Grid>
        <Text as="h6" font="bold">
            Teodros Girmay
          </Text>
          <Text as="p" color="gray">
            2h ago
          </Text>
        </Grid>
        </Flex>
        <Flex align="center" gap="1" className="text-sm text-muted-foreground">
          <Timer className="w-5 h-5"/>5 min
        </Flex>  
      </Flex>
    </Card>
  )
}

export default BlogCard