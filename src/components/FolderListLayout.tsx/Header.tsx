"use client"

import { Flex } from "@radix-ui/themes"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { fromLeftVariant } from "®/lib/FramerMotionVariants"
import AnimatedHeading from "../FramerMotion/AnimatedHeading"
import LikeShare from "./LikeShare"

const Header = () => {
    const pathname = usePathname();
    const title = pathname.split('/').filter(Boolean).pop();
    return (
        <Flex justify="between" align="center" mx="2" my="4">
            <AnimatedHeading variants={fromLeftVariant}>
                <Link href={`#${title}`} passHref>
                    <h1 className="font-heading text-3xl sm:text-4xl font-bold line-clamp-1">{title}</h1>
                </Link>
            </AnimatedHeading>       
            <div className="hidden md:flex"><LikeShare /></div>
        </Flex>
    )
}

export default Header
