import React from "react";
import Link from "next/link";
import Cta from "@/components/cta";

export default function Request_consultation() {
  return (
    <main>
      <section id="contact">
        <div className="contain">
          <div className="content_center">
            <h2>Get In Touch With Us</h2>
          </div>
          <div className=" flex outer">
            <div className="colL">
              <h4>Let’s discuss something cool together</h4>
              <p>
                Suspendisse posuere nisi eu neque pharetra tristique iaculis
                erat tempor. Curabitur sed justo auctor sodals nunc in finibus
                purus donec tellus tristique iaculis erat tempor.
              </p>
              <ul>
                <li>
                  <a href="/contact">
                    <img src="/images/scc1.svg" />
                    <span>rentaro@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="/contact">
                    <img src="/images/scc2.svg" />
                    <span>+123 456 789</span>
                  </a>
                </li>
                <li>
                  <div>
                    <img src="/images/scc3.svg" />
                    <span>123 Street 456 House</span>
                  </div>
                </li>
              </ul>
              <div className="social_logon">
                <p>Follow Us | </p>
                <a target="_blank" rel="noreferrer" href="/">
                  <img src="/images/social1.svg" />
                </a>
                <a target="_blank" rel="noreferrer" href="/">
                  <img src="/images/social2.svg" />
                </a>
                <a target="_blank" rel="noreferrer" href="/">
                  <img src="/images/social5.svg" />
                </a>
                <a target="_blank" rel="noreferrer" href="/">
                  <img src="/images/social4.svg" />
                </a>
              </div>
            </div>
            <div className="colR">
              <form>
                <h4>Need Any Help?</h4>
                <div className="txt_grp">
                  <input
                    type="text"
                    className="input"
                    name="fname"
                    placeholder="First Name"
                  />
                </div>
                <div className="txt_grp">
                  <input
                    type="text"
                    className="input"
                    name="lname"
                    placeholder="Last Name"
                  />
                </div>
                <div className="txt_grp">
                  <input
                    type="text"
                    className="input"
                    name="phone"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="txt_grp">
                  <input
                    type="text"
                    className="input"
                    name="email"
                    placeholder="Email Address"
                  />
                </div>
                <div className="txt_grp">
                  <textarea
                    className="input"
                    name="message"
                    placeholder="Enter Your Message Here"
                  ></textarea>
                </div>
                <div className="btn_blk">
                  <button type="submit" className="site_btn color">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </main>
  );
}
