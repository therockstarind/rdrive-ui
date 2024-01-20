"use client"

import {Tooltip as NextTooltip} from "@nextui-org/react";
// import * as TooltipPrimitive from '@radix-ui/react-tooltip';
// import * as React from 'react';

// import { cn } from '®/lib/utils';

// const TooltipProvider = TooltipPrimitive.Provider
// const  Tip = TooltipPrimitive.Root
// const TooltipTrigger = TooltipPrimitive.Trigger

// const TooltipContent = React.forwardRef<
//   React.ElementRef<typeof TooltipPrimitive.Content>,
//   React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & { content: React.ReactNode }
// >(({ content, className, sideOffset = 8, ...props }, ref) => (
//   <TooltipPrimitive.Content
//     ref={ref}
//     sideOffset={sideOffset}
//     className={cn("bg-[hsl(var(--ring))] text-white rounded-md px-2 py-1 text-sm z-50 overflow-hidden shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",className)}
//     {...props}
//     >
//     <TooltipPrimitive.Arrow className="fill-[hsl(var(--ring))]" />
//           {content}
//   </TooltipPrimitive.Content>
// ));
// TooltipContent.displayName = TooltipPrimitive.Content.displayName

type TooltipProps = {
  children: React.ReactElement;
  content: string;
};

const Tooltip: React.FC<TooltipProps> = ({ children, content }) => (
  <NextTooltip 
      radius='sm'
      size='sm'
      showArrow
      offset={10}
      content={content}
      classNames={{
        base: [
          // arrow color
          "before:bg-[hsl(var(--ring))]",
        ],
        content: [
          "px-2",
          "text-white bg-[hsl(var(--ring))]",
        ],
      }}
    >
      {children}
    </NextTooltip>
);

export default Tooltip

