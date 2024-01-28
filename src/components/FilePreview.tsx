"use client"

import { Image } from "@nextui-org/react";
import Video from 'next-video';
import Markdown from "./markdown";
import { Flex, Text } from "®rdrive/ui";

type PreviewProps = {
  src: string;
  title?: string;
  width?: number | string;
  height?: number | string;
};

const ImagePreview = ({ src, title, width, height }: PreviewProps) => {
    return (
        <Flex align="items-center" justify=" justify-center" display="flex-col" gap="gap-3" m="my-3">
            <Image src={src} alt={title} width={width} height={height}/>
            <Text as="h1" size="text-2xl md:text-3xl line-clamp-1">{title}</Text>
        </Flex>
    ); 
};

const VideoPreview = ({ src, title, width, height }: PreviewProps) => {
    return (
        <Flex align="items-center" justify=" justify-center" display="flex-col" gap="gap-3" m="my-3">
                <Video className="border border-border rounded-md p-1" src={src} accentColor="hsl(var(--ring))" poster="/images/lyra.png" blurDataURL="" /> {/* width={width} height={height} */}
                <Text as="h1" size="text-2xl md:text-3xl line-clamp-1">{title}</Text>
        </Flex>
    );
};

const MarkdownPreview = ({ src }: PreviewProps) => {
    return (
        <Flex m="m-1">
                <Markdown src={src} />
        </Flex>
    );
};


export { ImagePreview, VideoPreview, MarkdownPreview };
