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
    #171926,
    #181a27,
    #181b29,
    #191b2a,
    #191c2b,
    #1a1d2d,
    #1a1e2e,
    #1b1f2f,
    #1b1f31,
    #1c2032,
    #1c2134,
    #1d2235
  );
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Footer;
