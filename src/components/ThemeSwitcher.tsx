"use client"

import { Tab, Tabs } from '@nextui-org/react';
import { useTheme } from "next-themes";
import { BsFillSunFill, BsMoon } from 'react-icons/bs';
import { RiComputerLine } from 'react-icons/ri';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const handleThemeChange = (selectedTheme: string) => {
    setTheme(selectedTheme);
  };
  const tabs = [
    {
      theme: 'light',
      icon: <BsFillSunFill />,
    },
    {
        theme: 'system',
        icon: <RiComputerLine />,
      },
    {
      theme: 'dark',
      icon: <BsMoon />,
    },
  ];

  return (
    <Tabs
    aria-label="Theme Switcher"
    variant="light"
    radius="full"
    selectedKey={theme}
    onSelectionChange={(selectedTheme) => handleThemeChange(selectedTheme as string)}
    classNames={{ tabContent: 'group-data-[selected=true]:text-none text-black dark:text-white'}}
  >
    {tabs.map((item) => (
      <Tab key={item.theme} title={item.icon} aria-label={item.theme}/>
    ))}
  </Tabs>
  );
}
