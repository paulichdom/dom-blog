import React, { ReactNode } from 'react';
import styled from 'styled-components';

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return <Layout>{children}</Layout>;
}

const Layout = styled.main`
  display: grid;
  grid-template-columns: 1fr min(1100px) 1fr;
  grid-column-gap: 32px;
  grid-row-gap: 32;

  & > * {
    grid-column: 2;
  }
`;
