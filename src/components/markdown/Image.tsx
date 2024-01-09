"use client";
import { Image } from "@nextui-org/react";

type Props = {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
};

export default function IMG({ src, alt, width, height  }: Props) {
    return (
        <Image src={src} alt={alt} width={width} height={height} isBlurred/>
    );
}

