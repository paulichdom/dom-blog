import React, { ReactNode } from 'react';
import styled from 'styled-components';

type TooltipProps = {
  text: string;
  position: string;
  children: ReactNode;
};

export const Tooltip = ({ text, position, children }: TooltipProps) => {
  console.log({ position });
  return (
    <TooltipWrapper>
      {children}
      <TooltipContent position={position}>{text}</TooltipContent>
    </TooltipWrapper>
  );
};

const TooltipWrapper = styled.div`
  position: relative;
`;

const TooltipContent = styled.div<{ position: string }>`
  --_p-inline: 8px;
  --_p-block: 8px;

  pointer-events: none;
  user-select: none;

  opacity: 0;
  //transform: translateX(var(--_x, 0)) translateY(var(--_y, 0));
  transition: opacity 0.2s ease, transform 0.2s ease;

  position: absolute;
  z-index: 1;
  inline-size: max-content;
  padding: 8px;
  text-align: start;
  border-radius: 4px;
  background-color: #000;
  color: #fff;

  ${({ position }) => {
    switch (position) {
      case 'top':
        return `
          left: 50%;
          bottom: calc(100% + var(--_p-block));
          /* --_x: -50%; */ transform: translateX(-50%);
        `;
      case 'bottom':
        return `
          left: 50%;
          top: calc(100% + var(--_p-block));
          /* --_x: -50%; */ transform: translateX(-50%);
        `;
      case 'left':
        return `
          right: calc(100% + var(--_p-inline));
          bottom: 50%;
          /* --_y: 50%; */ transform: translateY(50%);
        `;
      case 'right':
        return `
          left: calc(100% + var(--_p-inline));
          bottom: 50%;
          /* --_y: 50%; */ transform: translateY(50%);
        `;
      default:
        return '';
    }
  }}

  ${TooltipWrapper}:hover & {
    opacity: 1;
    transition-delay: 200ms;
  }
`;
