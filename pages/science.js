import React from "react";
import Link from "next/link";
import Cta from "@/components/cta";
import FAQ from "@/components/faq";

export default function Science() {
  return (
    <>
      <main>
        <section id="ed_med" className="sc_pg">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="image">
                  <img src="/images/sc1.png" />
                </div>
              </div>
              <div className="col2">
                <div className="outer">
                  <h2>The Science Behind Our Treatments</h2>
                  <p>Evidence-based solutions for better health outcomes.</p>
                  <div className="btn_blk">
                    <Link href="" className="site_btn blackgreen">
                      Start Your Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="ed_options" className=" sc_green">
          <div className="contain">
            <div className="outer">
              <div className="flex">
                <div className="col1">
                  <h2>Our Commitment to Science and Research</h2>
                </div>
                <div className="col2">
                  <p>
                    Our treatments are built on a foundation of rigorous
                    scientific research and clinical expertise. We partner with
                    leading experts and stay updated with the latest findings in
                    health science to ensure our clients receive the most
                    effective, evidence-based care.
                  </p>
                  <div class="btn_blk">
                    <a class="site_btn blank" href="/">
                      View Plans and Pricing
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="evidence_appr">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <h2>Our Evidence-Based Approach</h2>
                <p>
                  We don’t believe in guesswork. Each aspect of our program is
                  informed by research and tailored to achieve optimal outcomes.
                  From our assessment methods to our treatment plans, every step
                  is backed by science.
                </p>
                <div className="btn_blk">
                  <Link href="" className="site_btn">
                    Start Your Journey Today
                  </Link>
                </div>
              </div>
              <div className="col2">
                <ul>
                  <li>
                    <h4>Personalized Health Assessments</h4>
                    <p>Detailed lab work and evaluations.</p>
                  </li>
                  <li>
                    <h4>Proven Treatments</h4>
                    <p>Utilizing only clinically studied therapies.</p>
                  </li>
                  <li>
                    <h4>Data-Driven Adjustments</h4>
                    <p>Regularly refining plans based on measurable results.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="treat_work">
          <div className="contain">
            <div className="content_center">
              <h2>How Our Treatments Work</h2>
            </div>
            <div className="flex">
              <div className="coll">
                <div className="inner">
                  <ul>
                    <li>
                      <a className="active" href="/">Testosterone Therapy</a>
                    </li>
                    <li>
                      <a href="/">Advanced Peptides</a>
                    </li>
                    <li>
                      <a href="/">Weight Loss Solutions</a>
                    </li>
                    <li>
                      <a href="/">ED Medications</a>
                    </li>
                    <li>
                      <a href="/">Supplements</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="coll">
                <div className="image">
                  <img src="/images/tws.png" />
                  <div className="text">
                    <a>
                      According to studies published in the Journal of Clinical
                      Endocrinology.
                    </a>
                  </div>
                </div>
              </div>
              <div className="coll">
                <h3>The Role of Testosterone in Health</h3>
                <p>
                  We don’t believe in guesswork. Each aspect of our program is
                  informed by research and tailored to achieve optimal outcomes.
                  From our assessment methods to our treatment plans, every step
                  is backed by science.
                </p>
              </div>
            </div>
          </div>
        </section>

      <section id="partner" className="padding-minus">
        <div className="contain">
          <div className="flex">
            <div className="coll">
              <div className="image">
                <img src="/images/p1.svg" />
              </div>
            </div>
            <div className="coll">
              <div className="image">
                <img src="/images/p2.svg" />
              </div>
            </div>
            <div className="coll">
              <div className="image">
                <img src="/images/p3.svg" />
              </div>
            </div>
            <div className="coll">
              <div className="image">
                <img src="/images/p4.svg" />
              </div>
            </div>
            <div className="coll">
              <div className="image">
                <img src="/images/p5.svg" />
              </div>
            </div>
            <div className="coll">
              <div className="image">
                <img src="/images/p6.svg" />
              </div>
            </div>
            <div className="coll">
              <div className="image">
                <img src="/images/p7.svg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="clinical">
        <div className="contain">
          <div className="text">
            <h2>Clinical Results You Can Trust</h2>
            <p>Our programs are grounded in clinical studies and data from our own client outcomes.</p>
          </div>
          <div className="flex">
            <div className="coll">
              <div className="inner"> 
                <h3>98% </h3>
                <h4>Treatment Efficacy</h4>
                <p>98% of clients report improved energy within the first 4 weeks.</p>
              </div>
            </div>
            <div className="coll">
              <div className="inner"> 
                <h3>89% </h3>
                <h4>Success in Weight Loss</h4>
                <p>Clients experience average weight loss of X% over 6 months.</p>
              </div>
            </div>
            <div className="coll">
              <div className="inner"> 
                <h3>85% </h3>
                <h4>Improvement in Vitality</h4>
                <p>85% report enhanced mood and focus within 3 months.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="mt0">
          <div className="contain">
            <div className="outer">
              <div className="content_center">
                <h2>Frequently Asked Question</h2>
              </div>
       
            <FAQ />
            </div>
          </div>
        </section>
        <Cta />
      </main>
    </>
  );
}
