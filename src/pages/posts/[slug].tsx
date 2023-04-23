import PostContent from '@/components/Posts/PostDetail/PostContent';
import { getPostData, getPostsFiles } from '@/utill/posts-util';
import React, { ReactElement } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Post } from '@/types/post';
import { NextPageWithLayout } from '../_app';
import LayoutContainer from '@/components/Layout/LayoutContainer/LayoutContainer';
import PostLayout from '@/components/Layout/PostLayout/PostLayout';

type ContextParams = {
  slug: string;
};

type PostDetailPageProps = {
  post: Post;
};

const PostDetailPage: NextPageWithLayout<PostDetailPageProps> = ({ post }) => {
  return <PostContent post={post} />;
};

PostDetailPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutContainer>
      <PostLayout>{page}</PostLayout>
    </LayoutContainer>
  );
};

export const getStaticProps: GetStaticProps<
  PostDetailPageProps,
  ContextParams
> = (context) => {
  const slug = context.params?.slug;

  const postData = getPostData(slug as string);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};

export default PostDetailPage;
