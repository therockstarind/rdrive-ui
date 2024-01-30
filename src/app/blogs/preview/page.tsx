"use client"

import BlogAuthor from "®/components/blog/blogauthor";
import Markdown from "®/components/markdown";
import { Page } from "®rdrive/ui";

export default function Slug() {
  return (
    <Page className="max-w-5xl">
        <BlogAuthor />
        <Markdown src="/sample.md"/>
    </Page>
  )
}
