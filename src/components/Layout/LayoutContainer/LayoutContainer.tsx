import React, { Fragment, ReactNode } from 'react';
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
