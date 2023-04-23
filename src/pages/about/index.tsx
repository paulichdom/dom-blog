import React, { ReactElement } from 'react';
import Profile from '@/components/Profile/Profile';
import { NextPageWithLayout } from '../_app';
import LayoutContainer from '@/components/Layout/LayoutContainer/LayoutContainer';
import MainLayout from '@/components/Layout/MainLayout/MainLayout';

const About: NextPageWithLayout = () => {
  return <Profile />;
};

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutContainer>
      <MainLayout>{page}</MainLayout>
    </LayoutContainer>
  );
};

export default About;
