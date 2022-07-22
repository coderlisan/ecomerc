import React from 'react';
import {Link} from 'react-router-dom';

const Minicart = () => {
    return (
        <React.Fragment>
            <li className="hm-minicart">
                <div className="hm-minicart-trigger">
                    <span className="item-icon"></span>
                    <span className="item-text">£80.00
                        <span className="cart-item-count"><Link to="/cart">2</Link></span>
                    </span>
                </div>
                <span></span>
                <div className="minicart">
                    <ul className="minicart-product-list">
                        <li>
                            <a href="single-product.html" className="minicart-product-image">
                                <img src="images/product/small-size/5.jpg" alt="cart products" />
                            </a>
                            <div className="minicart-product-details">
                                <h6><a href="single-product.html">Aenean eu tristique</a></h6>
                                <span>£40 x 1</span>
                            </div>
                            <button className="close" title="Remove">
                                <i className="fa fa-close"></i>
                            </button>
                        </li>
                        <li>
                            <a href="single-product.html" className="minicart-product-image">
                                <img src="images/product/small-size/6.jpg" alt="cart products" />
                            </a>
                            <div className="minicart-product-details">
                                <h6><a href="single-product.html">Aenean eu tristique</a></h6>
                                <span>£40 x 1</span>
                            </div>
                            <button className="close" title="Remove">
                                <i className="fa fa-close"></i>
                            </button>
                        </li>
                    </ul>
                    <p className="minicart-total">SUBTOTAL: <span>£80.00</span></p>
                    <div className="minicart-button">
                        <a href="shopping-cart.html" className="li-button li-button-fullwidth li-button-dark">
                            <span>View Full Cart</span>
                        </a>
                        <a href="checkout.html" className="li-button li-button-fullwidth">
                            <span>Checkout</span>
                        </a>
                    </div>
                </div>
            </li>
        </React.Fragment>
    );
}
 
export default Minicart;