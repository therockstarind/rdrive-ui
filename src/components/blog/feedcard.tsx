"use client"
import { Image } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsBookmark } from "react-icons/bs";
import { Counts } from "®/lib/utils";
import { FeedsProps } from "®/types";
import { Avatar, Flex, Grid, Text } from "®rdrive/ui";

const FeedCard: React.FC<{ feed: FeedsProps }> = ({ feed }) => {
    const router = useRouter();
  return (
    <Grid gap="gap-3">
      {/* Link to the blog post */}
      <Link href={feed.href} passHref className="relative">
        {/* Image container with absolute position and time display */}
        <Image src={feed.img} alt={feed.title} className="object-cover" width="1280" height="640" />
        <Text className="absolute z-50 bottom-2 right-2 rounded-sm bg-black text-white text-sm px-1">
          {feed.time}
        </Text>
      </Link>

      {/* Flex container for author info, blog title, and icons */}
      <Flex gap="gap-2" m="mx-2">
        {/* Author Avatar */}
        <Avatar
          src={feed.author.img}
          fallback="R"
          alt={feed.author.name}
          href={feed.author.url}
          radius="full"
        />
        {/* Link to the blog post with title and metadata */}
        <Flex display="flex-col w-full">
          <Link href={feed.href} passHref>
            <Text as="h1" font="font-bold leading-tight line-clamp-2" align="text-start">
              {feed.title}
            </Text>
            <Flex display="flex-wrap text-nowrap gap-x-2" m="mt-0.5">
              <Text as="p" color="text-muted-foreground" size="text-xs">
                {Counts(feed.views)} views
              </Text>
              <Text as="p" color="text-muted-foreground" size="text-xs">
                •
              </Text>
              <Text as="p" color="text-muted-foreground" size="text-xs">
                {Counts(feed.likes)} likes
              </Text>
              <Text as="p" color="text-muted-foreground" size="text-xs">
                •
              </Text>
              <Text as="p" color="text-muted-foreground" size="text-xs">
                {feed.date} ago
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
