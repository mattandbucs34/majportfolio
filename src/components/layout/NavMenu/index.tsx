import React from 'react';
import { NavLink } from 'react-router';
import NavProjectMenu from '../NavMenu/ProjectSubmenu';
import { faCaretRight, faCaretDown, faBars, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavMenu = () => {
    return (
        <div className={'flex items-center ml-8'}>
            <div
                className={'sm:hidden block absolute right-0 mr-4'}
            // onClick={() => clickHamburger()}
            >
                <FontAwesomeIcon icon={faBars} />
            </div>
            <nav className={`md:flex md:items-center font-medium md:h-12`}>
                <NavLink
                    to={'/'}
                    className={'text-white active:bg-green-700 active:text-black hover:bg-green-700 hover:text-black w-24 flex items-center justify-center h-full'}
                // onClick={() => setIsNavShown(false)}
                >
                    Home
                </NavLink>
                <div
                    className={'group text-white active:bg-green-700 active:text-black hover:bg-green-700 hover:text-black w-24 flex items-center justify-center h-full relative cursor-pointer has-[ul:hover]:bg-inherit has-[ul:hover]:text-white'}
                // onClick={() => setIsMenuShown(!isMenuShown)}
                >
                    <span>
                        {/* {screenWidth <= minWidth ? isMenuShown ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretLeft} /> : <></>} */}
                        Projects
                        {/* {screenWidth > minWidth ? isMenuShown ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretRight} /> : <></>} */}
                    </span>

                    {/* {isMenuShown ? <NavProjectMenu setIsNavShown={setIsNavShown} /> : <></>} */}
                    <NavProjectMenu />
                </div>
            </nav>
        </div>
    );
};

export default NavMenu;
