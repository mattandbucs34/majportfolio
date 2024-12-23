import { NavLink } from 'react-router';
import NavProjectMenu from './NavProjectMenu';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavMenu = () => {

    return (
        <div className={'flex items-center ml-8'}>
            <button
                className={'sm:hidden absolute right-0 z-10 rounded-none bg-transparent border-none hover:bg-emerald-950 focus:outline-none peer/hamburger'}
            >
                <FontAwesomeIcon icon={faBars} />
            </button>
            <nav className={`
                    max-h-0
                    overflow-hidden
                    font-medium
                    divide-y
                    bg-green-800
                    absolute
                    right-0
                    top-full
                    shadow-md 
                    shadow-emerald-950
                    md:items-center
                    md:h-12
                    sm:max-h-none
                    sm:flex
                    sm:overflow-visible
                    sm:divide-y-0
                    sm:top-auto
                    sm:shadow-none
                    peer-focus/hamburger:max-h-32
                    peer-focus/hamburger:overflow-visible
                    `
                }
            >
                <NavLink
                    to={'/'}
                    className={'text-white h-16 active:bg-green-700 active:text-black hover:bg-green-700 hover:text-black w-36 sm:w-24 flex items-center justify-center sm:h-full'}
                // onClick={() => setIsNavShown(false)}
                >
                    Home
                </NavLink>
                <div
                    className={`group
                        flex
                        w-36
                        text-white
                        items-center
                        justify-center
                        relative
                        cursor-pointer
                        active:bg-green-700
                        active:text-black
                        hover:bg-green-700
                        hover:text-black
                        has-[ul:hover]:bg-inherit
                        has-[ul:hover]:text-white
                        h-16
                        sm:w-24
                        sm:h-full
                        sm:divide-y-0`
                    }
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
