import ButtonTable from '@/components/Button/ButtonTable';
import React from 'react';
import styled from 'styled-components';

export default function Contact() {
  return (
    <Wrapper>
      <ButtonTable />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;
