"use client";
import Link from "next/link";
import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "®ui/tooltip";
import { LegalLinks } from "./Legal";

const FooterLinks = () => {
    const FooterLinks: { href: string; title: string; tooltip: string;}[] = [
      {
        href: '/blogs',
        title: 'Blogs',
        tooltip: `This section contains blog posts about various topics related to web development.`,
      },
        {
          href: '/FRP',
          title: 'FRP',
          tooltip: 'FRP Bypass Files & Tool',
        },
        {
          href: '/Drivers',
          title: 'Drivers',
          tooltip: 'Android USB Flashing Driver',
        },
        {
          href: '/Flash-Tool',
          title: 'Flash Tool',
          tooltip: 'Mobile Flashing Tools',
        },
        {
          href: '/iCloud',
          title: 'iCloud Bypass',
          tooltip: 'Say goodbye to iCloud locks: Unlock now.',
        },
        {
          href: '/service-center-price-list',
          title: 'Parts Price List',
          tooltip: 'All Brand Parts Service Center Price List',
        },
        {
          href: `/sponsor`,
          title: 'Sponsor',
          tooltip: 'Show Your Love',
        },
        {
          href: `https://status.rdrive.org/`,
          title: 'Status',
          tooltip: 'APIs Status Check',
        },  
        {
          href: `/sitemap.xml`,
          title: 'Sitemap',
          tooltip: 'Sitemap Index URL',
        },
      ];

  return (
    <>
      {FooterLinks.map(({ href, title, tooltip }, index) => (
        <React.Fragment key={index} >
        {index === FooterLinks.length - 1 &&<LegalLinks />}
        <li>
        <Tooltip>
            <TooltipTrigger asChild>
                <Link href={href} aria-label={tooltip} className="LinkText">
                    {title}
                </Link>
            </TooltipTrigger>
            <TooltipContent sideOffset={10}>
            <p>{tooltip}</p>
            </TooltipContent>
        </Tooltip>
        </li>
    </React.Fragment>
      ))}
    </>
  );
};

export default FooterLinks;