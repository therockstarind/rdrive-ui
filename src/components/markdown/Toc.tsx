"use client"
import React from 'react';
import { DropdownMenu, Text } from '@radix-ui/themes';
import { List } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type TocItem = {
    toc: {
        id: string;
        title: string;
    }[];
  };
const Toc: React.FC<TocItem> = ({ toc }) => {
    const router = useRouter();
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <Link href='#' className="hover:bg-accent p-1 rounded-md">
                <List className="h-5 w-5 LinkText" />
                </Link>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content size="2" side="bottom" align="end" sideOffset={18} className="!bg-background !max-h-[40dvh]" color="ruby">
                {toc.map((item, index) => (
                    index === 0 ? (
                        <>
                            <DropdownMenu.Item key={index} onSelect={() => router.push(`#${item.id}`)}>
                                <Text size="5" className="max-w-60 md:max-w-80 truncate">{item.title}</Text>
                            </DropdownMenu.Item>
                            <DropdownMenu.Separator />
                        </>
                    ) : (
                        <DropdownMenu.Item key={index} onSelect={() => router.push(`#${item.id}`)}>
                            <Text className="max-w-60 md:max-w-80 truncate">{item.title}</Text>
                        </DropdownMenu.Item>
                    )
                ))}
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    );
};

export default Toc;
