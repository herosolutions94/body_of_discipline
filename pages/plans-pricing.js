import React from "react";
import Link from "next/link";
import Cta from "@/components/cta";


export default function Plans_pricing() {
  return (
    <main>
      <section id="pricing">
        <div className="contain">
          <div className="content_center">
            <h2>Pricing and Plans</h2>
            <p>
              PureRx provides two tiers of pricing: concierge level and basic
              service. For an initial patient consult, priced at $199, clients
              receive a comprehensive package including detailed labs, an InBody
              metabolic screening, a thorough physical examination, and a
              one-hour consultation with a physician.
            </p>
          </div>
          <div className="flex">
            <div className="coll">
              <div className="inner">
                <h4>Male Concierge Plan</h4>
                <h3>
                  $220 <sub>/monthly</sub>{" "}
                </h3>
                <h5>*with qualifying insurance*</h5>
                <h4>What’s included</h4>
                <ul>
                  <li>Testosterone</li>
                  <li>All Follow-Up Labs</li>
                  <li>Doctors Visits</li>
                  <li>Anastrozole</li>
                  <li>RX Management</li>
                </ul>
                <div className="btn_blk">
                  <Link href="" className="site_btn">
                    Request a Free Consultation
                  </Link>
                </div>
              </div>
            </div>
            <div className="coll">
              <div className="inner">
                <h4>Male Concierge Plan</h4>
                <h3>
                  $320 <sub>/monthly</sub>{" "}
                </h3>
                <h5>*with qualifying insurance*</h5>

                <h4>What’s included</h4>
                <ul>
                  <li>Testosterone</li>
                  <li>All Follow-Up Labs</li>
                  <li>Doctors Visits</li>
                  <li>Anastrozole</li>
                  <li>RX Management</li>
                </ul>
                <div className="btn_blk">
                  <Link href="" className="site_btn">
                    Request a Free Consultation
                  </Link>
                </div>
              </div>
            </div>
            <div className="coll">
              <div className="inner">
                <h4>Male Concierge Plan</h4>
                <h3>
                  $500 <sub>/monthly</sub>{" "}
                </h3>
                <h5>*with qualifying insurance*</h5>

                <h4>What’s included</h4>
                <ul>
                  <li>Testosterone</li>
                  <li>All Follow-Up Labs</li>
                  <li>Doctors Visits</li>
                  <li>Anastrozole</li>
                  <li>RX Management</li>
                </ul>
                <div className="btn_blk">
                  <Link href="" className="site_btn">
                    Request a Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="enhance" className="padding-minus">
        <div className="contain">
          <div className="outer">
            <div className="col1">
              <h2>Enhance Your Plan with Add-Ons</h2>
              <p>
                Customize your experience by adding on any of our optional
                services to further support your goals.
              </p>
            </div>
            <div className="col2">
              <ul>
                <li>
                  <strong>1-on-1 Coaching Sessions:</strong> $50 per session
                </li>
                <li>
                  <strong>Advanced Lab Testing:</strong> Priced per test
                </li>
                <li>
                  <strong>Supplement Packages:</strong> Discounts available with
                  subscription
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="plans_form">
        <div className="contain">
          <div className="outer">
            <h2>LET'S CREATE PROGRESS TOGETHER</h2>
            <p>
              Have a question? Please fill out the form below and we will be in
              touch within 24 hours.
            </p>
            <form>
              <div className=" row">
                <div className=" flex   ">
                  <label>Full Name</label>
                  <div className="col-md-12">
                    <div className="txtGrp">
                      <input
                        type=""
                        className="input"
                        placeholder="enter your full name"
                        name=""
                      />
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <label>Email</label>
                  <div className="col-md-12">
                    <div className="txtGrp">
                      <input
                        type=""
                        className="input"
                        placeholder="eg. email@info.com"
                        name=""
                      />
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <label>Phone</label>

                  <div className="col-md-12">
                    <div className="txtGrp">
                      <input
                        type=""
                        className="input"
                        placeholder="enter your phone"
                        name=""
                      />
                    </div>
                  </div>
                </div>
                <div className="flex">
                  {" "}
                  <label>Location</label>
                  <div className="col-md-12">
                    <div className="txtGrp">
                      <select className="input">
                        <option value="">choose location</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <label>Message</label>

                  <div className="col-md-12">
                    <div className="txtGrp">
                      <textarea
                        type=""
                        className="input"
                        placeholder="write your message"
                        name=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
  <Cta />

    </main>
  );
}
