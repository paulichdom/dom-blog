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
};

export function Crumb({ href, children }: CrumbProps) {
  return (
    <CrumbWrapper>
      <CrumbLink href={href}>{children}</CrumbLink>
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
  --spacing: 8px;

  &:not(:first-of-type) {
    margin-left: var(--spacing);

    &:before {
      content: '/';
      opacity: 0.25;
      margin-right: var(--spacing);
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
