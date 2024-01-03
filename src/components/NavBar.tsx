"use client"

import { Image } from "@nextui-org/react"
import Link from "next/link"
import { SiteLogo, SiteTitle } from "®/config/site"
import { Avatar, AvatarFallback, AvatarImage } from "®ui/avatar"


const Navbar = () => {
    return(
        <nav className="NavBar">
            <div className="flex justify-between">
            <Link href='/' aria-label="RDRIVE Logo" passHref>
            <Image src={SiteLogo} alt={SiteTitle} isBlurred width={40} height={40}/>
            </Link>
            <Link href="" aria-label="Login">
            <Avatar>
                    <AvatarImage src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop" alt="" />
                    <AvatarFallback>R</AvatarFallback>
            </Avatar>
            </Link>
            </div>
        </nav>
    )
}
export default Navbar;