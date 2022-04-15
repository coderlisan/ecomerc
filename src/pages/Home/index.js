import React from 'react';
import HeaderTop from '../../components/HeaderTop';
import HeaderMid from '../../components/HeaderMid';
import HeaderBottom from '../../components/HeaderBottom';
import BannerSlider from '../../components/BannerSlider';
import ProductArea from '../../components/ProductArea';
import StaticBanner from '../../components/StaticBanner';
import LaptopProduct from '../../components/LaptopProduct';
import TVnAudion from '../../components/TVnAudion';
import StaticHome from '../../components/StaticHome';
import TrendingProduct from '../../components/TrendingProduct';
import TrProductsArea from '../../components/TrProductsArea';
import Footer from '../../components/Footer';

const Home = () => {
    return (
        <div className="body-wrapper">
          <header>
            <HeaderTop />
            <HeaderMid />
            <HeaderBottom />
          </header>
          <BannerSlider />
          <ProductArea />
          <StaticBanner />
          <LaptopProduct />
          <TVnAudion />
          <StaticHome />
          <TrendingProduct />
          <TrProductsArea />
          <Footer />
        </div>
      );
}
 
export default Home;
