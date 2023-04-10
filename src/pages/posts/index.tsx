import AllPosts from '@/components/Posts/AllPosts';
import React from 'react';
import { posts } from './tmpPostsData';

export default function Posts() {
  return <AllPosts posts={posts} />;
}
