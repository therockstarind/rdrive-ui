"use client"
import { Separator, Tooltip } from "@radix-ui/themes"
import { BiLike } from "react-icons/bi"
import { FaEdit, FaRegComment } from "react-icons/fa"
import { IoMdShareAlt } from "react-icons/io"
import { LuMenuSquare } from "react-icons/lu"
import { MdEditDocument } from "react-icons/md"


const ShareBar = () => {
    return( 
        <div className="flex sticky bottom-[81px] sm:bottom-[71px] justify-center mx-auto max-w-xs z-50">
          <div className="flex gap-2 border border-border p-1 rounded-full bg-white/70 dark:bg-black/70 backdrop-blur-md items-center">
            <Tooltip content="Like" sideOffset={10}><div className="bg-default/30 rounded-full p-1 LinkText border border-border"><BiLike size={20}/></div></Tooltip>
            <Tooltip content="Comment" sideOffset={10}><div className="bg-default/30 rounded-full p-1 LinkText border border-border"><FaRegComment size={20}/></div></Tooltip>
            <Tooltip content="Share" sideOffset={10}><div className="bg-default/30 rounded-full p-1 LinkText border border-border"><IoMdShareAlt size={20}/></div></Tooltip>
            <Tooltip content="Table of Content" sideOffset={10}><div className="bg-default/30 rounded-full p-1 LinkText border border-border"><LuMenuSquare size={20}/></div></Tooltip>
            {/* <Divider orientation="vertical" /> */}
            <Separator orientation="vertical" />
            <Tooltip content="Edit Post" sideOffset={10}><div className="bg-default/30 rounded-full p-1 LinkText border border-border"><MdEditDocument size={20}/></div></Tooltip>
            <Tooltip content="New Post" sideOffset={10}><div className="bg-default/30 rounded-full p-1 LinkText border border-border"><FaEdit size={20}/></div></Tooltip>
          </div>
        {/* <Tabs  aria-label="Like Share Comments Tabs" className="w-full flex flex-col" defaultSelectedKey="share">
          <Tab key="like" title="Like"/>
          <Tab key="share" title="Share"/>
          <Tab key="comment" title="Comments"/>
        </Tabs> */}
        </div>
    )
}

export default ShareBar