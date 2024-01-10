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
import { MarkdownSkeleton } from '../Skeleton';
import AnimatedHeading from '../FramerMotion/AnimatedHeading';
import { fromLeftVariant } from '®/lib/FramerMotionVariants';
import { TOC } from '®/hooks/toc';

type MarkdownProps = {
  src: string;
  TOCGenerated?: (toc: { id: string; title: string; }[]) => void;
};

const Markdown: FC<MarkdownProps> = ({ src, TOCGenerated }) => {
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
        // Here we can still generate the TOC but not store it in the state
        // Instead, we call TOCGenerated callback
        const toc = TOC(mdContent);
        if (TOCGenerated) {
          TOCGenerated(toc);
        }

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
  }, [src, TOCGenerated]);

  if (!mdxSource) return <MarkdownSkeleton />;

  return <MDXRemote className="mdx" {...mdxSource} components={components} />;
};

export default Markdown;

const components = {
  pre: Pre,
  YouTube,
  img: IMG,
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <AnimatedHeading variants={fromLeftVariant}>
      <h1
        className={cn(
          "mdx-heading font-heading mt-2 scroll-link text-4xl lg:text-5xl font-bold lg:font-extrabold ",
          className
        )}
        {...props}
      />
      </AnimatedHeading>
    ),
    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <AnimatedHeading variants={fromLeftVariant}>
      <h2
        className={cn(
          "mdx-heading font-heading mt-12 scroll-link pb-2 text-3xl font-bold tracking-tight first:mt-0",
          className
        )}
        {...props}
      />
      </AnimatedHeading>
    ),
    h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <AnimatedHeading variants={fromLeftVariant}>
      <h3
        className={cn(
          "mdx-heading font-heading mt-8 scroll-link text-2xl font-bold tracking-tight",
          className
        )}
        {...props}
      />
      </AnimatedHeading>
    ),
    h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <AnimatedHeading variants={fromLeftVariant}>
      <h4
        className={cn(
          "mdx-heading font-heading mt-8 scroll-link text-xl font-bold tracking-tight",
          className
        )}
        {...props}
      />
      </AnimatedHeading>
    ),
    h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h5
        className={cn(
          "mdx-heading mt-8 scroll-link text-xl font-bold tracking-tight",
          className
        )}
        {...props}
      />
    ),
    h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h6
        className={cn(
          "mdx-heading mt-8 scroll-link text-xl font-bold tracking-tight",
          className
        )}
        {...props}
      />
    ),
    a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
      <a
        className={cn("underline decoration-wavy decoration-[hsl(var(--ring))] underline-offset-4", className)}
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
      <Card className={cn("p-2 my-5 bg-default/10 dark:bg-default/30", className)}>
      <blockquote
      className={cn("border-l-3 border-[hsl(var(--ring))] ml-1 pl-4 italic",className)}
        {...props}
      />
      </Card>
    ),
    hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
      <hr className="my-4 md:my-8" {...props} />
    ),
    code: Code,
    Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
      <Link
        className={cn("font-medium underline underline-offset-4", className)}
        {...props}
      />
    ),

}
