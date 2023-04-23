import React, { Fragment, ReactNode, FC } from 'react';
import styled from 'styled-components';
import Header from '../../Header/Header';

type LayoutProps = {
  children: ReactNode;
};

export default function LayoutContainer({ children }: LayoutProps) {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
}

/* const MainContainer = styled.main`
  position: relative;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 64px;
  padding-left: 32px;
  padding-right: 32px;
`; */

/* const MainContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr min(60ch, calc(100% - 64px)) 1fr;
  grid-column-gap: 32px;
  grid-row-gap: 32;
  margin-top: 32px;

  & > * {
    grid-column: 2;
  }
`; */
