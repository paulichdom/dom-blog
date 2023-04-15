import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

type FramedImageProps = {
  src: string;
  alt: string;
  caption: string;
  width: number;
};

export default function FramedImage({
  src,
  alt,
  caption,
  width,
}: FramedImageProps) {
  const aspectRatio = 3 / 2;
  const height = width * aspectRatio;

  return (
    <Frame>
      <StyledImage src={src} alt={alt} width={width} height={height} />
      <Caption>{caption}</Caption>
    </Frame>
  );
}

const Frame = styled.figure`
  padding: 8px;
  position: relative;
  isolation: isolate;
  background: white;
  box-shadow: 0 2.7px 1.9px -2px rgba(0, 0, 0, 0.028),
    0 6.4px 6.1px -2px rgba(0, 0, 0, 0.046),
    0 12px 13.2px -2px rgba(0, 0, 0, 0.061),
    0 21.4px 24.5px -2px rgba(0, 0, 0, 0.073),
    0 -15px 40px -20px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

const StyledImage = styled(Image)`
  display: block;
  border-radius: 4px;
`;

const Caption = styled.figcaption`
  color: black;
  position: absolute;
  left: 8px;
  right: 8px;
  bottom: 8px;
  text-align: center;
  padding: 8px;
  background: hsl(0deg 0% 100% / 0.9);
  backdrop-filter: blur(10px);
`;
