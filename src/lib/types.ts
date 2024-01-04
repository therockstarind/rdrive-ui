import { Variants } from "framer-motion";
import { ComponentType } from "react";


/* Custom Animated Components types */
export type AnimatedTAGProps = {
    variants: Variants;
    className?: string;
    children: React.ReactNode;
    infinity?: boolean;
  };

export interface NavItem {
  title: string
  description?: string
  href?: string
  disabled?: boolean
  external?: boolean
  icon?: ComponentType
  label?: string
}
export interface LinksItem extends NavItem {}