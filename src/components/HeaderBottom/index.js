import React from 'react';
import {Link} from 'react-router-dom';

import homeList from '../../data/home_list.json';
import shopList from '../../data/Shop_list.json';
import sinProdStl from '../../data/SingleProductStyle.json';
import singleProds from '../../data/SingleProducts.json';
import blogGridView from '../../data/BlogGridView.json';
import blogLayouts from '../../data/BlogLayouts.json';
import blogDetails from '../../data/BlogDetails.json';
import otherPages from '../../data/OtherPages.json';
import otherPages2 from '../../data/OtherPages2.json';

const HeaderBottom = () => {
    return (
        <React.Fragment>
                <div className="header-bottom header-sticky d-none d-lg-block d-xl-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="hb-menu">
                                    <nav>
                                        <ul>
                                            <li className="dropdown-holder">
                                                {/* <a href="#index.html">Home</a> */}                                        
                                                    <Link to="/">Home</Link>
                                                <ul className="hb-dropdown">
                                                    { homeList ? homeList.map((item) => item.active ? <li key={item.id} className='active'><a href="{item.link}">{item.name}</a></li> : <li key={item.id}><a href="{item.link}">{item.name}</a></li>) : '' }                                                   
                                                </ul>
                                            </li>
                                            <li className="megamenu-holder"><a href="shop-left-sidebar.html">Shop</a>
                                                <ul className="megamenu hb-megamenu">
                                                    <li>                                                                                                               
                                                        <Link to="/shop">Shop Page</Link>                                                        
                                                        <ul>{ shopList ? shopList.map(item => <li key={item.id}><a href="{item.link}">{item.name}</a></li>) : '' }</ul>
                                                    </li>
                                                    <li>
                                                        <a href="#single-product-gallery-left.html">Single Product Style</a>
                                                        <ul>{ sinProdStl ? sinProdStl.map(item => <li key={item.id}><a href="{item.link}">{item.name}</a></li>) : '' }</ul>
                                                    </li>
                                                    <li>
                                                        <a href="#single-product.html">Single Products</a>
                                                        <ul>{ singleProds ? singleProds.map(item => <li key={item.id}><a href="{item.link}">{item.name}</a></li>) : '' }</ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-holder"><a href="#blog-left-sidebar.html">Blog</a>
                                                <ul className="hb-dropdown">
                                                    <li className="sub-dropdown-holder"><a href="#blog-left-sidebar.html">Blog Grid View</a>
                                                        <ul className="hb-dropdown hb-sub-dropdown">{ blogGridView ? blogGridView.map(item => <li key={item.id}><a href="{item.link}">{item.name}</a></li>) : '' }</ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="megamenu-static-holder"><a href="index.html">Pages</a>
                                                <ul className="megamenu hb-megamenu">
                                                    <li><a href="#blog-left-sidebar.html">Blog Layouts</a>
                                                        <ul>{ blogLayouts ? blogLayouts.map(item => <li key={item.id}><a href="{item.link}">{item.name}</a></li>) : '' }</ul>
                                                    </li>
                                                    <li><a href="#blog-details-left-sidebar.html">Blog Details</a>
                                                        <ul>{ blogDetails ? blogDetails.map(item => <li key={item.id}><a href="{item.link}">{item.name}</a></li>) : '' }</ul>
                                                    </li>
                                                    <li><a href="#index.html">Other Pages</a>
                                                        <ul>{ otherPages ? otherPages.map(item => <li key={item.id}><a href="{item.link}">{item.name}</a></li>) : '' }</ul>
                                                    </li>
                                                    <li><a href="#index.html">Other Pages 2</a>
                                                        <ul>{ otherPages2 ? otherPages2.map(item => <li key={item.id}><a href="{item.link}">{item.name}</a></li>) : '' }</ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="#about-us.html">About Us</a></li>
                                            <li><a href="#contact.html">Contact</a></li>
                                            <li><a href="#shop-left-sidebar.html">Smartwatch</a></li>
                                            <li><a href="#shop-left-sidebar.html">Accessories</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    );
}
 
export default HeaderBottom;