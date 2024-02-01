'use client'
import React from 'react'
import { cn } from '®/lib/utils'
import { TextProps } from '®/rdrive/types'

export const Text: React.FC<TextProps> = ({
  as: Component = 'p',
  display,
  m,
  p,
  size,
  font,
  color,
  justify,
  align,
  gap,
  border,
  className,
  ...props
}) => {
  const classNames = cn(
    [
      display,
      m,
      p,
      size,
      font,
      color,
      justify,
      align,
      gap,
      border,
      className,
    ].filter(Boolean)
  )

  return <Component className={classNames} {...props} />
}
