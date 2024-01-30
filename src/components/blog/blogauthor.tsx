"use client";

import { Button, Navbar } from "@nextui-org/react";
import React from "react";
import { BiSolidEdit } from "react-icons/bi";
import { MdAddCircle } from "react-icons/md";
import { Flex, Tooltip } from "®rdrive/ui";
import Author from "../FolderListLayout/Author";

type BlogAuthorType = {
    toc?: React.ReactNode;
};

const BlogAuthor: React.FC<BlogAuthorType> = ({ toc }) => {
    return (
        <Navbar shouldHideOnScroll isBordered classNames={{wrapper:'px-0'}}>
            <Author author={authorUser} authordetails={authorDetails} />
            <Flex gap="gap-2" align="items-center">
                {toc}
                {/* This will only show when user login with it self */}
                <Tooltip content="Edit Post">
                    <Button isIconOnly size="sm" radius="full" variant="light" className="border border-border bg-default/20 dark:bg-default/40">
                        <BiSolidEdit size={20} />
                    </Button>
                </Tooltip>
                <Tooltip content="New Post">
                    <Button isIconOnly size="sm" radius="full" variant="light" className="border border-border bg-default/20 dark:bg-default/40">
                        <MdAddCircle size={20} />
                    </Button>
                </Tooltip>
                
                    <Button size="sm" radius="full" variant="light" className="border border-border bg-default/20 dark:bg-default/40">
                            Follow
                    </Button> 
                   
            </Flex>
        </Navbar>
    )
}

export default BlogAuthor;


const authorUser = {
  img: "https://cdn3d.iconscout.com/3d/premium/thumb/boy-7215504-5873316.png",
  name: "Rock Star",
  description: "2 weeks",
};
const authorDetails = {
  coverimg: "/images/lyra.png",
  img: "https://cdn3d.iconscout.com/3d/premium/thumb/boy-7215504-5873316.png",
  name: "Rock Star",
  username: "rockstar",
  post: 10,
  followers: 100,
  following: 0,
};