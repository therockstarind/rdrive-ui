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
        <div className="absolute z-10 bottom-2 right-2 rounded-sm bg-black text-white text-sm px-1">
          {feed.time}
        </div>
      </Link>

      {/* Flex container for author info, blog title, and icons */}
      <div className="flex gap-2 mx-2">
        {/* Author Avatar */}
        <Author avatar={Demo.user.avatar} author={Demo.user} />
        {/* Link to the blog post with title and metadata */}
        <div className="flex flex-col w-full">
          <Link href={feed.href} passHref>
            <h1 className="font-bold leading-tight line-clamp-2 text-start">
              {feed.title}
            </h1>
            <div className="flex flex-wrap text-nowrap gap-x-2 mt-0.5">
              <p className="text-muted-foreground text-xs">
                {Counts(feed.views)} views
              </p>
              <p className="text-muted-foreground text-xs">•</p>
              <p className="text-muted-foreground text-xs">
                {Counts(feed.likes)} likes
              </p>
              <p className="text-muted-foreground text-xs">•</p>
              <p className="text-muted-foreground text-xs">{feed.date} ago</p>
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
