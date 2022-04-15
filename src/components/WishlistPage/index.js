import React from 'react';

import WishList from '../../data/WishList.json';

const WishlistPage = () => {
    return (
        <React.Fragment>
            <div className="wishlist-area pt-60 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form action="#">
                                <div className="table-content table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="li-product-remove">remove</th>
                                                <th className="li-product-thumbnail">images</th>
                                                <th className="cart-product-name">Product</th>
                                                <th className="li-product-price">Unit Price</th>
                                                <th className="li-product-stock-status">Stock Status</th>
                                                <th className="li-product-add-cart">add to cart</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        { WishList ? WishList.map(item => {
                                            return (
                                            <tr key={item.id}>
                                                <td className="li-product-remove"><a href="#"><i className="fa fa-times"></i></a></td>
                                                <td className="li-product-thumbnail"><a href="#"><img src={item.image_url} alt={item.title} /></a></td>
                                                <td className="li-product-name"><a href="#">{item.title}</a></td>
                                                <td className="li-product-price"><span className="amount">${item.price}</span></td>
                                                <td className="li-product-stock-status"><span className="in-stock">{item.available ? "In Stock" : "Out of Stock"}</span></td>
                                                <td className="li-product-add-cart"><a href="#">add to cart</a></td>
                                            </tr>
                                            )
                                        }) : '' }
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default WishlistPage;