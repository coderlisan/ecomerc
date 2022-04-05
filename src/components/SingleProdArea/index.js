import React, { PureComponent } from 'react';

const SingleProdArea = () => {
    return (
        <React.Fragment>
            <div className="product-area pt-35">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="li-product-tab">
                                <ul className="nav li-product-menu">
                                   <li><a className="active" data-toggle="tab" href="#description"><span>Description</span></a></li>
                                   <li><a data-toggle="tab" href="#product-details"><span>Product Details</span></a></li>
                                   <li><a data-toggle="tab" href="#reviews"><span>Reviews</span></a></li>
                                </ul>               
                            </div>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div id="description" className="tab-pane active show" role="tabpanel">
                            <div className="product-description">
                                <span>The best is yet to come! Give your walls a voice with a framed poster. This aesthethic, optimistic poster will look great in your desk or in an open-space office. Painted wooden frame with passe-partout for more depth.</span>
                            </div>
                        </div>
                        <div id="product-details" className="tab-pane" role="tabpanel">
                            <div className="product-details-manufacturer">
                                <a href="#">
                                    <img src="images/product-details/1.jpg" alt="Product Manufacturer"/>
                                </a>
                                <p><span>Reference</span> demo_7</p>
                                <p><span>Reference</span> demo_7</p>
                            </div>
                        </div>
                        <div id="reviews" className="tab-pane" role="tabpanel">
                            <div className="product-reviews">
                                <div className="product-details-comment-block">
                                    <div className="comment-review">
                                        <span>Grade</span>
                                        <ul className="rating">
                                            <li><i className="fa fa-star-o"></i></li>
                                            <li><i className="fa fa-star-o"></i></li>
                                            <li><i className="fa fa-star-o"></i></li>
                                            <li className="no-star"><i className="fa fa-star-o"></i></li>
                                            <li className="no-star"><i className="fa fa-star-o"></i></li>
                                        </ul>
                                    </div>
                                    <div className="comment-author-infos pt-25">
                                        <span>HTML 5</span>
                                        <em>01-12-18</em>
                                    </div>
                                    <div className="comment-details">
                                        <h4 className="title-block">Demo</h4>
                                        <p>Plaza</p>
                                    </div>
                                    <div className="review-btn">
                                        <a className="review-links" href="#" data-toggle="modal" data-target="#mymodal">Write Your Review!</a>
                                    </div>
                                    <div className="modal fade modal-wrapper" id="mymodal" >
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                            <div className="modal-content">
                                                <div className="modal-body">
                                                    <h3 className="review-page-title">Write Your Review</h3>
                                                    <div className="modal-inner-area row">
                                                        <div className="col-lg-6">
                                                           <div className="li-review-product">
                                                               <img src="images/product/large-size/3.jpg" alt="Li's Product"/>
                                                               <div className="li-review-product-desc">
                                                                   <p className="li-product-name">Today is a good day Framed poster</p>
                                                                   <p>
                                                                       <span>Beach Camera Exclusive Bundle - Includes Two Samsung Radiant 360 R3 Wi-Fi Bluetooth Speakers. Fill The Entire Room With Exquisite Sound via Ring Radiator Technology. Stream And Control R3 Speakers Wirelessly With Your Smartphone. Sophisticated, Modern Design </span>
                                                                   </p>
                                                               </div>
                                                           </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="li-review-content">
                                                                <div className="feedback-area">
                                                                    <div className="feedback">
                                                                        <h3 className="feedback-title">Our Feedback</h3>
                                                                        <form action="#">
                                                                            <p className="your-opinion">
                                                                                <label>Your Rating</label>
                                                                                <span>
                                                                                    <select className="star-rating">
                                                                                      <option value="1">1</option>
                                                                                      <option value="2">2</option>
                                                                                      <option value="3">3</option>
                                                                                      <option value="4">4</option>
                                                                                      <option value="5">5</option>
                                                                                    </select>
                                                                                </span>
                                                                            </p>
                                                                            <p className="feedback-form">
                                                                                <label for="feedback">Your Review</label>
                                                                                <textarea id="feedback" name="comment" cols="45" rows="8" aria-required="true"></textarea>
                                                                            </p>
                                                                            <div className="feedback-input">
                                                                                <p className="feedback-form-author">
                                                                                    <label for="author">Name<span className="required">*</span>
                                                                                    </label>
                                                                                    <input id="author" name="author" value="" size="30" aria-required="true" type="text"/>
                                                                                </p>
                                                                                <p className="feedback-form-author feedback-form-email">
                                                                                    <label for="email">Email<span className="required">*</span>
                                                                                    </label>
                                                                                    <input id="email" name="email" value="" size="30" aria-required="true" type="text"/>
                                                                                    <span className="required"><sub>*</sub> Required fields</span>
                                                                                </p>
                                                                                <div className="feedback-btn pb-15">
                                                                                    <a href="#" className="close" data-dismiss="modal" aria-label="Close">Close</a>
                                                                                    <a href="#">Submit</a>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
 
export default SingleProdArea;