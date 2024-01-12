"use client"

import { Image } from "@nextui-org/react";
import { Flex } from "@radix-ui/themes";
import Video from 'next-video';
import Markdown from "./markdown";

type PreviewProps = {
  src: string;
  title?: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
};

const ImagePreview = ({ src, alt, width, height }: PreviewProps) => {
    return (
        <Flex align="center" justify='center' direction="column" className="space-y-3">
            <Image src={src} alt={alt} width={width} height={height}/>
            <h1 className="text-2xl md:text-3xl line-clamp-1">{alt}</h1>
        </Flex>
    );
};

const VideoPreview = ({ src, title, width, height }: PreviewProps) => {
    return (
        <Flex align="center" justify='center' direction="column" gap="2" className="space-y-3">
                <Video className="border border-border rounded-md p-1" src={src} accentColor="hsl(var(--ring))" poster="/images/lyra.png" blurDataURL="" /> {/* width={width} height={height} */}
                <h1 className="text-2xl md:text-3xl line-clamp-1">{title}</h1>
        </Flex>
    );
};

const MarkdownPreview = ({ src }: PreviewProps) => {
    return (
        <div className="m-1">
                <Markdown src={src} />
        </div>
    );
};


export { ImagePreview, VideoPreview, MarkdownPreview };
