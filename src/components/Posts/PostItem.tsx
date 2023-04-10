import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from './PostGrid';
import styled from 'styled-components';
import { ColorPalette } from '@/styles/constants';

type PostItemProps = {
  post: Post;
};

export default function PostItem({ post }: PostItemProps) {
  const { title, excerpt, date, slug } = post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const linkPath = `/posts/${slug}`;

  return (
    <PostCard>
      <Article>
        <StyledLink href={linkPath}>
          <Title>{title}</Title>
          <time>{formattedDate}</time>
          <Excerpt>{excerpt}</Excerpt>
          <Text>Read more</Text>
        </StyledLink>
      </Article>
    </PostCard>
  );
}

const PostCard = styled.div`
  border-radius: 8px;
  padding: 24px;
  background-color: ${ColorPalette.coolGray};
  max-width: fit-content;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Article = styled.article``;

const Title = styled.h3``;

const Excerpt = styled.p`
  margin-top: 16px;
  font-size: 1rem;
`;

const Text = styled.div`
  margin-top: 16px;
  font-weight: 500;
`;
