import React, { Fragment, ReactNode } from 'react';
import Header from '../../Header/Header';
import Footer from '@/components/Footer/Footer';
import styled from 'styled-components';

type LayoutProps = {
  children: ReactNode;
};

export default function LayoutContainer({ children }: LayoutProps) {
  return (
    <Fragment>
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </Fragment>
  );
}

const MainWrapper = styled.div`
  padding: 64px 0px 96px;
  min-height: 100vh;
`;
