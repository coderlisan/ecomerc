import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import Checkout from './pages/Checkout';
import ShoppingCart from './pages/ShoppingCart';
import Accounts from './pages/Accounts';
import ComparePage from './pages/Compare';
import MyShopPage from './pages/Shop';
import WishlistPage from './pages/WishlistPage';
import AboutPage from './pages/AboutPage';
import Blank404 from './pages/Blank404';
import Contact from './pages/Contact';

const Router = () => {
	return (
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route path="/single-product" element={<SingleProduct />} />
			<Route path="/checkout" element={<Checkout />} />
			<Route path="/cart" element={<ShoppingCart />} />
			<Route path="/account" element={<Accounts />} />
			<Route path="/compare" element={<ComparePage />} />
			<Route path="/shop" element={<MyShopPage />} />
			<Route path="/wishlist" element={<WishlistPage />} />
			<Route path="/404" element={<Blank404 />} />
			<Route path="/about" element={<AboutPage />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
	);
};

export default Router;
