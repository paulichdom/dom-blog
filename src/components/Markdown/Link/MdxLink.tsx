import { ColorPalette } from '@/styles/constants';
import React from 'react';
import styled from 'styled-components';

export const MdxLink = ({ children, href }: any) => {
  return <Link href={href}>{children}</Link>;
};

const Link = styled.a`
  color: white;
  text-decoration: none;
  box-shadow: 0px 1px 0px ${ColorPalette.purple};
  transition: box-shadow 150ms;  // ease 0ms;

  &:hover {
    box-shadow: 0px 2px 0px ${ColorPalette.purple};
  }
`;
