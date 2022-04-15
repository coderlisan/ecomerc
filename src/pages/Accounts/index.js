import React from 'react';
import HeaderTop from '../../components/HeaderTop';
import HeaderMid from '../../components/HeaderMid';
import HeaderBottom from '../../components/HeaderBottom';
import Breadcrumb from '../../components/Breadcrumb';
import MyAccounts from '../../components/MyAccounts';
import Footer from '../../components/Footer';

const Accounts = () => {
    return (
        <div className="body-wrapper">
          <header>
            <HeaderTop />
            <HeaderMid />
            <HeaderBottom />
          </header>
          <Breadcrumb />
          {/*Coding Start*/}
          <MyAccounts />
          {/*Coding Ends*/}
          <Footer />
        </div>
    );
}
 
export default Accounts;