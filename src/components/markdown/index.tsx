"use client";
import { useState, useEffect, FC } from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from "rehype-pretty-code";
import Pre from './Pre';
import YouTube from './YouTube';
import IMG from './Image';
import { cn } from '®/lib/utils';
import Code from './Code';
import Link from 'next/link';
import { Card } from '../ui/card';
import { Terminal } from 'lucide-react';
  
const components = {
    pre: Pre,
    YouTube,
    img: IMG,
    h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1
          className={cn(
            "font-heading mt-2 scroll-m-20 text-4xl font-bold",
            className
          )}
          {...props}
        />
      ),
      h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2
          className={cn(
            "font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0",
            className
          )}
          {...props}
        />
      ),
      h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3
          className={cn(
            "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
            className
          )}
          {...props}
        />
      ),
      h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h4
          className={cn(
            "font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
            className
          )}
          {...props}
        />
      ),
      h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h5
          className={cn(
            "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
            className
          )}
          {...props}
        />
      ),
      h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h6
          className={cn(
            "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
            className
          )}
          {...props}
        />
      ),
      p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p
          className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
          {...props}
        />
      ),
      ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
        <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
      ),
      ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
        <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
      ),
      li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <li className={cn("mt-2", className)} {...props} />
      ),
      blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <Card className={cn("p-2 flex items-center mt-4 italic", className)}>
           <Terminal className="h-5 w-5 ml-1 mr-4" />
        <blockquote
        className={cn(className)}
          {...props}
        />
        </Card>
      ),
      hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
        <hr className="my-4 md:my-8" {...props} />
      ),
      table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
        <div className="my-6 w-full overflow-y-auto">
          <table className={cn("w-full", className)} {...props} />
        </div>
      ),
      tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
        <tr
          className={cn("m-0 border-t p-0 even:bg-muted", className)}
          {...props}
        />
      ),
      th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
        <th
          className={cn(
            "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
            className
          )}
          {...props}
        />
      ),
      td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
        <td
          className={cn(
            "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
            className
          )}
          {...props}
        />
      ),
      code: Code,
      Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
        <Link
          className={cn("font-medium underline underline-offset-4", className)}
          {...props}
        />
      ),

}


interface MarkdownProps {
    src: string;
  }

const Markdown: FC<MarkdownProps> = ({ src }) => {
  const [mdxSource, setMdxSource] = useState<any>(null);

  const Options = {
    theme: {
      dark: 'github-dark',
      light: 'light-plus',
    },
    showLineNumbers: true,
  };

  useEffect(() => {
    fetch(src)
      .then(response => response.text())
      .then(mdContent => {
        return serialize(mdContent, {
          mdxOptions: {
            rehypePlugins: [
                rehypeSlug,
                [
                    rehypeAutolinkHeadings,
                    {
                        behavior: 'wrap',
                        properties: { className: 'header-anchor' },
                        content: {
                            type: 'element',
                            tagName: 'span',
                            properties: { className: ['anchor'] },
                            children: [{ type: 'text', value: '#' }],
                        },
                    },
                ],
              [rehypePrettyCode as any, Options],
            ],
            development: process.env.NODE_ENV === "development"
          },
        });
      })
      .then(mdx => setMdxSource(mdx))
      .catch(error => console.error('Error fetching markdown:', error));
  }, [src]);

  if (!mdxSource) return <div>Loading...</div>;

  return <MDXRemote className="mdx" {...mdxSource} components={components} />;
};

export default Markdown;