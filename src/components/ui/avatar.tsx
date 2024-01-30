"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "®/lib/utils"
import Link from "next/link"
import { AvatarProps } from "®/rdrive/types"

const RadixAvatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-md",
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
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export const Avatar: React.FC<AvatarProps> = ({ src, fallback, alt, className, href, radius }) => {
  const avatarContent = (
    <>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </>
  );

  return href ? (
      <RadixAvatar className={cn(className, `rounded-${radius}`)}>
            <Link href={href} passHref className="flex h-full w-full items-center justify-center rounded-md bg-muted">
              {avatarContent}
            </Link>
      </RadixAvatar>
  ) : (
    <RadixAvatar className={cn(className, `rounded-${radius}`)}>{avatarContent}</RadixAvatar>
  );
};


