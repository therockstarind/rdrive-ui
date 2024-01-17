"use client"

import { Button, Tooltip } from "@nextui-org/react";
import { Separator } from "@radix-ui/themes";
import { useState } from "react";
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";
import { MdEditDocument, MdOutlineAddCircleOutline } from "react-icons/md";
import { MarkdownSkeleton } from "®/components/Skeleton";
import BlogToc from "®/components/blog/toc";
import Markdown from "®/components/markdown";

type TocItem = {
    id: string;
    title: string;
  };
export default function Slug() {
    const [toc, setToc] = useState<TocItem[]>([]);
    const css = 'bg-default/10 hover:bg-default/30 dark:hover:bg-default/70 border border-border'
  return (
    <main className="">
        <div className="flex flex-1">
        {/* Content */}
        <div>
        <MarkdownSkeleton />
        <Markdown src="/sample.md" TOCGenerated={setToc}/>
        </div>
        {/* Sidebar */}
        <div>Side bar</div>
        </div>
        <div className="flex sticky bottom-[81px] sm:bottom-[71px] justify-center mx-auto max-w-xs z-50">
          <div className="flex gap-2 border border-border p-1.5 rounded-full bg-white/70 dark:bg-black/70 backdrop-blur-md items-center">
            <Tooltip content="Like"><Button size="sm" isIconOnly radius="full" className={`${css}`}><BiLike size={20}/></Button></Tooltip>
            <Tooltip content="Comment"><Button size="sm" isIconOnly radius="full" className={`${css}`}><FaRegComment size={20}/></Button></Tooltip>
            <Tooltip content="Share"><Button size="sm" isIconOnly radius="full" className={`${css}`}><IoMdShareAlt size={20}/></Button></Tooltip>
            <BlogToc toc={toc} />
            {/* <Divider orientation="vertical" /> */}
            <Separator orientation="vertical" />
            <Tooltip content="Edit Post"><Button size="sm" isIconOnly radius="full" className={`${css}`}><MdEditDocument size={20}/></Button></Tooltip>
            <Tooltip content="New Post"><Button size="sm" isIconOnly radius="full" className={`${css}`}><MdOutlineAddCircleOutline size={20}/></Button></Tooltip>
          </div>
        </div>
    </main>
  )
}
