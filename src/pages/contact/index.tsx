import { Breadcrumbs, Crumb } from '@/components/Breadcrumbs/Breadcrumbs';
import React from 'react';
import styled from 'styled-components';

export default function Contact() {
  return (
    <Wrapper>
      <Breadcrumbs>
        <Crumb href="/">Posts</Crumb>
        <Crumb href="/">More posts</Crumb>
        <Crumb href="/">Specific post</Crumb>
      </Breadcrumbs>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;
