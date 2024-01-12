"use client"

import { Flex, Grid, Separator } from "@radix-ui/themes";
import { FadeContainer } from "®/lib/FramerMotionVariants";
import AnimatedDiv from "../FramerMotion/AnimatedDiv";
import Header from "./Header";
import ImageCard from "./ImageCard";
import FolderList from "./FolderList";
import FolderTab from "./FolderTab";
import YouTube from "../markdown/YouTube";

const FolderListLayout = () => {
    return (
        <AnimatedDiv variants={FadeContainer}>
            {/* Header & LikeShare */}
            <Flex direction="column" display={{initial: 'none', sm: 'flex'}} mb="4">
            <Header />
            <Separator size="4" />
            </Flex>
            {/* Container */}
            <Flex direction={{ initial: "column-reverse", sm: "row" }} gap={{initial: '2', md: '4'}}>
                {/* List & Readme & Comment */}
                <Flex className="md:w-3/4" direction="column" gap="2">
                    <FolderList />
                    <FolderTab />
                </Flex>
                {/* List Image & Details */}
                <Flex className="md:w-1/4" direction="column" gap="2">
                    <ImageCard />
                    <Flex display={{initial: 'flex', sm: 'none'}}>
                        <Header />
                    </Flex> 
                    <Grid display={{initial: 'none', sm: 'grid'}} className="sticky top-0 z-40">
                        <YouTube id="PV08KlJeKuQ" title="How to Flash" />
                    </Grid> 
                </Flex>
            </Flex>
        </AnimatedDiv>
    )
}
export default FolderListLayout