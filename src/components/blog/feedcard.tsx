"use client"
import { Image } from "@nextui-org/react";
import Link from "next/link";
import { BsBookmark } from "react-icons/bs";
import { FeedsProps } from "®/types";
import { Flex, Grid, Text, Avatar } from "®rdrive/ui";

const FeedCard: React.FC<{ card: FeedsProps }> = ({ card }) => {
  return (
    <Grid gap="gap-3">
      {/* Link to the blog post */}
      <Link href={card.href} passHref className="relative">
        {/* Image container with absolute position and time display */}
        <Image src={card.img} alt={card.title} className="object-cover" width="1280" height="640" />
        <Text className="absolute z-50 bottom-2 right-2 rounded-sm bg-black text-white text-sm px-1">
          {card.time}
        </Text>
      </Link>

      {/* Flex container for author info, blog title, and icons */}
      <Flex gap="gap-2" m="mx-2">
        {/* Author Avatar */}
        <Avatar
          src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
          fallback="T"
          href={card.author}
          radius="full"
        />

        {/* Link to the blog post with title and metadata */}
        <Flex display="flex-col w-full">
          <Link href={card.href} passHref>
            <Text as="h1" font="font-bold leading-tight line-clamp-2" align="text-start">
              {card.title}
            </Text>
            <Flex display="flex-wrap text-nowrap gap-x-2" m="mt-0.5">
              <Text as="p" color="text-muted-foreground" size="text-xs">
                {card.views} views
              </Text>
              <Text as="p" color="text-muted-foreground" size="text-xs">
                •
              </Text>
              <Text as="p" color="text-muted-foreground" size="text-xs">
                {card.likes} likes
              </Text>
              <Text as="p" color="text-muted-foreground" size="text-xs">
                •
              </Text>
              <Text as="p" color="text-muted-foreground" size="text-xs">
                {card.date} ago
              </Text>
            </Flex>
          </Link>
        </Flex>

        {/* Bookmark icon */}
        <BsBookmark size={24} />
      </Flex>
    </Grid>
  );
};

export default FeedCard;
