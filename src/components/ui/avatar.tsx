"use client"

import * as AvatarPrimitive from "@radix-ui/react-avatar"
import * as React from "react"

import Link from "next/link"
import { cn } from "®/lib/utils"
import { AvatarProps } from "®/rdrive/types"

const RadixAvatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-md bg-default/30",
      className
    )}
    {...props}
  />
))
RadixAvatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
     className="flex h-full w-full items-center justify-center"
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export const Avatar: React.FC<AvatarProps> = ({ src, fallback, alt, className, href, radius }) => {
  return (
      <RadixAvatar className={cn(className, `rounded-${radius}`)}>
              <Link href={href ? `/${href}` : ''} className="flex h-full w-full">
              <AvatarImage src={src} alt={alt} />
              <AvatarFallback>{fallback}</AvatarFallback>
              </Link>
      </RadixAvatar>
  );
};


