"use client"
import React from 'react';
import { cn } from '®/lib/utils';

export const Page: React.FC<React.HTMLProps<HTMLElement>> = ({ className, ...props }) => {
  return (
    <main className={cn("mx-auto w-full max-w-7xl p-2", className)} {...props} />
  );
};