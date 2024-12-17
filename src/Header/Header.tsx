import './Header.css'
import React, {useState} from 'react';
import {NavLink} from 'react-router';
import NavProjectMenu from './Nav/NavProjectMenu';
import { faCaretRight, faCaretDown, faBars, faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type HeaderType = {
  screenWidth: number
}

const Header = (props: HeaderType) => {
  const {screenWidth} = props;
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
        <div className="nav-container">
          <div className="hamburger" onClick={() => clickHamburger()}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <nav className={`header-nav${isNavShown ? " show" : ""}`}>
            <div className="nav-menu-item">
              <NavLink to="/" onClick={() => setIsNavShown(false)}>Home</NavLink>
            </div>
            <div className="nav-menu-item project-menu-nav" onClick={() => setIsMenuShown(!isMenuShown)}>
              <p>
                {screenWidth <= minWidth ? isMenuShown ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretLeft} /> : <></>}
                Projects
                {screenWidth > minWidth ? isMenuShown ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretRight} /> : <></> }
              </p>
              
              {isMenuShown ? <NavProjectMenu setIsNavShown={setIsNavShown} /> : <></>}
            </div>
            {/* <div>
              <NavLink to="/about">About Me</NavLink>
            </div> */}
          </nav>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header;