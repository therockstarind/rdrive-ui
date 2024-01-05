"use client"

import { Separator } from "@radix-ui/themes";
import { FadeContainer } from "®/lib/FramerMotionVariants";
import AnimatedDiv from "../FramerMotion/AnimatedDiv";
import Header from "./Header";
import SocialBar from "./LikeShare";

const FolderListLayout = () => {
    return (
        <AnimatedDiv variants={FadeContainer}>
                    <Header />
      <Separator my="4" size="4" />
        </AnimatedDiv>
    )
}
export default FolderListLayout