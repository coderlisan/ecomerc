import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import Checkout from './pages/Checkout';
import ShoppingCart from './pages/ShoppingCart';
import Accounts from './pages/Accounts';
import ComparePage from './pages/Compare';
import MyShopPage from './pages/Shop';
import WishlistPage from './pages/WishlistPage';

ReactDOM.render(
  <React.StrictMode>
    {/* <Home /> */}
    {/* <Checkout /> */}
    {/* <ShoppingCart /> */}
    {/* <WishlistPage /> */}
    {/* <ComparePage /> */}
    {/* <MyShopPage /> */}
    {/* <Accounts /> */}
    <MyShopPage />
    {/* <SingleProduct /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
