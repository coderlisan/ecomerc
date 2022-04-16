import React from 'react';
import {Link} from 'react-router-dom';

import Products from '../../data/Products.json';
import Brand from '../../data/Brand.json';
import Categories from '../../data/Categories.json';
import Color from '../../data/Color.json';
import Dimension from '../../data/Dimension.json';
import Size from '../../data/Size.json';

const ShopPage = () => {
  return (
    <div className="content-wraper pt-60 pb-60">
        <div className="container">
            <div className="row">
                <div className="col-lg-9 order-1 order-lg-2">
                    <div className="single-banner shop-page-banner">
                        <a href="#">
                            <img src="images/bg-banner/2.jpg" alt="Li's Static Banner"/>
                        </a>
                    </div>
                    <div className="shop-top-bar mt-30">
                        <div className="shop-bar-inner">
                            <div className="product-view-mode">
                                <ul className="nav shop-item-filter-list" role="tablist">
                                    <li role="presentation"><a data-toggle="tab" role="tab" aria-controls="grid-view" href="#grid-view"><i className="fa fa-th"></i></a></li>
                                    <li className="active" role="presentation"><a aria-selected="true" className="active show" data-toggle="tab" role="tab" aria-controls="list-view" href="#list-view"><i className="fa fa-th-list"></i></a></li>
                                </ul>
                            </div>
                            <div className="toolbar-amount">
                                <span>Showing 1 to 9 of 15</span>
                            </div>
                        </div>
                        <div className="product-select-box">
                            <div className="product-short">
                                <p>Sort By:</p>
                                <select className="nice-select">
                                    <option value="trending">Relevance</option>
                                    <option value="sales">Name (A - Z)</option>
                                    <option value="sales">Name (Z - A)</option>
                                    <option value="rating">Price (Low &gt; High)</option>
                                    <option value="date">Rating (Lowest)</option>
                                    <option value="price-asc">Model (A - Z)</option>
                                    <option value="price-asc">Model (Z - A)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="shop-products-wrapper">
                        <div className="tab-content">
                            <div id="grid-view" className="tab-pane fade" role="tabpanel">
                                <div className="product-area shop-product-area">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-6 mt-40">
                                            <div className="single-product-wrap">
                                                <div className="product-image">
                                                    <a href="single-product.html"><img src="images/product/large-size/1.jpg" alt="Li's Product"/></a>
                                                    <span className="sticker">New</span>
                                                </div>
                                                <div className="product_desc">
                                                    <div className="product_desc_info">
                                                        <div className="product-review">
                                                            <h5 className="manufacturer">
                                                                <a href="product-details.html">Graphic Corner</a>
                                                            </h5>
                                                            <div className="rating-box">
                                                                <ul className="rating">
                                                                    <li><i className="fa fa-star-o"></i></li>
                                                                    <li><i className="fa fa-star-o"></i></li>
                                                                    <li><i className="fa fa-star-o"></i></li>
                                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                                        <div className="price-box">
                                                            <span className="new-price">$46.80</span>
                                                        </div>
                                                    </div>
                                                    <div className="add-actions">
                                                        <ul className="add-actions-link">
                                                            <li className="add-cart active"><a href="shopping-cart.html">Add to cart</a></li>
                                                            <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                            <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="list-view" className="tab-pane fade product-list-view active show" role="tabpanel">
                                <div className="row">
                                    <div className="col">
                                        <div className="row product-layout-list">

                                        { Products ? Products.map(item => {
                                            return (
                                                <React.Fragment>
                                                    <div key={item.id} className="col-lg-3 col-md-5">
                                                <div className="product-image">
                                                    <Link to="/single-product">
                                                        <img src={item.image_url} alt={item.title}/>
                                                    </Link>
                                                    {/* <a href="single-product.html"></a> */}
                                                    <span className="sticker">{item.sticker ? 'New' : 'Old'}</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-7">
                                                <div className="product_desc">
                                                    <div className="product_desc_info">
                                                        <div className="product-review">
                                                            <h5 className="manufacturer">
                                                                <a href="product-details.html">{item.category}</a>
                                                            </h5>
                                                            <div className="rating-box">
                                                                <ul className="rating">
                                                                    <li><i className="fa fa-star-o"></i></li>
                                                                    <li><i className="fa fa-star-o"></i></li>
                                                                    <li><i className="fa fa-star-o"></i></li>
                                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <h4><a className="product_name" href="single-product.html">{item.title}</a></h4>
                                                        <div className="price-box"><span className="new-price">${item.price}</span></div>
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="shop-add-action mb-xs-30">
                                                    <ul className="add-actions-link">
                                                        <li className="add-cart"><a href="#">Add to cart</a></li>
                                                        <li className="wishlist"><a href="wishlist.html"><i className="fa fa-heart-o"></i>Add to wishlist</a></li>
                                                        <li><a className="quick-view" data-toggle="modal" data-target="#exampleModalCenter" href="#"><i className="fa fa-eye"></i>Quick view</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                                </React.Fragment>
                                            )
                                        }) : '' }

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="paginatoin-area">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <p>Showing 1-12 of 13 item(s)</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <ul className="pagination-box">
                                            <li><a href="#" className="Previous"><i className="fa fa-chevron-left"></i> Previous</a>
                                            </li>
                                            <li className="active"><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li>
                                              <a href="#" className="Next"> Next <i className="fa fa-chevron-right"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 order-2 order-lg-1">
                    <div className="sidebar-categores-box mt-sm-30 mt-xs-30">
                        <div className="sidebar-title"><h2>Laptop</h2></div>
                        <div className="category-sub-menu">
                            <ul>
                                <li className="has-sub"><a href="#">Prime Video</a>
                                    <ul>
                                        <li><a href="#">All Videos</a></li>
                                        <li><a href="#">Blouses</a></li>
                                        <li><a href="#">Evening Dresses</a></li>
                                        <li><a href="#">Summer Dresses</a></li>
                                        <li><a href="#">T-Rent or Buy</a></li>
                                        <li><a href="#">Your Watchlist</a></li>
                                        <li><a href="#">Watch Anywhere</a></li>
                                        <li><a href="#">Getting Started</a></li>  
                                    </ul>
                                </li>
                                <li className="has-sub"><a href="#">Computer</a>
                                    <ul>
                                        <li><a href="#">TV & Video</a></li>
                                        <li><a href="#">Audio & Theater</a></li>
                                        <li><a href="#">Camera, Photo</a></li>
                                        <li><a href="#">Cell Phones</a></li>
                                        <li><a href="#">Headphones</a></li>
                                        <li><a href="#">Video Games</a></li>
                                        <li><a href="#">Wireless Speakers</a></li> 
                                    </ul>
                                </li>
                                <li className="has-sub"><a href="#">Electronics</a>
                                    <ul>
                                        <li><a href="#">Amazon Home</a></li>
                                        <li><a href="#">Kitchen & Dining</a></li>
                                        <li><a href="#">Bed & Bath</a></li>
                                        <li><a href="#">Appliances</a></li>    
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="sidebar-categores-box">
                        <div className="sidebar-title"><h2>Filter By</h2></div>
                        <button className="btn-clear-all mb-sm-30 mb-xs-30">Clear all</button>
                        <div className="filter-sub-area">
                            <h5 className="filter-sub-titel">Brand</h5>
                            <div className="categori-checkbox">
                                <form action="#">
                                    <ul>
                                        { Brand ? Brand.map(item => {
                                        (<li key={item.id}><input type="checkbox" name="product-categori"/><a href="#">{item.name} ({item.quantity})</a></li>)
                                        }) : '' }
                                    </ul>
                                </form>
                            </div>
                         </div>
                        <div className="filter-sub-area pt-sm-10 pt-xs-10">
                            <h5 className="filter-sub-titel">Categories</h5>
                            <div className="categori-checkbox">
                                <form action="#">
                                    <ul>
                                        { Categories ? Categories.map(item => (<li key={item.id}><input type="checkbox" name="product-categori"/><a href="#">{item.name} ({item.quantity})</a></li>)) : "" }
                                    </ul>
                                </form>
                            </div>
                         </div>
                        <div className="filter-sub-area pt-sm-10 pt-xs-10">
                            <h5 className="filter-sub-titel">Size</h5>
                            <div className="size-checkbox">
                                <form action="#">
                                    <ul>
                                    { Size ? Size.map(item => (<li key={item.id}><input type="checkbox" name="product-size"/><a href="#">{item.name} ({item.quantity})</a></li>)) : "" }
                                    </ul>
                                </form>
                            </div>
                        </div>
                        <div className="filter-sub-area pt-sm-10 pt-xs-10">
                            <h5 className="filter-sub-titel">Color</h5>
                            <div className="color-categoriy">
                                <form action="#">
                                    <ul>
                                    { Color ? Color.map(item =>(<li key={item.id}><span className="white"></span><a href="#">{item.name} ({item.quantity})</a></li>)) : "" }
                                    </ul>
                                </form>
                            </div>
                        </div>
                        <div className="filter-sub-area pt-sm-10 pb-sm-15 pb-xs-15">
                            <h5 className="filter-sub-titel">Dimension</h5>
                            <div className="categori-checkbox">
                                <form action="#">
                                    <ul>
                                    { Dimension ? Dimension.map(item => <li key={item.id}><input type="checkbox" name="product-categori"/><a href="#">{item.name} ({item.quantity})</a></li>) : "" }
                                    </ul>
                                </form>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
 
export default ShopPage;