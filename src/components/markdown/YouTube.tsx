'use client'

import { Text } from '®rdrive/ui'

export default function YouTube({ id, title }: { id: string; title?: string }) {
  return (
    <main className="rounded-md border border-border p-1">
      <div className="relative h-0 max-w-full overflow-hidden rounded-md pb-[56.25%]">
        <iframe
          className="absolute left-0 top-0 h-full w-full"
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Text as="h4" font="bold" className="line-clamp-1">
        {title}
      </Text>
    </main>
  )
}
