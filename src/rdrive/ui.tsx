"use client"

import React from "react";
import { cn } from "®/lib/utils";

type TextProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  justify?: "start" | "center" | "end" | "around" | "evenly" | "stretch";
  align?: "start" | "center" | "left";
  font?: "extralight" | "normal" | "semibold" | "bold" | "extrabold";
  color?: "gray" | "red" | "blue";
};

const Colors: Record<string, string> = {
  gray: "text-muted-foreground",
  red: "text-red-500",
  blue: "text-blue-500",
};

export const Text: React.FC<TextProps> = ({
as: Element = "p",
  justify = "normal",
  align = "center",
  font = "normal",
  color,
  className,
  ...props
}) => {

    const ClassName = {
        h1: "text-4xl leading-tight", // Large heading for titles
        h2: "text-3xl leading-tight", // Subtitles or section headings
        h3: "text-2xl leading-tight", // Smaller headings or card titles
        h4: "text-xl leading-tight", // Card subtitles or smaller headings
        h5: "text-lg leading-tight", // Smaller subtitles or article headings
        h6: "text-base leading-tight", // Small headings for info bars
        p: "text-sm", // Paragraph text for content
      };

  const css = cn(ClassName[Element], `justify-${justify}`, `items-${align}`, `font-${font}`, Colors[color || ""], className);
  return (
    <Element className={css} {...props} />
  );
};
