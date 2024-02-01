'use client'
import React from 'react'

const Code: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
  className,
  ...props
}) => {
  // Check if children is a simple string (inline code)
  const isInlineCode = typeof children === 'string'

  const inlineCode =
    'relative rounded px-[0.3rem] py-[0.2rem] border border-border'
  const multiLineCode = 'relative font-mono my-4 ml-2 text-xs w-[30px]'

  const finalClassName = isInlineCode
    ? `${inlineCode} ${className || ''}`
    : `${multiLineCode} ${className || ''}`

  return (
    <code className={finalClassName} {...props}>
      {children}
    </code>
  )
}

export default Code
