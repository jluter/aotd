import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { BiAlbum } from 'react-icons/bi';


const Header: React.FC = (props) => {
  
    const windowWidth: number = window.innerWidth;


  return (
    <header className="header">
      <div>
        <h1 className="title">Hello, I'm Jakob</h1>
        <div className='subtitle-container'>
        <h3 className="subtitle">
          A Full-Stack Developer making {(windowWidth > 440) ? <br /> : null} responsive websites.
        </h3>
        <nav className="navbar">
          <ul className="navbar__list">
          <li className="navbar__item">
              <Link
                to={`/aotd`}
              >
                <BiAlbum size={(windowWidth > 767) ? '2.5rem' : '2rem'} />
              </Link>
            </li>
            <li className="navbar__item">
              <a
                rel="noreferrer noopener"
                target="_blank"
                href="https://www.linkedin.com/in/jakob-luter/"
              >
                <SiLinkedin size={(windowWidth > 767) ? '2.5rem' : '2rem'} />
              </a>
            </li>
            <li className="navbar__item">
              <a
                rel="noreferrer noopener"
                target="_blank"
                href="https://github.com/jluter"
              >
                <SiGithub size={(windowWidth > 767) ? '2.5rem' : '2rem'} />
              </a>
            </li>
          </ul>
        </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;