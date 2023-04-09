import React, { Fragment, ReactNode } from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <Header />
      <MainContainer>{children}</MainContainer>
    </Fragment>
  );
};

const MainContainer = styled.main`
  position: relative;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 64px;
  padding-left: 32px;
  padding-right: 32px;
`
export default Layout;
