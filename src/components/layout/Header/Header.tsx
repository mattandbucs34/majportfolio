import './Header.css';
import React, { useState } from 'react';

import NavMenu from '../NavMenu';

type HeaderType = {
  screenWidth: number;
};

const Header = (props: HeaderType) => {
  const { screenWidth } = props;
  const [isMenuShown, setIsMenuShown]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState<boolean>(false);
  const [isNavShown, setIsNavShown]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState<boolean>(false);
  const minWidth: number = 375;

  function clickHamburger() {
    setIsMenuShown(false);
    setIsNavShown(!isNavShown);
  }
  return (
    <React.Fragment>
      <header>
        <div className="folio-logo">
          <h4>MAJ Portfolio</h4>
        </div>
        <NavMenu />
      </header>
    </React.Fragment>
  );
};

export default Header;