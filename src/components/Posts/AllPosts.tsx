import React from 'react';
import PostGrid from './PostGrid';
import { Post } from '@/types/post';

type AllPostsProps = {
  posts: Post[];
};

export default function AllPosts({ posts }: AllPostsProps) {
  return (
    <section>
      <h1>All posts</h1>
      <PostGrid posts={posts} />
    </section>
  );
}
