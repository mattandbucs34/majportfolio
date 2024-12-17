import React from 'react';
import {NavLink} from 'react-router';

type NavProjectMenuType = {
  setIsNavShown(boolean: boolean): void
}

const NavProjectMenu = (props: NavProjectMenuType) => {
  const {setIsNavShown} = props;

  return (
    <React.Fragment>
      <ul className="list-no-bullets">
        <li>
          <NavLink to="/node_express" onClick={() => setIsNavShown(false)}>Node with Express</NavLink>
        </li>
        <li>
          <NavLink to="/react_projects" onClick={() => setIsNavShown(false)}>React</NavLink>
        </li>
        <li>
          <NavLink to="/php_projects" onClick={() => setIsNavShown(false)}>PHP</NavLink>
        </li>
        <li>
          <NavLink to="/other_projects" onClick={() => setIsNavShown(false)}>Other</NavLink>
        </li>
      </ul>
    </React.Fragment>
  )
}

export default NavProjectMenu;