import { ColorPalette } from '@/styles/constants';
import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const Aside: FC<PropsWithChildren> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.aside`
  background-color: aliceblue;
  border-left: 2px solid ${ColorPalette.bitterSweet};
`;

export default Aside;
