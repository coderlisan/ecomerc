import React from 'react';
import HeaderTop from '../../components/HeaderTop';
import HeaderMid from '../../components/HeaderMid';
import HeaderBottom from '../../components/HeaderBottom';
import Breadcrumb from '../../components/Breadcrumb';
{/*Subject component start*/}
import Blank404 from '../../components/Blank404';
{/*Subject component ends*/}
import Footer from '../../components/Footer';

const BlankPage = () => {
    return (
        <div className="body-wrapper">
          <header>
            <HeaderTop />
            <HeaderMid />
            <HeaderBottom />
          </header>
          <Breadcrumb />
          {/*Coding Start*/}
          <Blank404 />
          {/*Coding Ends*/}
          <Footer />
        </div>
    );
}
 
export default BlankPage;