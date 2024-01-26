"use client"

import BlogAuthor from "®/components/blog/blogauthor";
import Markdown from "®/components/markdown";

export default function Slug() {
  return (
    <main className="max-w-5xl mx-auto">
      <BlogAuthor />
        <Markdown src="/sample.md"/>
    </main>
  )
}
