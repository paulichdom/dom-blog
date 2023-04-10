import React from 'react';
import PostHeader from './PostHeader';
import { post } from '@/pages/posts/tmpPost';

export default function PostContent() {
  const { title, content } = post;
  return (
    <article>
      <PostHeader title={title} />
      {content}
    </article>
  );
}
