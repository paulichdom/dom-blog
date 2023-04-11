import React from 'react';
import ReactMarkdown from 'react-markdown';
import PostHeader from './PostHeader';
import { Post } from '@/types/post';

type PostContentProps = {
  post: Post;
};

export default function PostContent({ post }: PostContentProps) {
  const { title, content } = post;
  return (
    <article>
      <PostHeader title={title} />
      <ReactMarkdown>{content as string}</ReactMarkdown>
    </article>
  );
}
