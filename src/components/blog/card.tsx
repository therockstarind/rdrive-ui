"use client"
import { Image } from "@nextui-org/react";
import { Avatar } from "@radix-ui/themes";
import { BsBookmark } from "react-icons/bs";
import { Flex, Grid, Text } from "®rdrive/ui";

type CardItem = {
  id?: string;
  title?: string;
  img?: string;
  date?: string;
  time?: string;
  likes?: number;
  views?: number;
};

const BlogCard: React.FC<CardItem> = ({ title, img, date, time, likes, views }) => {
  return (
        <Grid gap="gap-3">
      <Flex display=" relative">
          <Image src={img} alt={title} className="object-cover" width="1280" height="640"/>
          <Flex className="absolute z-50 bottom-2 right-2 rounded-sm" color="bg-black text-white shadow-md" size="text-sm" p="px-1">{time}</Flex>
      </Flex>
      <Flex gap="gap-2" m="mx-2">
        <Avatar
          src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
          fallback="T"
          radius="full"
        />
        <Flex display="flex-col w-full">
          <Text as="h1" font="font-bold leading-tight line-clamp-2" align="text-start">
            {title}
          </Text>
          <Flex gap="gap-2" align="items-center" m="mt-0.5">
            <Text as="p" color="text-muted-foreground" size="text-xs">
              {views} views
            </Text>
            <Text as="p" color="text-muted-foreground" size="text-xs">
              •
            </Text>
            <Text as="p" color="text-muted-foreground" size="text-xs">
              {likes} likes
            </Text>
            <Text as="p" color="text-muted-foreground" size="text-xs">
              •
            </Text>
            <Text as="p" color="text-muted-foreground" size="text-xs">
              {date} ago
            </Text>
          </Flex>
        </Flex>
        <BsBookmark size={24} />
      </Flex>
    </Grid>
  );
};

export default BlogCard;
