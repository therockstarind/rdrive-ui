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
        <Flex width="100%" justify={{initial: 'center', sm: 'between'}} align="center"  my={{initial: '2', sm: '4'}} direction={{initial: 'column', sm: 'row'}} gap="4">
            <AnimatedHeading variants={fromLeftVariant}>
                <Link href="" passHref>
                    <h1 className="font-heading text-2xl sm:text-3xl font-bold line-clamp-1">{title}</h1>
                </Link>
            </AnimatedHeading>       
            <LikeShare />
        </Flex>
    )
}

export default Header
