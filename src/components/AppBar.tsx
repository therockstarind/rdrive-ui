"use client"

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { ReactElement } from "react";
import { BsAndroid2 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { IoGameController } from "react-icons/io5";
import { SiApple } from "react-icons/si";
import { TbApps } from "react-icons/tb";
import { cn } from "®/lib/utils";
import SearchBar from "./SearchBar";
import Tooltip from "®ui//tooltip";


type ButtonProps = {
  className?: string
  children?: ReactElement;
  tooltip: string;
  onPress?: any;
};

const BarButton: React.FC<ButtonProps> = ({ children, tooltip, className, onPress }) => (
  <Tooltip content={tooltip}>
    <Button isIconOnly radius="full" onPress={onPress} className={cn("bg-default/20 dark:bg-default/40 hover:bg-default/40 dark:hover:bg-default/70 border border-border",className)}>
      <div className="text-xl">{children}</div>
    </Button>
  </Tooltip>
);
const AppBar = () => {
  const [open, setOpen] = React.useState(false)
  const router = useRouter();

    return (
      <nav className="fixed bottom-3 sm:bottom-1.5  justify-center mx-auto max-w-auto z-50">
        <div className="flex gap-2 border border-border p-1.5 rounded-full bg-white/70 dark:bg-black/70 backdrop-blur-md items-center">
            <BarButton tooltip="Android" children={<BsAndroid2 />} onPress={() => router.push('/')} />
            <BarButton tooltip="Apps" children={<TbApps />} onPress={() => router.push('/Apps')}/>
            <BarButton tooltip="Games" children={<IoGameController />} onPress={() => router.push('/Games')} />
            <BarButton tooltip="Apple" children={<SiApple />} onPress={() => router.push('/Apple')} />
            <BarButton tooltip="Search" children={<GoSearch />} onPress={() => setOpen(true)}/>
            <BarButton tooltip="Login" children={<FaUserCircle />} onPress={() => router.push('/blogs')} />
            <SearchBar open={open} setOpen={setOpen}/>
        </div>
      </nav>
    );
};

export default AppBar;
