"use client"
import React from 'react';
import { cn } from '®/lib/utils';
import { FlexProps, GridProps, TextProps } from './types';

const Text: React.FC<TextProps> = ({ as: Component = 'p', display, m, p, size, font, color, justify, align, gap, border, className, ...props }) => {
  const classNames = cn([display, m, p, size, font, color, justify, align, gap, border, className].filter(Boolean));

  return (
    <Component className={classNames} {...props} />
  );
};

const Flex: React.FC<FlexProps> = ({ display, m, p, size, font, color, justify, align, gap, border, className, ...props }) => {
  const classNames = cn([display, m, p, size, font, color, justify, align, gap, border, className].filter(Boolean));

  return (
    <div className={`${classNames} flex`} {...props} />
  );
};

const Grid: React.FC<GridProps> = ({ display, col, m, p, size, font, color, justify, align, gap, border, className, ...props }) => {
  const classNames = cn([display, col, m, p, size, font, color, justify, align, gap, border, className].filter(Boolean));

  return (
    <div className={`${classNames} grid`} {...props} />
  );
};

export { Text, Flex, Grid };
