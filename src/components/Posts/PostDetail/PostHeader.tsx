import React from 'react';
import styled from 'styled-components';

type PostHeaderProps = {
  title: string;
};

export default function PostHeader({ title }: PostHeaderProps) {
  return (
    <HeaderWrapper>
      <h1>{title}</h1>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  margin-bottom: 2rem;
  text-align: center;
`;
