import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const navstyle = {
    color: 'black',
    padding: '20px'
  };

  return (
    <nav className="list-style">
      <ul>
        <Link style={navstyle} to="/"><li>NONAME.LA</li></Link>
        <Link style={navstyle} to="/play"><li>Play</li></Link>
        <Link style={navstyle} to="/shop"><li>Shop</li></Link>
      </ul>
    </nav>
  );
}

export default Nav;
