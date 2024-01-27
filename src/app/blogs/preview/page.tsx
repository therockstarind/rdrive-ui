"use client"

import BlogAuthor from "®/components/blog/blogauthor";
import Markdown from "®/components/markdown";

export default function Slug() {
  return (
    <main className="mx-auto w-full max-w-5xl p-2">
      <BlogAuthor />
        <Markdown src="/sample.md"/>
    </main>
  )
}
