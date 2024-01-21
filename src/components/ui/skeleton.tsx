"use client";

import React from 'react';
import { cn } from '®/lib/utils';

interface SkeletonProps {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
    return (
        <div className={cn(
            `group relative
            overflow-hidden
            bg-content3 dark:bg-content2
            before:opacity-100
            before:absolute
            before:inset-0
            before:-translate-x-full
            before:animate-[shimmer_2s_infinite]
            before:border-t
            before:border-content4/30
            before:bg-gradient-to-r
            before:from-transparent
            before:via-content4
            dark:before:via-default-700/10
            before:to-transparent
            after:opacity-100
            after:absolute
            after:inset-0
            after:-z-10
            after:bg-content3
            dark:after:bg-content2
            data-[loaded=true]:!bg-transparent
            data-[loaded=true]:before:opacity-0 data-[loaded=true]:before:animate-none
            data-[loaded=true]:after:opacity-0`, className)} />
    );
};

export default Skeleton;
