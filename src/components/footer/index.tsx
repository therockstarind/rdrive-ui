"use client"

import Link from "next/link";
import FooterLinks from "./Link";
import SocialFooter from "./Social";
import { SiteLogo, SiteTitle } from "®/config/site";
import { Image } from "@nextui-org/react";
import { ThemeSwitcher }  from "../ThemeSwitcher";

const Footer = () => {
    return(
        <footer className="w-full border-t border-border p-2 text-xs sm:text-sm">
            <main className="w-full max-w-7xl mx-auto md:space-y-8 my-4 mb-14 sm:mb-6">
            <div className="justify-between items-center hidden md:flex">
            <Link href="/" passHref className="flex items-center gap-1">
            <Image src={SiteLogo} alt={SiteTitle} isBlurred width={40} height={40}/>
            <p className="LinkText">&copy; {new Date().getFullYear()}</p>
            </Link>
            <ThemeSwitcher />
            </div>    
            <ul className="grid grid-cols-2 gap-2 md:flex justify-between">
                <li className="hidden md:flex"><SocialFooter /></li>
            <FooterLinks />
            </ul>
            <div className="justify-between items-center flex md:hidden">
            <SocialFooter />
            <ThemeSwitcher />
            </div>  
            </main>
        </footer>
    )
}
export default Footer;