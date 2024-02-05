'use client'

import { Button, Input, Tab, Tabs, Textarea } from '@nextui-org/react'
import { Dispatch, SetStateAction } from 'react'
import { useMediaQuery } from '®/hooks/use-media-query'

import { RiEditLine } from 'react-icons/ri'
import {
  Avatar,
  Dialog,
  DialogContent,
  Drawer,
  DrawerContent,
  Flex,
  Grid,
  Text,
} from '®/rdrive/ui'
import { UserType } from '®/types'
import { AccountIcon, NotificationsIcon, SecurityIcon } from '../icons'
import CountrySelect from '../ui/country'

export default function Settings({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}) {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[80dvh] max-w-2xl overflow-y-auto">
          <SettingTab />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <Flex className="flex-col overflow-y-auto p-2 pb-10 sm:pb-0">
          <SettingTab />
        </Flex>
      </DrawerContent>
    </Drawer>
  )
}

const SettingTab: React.FC<{}> = ({}) => (
  <Tabs
    aria-label="SettingTab"
    classNames={{
      base: 'sm:bottom-about fixed inset-x-1 bottom-0.5 z-30 sm:relative sm:inset-x-auto',
      tabList: 'w-full border border-border bg-background sm:w-auto',
      tab: 'w-auto',
    }}
  >
    <Tab
      key="Account"
      title={
        <Flex align="items-center" gap="gap-1.5">
          <AccountIcon />
          Account
        </Flex>
      }
    >
      <Account />
    </Tab>
    <Tab
      key="Notifications"
      title={
        <Flex align="items-center" gap="gap-1.5">
          <NotificationsIcon />
          Notifications
        </Flex>
      }
    >
      Contnet
    </Tab>
    <Tab
      key="Security"
      title={
        <Flex align="items-center" gap="gap-1.5">
          <SecurityIcon />
          Security
        </Flex>
      }
    >
      Contnet
    </Tab>
  </Tabs>
)

const Account: React.FC<{ user?: UserType }> = ({ user }) => (
  <Flex display="flex-col" gap="gap-6">
    <Flex display="flex-col" font="font-sans" gap="gap-4">
      <Text as="h1" size="text-xl" font="font-bold">
        Account Details
      </Text>
      <Flex display="flex-col">
        <Flex align="items-center" gap="gap-4" p="py-2">
          <Flex className="relative inline-flex shrink-0">
            <Avatar
              radius="full"
              src={user?.avatar || ''}
              alt={user?.name}
              fallback="R"
              className="relative h-14 w-14"
            />
            <span className="absolute -bottom-1 right-0">
              <Button
                isIconOnly
                size="sm"
                className="h-5 w-5 min-w-5 bg-blue-500 p-0.5"
                radius="full"
              >
                <RiEditLine className="text-white" />
              </Button>
            </span>
          </Flex>
          <Flex display="flex-col" align="items-start" justify="justify-center">
            <Text as="h1" font="font-bold">
              Rock Star
            </Text>
            <Text as="p" size="text-xs" color="text-muted-foreground">
              @rockstar
            </Text>
          </Flex>
        </Flex>
        <Text size="text-sm" color="text-muted-foreground" m="ml-2">
          The photo will be used for your profile, and will be visible to other
          users of the platform.
        </Text>
      </Flex>
      <Grid col="sm:grid-cols-2" gap="gap-4">
        <Input
          type="name"
          label="First Name"
          placeholder="Enter first name"
          labelPlacement="outside"
        />
        <Input
          type="name"
          label="Last Name"
          placeholder="Enter last name"
          labelPlacement="outside"
        />
        <Input
          type="username"
          label="Username"
          placeholder="Enter Username"
          labelPlacement="outside"
        />
        <Input
          type="number"
          label="Phone Number"
          placeholder="Number phone number"
          labelPlacement="outside"
        />
        <Textarea
          label="Bio"
          labelPlacement="outside"
          placeholder="Write a short bio about yourself"
          disableAutosize
          classNames={{ input: 'min-h-[40px] resize-y' }}
        />
        <Input
          type="badge"
          label="Badge"
          placeholder="Username"
          labelPlacement="outside"
        />
        <CountrySelect />
      </Grid>
    </Flex>
    <Flex
      gap="gap-3"
      justify="justify-end"
      display="flex-col-reverse sm:flex-row"
    >
      <Button variant="light" className="rounded-full border border-border">
        Cancel
      </Button>
      <Button radius="full" className="bg-blue-500 !text-white">
        Save Changes
      </Button>
    </Flex>
  </Flex>
)
