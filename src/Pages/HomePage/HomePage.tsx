import React from 'react';
import './HomePage.scss';
import '../../styles/_global.scss';
import Header from '../../Components/Header/Header';
import LineAnimation from '../../Components/LineAnimation/LineAnimation';
import AboutMe from '../../Components/AboutMe/AboutMe';
import Footer from '../../Components/Footer/Footer';
import DesktopDescription from '../../Components/DesktopDescription/DesktopDescription';

const Home: React.FC = () => {
    return (
      <div>
        <Header />
        <LineAnimation />
        <main className="main-container">
          <AboutMe />
          <DesktopDescription />
        </main>
        <Footer />
      </div>
    );
};

export default Home;