"use client"

import Link from "next/link"
import { SiteLogo, SiteTitle } from "®/config/site"
import { Avatar, AvatarFallback, AvatarImage } from "®ui/avatar"


const Footer = () => {
    return(
        <nav className="w-full justify-center items-center bg-opacity-70 dark:bg-opacity-70 backdrop-blur-md border-t md:border-b border-gray-400/30 select-none p-2">
            <div className="flex justify-between">
            <Link href='/' aria-label="RDRIVE Logo" passHref>
            <Avatar>
                    <AvatarImage src={SiteLogo} alt={SiteTitle} />
                    <AvatarFallback>R</AvatarFallback>
            </Avatar>
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
export default Footer;