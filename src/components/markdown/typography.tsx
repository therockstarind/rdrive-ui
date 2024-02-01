'use client'
import { cn } from '®/lib/utils'
import AnimatedHeading from '../FramerMotion/AnimatedHeading'
import { fromLeftVariant } from '®/lib/FramerMotionVariants'
import { Card } from '../ui/card'
import Link from 'next/link'

export const H1 = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <AnimatedHeading variants={fromLeftVariant}>
      <h1
        className={cn('heading text-[2em] font-bold', className)}
        {...props}
      />
    </AnimatedHeading>
  )
}

export const H2 = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <AnimatedHeading variants={fromLeftVariant}>
      <h2
        className={cn('heading text-[1.75em] font-bold', className)}
        {...props}
      />
    </AnimatedHeading>
  )
}

export const H3 = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <AnimatedHeading variants={fromLeftVariant}>
      <h3
        className={cn('heading text-[1.5em] font-bold', className)}
        {...props}
      />
    </AnimatedHeading>
  )
}

export const H4 = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <AnimatedHeading variants={fromLeftVariant}>
      <h4
        className={cn('heading text-[1.25em] font-bold', className)}
        {...props}
      />
    </AnimatedHeading>
  )
}

export const H5 = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h5
      className={cn('heading text-[1.25em] font-bold', className)}
      {...props}
    />
  )
}

export const H6 = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h6
      className={cn('heading text-[1.25em] font-bold', className)}
      {...props}
    />
  )
}

export const P = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return <p className={cn('text-base leading-relaxed', className)} {...props} />
}

export const UL = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) => {
  return <ul className={cn('ml-6 list-disc', className)} {...props} />
}

export const OL = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLOListElement>) => {
  return <ol className={cn('ml-6 list-decimal', className)} {...props} />
}

export const LI = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return <li className={cn('mt-2', className)} {...props} />
}

export const Blockquote = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <Card className={cn('bg-default/10 p-1.5 dark:bg-default/30', className)}>
      <blockquote
        className={cn(
          'ml-1 border-l-3 border-[hsl(var(--ring))] pl-4 italic',
          className
        )}
        {...props}
      />
    </Card>
  )
}

export const HR = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHRElement>) => {
  return (
    <hr className={cn('my-2 border-border sm:my-6', className)} {...props} />
  )
}

export const A = ({
  className,
  ...props
}: React.ComponentProps<typeof Link>) => {
  return (
    <Link
      className={cn(
        'underline decoration-[hsl(var(--ring))] decoration-wavy underline-offset-4',
        className
      )}
      {...props}
    />
  )
}
