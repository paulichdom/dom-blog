import PostContent from '@/components/Posts/PostDetail/PostContent';
import { getPostData, getPostsFiles } from '@/utill/posts-util';
import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Post } from '@/types/post';

type ContextParams = {
  slug: string;
};

type PostDetailPageProps = {
  post: Post;
};

export default function PostDetailPage({ post }: PostDetailPageProps) {
  return <PostContent post={post} />;
}

export const getStaticProps: GetStaticProps<
  PostDetailPageProps,
  ContextParams
> = (context) => {
  console.log({ context });
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
  console.log(slugs);

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};
