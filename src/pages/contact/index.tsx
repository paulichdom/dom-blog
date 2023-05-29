import IconInput from '@/components/IconInput/IconInput';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { NextPageWithLayout } from '../_app';
import LayoutContainer from '@/components/Layout/LayoutContainer/LayoutContainer';
import MainLayout from '@/components/Layout/MainLayout/MainLayout';
import { Tooltip } from '@/components/Tooltip/Tooltip';

const Contact: NextPageWithLayout = () => {
  return (
    <Wrapper>
      <h1>Tooltip Example</h1>
      <Tooltip text="Top Tooltip" position="top">
        <button>Hover Me (Top)</button>
      </Tooltip>
      <Tooltip text="Bottom Tooltip" position="bottom">
        <button>Hover Me (Bottom)</button>
      </Tooltip>
      <Tooltip text="Left Tooltip" position="left">
        <button>Hover Me (Left)</button>
      </Tooltip>
      <Tooltip text="Right Tooltip" position="right">
        <button>Hover Me (Right)</button>
      </Tooltip>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

export default Contact;
