"use client"

import { Flex } from "@radix-ui/themes"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { fromLeftVariant } from "®/lib/FramerMotionVariants"
import AnimatedHeading from "../FramerMotion/AnimatedHeading"
import StarShare from "./StarShare"

const Header = () => {
    const pathname = usePathname();
    const title = pathname.split('/').filter(Boolean).pop();
    return (
        <Flex width="100%" justify={{initial: 'center', sm: 'between'}} align="center"  my={{initial: '2', sm: '4'}} direction={{initial: 'column', sm: 'row'}} gap="4">
            <AnimatedHeading variants={fromLeftVariant}>
                <Link href="" passHref>
                    <h1 className="text-xl sm:text-3xl font-bold line-clamp-1">{title}</h1>
                </Link>
            </AnimatedHeading>       
            <StarShare />
        </Flex>
    )
}

export default Header
