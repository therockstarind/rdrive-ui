'use client'
import { Image } from '@nextui-org/react'
import Link from 'next/link'
import { BsBookmark } from 'react-icons/bs'
import { Demo } from '®/config/demo'
import { Counts } from '®/lib/utils'
import { FeedsType } from '®/types'
import Author from '../FolderListLayout/Author'

const FeedCard: React.FC<{ feed: FeedsType }> = ({ feed }) => {
  return (
    <div className="grid gap-3">
      {/* Link to the blog post */}
      <Link href={feed.href} passHref className="relative">
        {/* Image container with absolute position and time display */}
        <Image
          src={feed.img}
          alt={feed.title}
          className="object-cover"
          width="1280"
          height="640"
          isZoomed
        />
        <div className="absolute bottom-2 right-2 z-10 rounded-sm bg-black px-1 text-sm text-white">
          {feed.time}
        </div>
      </Link>

      {/* Flex container for author info, blog title, and icons */}
      <div className="mx-2 flex gap-2">
        {/* Author Avatar */}
        <Author avatar={Demo.user.avatar} author={Demo.user} />
        {/* Link to the blog post with title and metadata */}
        <div className="flex w-full flex-col">
          <Link href={feed.href} passHref>
            <h1 className="line-clamp-2 text-start font-bold leading-tight">
              {feed.title}
            </h1>
            <div className="mt-0.5 flex flex-wrap gap-x-2 text-nowrap">
              <p className="text-xs text-muted-foreground">
                {Counts(feed.views)} views
              </p>
              <p className="text-xs text-muted-foreground">•</p>
              <p className="text-xs text-muted-foreground">
                {Counts(feed.likes)} likes
              </p>
              <p className="text-xs text-muted-foreground">•</p>
              <p className="text-xs text-muted-foreground">{feed.date} ago</p>
            </div>
          </Link>
        </div>
        {/* Bookmark icon */}
        <BsBookmark size={24} />
      </div>
    </div>
  )
}

export default FeedCard
