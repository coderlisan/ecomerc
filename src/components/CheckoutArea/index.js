import React, { useState } from 'react';
import Details from '../Billing';

const CheckoutArea = () => {
    return (
        <React.Fragment>
            <div className="checkout-area pt-60 pb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="coupon-accordion">
                                <h3>Returning customer? <span id="showlogin">Click here to login</span></h3>
                                <div id="checkout-login" className="coupon-content">
                                    <div className="coupon-info">
                                        <p className="coupon-text">Quisque gravida turpis sit amet nulla posuere lacinia. Cras sed est sit amet ipsum luctus.</p>
                                        <form action="#">
                                            <p className="form-row-first"><label>Username or email<span className="required">*</span></label><input type="text"/></p>
                                            <p className="form-row-last"><label>Password<span className="required">*</span></label><input type="text"/></p>
                                            <p className="form-row"><input value="Login" type="submit" /><label><input type="checkbox"/>Remember</label></p>
                                            <p className="lost-password"><a href="#">Lost your password?</a></p>
                                        </form>
                                    </div>
                                </div>
                                <h3>Have a coupon? <span id="showcoupon">Click here to enter your code</span></h3>
                                <div id="checkout_coupon" className="coupon-checkout-content">
                                    <div className="coupon-info">
                                        <form action="#">
                                            <p className="checkout-coupon"><input placeholder="Coupon code" type="text"/><input defaultValue={"Apply Coupon"} type="submit"/></p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <Details />
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="your-order">
                                <h3>Your order</h3>
                                <div className="your-order-table table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="cart-product-name">Product</th>
                                                <th className="cart-product-total">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="cart_item">
                                              <td className="cart-product-name"> Vestibulum suscipit<strong className="product-quantity"> × 1</strong></td>
                                              <td className="cart-product-total"><span className="amount">£165.00</span></td>  
                                            </tr>
                                            <tr className="cart_item">
                                              <td className="cart-product-name"> Vestibulum suscipit<strong className="product-quantity"> × 1</strong></td>
                                              <td className="cart-product-total"><span className="amount">£165.00</span></td>  
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr className="cart-subtotal">
                                                <th>Cart Subtotal</th>
                                                <td><span className="amount">£215.00</span></td>
                                            </tr>
                                            <tr className="order-total">
                                                <th>Order Total</th>
                                                <td><strong><span className="amount">£215.00</span></strong></td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="payment-method">
                                    <div className="payment-accordion">
                                        <div id="accordion">
                                          <div className="card">
                                            <div className="card-header" id="#payment-1">
                                              <h5 className="panel-title">
                                                <a className="" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                  Direct Bank Transfer.
                                                </a>
                                              </h5>
                                            </div>
                                            <div id="collapseOne" className="collapse show" data-parent="#accordion">
                                              <div className="card-body">
                                                <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="card">
                                            <div className="card-header" id="#payment-2">
                                              <h5 className="panel-title">
                                                <a className="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                  Cheque Payment
                                                </a>
                                              </h5>
                                            </div>
                                            <div id="collapseTwo" className="collapse" data-parent="#accordion">
                                              <div className="card-body">
                                                <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="card">
                                            <div className="card-header" id="#payment-3">
                                              <h5 className="panel-title">
                                                <a className="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                  PayPal
                                                </a>
                                              </h5>
                                            </div>
                                            <div id="collapseThree" className="collapse" data-parent="#accordion">
                                              <div className="card-body">
                                                <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="order-button-payment">
                                            <input value="Place order" type="submit" />
                                        </div>
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
 
export default CheckoutArea;