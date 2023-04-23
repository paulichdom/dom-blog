import AllPosts from '@/components/Posts/AllPosts';
import React, { ReactElement } from 'react';
import { getAllPosts } from '@/utill/posts-util';
import { Post } from '@/types/post';
import { NextPageWithLayout } from '../_app';
import LayoutContainer from '@/components/Layout/LayoutContainer/LayoutContainer';
import MainLayout from '@/components/Layout/MainLayout/MainLayout';

type AllPostsPageProps = {
  posts: Post[];
};

const AllPostsPage: NextPageWithLayout<AllPostsPageProps> = ({ posts }) => {
  return <AllPosts posts={posts} />;
};

AllPostsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutContainer>
      <MainLayout>{page}</MainLayout>
    </LayoutContainer>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 1800,
  };
}

export default AllPostsPage;
