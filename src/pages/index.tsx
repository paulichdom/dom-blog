import PostGrid from '@/components/Posts/PostGrid';

import Head from 'next/head';
// import { posts } from './posts/tmpPostsData';
import { getFeaturedPosts } from '@/utill/posts-util';
import { Post } from '@/types/post';

type HomePageProps = {
  posts: Post[];
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Head>
        <title>Domagoj Paulic</title>
        <meta name="description" content="Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostGrid posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 1800,
  };
}
