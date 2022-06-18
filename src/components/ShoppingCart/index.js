import React from 'react';
import {useState} from "react";


import CartLists from '../../data/CartLists.json';

const ShoppingCart = () => {

    let [product, setProduct] = useState(CartLists);

    let incrementCounter = () => setProduct(product.map(prod => prod.quantity + 1));
    let decrementCounter = () => setProduct(product.map(prod => prod.quantity - 1));

    // if(product.forEach(prod => prod.quantity)<=0) decrementCounter = () => setProduct(1);

    return (
        <React.Fragment>
            <div className="Shopping-cart-area pt-60 pb-60">
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
                                                <th className="li-product-quantity">Quantity</th>
                                                <th className="li-product-subtotal">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        { CartLists ? CartLists.map(item => {
                                            return (
                                            <tr key={item.id}>
                                                <td className="li-product-remove"><a href="#"><i className="fa fa-times"></i></a></td>
                                                <td className="li-product-thumbnail"><a href="#"><img src={item.image_url} alt={item.title} /></a></td>
                                                <td className="li-product-name"><a href="#">{item.title}</a></td>
                                                <td className="li-product-price"><span className="amount">${item.price}</span></td>
                                                <td className="quantity">
                                                    <label>Quantity</label>
                                                    <div className="cart-plus-minus">
                                                        <input className="cart-plus-minus-box" defaultValue={1} type="text"/>
                                                        <button onClick={decrementCounter} type="button" className="dec qtybutton"><i className="fa fa-angle-down"></i></button>
                                                        <button onClick={incrementCounter} type="button" className="inc qtybutton"><i className="fa fa-angle-up"></i></button>
                                                    </div>
                                                </td>
                                                <td className="product-subtotal"><span className="amount">${item.price*item.quantity}</span></td>
                                            </tr>
                                            )
                                        }) : '' }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="coupon-all">
                                            <div className="coupon">
                                                <input id="coupon_code" className="input-text" name="coupon_code" defaultValue={""} placeholder="Coupon code" type="text" />
                                                <input className="button" name="apply_coupon" defaultValue={"Apply coupon"} type="submit" />
                                            </div>
                                            <div className="coupon2">
                                                <input className="button" name="update_cart" value="Update cart" type="submit" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5 ml-auto">
                                        <div className="cart-page-total">
                                            <h2>Cart totals</h2>
                                            <ul>
                                                <li>Subtotal <span>$130.00</span></li>
                                                <li>Total <span>$130.00</span></li>
                                            </ul>
                                            <a href="#">Proceed to checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default ShoppingCart;