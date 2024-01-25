"use client";
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { FC, useEffect, useState } from 'react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from 'rehype-slug';
import useSmoothScrolling from '®/hooks/useSmoothScrolling';
import { generateTOC } from '®/lib/utils';
import { MarkdownSkeleton } from '../Skeleton';
import Code from './Code';
import IMG from './Image';
import Pre from './Pre';
import YouTube from './YouTube';
import { A, Blockquote, H1, H2, H3, H4, H5, H6, HR, LI, OL, P, UL } from './typography';

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
        const toc = generateTOC(mdContent);
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

  useSmoothScrolling('a[href^="#"]', mdxSource);

  if (!mdxSource) return <MarkdownSkeleton />;

  return <MDXRemote {...mdxSource} components={components} />;
};

export default Markdown;

const components = {
  pre: Pre,
  YouTube,
  img: IMG,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
  ul: UL,
  ol: OL,
  li: LI,
  blockquote: Blockquote,
  hr: HR,
  code: Code,
  a: A,

}
