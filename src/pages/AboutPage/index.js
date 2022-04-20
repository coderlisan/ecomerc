import React from 'react';
import HeaderTop from '../../components/HeaderTop';
import HeaderMid from '../../components/HeaderMid';
import HeaderBottom from '../../components/HeaderBottom';
import Breadcrumb from '../../components/Breadcrumb';
import About from '../../components/About';
import Footer from '../../components/Footer';

const AboutPage = () => {
    return (
        <div className="body-wrapper">
          <header>
            <HeaderTop />
            <HeaderMid />
            <HeaderBottom />
          </header>
          <Breadcrumb />
          {/*Coding Start*/}
          <About />
          {/*Coding Ends*/}
          <Footer />
        </div>
    );
}

export default AboutPage;