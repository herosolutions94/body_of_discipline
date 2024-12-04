import React from "react";
import Link from "next/link";
import Cta from "@/components/cta";

export default function Checkout() {
  return (
    <>
      <main>
        <section id="checkout">
          <div className="contain">
            <div className="content_center">
              <h2>Checkout</h2>
            </div>
            <div className="flex">
              <div className="col1">
                <div className="outer">
                  <form>
                    <div className="row">
                      <h4>BILLING INFORMATION</h4>

                      <div className="col-md-6">
                        <div className="txt_grp">
                          <input
                            type="text"
                            className="input"
                            name="fname"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="txt_grp">
                          <input
                            type="text"
                            className="input"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="txt_grp">
                          <input
                            type="text"
                            className="input"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="txt_grp">
                          <input
                            type="text"
                            className="input"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="txt_grp">
                          <input
                            type="text"
                            className="input"
                            placeholder="Address"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="txt_grp">
                          <input
                            type="text"
                            className="input"
                            placeholder="City"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="txt_grp">
                          <select className="input">
                            <option value="">Country</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="txt_grp">
                          <select className="input">
                            <option value="">State</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="txt_grp">
                          <input
                            type="text"
                            className="input"
                            placeholder="Zip Code"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="check-flex">
                      <input type="checkbox" />
                      <label>Billing Address and Shipping Address Same.</label>
                    </div>
                    <div className="row">
                      <h4>SHIPPING INFORMATION</h4>

                      <div className="col-md-6">
                        <div className="txt_grp">
                          <input
                            type="text"
                            className="input"
                            name="fname"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="txt_grp">
                          <input
                            type="text"
                            className="input"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="txt_grp">
                          <input
                            type="text"
                            className="input"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="txt_grp">
                          <input
                            type="text"
                            className="input"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="txt_grp">
                          <input
                            type="text"
                            className="input"
                            placeholder="Address"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="txt_grp">
                          <input
                            type="text"
                            className="input"
                            placeholder="City"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="txt_grp">
                          <select className="input">
                            <option value="">Country</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="txt_grp">
                          <select className="input">
                            <option value="">State</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="txt_grp">
                          <input
                            type="text"
                            className="input"
                            placeholder="Zip Code"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="checkout-form">
                      <div className="head headtop">
                        <h4>Payment Method</h4>
                      </div>

                      <div className="checkout inner_bulk">
                        <div className="head_">
                          <div className="checkbox">
                            <input
                              type="radio"
                              name="paymentMethod"
                              id="creditCard"
                            />
                            <label htmlFor="creditCard" className="head_card">
                              <h4>Credit Card</h4>
                            </label>
                          </div>
                          <div className="images">
                            <img src="/images/card1.svg" />
                            <img src="/images/card2.svg" />
                            <img src="/images/card3.svg" />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="txt_grp">
                              <input
                                type=""
                                className="input"
                                required
                                placeholder="Card number"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="txt_grp">
                              <input
                                type=""
                                className="input"
                                required
                                placeholder="Card holder name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="txt_grp">
                              <input
                                type=""
                                className="input"
                                required
                                placeholder="Expiry Date(mm/dd/yy)"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="txt_grp">
                              <input
                                type=""
                                className="input"
                                required
                                placeholder="CVC?"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="checkout inner_bulk">
                        <div className="head_ headpaypal">
                          <div className="checkbox">
                            <input
                              type="radio"
                              name="paymentMethod"
                              id="creditCard"
                            />
                            <label htmlFor="paypal">
                              <h4>PayPal</h4>
                            </label>
                          </div>
                          <div className="images paypal">
                            <img src="/images/card4.svg" />
                          </div>
                        </div>
                      </div>
                      <div className="check-flex">
                        <input type="checkbox" />
                        <label>
                          I agree to the{" "}
                          <a href="" className="underline">
                            Terms and Conditions
                          </a>{" "}
                          and{" "}
                          <a href="" className="underline">
                            Privacy Policy
                          </a>
                          .
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col2">
                <div className="outer">
                  <h4>Review your cart</h4>
                  <div className="block">
                    <div className="image">
                      <img src="/images/m1.png" />
                    </div>
                    <div className="text">
                      <h5>DuoComfort Sofa Premium</h5>
                      <p>1x</p>
                      <div className="rate">$20.00</div>
                    </div>
                  </div>
                  <div className="block">
                    <div className="image">
                      <img src="/images/m2.png" />
                    </div>
                    <div className="text">
                      <h5>IronOne Desk</h5>
                      <p>1x</p>
                      <div className="rate">$35.00</div>
                    </div>
                  </div>
                  <div className="outer discount">
                    <div className="disimg">
                      <img src="/images/ticket-discount.svg" />
                      <input
                        type="text"
                        className="input"
                        placeholder="Discount code"
                      />
                    </div>
                    <div className="apply">Apply</div>
                  </div>
                  <div className="invoice-summary">
                    <div className="item">
                      <span>Subtotal</span>
                      <strong>$45.00</strong>
                    </div>
                    <div className="item">
                      <span>Shipping</span>
                      <strong>$5.00</strong>
                    </div>
                    <div className="item">
                      <span>Discount</span>
                      <strong>- $10.00</strong>
                    </div>
                    <div className="total item">
                      <span>Total</span>
                      <span>$40.00</span>
                    </div>
                  </div>
                </div>
                <div className="coll">
                  <div className="image">
                    <img src="/images/s1.png" />
                    <div className="text">
                      <h4>Have a question? Feel free to reach out to us through our contact form</h4>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Cta />
      </main>
    </>
  );
}
