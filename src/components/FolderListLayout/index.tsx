"use client"

import { Separator } from "@radix-ui/themes";
import { FadeContainer } from "®/lib/FramerMotionVariants";
import AnimatedDiv from "../FramerMotion/AnimatedDiv";
import Header from "./Header";
import ImageCard from "./ImageCard";
import FolderList from "./FolderList";
import FolderTab from "./FolderTab";
import YouTube from "../markdown/YouTube";
import BlogCard from "../blog/card";
import { Flex, Grid } from "®rdrive/ui";

const FolderListLayout = () => {
    return (
        <AnimatedDiv variants={FadeContainer}>
            {/* Header & LikeShare */}
            <Flex display="flex-col hidden sm:flex" m="mb-4">
            <Header />
            <Separator size="4" />
            </Flex>
            {/* Container */}
            <Flex display="flex-col-reverse sm:flex-row" gap="gap-2 md:gap-3">
                {/* List & Readme & Comment */}
                <Flex size="md:w-3/4" display="flex-col" gap="gap-3">
                    <FolderList />
                    <FolderTab />
                    <Grid display="grid sm:hidden" gap="gap-3">
                        <YouTube id="PV08KlJeKuQ" />
                        <BlogCard />
                    </Grid> 
                </Flex>
                {/* List Image & Details */}
                <Flex size="md:w-1/4" display="flex-col" gap="gap-3">
                    <ImageCard />
                    <Flex display="sm:hidden flex-col">
                        <Header />
                    </Flex> 
                    <Grid display="hidden sm:grid" className="sticky top-0.5 z-40" gap="gap-3">
                            <YouTube id="PV08KlJeKuQ" />
                            <BlogCard />
                    </Grid> 
                </Flex>
            </Flex>
        </AnimatedDiv>
    )
}
export default FolderListLayout