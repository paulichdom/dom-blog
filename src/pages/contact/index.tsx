import IconInput from '@/components/IconInput/IconInput';
import React from 'react';
import styled from 'styled-components';

export default function Contact() {
  return (
    <Wrapper>
      <IconInput icon="at-sign" placeholder="email here ..." size="small" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;
