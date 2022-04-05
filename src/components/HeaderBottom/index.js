import React, { PureComponent } from 'react';

import HomeList from '../../data/home_list.json';
import Shop_list from '../../data/Shop_list.json';
import SingleProductStyle from '../../data/SingleProductStyle.json';
import SingleProducts from '../../data/SingleProducts.json';
import BlogGridView from '../../data/BlogGridView.json';

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
                                            <li className="dropdown-holder"><a href="index.html">Home</a>
                                                <ul className="hb-dropdown">
                                                    { HomeList ? HomeList.map(item => item.active ? <li className='active'><a href="{item.link}">{item.name}</a></li> : <li><a href="{item.link}">{item.name}</a></li>) : '' }                                                   
                                                </ul>
                                            </li>
                                            <li className="megamenu-holder"><a href="shop-left-sidebar.html">Shop</a>
                                                <ul className="megamenu hb-megamenu">
                                                    <li><a href="shop-left-sidebar.html">Shop Page Layout</a>
                                                        <ul>{ Shop_list ? Shop_list.map(item => <li><a href="{item.link}">{item.name}</a></li>) : '' }</ul>
                                                    </li>
                                                    <li><a href="single-product-gallery-left.html">Single Product Style</a>
                                                        <ul>{ SingleProductStyle ? SingleProductStyle.map(item => <li><a href="{item.link}">{item.name}</a></li>) : '' }</ul>
                                                    </li>
                                                    <li><a href="single-product.html">Single Products</a>
                                                        <ul>{ SingleProducts ? SingleProducts.map(item => <li><a href="{item.link}">{item.name}</a></li>) : '' }</ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-holder"><a href="blog-left-sidebar.html">Blog</a>
                                                <ul className="hb-dropdown">
                                                    <li className="sub-dropdown-holder"><a href="blog-left-sidebar.html">Blog Grid View</a>
                                                        <ul className="hb-dropdown hb-sub-dropdown">{ BlogGridView ? BlogGridView.map(item => <li><a href="{item.link}">{item.name}</a></li>) : '' }</ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="megamenu-static-holder"><a href="index.html">Pages</a>
                                                <ul className="megamenu hb-megamenu">
                                                    <li><a href="blog-left-sidebar.html">Blog Layouts</a>
                                                        <ul>{ Shop_list ? Shop_list.map(item => <li><a href="{item.link}">{item.name}</a></li>) : '' }</ul>
                                                    </li>
                                                    <li><a href="blog-details-left-sidebar.html">Blog Details Pages</a>
                                                        <ul>{ Shop_list ? Shop_list.map(item => <li><a href="{item.link}">{item.name}</a></li>) : '' }</ul>
                                                    </li>
                                                    <li><a href="index.html">Other Pages</a>
                                                        <ul>{ Shop_list ? Shop_list.map(item => <li><a href="{item.link}">{item.name}</a></li>) : '' }</ul>
                                                    </li>
                                                    <li><a href="index.html">Other Pages 2</a>
                                                        <ul>{ Shop_list ? Shop_list.map(item => <li><a href="{item.link}">{item.name}</a></li>) : '' }</ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="about-us.html">About Us</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                            <li><a href="shop-left-sidebar.html">Smartwatch</a></li>
                                            <li><a href="shop-left-sidebar.html">Accessories</a></li>
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