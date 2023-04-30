import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <ContentWrapper>
        <p>2023-present Domagoj Paulić</p>
        <p>All Rights Reserved</p>
      </ContentWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 32px;
  background: linear-gradient(
    0deg,
    #181c25,
    #1a1f28,
    #1c212c,
    #1f242f,
    #212733,
    #232937,
    #262c3a,
    #282f3e
  );
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Footer;
