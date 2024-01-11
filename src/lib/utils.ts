import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function generateTOC(mdText: string): Array<{ id: string; title: string; level: number }> {
  const toc: Array<{ id: string; title: string; level: number }> = [];
  const headingRegex = /^(#{1,6})\s+(.*)/gm;

  let match: RegExpExecArray | null;
  while ((match = headingRegex.exec(mdText)) !== null) {
    const [_, hashes, rawTitle] = match;
    const title = rawTitle.replace(/[\*\`]/g, '').trim();
    const id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
    const level = hashes.length;

    toc.push({ id, title, level });
  }

  return toc;
}