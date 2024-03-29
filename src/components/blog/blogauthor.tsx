'use client'

import { Button, Navbar } from '@nextui-org/react'
import React from 'react'
import { BiSolidEdit } from 'react-icons/bi'
import { MdAddCircle } from 'react-icons/md'
import { Demo } from '®/config/demo'
import { Tooltip } from '®rdrive/ui'
import Author from '../FolderListLayout/Author'

type BlogAuthorType = {
  toc?: React.ReactNode
}

const BlogAuthor: React.FC<BlogAuthorType> = ({ toc }) => {
  return (
    <Navbar shouldHideOnScroll isBordered classNames={{ wrapper: 'px-0' }}>
      <Author author={Demo.user} />
      <div className="flex items-center gap-2">
        {toc}
        {/* This will only show when user login with it self */}
        <Tooltip content="Edit Post">
          <Button
            isIconOnly
            size="sm"
            radius="full"
            variant="light"
            className="border border-border bg-default/20 dark:bg-default/40"
          >
            <BiSolidEdit size={20} />
          </Button>
        </Tooltip>
        <Tooltip content="New Post">
          <Button
            isIconOnly
            size="sm"
            radius="full"
            variant="light"
            className="border border-border bg-default/20 dark:bg-default/40"
          >
            <MdAddCircle size={20} />
          </Button>
        </Tooltip>
        <Button
          size="sm"
          radius="full"
          variant="light"
          className="border border-border bg-default/20 dark:bg-default/40"
        >
          Follow
        </Button>
      </div>
    </Navbar>
  )
}

export default BlogAuthor
