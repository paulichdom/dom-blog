import ContactCard from '@/components/ContactCard/ContactCard';
import FramedImage from '@/components/FramedImage/FramedImage';
import React from 'react';
import styled from 'styled-components';

const AVATAR_SRC = '/images/profile/tmpProfImage.jpg';
const FRAMED_IMAGE_SRC = '/images/temp/tmpDangCan.jpg';

export default function Contact() {
  return (
    <Wrapper>
      <ContactCard
        avatarSrc={AVATAR_SRC}
        avatarAlt={'Avatar image'}
        name="Mike Woods"
        email="mike@woods.com"
      />
      <FramedImage
        src={FRAMED_IMAGE_SRC}
        alt={'Img'}
        width={250}
        caption="Mike Woods"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;
