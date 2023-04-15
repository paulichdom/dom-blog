import ContactCard from '@/components/ContactCard/ContactCard';
import React from 'react';
import styled from 'styled-components';

const AVATAR_SRC = '/images/profile/tmpProfImage.jpg';

export default function Contact() {
  return (
    <Wrapper>
      <ContactCard
        avatarSrc={AVATAR_SRC}
        avatarAlt={'Avatar image'}
        name="Mike Woods"
        email="mike@woods.com"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;
