import { useState } from 'react';
import './Nav.scss';
import { FaUserCircle } from 'react-icons/fa';

const Nav: React.FC = () => {

    const [menuState, setMenuState] = useState('hide-menu');
    const [svgState, setsvgState] = useState('svg-hamburger')

    const handleHamburgerMenuClick = () => {
        setMenuState(menuState === 'hide-menu' ? 'show-menu' : 'hide-menu');
        setsvgState(svgState === 'svg-hamburger' ? 'svg-x' : 'svg-hamburger');
    }

    return (
      <header className="header">
        <FaUserCircle size="2rem" />
        {/* TODO: Turn this into a hamburger menu SVG. On Click change state accordingly. */}
          <svg
            className={svgState}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 10"
            stroke-width=".6"
            fill="rgba(0,0,0,0)"
            stroke-linecap="round"
            onClick={() => {
                handleHamburgerMenuClick();
            }}
          >
            <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
              <animate
                dur="0.2s"
                attributeName="d"
                values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7"
                fill="freeze"
                begin="start.begin"
              />
              <animate
                dur="0.2s"
                attributeName="d"
                values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7"
                fill="freeze"
                begin="reverse.begin"
              />
            </path>
            <rect width="10" height="10" stroke="none">
              <animate
                dur="2s"
                id="reverse"
                attributeName="width"
                begin="click"
              />
            </rect>
            <rect width="10" height="10" stroke="none">
              <animate
                dur="0.001s"
                id="start"
                attributeName="width"
                values="10;0"
                fill="freeze"
                begin="click"
              />
              <animate
                dur="0.001s"
                attributeName="width"
                values="0;10"
                fill="freeze"
                begin="reverse.begin"
              />
            </rect>
          </svg>
        {/* <HiMenuAlt1
          size="2rem"
          onClick={() => {
            setMenuState("show-menu");
          }}
        /> */}
        <nav
          id={menuState}
          className="nav-menu"
          onClick={() => {
            setMenuState("hide-menu");
          }}
        >
          <ul className="nav-menu__list">
            <li
              className="nav-menu__item"
              onClick={() => {
                console.log("test");
              }}
            >
              Home
            </li>
            <li
              className="nav-menu__item"
              onClick={() => {
                console.log("test");
              }}
            >
              Add Album
            </li>
            <li
              className="nav-menu__item"
              onClick={() => {
                console.log("test");
              }}
            >
              Album List
            </li>
          </ul>
        </nav>
      </header>
    );
};

export default Nav;