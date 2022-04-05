import React from 'react';
import HeaderTop from '../../components/HeaderTop';
import HeaderMid from '../../components/HeaderMid';
import HeaderBottom from '../../components/HeaderBottom';
import Breadcrumb from '../../components/Breadcrumb';
import ContentWrap from '../../components/ContentWrap';
import SingleProdArea from '../../components/SingleProdArea';
import LaptopArea from '../../components/LaptopArea';
import Footer from '../../components/Footer';

const SingleProduct = () => {
    return (
        <div className="body-wrapper">
          <header>
            <HeaderTop />
            <HeaderMid />
            <HeaderBottom />
          </header>
          <Breadcrumb />
          <ContentWrap />
          <SingleProdArea />
          <LaptopArea />
          <Footer />
        </div>
    );
}
 
export default SingleProduct;