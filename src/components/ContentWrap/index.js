import React, { PureComponent } from 'react';

const ContentWrap = () => {
    return (
        <React.Fragment>
            <div className="content-wraper">
                <div className="container">
                    <div className="row single-product-area">
                        <div className="col-lg-5 col-md-6">
                            <div className="product-details-left pt-60">
                                <div className="product-details-thumbs slider-thumbs-1">
                                    <div className="sm-image"><img src="images/product/small-size/1.jpg" alt="product image thumb"/></div>
                                    <div className="sm-image"><img src="images/product/small-size/2.jpg" alt="product image thumb"/></div>
                                    <div className="sm-image"><img src="images/product/small-size/3.jpg" alt="product image thumb"/></div>
                                    <div className="sm-image"><img src="images/product/small-size/4.jpg" alt="product image thumb"/></div>
                                    <div className="sm-image"><img src="images/product/small-size/5.jpg" alt="product image thumb"/></div>
                                    <div className="sm-image"><img src="images/product/small-size/6.jpg" alt="product image thumb"/></div>
                                </div>
                                <div className="product-details-images slider-navigation-1">
                                    <div className="lg-image">
                                        <a className="popup-img venobox vbox-item" href="images/product/large-size/1.jpg" data-gall="myGallery">
                                            <img src="images/product/large-size/1.jpg" alt="product"/>
                                        </a>
                                    </div>
                                    <div className="lg-image">
                                        <a className="popup-img venobox vbox-item" href="images/product/large-size/2.jpg" data-gall="myGallery">
                                            <img src="images/product/large-size/2.jpg" alt="product"/>
                                        </a>
                                    </div>
                                    <div className="lg-image">
                                        <a className="popup-img venobox vbox-item" href="images/product/large-size/3.jpg" data-gall="myGallery">
                                            <img src="images/product/large-size/3.jpg" alt="product"/>
                                        </a>
                                    </div>
                                    <div className="lg-image">
                                        <img src="images/product/large-size/4.jpg" alt="product"/>
                                    </div>
                                    <div className="lg-image">
                                        <img src="images/product/large-size/5.jpg" alt="product"/>
                                    </div>
                                    <div className="lg-image">
                                        <img src="images/product/large-size/6.jpg" alt="product"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-6">
                            <div className="product-details-view-content pt-60">
                                <div className="product-info">
                                    <h2>Today is a good day Framed poster</h2>
                                    <span className="product-details-ref">Reference: demo_15</span>
                                    <div className="rating-box pt-20">
                                        <ul className="rating rating-with-review-item">
                                            <li><i className="fa fa-star-o"></i></li>
                                            <li><i className="fa fa-star-o"></i></li>
                                            <li><i className="fa fa-star-o"></i></li>
                                            <li className="no-star"><i className="fa fa-star-o"></i></li>
                                            <li className="no-star"><i className="fa fa-star-o"></i></li>
                                            <li className="review-item"><a href="#">Read Review</a></li>
                                            <li className="review-item"><a href="#">Write Review</a></li>
                                        </ul>
                                    </div>
                                    <div className="price-box pt-20">
                                        <span className="new-price new-price-2">$57.98</span>
                                    </div>
                                    <div className="product-desc">
                                        <p>
                                            <span>100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.
                                            </span>
                                        </p>
                                    </div>
                                    <div className="product-variants">
                                        <div className="produt-variants-size">
                                            <label>Dimension</label>
                                            <select className="nice-select">
                                                <option value="1" title="S" selected="selected">40x60cm</option>
                                                <option value="2" title="M">60x90cm</option>
                                                <option value="3" title="L">80x120cm</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="single-add-to-cart">
                                        <form action="#" className="cart-quantity">
                                            <div className="quantity">
                                                <label>Quantity</label>
                                                <div className="cart-plus-minus">
                                                    <input className="cart-plus-minus-box" value="1" type="text" />
                                                    <div className="dec qtybutton"><i className="fa fa-angle-down"></i></div>
                                                    <div className="inc qtybutton"><i className="fa fa-angle-up"></i></div>
                                                </div>
                                            </div>
                                            <button className="add-to-cart" type="submit">Add to cart</button>
                                        </form>
                                    </div>
                                    <div className="product-additional-info pt-25">
                                        <a className="wishlist-btn" href="wishlist.html"><i className="fa fa-heart-o"></i>Add to wishlist</a>
                                        <div className="product-social-sharing pt-25">
                                            <ul>
                                                <li className="facebook"><a href="#"><i className="fa fa-facebook"></i>Facebook</a></li>
                                                <li className="twitter"><a href="#"><i className="fa fa-twitter"></i>Twitter</a></li>
                                                <li className="google-plus"><a href="#"><i className="fa fa-google-plus"></i>Google +</a></li>
                                                <li className="instagram"><a href="#"><i className="fa fa-instagram"></i>Instagram</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="block-reassurance">
                                        <ul>
                                            <li>
                                                <div className="reassurance-item">
                                                    <div className="reassurance-icon">
                                                        <i className="fa fa-check-square-o"></i>
                                                    </div>
                                                    <p>Security policy (edit with Customer reassurance module)</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="reassurance-item">
                                                    <div className="reassurance-icon">
                                                        <i className="fa fa-truck"></i>
                                                    </div>
                                                    <p>Delivery policy (edit with Customer reassurance module)</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="reassurance-item">
                                                    <div className="reassurance-icon">
                                                        <i className="fa fa-exchange"></i>
                                                    </div>
                                                    <p> Return policy (edit with Customer reassurance module)</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default ContentWrap;