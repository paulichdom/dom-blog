import PostGrid from '@/components/Posts/PostGrid';
import Profile from '@/components/Profile/Profile';
import { Post } from '@/types/post';
import Head from 'next/head';
import { posts } from './posts/tmpPostsData';

export default function Home() {
  return (
    <>
      <Head>
        <title>Domagoj Paulic</title>
        <meta name="description" content="Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Profile /> */}
      <PostGrid posts={posts} />
    </>
  );
}
