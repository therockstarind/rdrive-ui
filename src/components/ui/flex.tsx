"use client"
import React from 'react';
import { cn } from '®/lib/utils';
import { FlexProps } from '®/rdrive/types';

export const Flex: React.FC<FlexProps> = ({ display, m, p, size, font, color, justify, align, gap, border, className, ...props }) => {
  const classNames = cn([display, m, p, size, font, color, justify, align, gap, border, className].filter(Boolean));

  return (
    <div className={`${classNames} flex`} {...props} />
  );
};