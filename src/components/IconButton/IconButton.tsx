import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Map, Save, ShoppingCart } from 'react-feather';

type IconButtonProps = {
  icon: ReactNode;
  children: ReactNode;
  isCurrent?: boolean;
  [propName: string]: any;
};

type IconProps = {
  isCurrent?: boolean;
};

function IconButton({
  icon,
  children,
  isCurrent,
  ...delegated
}: IconButtonProps) {
  return (
    <ButtonWrapper {...delegated}>
      <Icon isCurrent={isCurrent}>{icon}</Icon>
      {children}
    </ButtonWrapper>
  );
}

export default function ButtonGroup() {
  return (
    <GroupWrapper>
      <IconButton isCurrent icon={<Map />}>
        Navigation
      </IconButton>
      <IconButton icon={<Save />}>Save Route</IconButton>
      <IconButton icon={<ShoppingCart />}>View Cart</IconButton>
    </GroupWrapper>
  );
}

const ButtonWrapper = styled.button`
  background: white;
  border-radius: 8px;
  border: 2px solid hsl(0deg 0% 80%);
  width: 90px;
  height: 90px;
  font-size: 0.75rem;
  align-items: center;
`;

const Icon = styled.span<IconProps>`
  display: block;
  color: ${(p) => p.isCurrent && 'deeppink'};
`;

const GroupWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`;
