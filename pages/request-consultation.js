import React from "react";
import Link from "next/link";
import Cta from "@/components/cta";

export default function Request_consultation() {
  return (
    <main>
      <section
        id="small_banner"
    
      >
        <div className="contain">
          <div className="content">
            <h1>MHN NEWSLETTER - SIGN UP FOR THE HEALTHY E-MALE</h1>
            <p>
              The best workout routines, training tips, and fitness culture
              coverage you can find anywhere. We’re here to help you build into
              the best version of yourself.
            </p>
            <div className="btn_blk">
              <Link href="" className="site_btn blackgreen">
                Start Your Journey Today
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="business_form">
        <div className="contain">
          <div className="outer">
            <div className="content_center">
              <h2>Request a Consultation</h2>
              <p>Webinar with our digital expert</p>
            </div>
            <form>
              <div className="bulk ">
                <div className="row">
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <input
                        type=""
                        className="input"
                        required
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <input
                        type=""
                        className="input"
                        required
                        placeholder="Sur Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="txtGrp">
                      <input
                        type=""
                        className="input"
                        required
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <input
                        type=""
                        className="input phone"
                        required
                        placeholder="Company Number"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <input
                        type=""
                        className="input"
                        required
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="txtGrp">
                      <select className="input" required>
                        <option value="">Choose a Date</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="check-flex">
                      <input type="checkbox" />
                      <label>
                        I agree with the
                        <a href="" className="underline">
                           Privacy Policy
                        </a>
                        .
                      </label>
                    </div>
                  </div>
                  <div className="btn_blk">
                    <button className="site_btn">Let’s go</button>
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
