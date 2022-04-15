import React from 'react';
import HeaderTop from '../../components/HeaderTop';
import HeaderMid from '../../components/HeaderMid';
import HeaderBottom from '../../components/HeaderBottom';
import Breadcrumb from '../../components/Breadcrumb';
import ShopPage from '../../components/ShopPage';
import Footer from '../../components/Footer';

const MyShopPage = () => {
    return (
        <div className="body-wrapper">
          <header>
            <HeaderTop />
            <HeaderMid />
            <HeaderBottom />
          </header>
          <Breadcrumb />
          {/*Coding Start*/}
          <ShopPage />
          {/*Coding Ends*/}
          <Footer />
        </div>
    );
}
 
export default MyShopPage;