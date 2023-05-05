import React from 'react';
import PostItem from './PostItem';
import styled from 'styled-components';
import { Post } from '@/types/post';

type PostGridProps = {
  posts: Post[];
};

export default function PostGrid(props: PostGridProps) {
  const { posts } = props;
  console.log({posts})
  return (
    <GridLayout>
      {posts.map((post: Post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </GridLayout>
  );
}

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`;
