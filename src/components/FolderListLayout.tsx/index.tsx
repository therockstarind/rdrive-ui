"use client"

import { Flex, Separator } from "@radix-ui/themes";
import { FadeContainer } from "®/lib/FramerMotionVariants";
import AnimatedDiv from "../FramerMotion/AnimatedDiv";
import Header from "./Header";
import ImageCard from "./ImageCard";
import FolderList from "./FolderList";

const FolderListLayout = () => {
    return (
        <AnimatedDiv variants={FadeContainer}>
            {/* Header & LikeShare */}
            <Flex direction="column" display={{initial: 'none', sm: 'flex'}} mb="4">
            <Header />
            <Separator size="4" />
            </Flex>
            {/* Container */}
            <Flex width="100%" direction={{ initial: "column-reverse", sm: "row" }} gap="4">
                {/* List & Readme & Comment */}
                <Flex width="100%" mx="auto" direction="column">
                    <FolderList />
                </Flex>
                {/* List Image & Details */}
                <Flex direction="column" gap="2">
                    <ImageCard />
                    <Flex display={{initial: 'flex', sm: 'none'}}>
                        <Header />
                    </Flex>
                </Flex>
            </Flex>
        </AnimatedDiv>
    )
}
export default FolderListLayout