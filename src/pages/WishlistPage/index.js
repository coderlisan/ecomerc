import React from 'react';
import HeaderTop from '../../components/HeaderTop';
import HeaderMid from '../../components/HeaderMid';
import HeaderBottom from '../../components/HeaderBottom';
import Breadcrumb from '../../components/Breadcrumb';
import WishlistPage from '../../components/WishlistPage';
import Footer from '../../components/Footer';

const Checkout = () => {
    return (
        <div className="body-wrapper">
          <header>
            <HeaderTop />
            <HeaderMid />
            <HeaderBottom />
          </header>
          <Breadcrumb />
          {/*Coding Start*/}
          <WishlistPage />
          {/*Coding Ends*/}
          <Footer />
        </div>
    );
}
 
export default Checkout;