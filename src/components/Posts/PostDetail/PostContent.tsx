import React from 'react';
import ReactMarkdown from 'react-markdown';
import PostHeader from './PostHeader';
import { Post } from '@/types/post';
import Image from 'next/image';
import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type PostContentProps = {
  post: Post;
};

export default function PostContent({ post }: PostContentProps) {
  const { title, content, slug } = post;

  const MarkdownComponents: object = {
    p: (paragraph: { children?: boolean; node?: any }) => {
      const { node } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];
        const { src: imgFile, alt: metaString } = image.properties;

        const alt = metaString?.replace(/ *\{[^)]*\]} */g, '');
        const metaWidth = metaString.match(/{([^}]+)x/);
        const metaHeight = metaString.match(/x([^}]+)}/);
        const width = metaWidth ? +metaWidth[1] : 600;
        const height = metaHeight ? +metaHeight[1] : 300;
        const isPriority = metaString?.toLowerCase().match('{priority}');

        const src = `/images/posts/${slug}/${imgFile}`;

        const hasCaption = metaString?.toLowerCase().includes('{caption:');
        const caption = metaString?.match(/{caption: (.*?)}/)?.pop();

        const imgStyle = { width: 'auto', height: 'auto', borderRadius: 4 };

        return (
          <ImageWrapper>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              priority={isPriority}
              style={imgStyle}
            />
            {hasCaption ? (
              <Caption className="caption" aria-label={caption}>
                {caption}
              </Caption>
            ) : null}
          </ImageWrapper>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code: (
      code: {
        node: object;
        className: string;
        children: string[];
        inline: any;
      },
      ...props: any
    ) => {
      const { className, children, inline } = code;
      const lng = /language-(\w+)/.exec(className || '')?.[1];

      return !inline && lng ? (
        <SyntaxHighlighter
          language={lng}
          style={nightOwl}
          showLineNumbers={true}
        >
          {children}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <article>
      <PostHeader title={title} />
      <ReactMarkdown components={MarkdownComponents}>
        {content as string}
      </ReactMarkdown>
    </article>
  );
}

const ImageWrapper = styled.div`
  margin: 2rem auto;
  border-radius: 8px;
`;

const Caption = styled.div`
  font-size: 0.75rem;
  font-style: italic;
  margin-top: 0.5rem;

  &::before {
    content: '— ';
  }
`;
