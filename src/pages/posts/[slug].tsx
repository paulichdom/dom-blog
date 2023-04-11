import PostContent from '@/components/Posts/PostDetail/PostContent';
import { getPostData, getPostsFiles } from '@/utill/posts-util';
import React from 'react';

export default function PostDetailPage(props: any) {
  return <PostContent post={props.post}/>;
}

export function getStaticProps(context: { params: any }) {
  console.log({ context });
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''));
  console.log(slugs);

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
