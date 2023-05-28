import React from 'react';
import styled from 'styled-components';
import LinkedInWhite from '../Icons/LinkedInWhite';
import GithubWhite from '../Icons/GithubWhite';
import TwitterWhite from '../Icons/TwitterWhite';
import Link from 'next/link';
import { ColorPalette } from '@/styles/constants';

export default function Header() {
  return (
    <>
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
        <Curtain />
      </StyledHeaderWrapper>
    </>
  );
}

const StyledHeaderWrapper = styled.div`
  max-width: 100%;
  background: linear-gradient(
    0deg,
    #282f3e,
    #262c3a,
    #232937,
    #212733,
    #1f242f,
    #1c212c,
    #1a1f28,
    #181c25
  );
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

const Curtain = styled.div`
  position: absolute;
  right: 0;
  bottom: -31px;
  width: 100%;
  height: 32px;

  &:before {
    display: block;
    width: 100%;
    height: 32px;
    background: linear-gradient(
      ${ColorPalette.raisinBlack},
      rgba(0, 0, 0, 0) 90%
    );
    content: '';
  }
`;
