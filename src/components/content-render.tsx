import rehypePrettyCode from 'rehype-pretty-code';
import rehypeRaw from 'rehype-raw';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Zoom from 'react-medium-image-zoom';
import { resolveImageSrc } from '#/lib/utils';
import type { ComponentPropsWithoutRef } from 'react';
import type { Options } from 'rehype-pretty-code';
import 'react-medium-image-zoom/dist/styles.css';

type HeadingProps = ComponentPropsWithoutRef<'h1'>;
type ParagraphProps = ComponentPropsWithoutRef<'p'>;
type ListProps = ComponentPropsWithoutRef<'ul'>;
type ListItemProps = ComponentPropsWithoutRef<'li'>;
type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>;
type AnchorProps = ComponentPropsWithoutRef<'a'>;
type CodeProps = ComponentPropsWithoutRef<'code'> & {
  'className'?: string;
  'data-language'?: string;
};
type PreProps = ComponentPropsWithoutRef<'pre'>;
type ImageProps = ComponentPropsWithoutRef<'img'>;

const rehypePrettyCodeOptions: Options = {
  theme: {
    dark: 'github-dark-dimmed',
    light: 'github-light',
  },
  bypassInlineCode: true,
  keepBackground: false,
  defaultLang: 'plaintext',
  filterMetaString(metadata) {
    let result = `${metadata} showLineNumbers`;
    if (result.includes('hideLineNumbers')) {
      result = result.replaceAll('showLineNumbers', '');
    }
    return result;
  },
};

const components = {
  h1: (props: HeadingProps) => (
    <h1 className="mt-8 mb-4 text-3xl font-medium tracking-tight" {...props}>
      <span className="text-foreground/30 mr-2">#</span>
      {props.children}
    </h1>
  ),
  h2: (props: HeadingProps) => (
    <h2 className="mt-8 mb-4 text-2xl font-medium tracking-tight" {...props}>
      <span className="text-foreground/30 mr-2">#</span>
      {props.children}
    </h2>
  ),
  h3: (props: HeadingProps) => (
    <h3 className="mt-6 mb-3 text-xl font-medium tracking-tight" {...props}>
      <span className="text-foreground/30 mr-1.5">#</span>
      {props.children}
    </h3>
  ),
  h4: (props: HeadingProps) => (
    <h4 className="mt-5 mb-2 text-lg font-medium tracking-tight" {...props}>
      <span className="text-foreground/30 mr-1.5">#</span>
      {props.children}
    </h4>
  ),
  h5: (props: HeadingProps) => (
    <h5 className="mt-4 mb-2 text-base font-medium tracking-tight" {...props}>
      <span className="text-foreground/30 mr-1.5">#</span>
      {props.children}
    </h5>
  ),
  p: (props: ParagraphProps) => <p className="mb-4 leading-relaxed" {...props} />,
  ul: (props: ListProps) => (
    <ul
      className="mb-4 list-disc pl-6 [&_ul]:mt-1 [&_ul]:mb-0 [&_ul]:list-[circle] [&_ul_ul]:list-[square]"
      {...props}
    />
  ),
  ol: (props: ListProps) => (
    <ol className="mb-4 list-decimal pl-6 [&_ol]:mt-1 [&_ol]:mb-0" {...props} />
  ),
  li: (props: ListItemProps) => <li className="mb-1 [&:has(ol)]:mb-2 [&:has(ul)]:mb-2" {...props} />,
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="border-foreground/20 text-foreground/70 my-4 border-l-2 pl-4 italic"
      {...props}
    />
  ),
  a: (props: AnchorProps) => (
    <a
      className="relative inline-flex items-baseline gap-0.5 font-medium text-blue-600 no-underline transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:text-blue-700 hover:after:w-full dark:text-blue-400 dark:hover:text-blue-300"
      {...props}
    >
      {props.children}
      <svg
        className="inline-block h-3.5 w-3.5 shrink-0 translate-y-px"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    </a>
  ),
  hr: () => <hr className="border-foreground/10 my-8" />,
  code: (props: CodeProps) => {
    const isInline = !props.className && !props['data-language'];
    if (isInline) {
      return (
        <code
          className="bg-foreground/10 text-foreground/90 border-foreground/10 rounded-md border px-1.5 py-0.5 font-mono text-[0.9em]"
          {...props}
        />
      );
    }
    return <code {...props} />;
  },
  pre: (props: PreProps) => (
    <pre
      className="bg-foreground/5 border-foreground/10 my-4 overflow-x-auto rounded-lg border p-4 text-sm"
      {...props}
    />
  ),
  img: (props: ImageProps) => {
    const src = typeof props.src === 'string' ? props.src : undefined;
    const resolvedSrc = resolveImageSrc(src);
    const { style: _style, ...restProps } = props;

    return (
      <Zoom wrapElement="span">
        <img
          className="my-4 h-auto max-w-full cursor-zoom-in rounded-lg"
          loading="lazy"
          {...restProps}
          src={resolvedSrc}
        />
      </Zoom>
    );
  },
};

export default function ContentRender({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{
        mdxOptions: {
          format: 'md',
          rehypePlugins: [rehypeRaw, [rehypePrettyCode, rehypePrettyCodeOptions]],
        },
      }}
    />
  );
}
