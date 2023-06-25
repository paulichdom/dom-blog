import React from 'react';
import styled from 'styled-components';

export const MdxImage = (props: any) => {
  return <Image src={props.src} alt={props.alt} />;
};

const Image = styled.img`
  border-radius: 4px;
  margin-top: 32px;
  margin-bottom: 32px;
`;
