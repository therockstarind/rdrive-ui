"use client"

import { Flex, Grid, Separator, Text } from "@radix-ui/themes";
import { FadeContainer } from "®/lib/FramerMotionVariants";
import AnimatedDiv from "../FramerMotion/AnimatedDiv";
import Header from "./Header";
import ImageCard from "./ImageCard";
import FolderList from "./FolderList";
import FolderTab from "./FolderTab";
import YouTube from "../markdown/YouTube";
import BlogCard from "../blog/card";

const FolderListLayout = () => {
    return (
        <AnimatedDiv variants={FadeContainer}>
            {/* Header & LikeShare */}
            <Flex direction="column" display={{initial: 'none', sm: 'flex'}} mb="4">
            <Header />
            <Separator size="4" />
            </Flex>
            {/* Container */}
            <Flex direction={{ initial: "column-reverse", sm: "row" }} gap={{initial: '2', md: '3'}}>
                {/* List & Readme & Comment */}
                <Flex className="md:w-3/4" direction="column" gap="3">
                    <FolderList />
                    <FolderTab />
                    <Grid display={{initial: 'grid', sm: 'none'}} gap="3">
                        <YouTube id="PV08KlJeKuQ" />
                        <BlogCard />
                    </Grid> 
                </Flex>
                {/* List Image & Details */}
                <Flex className="md:w-1/4" direction="column" gap="3">
                    <ImageCard />
                    <Flex display={{initial: 'flex', sm: 'none'}}>
                        <Header />
                    </Flex> 
                    <Grid display={{initial: 'none', sm: 'grid'}} className="sticky top-0.5 z-40" gap="3">
                            <YouTube id="PV08KlJeKuQ" />
                            <BlogCard />
                    </Grid> 
                </Flex>
            </Flex>
        </AnimatedDiv>
    )
}
export default FolderListLayout