"use client"

import Link from "next/link";
import FooterLinks from "./Link";
import SocialFooter from "./Social";
import { Button, Image, Kbd } from "@nextui-org/react";
import { useHotkeys } from "react-hotkeys-hook";
import { ThemeSwitcher }  from "../ThemeSwitcher";
import { siteConfig } from "®/config/site";
import useDeviceOS from "®/hooks/useDeviceOS";
import React from "react";
import SearchBar from "../SearchBar";

const Footer = () => {
    const os = useDeviceOS()
    const [open, setOpen] = React.useState(false)
    const openSearch = () => setOpen(true)
    useHotkeys(`${os === 'mac' ? 'meta' : 'ctrl'}+k`, e => {
        openSearch();
        e.preventDefault();
    });
    return(
        <footer className="w-full border-t border-border p-4 md:p-2 text-sm">
            <main className="w-full max-w-7xl mx-auto md:space-y-8 my-4 mb-20 md:mb-6 space-y-4"> 
            <ul className="grid grid-cols-2 gap-2 md:flex justify-between">
                <li className="hidden md:flex"><SocialFooter /></li>
            <FooterLinks />
            </ul>

            <div className="justify-between items-center hidden md:flex">
            <Link href="/" passHref className="flex items-center gap-1">
            <Image src={siteConfig.logo} alt={siteConfig.name} isBlurred width={40} height={40}/>
            <p className="LinkText">&copy; {new Date().getFullYear()}</p>
            </Link>
            <div className="flex items-center">
            <Button size="sm" className="overflow-hidden rounded-full LinkText gap-2 hidden lg:flex" variant="light" onPress={openSearch}>
                            Command Menu
                            <Kbd className="bg-background border border-border shadow-none text-xs">{os === 'windows' ? 'Ctrl' : '⌘'}</Kbd>
                            <Kbd className="bg-background border border-border shadow-none text-xs">K</Kbd>
            </Button>
            <SearchBar open={open} setOpen={setOpen}/>
            <ThemeSwitcher />
            </div>
            </div>   

            <div className="justify-between items-center flex md:hidden">
            <SocialFooter />
            <ThemeSwitcher />
            </div>  
            </main>
        </footer>
    )
}
export default Footer;