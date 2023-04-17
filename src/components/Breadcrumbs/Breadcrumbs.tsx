import React, { ReactNode } from 'react';
import styled from 'styled-components';

type BreadcrumbsProps = {
  children: ReactNode;
};

export function Breadcrumbs({ children }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <BreadcrumbList>{children}</BreadcrumbList>
    </nav>
  );
}

type CrumbProps = {
  href: string;
  children: ReactNode;
  isCurrentPage?: boolean;
};

export function Crumb({ href, isCurrentPage, children }: CrumbProps) {
  return (
    <CrumbWrapper>
      <CrumbLink href={href} aria-current={isCurrentPage ? 'page' : undefined}>
        {children}
      </CrumbLink>
    </CrumbWrapper>
  );
}

const BreadcrumbList = styled.ol`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const CrumbWrapper = styled.li`
  display: inline;
  --spacing: 12px;

  &:not(:first-of-type) {
    margin-left: var(--spacing);

    &:before {
      content: '';
      display: inline-block;
      border-right: 1px solid white;
      transform: rotate(15deg);
      opacity: 0.25;
      margin-right: var(--spacing);
      height: 0.8em;
    }
  }
`;

const CrumbLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: revert;
  }
`;
