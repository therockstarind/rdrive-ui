'use client'
import React from 'react'
import { cn } from '®/lib/utils'
import { GridProps } from '®/rdrive/types'

export const Grid: React.FC<GridProps> = ({
  display,
  col,
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
      col,
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
  return <div className={`${classNames} grid`} {...props} />
}
