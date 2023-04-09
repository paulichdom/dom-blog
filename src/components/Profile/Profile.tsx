import React from 'react';
import useMounted from '@/hooks/useMounted';
import Image from 'next/image';
import styled from 'styled-components';
import { ColorPalette } from '@/styles/constants';

const PROFILE_IMAGE_URL = 'https://robohash.org/paulicdom';

export default function Profile() {
  const { hasMounted } = useMounted();

  if (!hasMounted) return null;

  return (
    <StyledSection>
      <ImageWrapper>
        <Image
          src={PROFILE_IMAGE_URL}
          alt="Profile image"
          width={300}
          height={300}
          priority
        />
      </ImageWrapper>
      <Heading>Hi, I&apos;m Domagoj</Heading>
      <Description>
        This is a blog about exploring JavaScript ecosystem
      </Description>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  text-align: center;
`;

const ImageWrapper = styled.div`
  display: block;
  width: 300px;
  height: 300px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  overflow: hidden;
  background-color: ${ColorPalette.honeyDew};
  margin: auto;
`;

const Heading = styled.h1`
  font-size: 38px;
  margin: 4 0;
  margin: 32px auto;
`;

const Description = styled.p`
  font-size: 26px;
`;
