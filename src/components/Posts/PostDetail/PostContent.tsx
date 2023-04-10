import React from 'react';
import ReactMarkdown from 'react-markdown';
import PostHeader from './PostHeader';
import { post } from '@/pages/posts/tmpPost';

export default function PostContent() {
  const { title, content } = post;
  return (
    <article>
      <PostHeader title={title} />
      <ReactMarkdown>{content as string}</ReactMarkdown>
    </article>
  );
}
