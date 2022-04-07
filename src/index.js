import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import Checkout from './pages/Checkout';
import ShoppingCart from './pages/ShoppingCart';
import WishlistPage from './pages/WishlistPage';

ReactDOM.render(
  <React.StrictMode>
    {/* <Home /> */}
    {/* <Checkout /> */}
    {/* <ShoppingCart /> */}
    <WishlistPage />
    {/* <SingleProduct /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
