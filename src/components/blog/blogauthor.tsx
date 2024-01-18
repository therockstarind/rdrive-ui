"use client";
import { Button, Tooltip } from "@nextui-org/react";
import { Avatar } from "@radix-ui/themes";
import { Dot } from "lucide-react";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import { SlUserFollow } from "react-icons/sl";


type BlogAuthorProps = {
    toc?: React.ReactNode;
};

const BlogAuthor: React.FC<BlogAuthorProps> = ({ toc }) => {
    return (
        <div className="flex justify-between items-center sticky top-0 z-50 bg-background p-2 px-0 sm:px-2 border-b border-border">
            <div className="flex gap-2 items-center">         
            <Avatar radius="full" src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop" alt="User profile picture" fallback="T" />
                <div className="-space-y-0.5 sm:-space-y-1">
                    <h1 className="sm:text-lg font-bold">Teodros Girmay</h1>
                    <p className="text-xs sm:text-sm text-muted-foreground pl-1">2h ago</p>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                {/* {toc} */}
                <Tooltip content="Follow">
                    <Button isIconOnly radius="full" variant="light" className="border border-border bg-default/20 dark:bg-default/40">
                            <div className="text-xl"><SlUserFollow /></div>
                    </Button>
                </Tooltip>
                <Tooltip content="Menu">    
                    <Button isIconOnly radius="full" variant="light" className="border border-border bg-default/20 dark:bg-default/40">
                            <div className="text-xl"><BsThreeDots /></div>
                    </Button>
                </Tooltip>
            </div>
        </div>
    )
}

export default BlogAuthor;
