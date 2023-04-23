import React, { ReactNode } from 'react';
import styled from 'styled-components';

type PostLayoutProps = {
  children: ReactNode;
};

export default function PostLayout({ children }: PostLayoutProps) {
  return <Layout>{children}</Layout>;
}

const Layout = styled.main`
  display: grid;
  grid-template-columns: 1fr min(60ch, calc(100% - 64px)) 1fr;
  grid-column-gap: 32px;
  grid-row-gap: 32;

  & > * {
    grid-column: 2;
  }
`;
