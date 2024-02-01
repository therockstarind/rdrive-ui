'use client'
import { Snippet } from '@nextui-org/react'
import { ReactElement } from 'react'
import { MdOutlineContentCopy } from 'react-icons/md'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'
import CodeTitle from './CodeTitle'

const Pre = ({ children }: { children?: ReactElement | undefined }) => {
  const getClassName = () => {
    const language = children?.props['data-language']
    return language || ''
  }

  return (
    <main className="!rounded-md border border-border">
      <div className="flex items-center justify-between bg-default/10 px-4 py-2 dark:bg-default/30">
        {getClassName() && (
          <div className="flex items-center">
            <CodeTitle lang={getClassName()} />
          </div>
        )}
        <div className="flex flex-grow items-center justify-end">
          <Snippet
            size="sm"
            hideSymbol
            classNames={{ base: '-p-1 bg-transparent', pre: 'hidden' }}
            copyIcon={<MdOutlineContentCopy />}
          >
            {children}
          </Snippet>
        </div>
      </div>
      <div className="border-b border-border" />
      <pre className="overflow-auto">
        <ScrollArea type="always">
          {children}
          <ScrollBar orientation="horizontal" />
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </pre>
    </main>
  )
}

export default Pre
