import React from 'react';
import ReactMarkdown from 'react-markdown';
import PostHeader from './PostHeader';
import { Post } from '@/types/post';
import Image from 'next/image';

type PostContentProps = {
  post: Post;
};

export default function PostContent({ post }: PostContentProps) {
  const { title, content, slug } = post;
  const customRenderes = {
    image(image: any) {
      return (
        <Image
          src={`/public/images/posts/${slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      );
    },
    paragraph(paragraph: any) {
      const { node } = paragraph;

      if (node.children[0] === 'image') {
        const image = node.children[0];

        return (
          <div>
            <Image
              src={`/public/images/posts/${slug}/${image.url}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>
    },
  };

  return (
    <article>
      <PostHeader title={title} />
      <ReactMarkdown components={customRenderes}>
        {content as string}
      </ReactMarkdown>
    </article>
  );
}
