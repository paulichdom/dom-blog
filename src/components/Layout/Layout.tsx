import React, { Fragment, ReactNode } from 'react';
import Header from '../Header/Header';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
