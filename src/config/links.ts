import { HiPencilSquare } from "react-icons/hi2";
import { BsApple, BsFillUnlockFill, BsUsbSymbol } from 'react-icons/bs';
import { FaRupeeSign } from 'react-icons/fa';
import { MdPhonelinkSetup } from 'react-icons/md';
import { SiGithubsponsors } from 'react-icons/si';
import { TbApps, TbDeviceGamepad2 } from 'react-icons/tb';
import { LinksItem } from '®/lib/types';

interface LinksConfig {
  searchList: LinksItem[];
}

export const linksConfig: LinksConfig = {
    searchList: [
        {
            href: '/Apps',
            title: 'Apps',
            description: 'Download apps for Android, MacOS, Windows, and Linux',
            icon: TbApps,
          },
          {
            href: '/blogs',
            title: 'Blogs',
            description: 'This section contains blog posts about various topics related to web development.',
            icon: HiPencilSquare,
          },
          {
            href: '/Games',
            title: 'Games',
            description: 'Download games for Android, MacOS, Windows, and Linux',
            icon: TbDeviceGamepad2,
          },
          {
            href: '/Apple',
            title: 'Apple',
            description: 'Download Apple IOS for iPhone, iPad, iPod Touch, Apple TV, and Mac Studio',
            icon: BsApple,
          },
          {
            href: '/FRP',
            title: 'FRP Bypass Tools',
            description: 'Get FRP Bypass files and tools for your device',
            icon: BsFillUnlockFill,
          },
          {
            href: '/Drivers',
            title: 'USB Drivers',
            description: 'Download Android USB flashing drivers',
            icon: BsUsbSymbol,
          },
          {
            href: '/Flash-Tool',
            title: 'Flashing Tools',
            description: 'Tools for flashing mobile devices',
            icon: MdPhonelinkSetup,
          },
          {
            href: '/iCloud',
            title: 'iCloud Bypass Solutions',
            description: 'Say goodbye to iCloud locks: Unlock now.',
            icon: BsApple,
          },
          {
            href: '/service-center-price-list',
            title: 'Parts Price List',
            description: 'View the price list for parts at our service center',
            icon: FaRupeeSign,
          },
          {
            href: '/sponsor',
            title: 'Become a Sponsor',
            description: 'Show your support and sponsor us',
            icon: SiGithubsponsors,
          },
  ],
};
