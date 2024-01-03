import { Variants } from "framer-motion";


/* Custom Animated Components types */
export type AnimatedTAGProps = {
    variants: Variants;
    className?: string;
    children: React.ReactNode;
    infinity?: boolean;
  };