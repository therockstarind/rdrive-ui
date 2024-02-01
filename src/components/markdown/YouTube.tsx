'use client'

import { Text } from '®rdrive/ui'

export default function YouTube({ id, title }: { id: string; title?: string }) {
  return (
    <main className="border border-border p-1 rounded-md">
      <div className="max-w-full overflow-hidden relative pb-[56.25%] h-0 rounded-md">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
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
