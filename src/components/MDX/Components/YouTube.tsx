"use client"

import { Text } from "@radix-ui/themes";

export default function YouTube({ id, title }: { id: string, title?: string }) {
  return (
    <>
    <div className="max-w-full overflow-hidden relative pb-[56.25%] h-0 rounded-md">
          <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${id}`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
          ></iframe>
      </div>
      <Text size="5" weight="bold" align="center" className="line-clamp-1">{title}</Text>
      </>
  );
}
