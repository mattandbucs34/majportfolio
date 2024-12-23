import './Header.css';
import React from 'react';

import NavMenu from '../NavMenu';

const Header = () => {
  return (
    <React.Fragment>
      <header className={'w-full bg-green-800 sm:h-24 min-h-11'}>
        <div className="folio-logo">
          <h4>MAJ Portfolio</h4>
        </div>
        <NavMenu />
      </header>
    </React.Fragment>
  );
};

export default Header;