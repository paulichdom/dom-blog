import IconInput from '@/components/IconInput/IconInput';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { NextPageWithLayout } from '../_app';
import LayoutContainer from '@/components/Layout/LayoutContainer/LayoutContainer';
import MainLayout from '@/components/Layout/MainLayout/MainLayout';

const Contact: NextPageWithLayout = () => {
  return (
    <Wrapper>
      <IconInput icon="at-sign" placeholder="email here ..." size="small" />
    </Wrapper>
  );
};

Contact.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutContainer>
      <MainLayout>{page}</MainLayout>
    </LayoutContainer>
  );
};

const Wrapper = styled.div`
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

export default Contact;
