import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { ColorPalette } from '@/styles/constants';
import { Post } from '@/types/post';

type PostItemProps = {
  post: Post;
};

export default function PostItem({ post }: PostItemProps) {
  const { frontmatter, slug } = post;
  const { date, title, excerpt } = frontmatter;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const linkPath = `/posts/${slug}`;

  return (
    <PostCard>
      <StyledLink href={linkPath}>
        <Article>
          <Title>{title}</Title>
          <time>{formattedDate}</time>
          <Excerpt>{excerpt}</Excerpt>
        </Article>
        <Text>Read more</Text>
      </StyledLink>
    </PostCard>
  );
}

const PostCard = styled.div`
  cursor: pointer;
  border-radius: 8px;
  padding: 24px;
  background-color: ${ColorPalette.spaceCadet};
  max-width: 100%;
  border: 1px solid ${ColorPalette.spaceCadet};

  transition: border-color 250ms ease 0ms, background-color 0s ease;

  &:hover {
    border-color: ${ColorPalette.purple};
    background-color: ${ColorPalette.spaceCadetLight};
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  color: inherit;
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
`;

const Title = styled.h3``;

const Excerpt = styled.p`
  margin-top: 16px;
  font-size: 0.85rem;
  flex-grow: 1;
`;

const Text = styled.div`
  margin-top: 16px;
  font-weight: 500;
`;
