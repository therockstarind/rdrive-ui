"use client"

import { useState } from "react";
import BlogAuthor from "®/components/blog/blogauthor";
import BlogToc from "®/components/blog/blogtoc";
import Markdown from "®/components/markdown";

type TocItem = {
    id: string;
    title: string;
  };
export default function Slug() {
    const [toc, setToc] = useState<TocItem[]>([]);
    const css = 'bg-default/10 hover:bg-default/30 dark:hover:bg-default/70 border border-border'
  return (
    <main className="max-w-5xl mx-auto">
      <BlogAuthor toc={<BlogToc toc={toc} />} />
        <Markdown src="/sample.md" TOCGenerated={setToc}/>
    </main>
  )
}
