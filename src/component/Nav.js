import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Menu = styled.nav`
    display: flex; 
    justify-content: space-between;
    border-bottom: 1px solid #f5f5f5;
    color: black;
    flex-wrap: wrap;
    flex-direction: row;
    margin: auto;
    @media only screen and (min-width : 480px) {
    width: 100%;
    }
    @media only screen and (min-width : 768px) {
    width: 100%;
    }
    @media only screen and (min-width : 1000px) {
    width: 100%;
    }
    @media only screen and (min-width : 1600px) {
    max-width: 1600px;
    }
`
const MenuLine = styled.section`
    display: flex;
    align-items: center;
`
const MenuItem = styled(Link)`
    padding: 16px;
    color: black;
  //  &:hover{
  //    color: black;
  //     text-decoration: underline;
  //   }
  //   &:active{
  //     text-decoration: underline;
  //   }
    &:hover span::before {
      content: " ";
      width: 16px;
      height: 16px;
      background-color:black;
      border-radius: 50%;
      display: inline-block;
      margin-bottom: -2px;
      margin-right: 8px;
    }
`

const Nav = (props) => {
  return (
    <Menu>
      <MenuItem to="/"><span />NONAME.LA</MenuItem>
      <MenuLine>
        <MenuItem to="/work"><span />Work</MenuItem>
        <MenuItem to="/play"><span />Play</MenuItem>
        <MenuItem to="/shop"><span />Shop</MenuItem>
      </MenuLine>
    </Menu>
  )
}

export default Nav;
