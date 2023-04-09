import React from 'react';
import styled from 'styled-components';
import { ColorPalette } from '@/styles/constants';
import LinkedInWhite from '../Icons/LinkedInWhite';
import GithubWhite from '../Icons/GithubWhite';
import TwitterWhite from '../Icons/TwitterWhite';

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <HeaderBuffer />
      <HeaderContainer>
        <StyledHeader>
          <NavbarWrapper>
            <LogoLink>Domagoj Paulić</LogoLink>
            <StyledNavbar>
              <List>
                <ListItem>
                  <LinkContainer>Latest</LinkContainer>
                </ListItem>
                <ListItem>
                  <LinkContainer>Posts</LinkContainer>
                </ListItem>
                <ListItem>
                  <LinkContainer>About</LinkContainer>
                </ListItem>
                <ListItem>
                  <LinkContainer>Contact</LinkContainer>
                </ListItem>
              </List>
            </StyledNavbar>
          </NavbarWrapper>
          <ContactWrapper>
            <List>
              <ListItem>
                <LinkContainer>
                  <LinkedInWhite />
                </LinkContainer>
              </ListItem>
              <ListItem>
                <LinkContainer>
                  <GithubWhite />
                </LinkContainer>
              </ListItem>
              <ListItem>
                <LinkContainer>
                  <TwitterWhite />
                </LinkContainer>
              </ListItem>
            </List>
          </ContactWrapper>
        </StyledHeader>
      </HeaderContainer>
    </StyledHeaderWrapper>
  );
};

const StyledHeaderWrapper = styled.div`
  max-width: 100%;
  background-color: ${ColorPalette.darkBlue};
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

const LogoLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-size: 24px;
  font-weight: 800;
  margin-right: 32px;
  line-height: 1.6;
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

const LinkContainer = styled.div``;

const ContactWrapper = styled.div``;

export default Header;
