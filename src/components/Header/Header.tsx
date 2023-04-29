import React from 'react';
import styled from 'styled-components';
import { ColorPalette } from '@/styles/constants';
import LinkedInWhite from '../Icons/LinkedInWhite';
import GithubWhite from '../Icons/GithubWhite';
import TwitterWhite from '../Icons/TwitterWhite';
import Link from 'next/link';

export default function Header() {
  return (
    <StyledHeaderWrapper>
      <HeaderBuffer />
      <HeaderContainer>
        <StyledHeader>
          <NavbarWrapper>
            <LogoLink href="/">Domagoj Paulić</LogoLink>
            <StyledNavbar>
              <List>
                <ListItem>
                  <NavLink href="">Latest</NavLink>
                </ListItem>
                <ListItem>
                  <NavLink href="/posts">Posts</NavLink>
                </ListItem>
                <ListItem>
                  <NavLink href="/about">About</NavLink>
                </ListItem>
                <ListItem>
                  <NavLink href="/contact">Contact</NavLink>
                </ListItem>
                <ListItem>
                  <NavLink href="/mdx">MDX</NavLink>
                </ListItem>
              </List>
            </StyledNavbar>
          </NavbarWrapper>
          <ContactWrapper>
            <List>
              <ListItem>
                <NavLink href="">
                  <LinkedInWhite />
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink href="">
                  <GithubWhite />
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink href="">
                  <TwitterWhite />
                </NavLink>
              </ListItem>
            </List>
          </ContactWrapper>
        </StyledHeader>
      </HeaderContainer>
    </StyledHeaderWrapper>
  );
}

const StyledHeaderWrapper = styled.div`
  max-width: 100%;
  background-color: ${ColorPalette.darkBlue};
  position: sticky;
  top: -28px;
  z-index: 2;
`;

const HeaderBuffer = styled.div`
  min-height: 48px;
`;
const HeaderContainer = styled.div`
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 32px;
`;

const StyledHeader = styled.header`
  display: flex;
  height: 3.75rem;
`;

const NavbarWrapper = styled.div`
  display: flex;
  flex: 1 1 0%;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-size: 24px;
  font-weight: 800;
  margin-right: 32px;
  line-height: 1.6;
  color: inherit;
`;

const StyledNavbar = styled.nav``;

const List = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 10px;
  cursor: pointer;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const ContactWrapper = styled.div``;
