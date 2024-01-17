"use client"

import ShareBar from "®/components/blog/sharebar"
import Markdown from "®/components/markdown"


export default function Slug() {
  return (
    <main className="">
        <div className="flex flex-1">
        {/* Content */}
        <div>
        <Markdown src="/sample.md" />
        </div>
        {/* Sidebar */}
        <div>Side bar</div>
        </div>
        <ShareBar />
    </main>
  )
}
