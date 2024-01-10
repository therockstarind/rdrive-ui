"use client"
import React from 'react';
import { DropdownMenu, Text } from '@radix-ui/themes';
import { List } from 'lucide-react';
import { useRouter } from 'next/navigation';

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
                <List className="h-5 w-5 LinkText" />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content size="2" side="bottom" align="end" sideOffset={18}>
                {toc.map((item, index) => (
                    index === 0 ? (
                        <>
                            <DropdownMenu.Item key={index} onSelect={() => router.push(`#${item.id}`)}>
                                <Text size="5">{item.title}</Text>
                            </DropdownMenu.Item>
                            <DropdownMenu.Separator />
                        </>
                    ) : (
                        <DropdownMenu.Item key={index} onSelect={() => router.push(`#${item.id}`)}>
                            {item.title}
                        </DropdownMenu.Item>
                    )
                ))}
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    );
};

export default Toc;
