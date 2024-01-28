import React from "react";
import { cn } from "®/lib/utils";

type UiProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  justify?: "start" | "center" | "end" | "around" | "evenly" | "stretch";
  align?: "start" | "center" | "left";
};

export const Heading: React.FC<UiProps> = ({
  as: Element = "h1",
  justify = "normal",
  align = "center",
  className,
  ...props
}) => {
  const ClassName = {
    h1: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold",
    h2: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold",
    h3: "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold",
    h4: "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold",
    h5: "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold",
    h6: "text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold",
  };

  const css = cn(ClassName[Element], `justify-${justify}`, `text-${align}`, className);

  return (
    <Element className={css} {...props} />
  );
};
