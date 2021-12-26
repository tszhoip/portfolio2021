import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// function Nav() {
//   const navstyle = {
//     color: 'black',
//     padding: '16px'
//   };
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
   &:hover{
      text-decoration: underline;
    }
    &:active{
      text-decoration: underline;
    }
`

const Nav = (props) => {
  return (
    <Menu>
        <MenuItem to="/">NONAME.LA</MenuItem>
      <MenuLine>
        <MenuItem to="/">Work</MenuItem>,
        <MenuItem to="/play">Play</MenuItem>,
        <MenuItem to="/shop">Shop</MenuItem>
      </MenuLine>
    </Menu>
  )
}

export default Nav;
