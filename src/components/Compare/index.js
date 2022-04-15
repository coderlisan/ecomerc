import React from 'react';

const Compare = () => {
  return (
    <div className="compare-area pt-60 pb-60">
        <div className="container">
            <div className="compare-table table-responsive">
                <table className="table table-bordered table-hover mb-0">
                    <tbody>
                        <tr>
                            <th className="compare-column-titles">Image</th>
                            <td className="compare-column-productinfo">
                                <div className="compare-pdoduct-image">
                                    <a href="single-product.html"><img src="images/product/large-size/1.jpg" alt="Product" /></a>
                                    <a href="cart.html" className="ho-button ho-button-sm"><span>ADD TO CART</span></a>
                                </div>
                            </td>
                            <td className="compare-column-productinfo">
                                <div className="compare-pdoduct-image">
                                    <a href="single-product.html"><img src="images/product/large-size/2.jpg" alt="Product" /></a>
                                    <a href="cart.html" className="ho-button ho-button-sm"><span>ADD TO CART</span></a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>Product Name</th>
                            <td><h5 className="compare-product-name"><a href="single-product.html">HP Pavilion</a></h5></td>
                            <td><h5 className="compare-product-name"><a href="single-product.html">HP Probook</a></h5></td>
                        </tr>
                        <tr>
                            <th>Description</th>
                            <td>Impressively thin and light, the HP Pavilion G6 empowers users to create,connect, and collaborate, using enterprise-className performance</td>
                            <td>Impressively thin and light, the HP ProBook 450 G4 empowers users to create,connect, and collaborate, using enterprise-className performance</td>
                        </tr>
                        <tr><th>Price</th><td>$800</td><td>$1020</td></tr>
                        <tr><th>Color</th><td>Black</td><td>Red</td></tr>
                        <tr><th>Size</th><td>Medium</td><td>Large</td></tr>
                        <tr><th>Stock</th><td>In Stock</td><td>Stock Out</td>
                        </tr>
                        <tr>
                            <th>Rating</th>
                            <td>
                                <div className="li-pro-rating li-rattingbox">
                                    <span><i className="fa fa-star-o"></i></span>
                                    <span><i className="fa fa-star-o"></i></span>
                                    <span><i className="fa fa-star-o"></i></span>
                                    <span><i className="fa fa-star-o li-star"></i></span>
                                    <span><i className="fa fa-star-o li-star"></i></span>
                                </div>
                            </td>
                            <td>
                                <div className="li-pro-rating li-rattingbox">
                                    <span><i className="fa fa-star-o"></i></span>
                                    <span><i className="fa fa-star-o"></i></span>
                                    <span><i className="fa fa-star-o"></i></span>
                                    <span><i className="fa fa-star-o"></i></span>
                                    <span><i className="fa fa-star-o li-star"></i></span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
}
 
export default Compare;