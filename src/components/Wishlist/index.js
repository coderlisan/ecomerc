import React from 'react';

const Wishlist = () => {
    return (
        <React.Fragment>
            <li className="hm-wishlist">
                <a href="wishlist.html">
                    <span className="cart-item-count wishlist-item-count">0</span>
                    <i className="fa fa-heart-o"></i>
                </a>
            </li>
        </React.Fragment>
    );
}
 
export default Wishlist;