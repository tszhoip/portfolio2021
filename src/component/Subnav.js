import React from 'react';
import { Link } from 'react-router-dom';

function Subnav() {
  const subnavstyle = {
    color: 'red'
  };
  return (
    <Subnav className="work-list-style">
      <ul>
        <Link style={subnavstyle} to="/"><li>NONAME.LA</li></Link>
        <Link style={subnavstyle} to="/work"><li>Work</li></Link>
        <Link style={subnavstyle} to="/shop"><li>Shop</li></Link>
      </ul>
    </Subnav>
  );
}

export default Subnav;
