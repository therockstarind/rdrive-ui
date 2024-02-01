'use client'

import { Tab, Tabs } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import { useHotkeys } from 'react-hotkeys-hook'
import { RiComputerLine, RiMoonLine, RiSunLine } from 'react-icons/ri'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  // Switch between dark and light mode using the key.
  useHotkeys('d', () => setTheme('dark'), [setTheme])
  useHotkeys('l', () => setTheme('light'), [setTheme])
  useHotkeys('s', () => setTheme('system'), [setTheme])

  const ThemeChange = (selectedTheme: string) => {
    setTheme(selectedTheme)
  }
  const tabs = [
    {
      theme: 'light',
      icon: <RiSunLine />,
    },
    {
      theme: 'system',
      icon: <RiComputerLine />,
    },
    {
      theme: 'dark',
      icon: <RiMoonLine />,
    },
  ]

  return (
    <Tabs
      aria-label="Theme Switcher"
      variant="light"
      radius="full"
      selectedKey={theme}
      onSelectionChange={(selectedTheme) =>
        ThemeChange(selectedTheme as string)
      }
      classNames={{
        cursor: 'bg-default/15 shadow-none dark:bg-default/50',
        tabContent:
          'group-data-[selected=true]:text-none text-black dark:text-white',
      }}
    >
      {tabs.map((item) => (
        <Tab key={item.theme} title={item.icon} aria-label={item.theme} />
      ))}
    </Tabs>
  )
}
