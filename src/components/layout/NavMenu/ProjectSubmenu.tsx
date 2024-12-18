import React from 'react';
import { NavLink } from 'react-router';

// type NavProjectMenuType = {
//   setIsNavShown(boolean: boolean): void
// }

const NavProjectMenu = () => {
  // const {setIsNavShown} = props;

  return (
    <React.Fragment>
      <ul className={'flex flex-col absolute top-full left-0 list-none w-28 bg-green-700 shadow-md shadow-emerald-950 max-h-0 overflow-hidden group-hover:max-h-64 transition-max-height'}>
        <li className={'flex h-16 border-solid border-y border-y-green-950'}>
          <NavLink
            to="/node_express"
            className={'flex items-center h-full text-white hover:text-black hover:bg-green-400 visited:text-white p-2 w-full'}
          // onClick={() => setIsNavShown(false)}
          >
            Node with Express
          </NavLink>
        </li>
        <li className={'flex h-16 border-solid border-b border-b-green-950'}>
          <NavLink
            to="/react_projects"
            className={'flex items-center h-full text-white hover:text-black hover:bg-green-400 visited:text-white p-2 w-full'}
          // onClick={() => setIsNavShown(false)}
          >
            React
          </NavLink>
        </li>
        <li className={'flex h-16 border-solid border-b border-b-green-950'}>
          <NavLink
            to="/php_projects"
            className={'flex items-center h-full text-white hover:text-black hover:bg-green-400 visited:text-white p-2 w-full'}
          // onClick={() => setIsNavShown(false)}
          >
            PHP
          </NavLink>
        </li>
        <li className={'flex h-16'}>
          <NavLink
            to="/other_projects"
            className={'flex items-center h-full text-white hover:text-black hover:bg-green-400 visited:text-white p-2 w-full'}
          // onClick={() => setIsNavShown(false)}
          >
            Other
          </NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default NavProjectMenu;