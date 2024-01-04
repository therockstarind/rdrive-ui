"use client"

import { Image } from "@nextui-org/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import { LiaSearchSolid } from "react-icons/lia"
import { siteConfig } from "®/config/site"
import { Avatar, AvatarFallback, AvatarImage } from "®ui/avatar"
import { Button } from "®ui/button"
import SearchBar from "./SearchBar"


const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    const pathname = usePathname();
    let title;
    if (pathname) {
      const segments = pathname.split('/').filter(segment => segment !== '');
      if (segments.length === 0) {
        title = "Android";
      } else {
        title = segments;
      }
    }
    return(
        <nav className="NavBar">
            <div className="flex justify-between gap-4">
            <Link href='/' aria-label="RDRIVE Logo" passHref>
            <Image src={siteConfig.logo} alt={siteConfig.name} isBlurred width={40} height={40}/>
            </Link>
            <Button variant="outline" onClick={() => setOpen(true)} className="relative w-full max-w-sm LinkText bg-transparent">
            <LiaSearchSolid  className="pointer-events-none absolute left-3" size={20} />
            <h1 className="line-clamp-1">{title}</h1>
            </Button>
            <SearchBar open={open} setOpen={setOpen}/>
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