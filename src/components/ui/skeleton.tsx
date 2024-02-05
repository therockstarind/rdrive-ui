'use client'

import React from 'react'

type SkeletonProps = {
  className?: string
}

const Skeleton: React.FC<SkeletonProps> = () => {
  return (
    <div className="group relative h-4 w-4/5 overflow-hidden rounded-md bg-content3 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:border-t before:border-content4/30 before:bg-gradient-to-r before:from-transparent before:via-content4 before:to-transparent before:opacity-100 after:absolute after:inset-0 after:-z-10 after:bg-content3 after:opacity-100 data-[loaded=true]:!bg-transparent data-[loaded=true]:before:animate-none data-[loaded=true]:before:opacity-0 data-[loaded=true]:after:opacity-0 dark:bg-content2 dark:before:via-default-700/10 dark:after:bg-content2" />
  )
}

export default Skeleton
