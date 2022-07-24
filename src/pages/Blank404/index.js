import React from 'react';
import HeaderTop from '../../components/HeaderTop';
import HeaderMid from '../../components/HeaderMid';
import HeaderBottom from '../../components/HeaderBottom';
import Breadcrumb from '../../components/Breadcrumb';
import Blank404 from '../../components/Blank404';
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
};

export default BlankPage;
