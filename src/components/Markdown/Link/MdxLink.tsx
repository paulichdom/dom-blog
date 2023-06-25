import React from 'react';
import styled from 'styled-components';

export const MdxLink = ({ children, href }: any) => {
  return <Link href={href}>{children}</Link>;
};

const Link = styled.a`
  color: green;
  text-decoration: none;
`;
