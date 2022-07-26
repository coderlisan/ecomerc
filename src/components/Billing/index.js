import React from "react";

const Billing = () => {
  return (
    <form action="#">
        <div className="checkbox-form">
            <h3>Billing Details</h3>
            <div className="row">
                <div className="col-md-12">
                    <div className="country-select clearfix">
                        <label>Country <span className="required">*</span></label>
                        <select className="nice-select wide">
                          <option data-display="Bangladesh">Bangladesh</option>
                          <option value="uk">London</option>
                          <option value="rou">Romania</option>
                          <option value="fr">French</option>
                          <option value="de">Germany</option>
                          <option value="aus">Australia</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-6">
                  <div className="checkout-form-list"><label>First Name <span className="required">*</span></label><input placeholder="" type="text"/></div>
                </div>
                <div className="col-md-6">
                  <div className="checkout-form-list"><label>Last Name <span className="required">*</span></label><input placeholder="" type="text"/></div>
                </div>
                <div className="col-md-12">
                  <div className="checkout-form-list"><label>Company Name</label><input placeholder="" type="text"/></div>
                </div>
                <div className="col-md-12">
                  <div className="checkout-form-list"><label>Address <span className="required">*</span></label><input placeholder="Street address" type="text"/></div>
                </div>
                <div className="col-md-12">
                  <div className="checkout-form-list"><input placeholder="Apartment, suite, unit etc. (optional)" type="text"/></div>
                </div>
                <div className="col-md-12">
                  <div className="checkout-form-list"><label>Town / City <span className="required">*</span></label><input type="text"/></div>
                </div>
                <div className="col-md-6">
                  <div className="checkout-form-list"><label>State / County <span className="required">*</span></label><input placeholder="" type="text"/></div>
                </div>
                <div className="col-md-6">
                  <div className="checkout-form-list"><label>Postcode / Zip <span className="required">*</span></label><input placeholder="" type="text"/></div>
                </div>
                <div className="col-md-6">
                  <div className="checkout-form-list"><label>Email Address <span className="required">*</span></label><input placeholder="" type="email"/></div>
                </div>
                <div className="col-md-6">
                  <div className="checkout-form-list"><label>Phone  <span className="required">*</span></label><input type="text"/></div>
                </div>
                <div className="col-md-12">
                  <div className="checkout-form-list create-acc"><input id="cbox" type="checkbox" /><label>Create an account?</label></div>
                    <div id="cbox-info" className="checkout-form-list create-account">
                        <p>Create an account by entering the information below. If you are a returning customer please login at the top of the page.</p>
                        <label>Account password  <span className="required">*</span></label>
                        <input placeholder="password" type="password" />
                    </div>
                </div>
            </div>
            <div className="different-address">
                <div className="ship-different-title">
                    <h3>
                        <label>Ship to a different address?</label>
                        <input id="ship-box" type="checkbox" />
                    </h3>
                </div>
                <div id="ship-box-info" className="row">
                    <div className="col-md-12">
                        <div className="country-select clearfix">
                            <label>Country <span className="required">*</span></label>
                            <select className="nice-select wide">
                              <option data-display="Bangladesh">Bangladesh</option>
                              <option value="uk">London</option>
                              <option value="rou">Romania</option>
                              <option value="fr">French</option>
                              <option value="de">Germany</option>
                              <option value="aus">Australia</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="checkout-form-list">
                            <label>First Name <span className="required">*</span></label>
                            <input placeholder="" type="text" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="checkout-form-list">
                            <label>Last Name <span className="required">*</span></label>
                            <input placeholder="" type="text" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="checkout-form-list">
                            <label>Company Name</label>
                            <input placeholder="" type="text" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="checkout-form-list">
                            <label>Address <span className="required">*</span></label>
                            <input placeholder="Street address" type="text" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="checkout-form-list">
                            <input placeholder="Apartment, suite, unit etc. (optional)" type="text" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="checkout-form-list">
                            <label>Town / City <span className="required">*</span></label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="checkout-form-list">
                            <label>State / County <span className="required">*</span></label>
                            <input placeholder="" type="text" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="checkout-form-list">
                            <label>Postcode / Zip <span className="required">*</span></label>
                            <input placeholder="" type="text" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="checkout-form-list">
                            <label>Email Address <span className="required">*</span></label>
                            <input placeholder="" type="email" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="checkout-form-list">
                            <label>Phone  <span className="required">*</span></label>
                            <input type="text" />
                        </div>
                    </div>
                </div>
                <div className="order-notes">
                    <div className="checkout-form-list">
                        <label>Order Notes</label>
                        <textarea id="checkout-mess" cols="30" rows="10" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                    </div>
                </div>
            </div>
        </div>
    </form>
  )
}
export default Billing