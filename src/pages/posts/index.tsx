import AllPosts from '@/components/Posts/AllPosts';
import React from 'react';
import { getAllPosts } from '@/utill/posts-util';
import { Post } from '@/types/post';

type AllPostsPageProps = {
  posts: Post[];
};

export default function AllPostsPage({ posts }: AllPostsPageProps) {
  return <AllPosts posts={posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 1800,
  };
}
