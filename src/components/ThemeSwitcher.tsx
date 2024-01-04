"use client"

import { Tab, Tabs } from '@nextui-org/react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from "next-themes";
import { useHotkeys } from 'react-hotkeys-hook';
import { RiComputerLine } from 'react-icons/ri';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  // Switch between dark and light mode using the key.
  useHotkeys('d', () => setTheme('dark'), [setTheme]);
  useHotkeys('l', () => setTheme('light'), [setTheme]);
  useHotkeys('s', () => setTheme('system'), [setTheme]);

  const ThemeChange = (selectedTheme: string) => {
    setTheme(selectedTheme);
  };
  const tabs = [
    {
      theme: 'light',
      icon: <SunIcon className="h-4 w-4" />,
    },
    {
        theme: 'system',
        icon: <RiComputerLine className="h-4 w-4"/>,
      },
    {
      theme: 'dark',
      icon: <MoonIcon className="h-4 w-4" />,
    },
  ];

  return (
    <Tabs
    aria-label="Theme Switcher"
    variant="light"
    radius="full"
    selectedKey={theme}
    onSelectionChange={(selectedTheme) => ThemeChange(selectedTheme as string)}
    classNames={{ tabContent: 'group-data-[selected=true]:text-none text-black dark:text-white'}}
  >
    {tabs.map((item) => (
      <Tab key={item.theme} title={item.icon} aria-label={item.theme}/>
    ))}
  </Tabs>
  );
}
