'use client'
import React from 'react'
import { country } from '®/config/country'
import { Avatar } from '@nextui-org/react'
import {
  Flex,
  Text,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '®/rdrive/ui'

const CountrySelect: React.FC = () => {
  return (
    <Flex display="flex-col">
      <Text size="text-sm" font="subpixel-antialiased" p="pb-1 pe-2">
        Country
      </Text>
      <Select>
        <SelectTrigger className="rounded-xl border-none bg-default-100 shadow-sm">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent className="max-w-xs">
          <SelectGroup>
            {country.map((country) => (
              <SelectItem value={country.name}>
                <Flex display="" align="items-center" gap="gap-2">
                  <Avatar
                    size="sm"
                    src={country.flags.svg}
                    alt={`Flag of ${country.name}`}
                  />
                  {country.name}
                </Flex>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Flex>
  )
}

export default CountrySelect
