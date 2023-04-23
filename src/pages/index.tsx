import Head from 'next/head';
import { getFeaturedPosts } from '@/utill/posts-util';
import { Post } from '@/types/post';
import PostGrid from '@/components/Posts/PostGrid';
import { NextPageWithLayout } from './_app';
import MainLayout from '@/components/Layout/MainLayout/MainLayout';
import LayoutContainer from '@/components/Layout/LayoutContainer/LayoutContainer';
import { ReactElement } from 'react';

type HomePageProps = {
  posts: Post[];
};

const HomePage: NextPageWithLayout<HomePageProps> = ({ posts }) => {
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
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutContainer>
      <MainLayout>{page}</MainLayout>
    </LayoutContainer>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 1800,
  };
}

export default HomePage;
