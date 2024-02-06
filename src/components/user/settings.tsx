'use client'

import {
  Button,
  Card,
  Input,
  Switch,
  Tab,
  Tabs,
  Textarea,
} from '@nextui-org/react'
import { Dispatch, SetStateAction } from 'react'
import { useMediaQuery } from '®/hooks/use-media-query'

import { RiEditLine } from 'react-icons/ri'
import { cn } from '®/lib/utils'
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
        <Flex className="flex-col overflow-y-auto p-2 pb-14 sm:pb-0">
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
      base: 'fixed inset-x-2 bottom-3 z-30 inline sm:relative sm:inset-x-auto sm:bottom-auto sm:inline-flex',
      tabList: 'border border-border bg-background',
      tab: 'w-auto',
    }}
  >
    <Tab
      key="Account"
      title={
        <Flex align="items-center" gap="gap-1.5">
          <AccountIcon />
          <div>Account</div>
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
          <div>Notifications</div>
        </Flex>
      }
    >
      <Notification />
    </Tab>
    <Tab
      key="Security"
      title={
        <Flex align="items-center" gap="gap-1.5">
          <SecurityIcon />
          <Text>Security</Text>
        </Flex>
      }
    >
      <Security />
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
          type="tel"
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
const Notification: React.FC<{ user?: UserType }> = ({ user }) => (
  <Flex display="flex-col" gap="gap-6">
    <Flex display="flex-col" font="font-sans" gap="gap-4">
      <Grid>
        <Text as="h1" size="text-xl" font="font-bold">
          Notification Settings
        </Text>
        <Text color="text-muted-foreground" size="text-sm">
          Manage your notification preferences
        </Text>
      </Grid>
      <Flex display="flex-col" gap="gap-2">
        <NotificationSwitch
          title="Pause all"
          des="Temporarily pause all notifications"
        />
        <NotificationSwitch
          title="Followers"
          des="Get notified when someone follows you"
        />
        <NotificationSwitch
          title="Likes"
          des="Get notified when someone likes your post"
        />
        <NotificationSwitch
          title="Comments"
          des="Get notified when someone comments on your post"
        />
        <NotificationSwitch
          title="Mentions"
          des="Get notified when someone mentions you in a post"
        />
      </Flex>
      <Flex
        gap="gap-3"
        justify="justify-end"
        display="flex-col-reverse sm:flex-row"
      >
        <Button variant="light" className="rounded-full border border-border">
          Reset to Default
        </Button>
        <Button radius="full" className="bg-blue-500 !text-white">
          Save Changes
        </Button>
      </Flex>
    </Flex>
  </Flex>
)

const Security: React.FC<{ user?: UserType }> = ({ user }) => (
  <Flex display="flex-col" gap="gap-6">
    <Flex display="flex-col" font="font-sans" gap="gap-4">
      <Grid>
        <Text as="h1" size="text-xl" font="font-bold">
          Security Settings
        </Text>
        <Text color="text-muted-foreground" size="text-sm">
          Manage your security preferences
        </Text>
      </Grid>
      <Flex display="flex-col" gap="gap-2">
        <SecurityCard
          title="Phone Number"
          des="The phone number associated with your account."
          button="Edit"
        />
        <SecurityCard
          title="Password"
          des=" Set a unique password to protect your account."
          button="Change"
        />
        <NotificationSwitch
          title="Two-Factor Authentication"
          des="Add an extra layer of security to your account."
          border={false}
        />
        <SecurityCard
          title="Deactivate Account"
          des="Deactivate your account and delete all your data."
          button="Deactivate"
        />
        <Card className="flex flex-row items-center justify-between rounded-md border-none bg-content2 p-4 shadow-none">
          <Flex display="flex-col" gap="gap-1">
            <Text as="h1">Delete Account</Text>
            <Text size="text-tiny" color="text-default-400">
              Permanently remove your account.
            </Text>
          </Flex>
          <Button
            variant="flat"
            color="danger"
            radius="full"
            className="text-xs"
          >
            Delete
          </Button>
        </Card>
      </Flex>
    </Flex>
  </Flex>
)

const NotificationSwitch: React.FC<{
  title: string
  des: string
  border?: boolean
}> = ({ title, des, border = true }) => (
  <Switch
    classNames={{
      base: cn(
        'flex w-full max-w-full touch-auto flex-row-reverse items-center bg-content2',
        'cursor-pointer justify-between gap-2 rounded-lg border-2 border-transparent p-4',
        `data-[selected=${border}]:border-blue-500`
      ),
      wrapper: 'group-data-[selected=true]:bg-blue-500',
    }}
  >
    <Flex display="flex-col" gap="gap-1">
      <Text as="h1" font="text-medium">
        {title}
      </Text>
      <Text size="text-tiny" color="text-default-400">
        {des}
      </Text>
    </Flex>
  </Switch>
)

const SecurityCard: React.FC<{
  title: string
  des: string
  button: string
}> = ({ title, des, button }) => (
  <Card className="flex flex-row items-center justify-between rounded-md border-none bg-content2 p-4 shadow-none">
    <Flex display="flex-col" gap="gap-1">
      <Text as="h1">{title}</Text>
      <Text size="text-tiny" color="text-default-400">
        {des}
      </Text>
    </Flex>
    <Button variant="bordered" radius="full" className="text-xs">
      {button}
    </Button>
  </Card>
)