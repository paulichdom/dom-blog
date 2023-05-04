import { ColorPalette } from '@/styles/constants';
import React from 'react';
import styled from 'styled-components';

const ArticleHeader = ({ frontmatter }: any) => {
  const date = new Date(frontmatter.date);
  const formattedDate = date.toLocaleDateString('en-Us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <>
      <Title>{frontmatter.title}</Title>
      <Time>
        {formattedDate} - {frontmatter.readingTime.text}
      </Time>
    </>
  );
};

const Title = styled.h1``;

const Time = styled.p`
  margin-top: 8px;
  margin-bottom: 32px;
  // TODO: calculate font specs
  // line-height: 1.5px;
  // font-size:
  // font-weight:
  color: ${ColorPalette.gray700};
`;

export default ArticleHeader;
