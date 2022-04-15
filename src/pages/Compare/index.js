import React from 'react';
import HeaderTop from '../../components/HeaderTop';
import HeaderMid from '../../components/HeaderMid';
import HeaderBottom from '../../components/HeaderBottom';
import Breadcrumb from '../../components/Breadcrumb';
import Compare from '../../components/Compare';
import Footer from '../../components/Footer';

const ComparePage = () => {
    return (
        <div className="body-wrapper">
          <header>
            <HeaderTop />
            <HeaderMid />
            <HeaderBottom />
          </header>
          <Breadcrumb />
          {/*Coding Start*/}
          <Compare />
          {/*Coding Ends*/}
          <Footer />
        </div>
    );
}
 
export default ComparePage;