import LayoutContainer from '@/components/Layout/LayoutContainer/LayoutContainer';
import MainLayout from '@/components/Layout/MainLayout/MainLayout';
import { getAllPosts } from '@/utill/posts';
import { NextPageWithLayout } from '../_app';
import { ReactElement } from 'react';
import Link from 'next/link';
import AllPosts from '@/components/Posts/AllPosts';

const AllPostsPage: NextPageWithLayout = (props: any) => {
  return <AllPosts posts={props.posts} />;
  // TODO: Remove later
  /*   return (
    <div>
      <ul>
        {props.posts.map((post: any, index: number) => (
          <li key={index}>
            <Link href={`articles/${post.slug}`}>
              {post.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ); */
};

AllPostsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutContainer>
      <MainLayout>{page}</MainLayout>
    </LayoutContainer>
  );
};

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 1800,
  };
}

export default AllPostsPage;
