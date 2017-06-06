import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const centering = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Nav = styled.nav`
  width: 100%;
  height: 3em;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  background-color: #00acee;
  padding: 0 1em;
  ${centering}
  justify-content: space-between;
`;

const FavouriteLinks = styled.section`
  ${centering}
  justify-self: flex-end;
`;
const FavLink = styled(Link)`
  list-style-type: none;
`;

const Logo = styled.h2`
  color: white;
  margin: 0;
  padding: 0;
`;

class NavBar extends Component {
  render() {
    return (
      <Nav>
        <Logo>Super Procrastinator</Logo>
        <FavouriteLinks>
          <FavLink to="/">Javascript</FavLink>
          <FavLink to="/">Vim</FavLink>
          <FavLink to="/saved">Saved</FavLink>
        </FavouriteLinks>
      </Nav>
    );
  }
}

export default NavBar;
