import IconInput from '@/components/IconInput/IconInput';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { NextPageWithLayout } from '../_app';
import LayoutContainer from '@/components/Layout/LayoutContainer/LayoutContainer';
import MainLayout from '@/components/Layout/MainLayout/MainLayout';
import { Tooltip } from '@/components/Tooltip/Tooltip';
import { InPortal } from '@/hooks/inPortal';

const Contact: NextPageWithLayout = () => {
  return (
    <Wrapper>
      <h1>Tooltip Example</h1>
      <TestContainer>
        <InPortal id='portal-container'>
        <Tooltip text="Top Tooltip" position="top">
          <button>Hover Me (Top)</button>
        </Tooltip>
        </InPortal>
        <Tooltip text="Bottom Tooltip" position="bottom">
          <button>Hover Me (Bottom)</button>
        </Tooltip>
        <Tooltip text="Left Tooltip" position="left">
          <button>Hover Me (Left)</button>
        </Tooltip>
        <Tooltip text="Right Tooltip" position="right">
          <button>Hover Me (Right)</button>
        </Tooltip>
      </TestContainer>
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

const TestContainer = styled.div`
  border: 2px solid white;
  border-radius: 4px;
  overflow: hidden;
`;

export default Contact;
