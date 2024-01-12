"use client"

import { Avatar as UserAvatar } from "@nextui-org/react";
import { Avatar } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import { LiaSearchSolid } from "react-icons/lia";
import { siteConfig } from "®/config/site";
import SearchBar from "./SearchBar";
import { Button } from "®ui/button";

const AppBar = () => {
  const [open, setOpen] = React.useState(false)
    const pathname = usePathname();
    const title = useMemo(() => {
        const segments = pathname.split('/').filter(segment => segment !== '');
        return segments.length === 0 ? "Android" : segments.join(' / ');
    }, [pathname]);

    return (
      <nav className="fixed bottom-2 sm:bottom-1 z-50 w-full left-1/2 right-1/2 transform -translate-x-1/2 flex flex-col max-w-lg p-1">
        <div className="flex h-16 justify-between items-center border border-border rounded-md bg-white/70 dark:bg-black/70  backdrop-blur-xl p-4 gap-4 md:gap-0">
          <Link href='/' aria-label="RDRIVE Logo" passHref>
            <Avatar src={siteConfig.logo} alt={siteConfig.name} fallback="R"/>
          </Link>
          <Button variant="outline" onClick={() => setOpen(true)} className="LinkText bg-transparent max-w-full overflow-hidden">
            <LiaSearchSolid  className="mr-1" size={20} />
            <h1 className="truncate text-center">{title}</h1>
            </Button>
            <SearchBar open={open} setOpen={setOpen}/>
          <Link href="" aria-label="Login">
          <UserAvatar isBordered className="ring-[hsl(var(--ring))]" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop" />
          </Link>
        </div>
      </nav>
    );
};

export default AppBar;
