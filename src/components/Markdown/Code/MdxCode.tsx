import { ColorPalette } from '@/styles/constants';
import React from 'react';
import styled from 'styled-components';

export const MdxCode = ({ children }: any) => {
  console.log({ children });
  return <Code>{children}</Code>;
};

const Code = styled.code`
  font-weight: 500;
  padding: 4px 6px;
  background-color: ${ColorPalette.gunMetal};
  border-radius: 3px;
`;
