import React from "react";
import Link from "next/link";
import Cta from "@/components/cta";
import FAQ from "@/components/faq";
export default function Ed_medications() {
  return (
    <>
      <main>
        <section id="ed_med">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="image">
                  <img src="/images/med.png" />
                </div>
              </div>
              <div className="col2">
                <div className="outer">
                  <h2>
                    Effective, Personalized ED Treatment for Lasting Confidence
                  </h2>
                  <p>
                    Our expert-led ED solutions offer a discreet, science-backed
                    approach to help you regain control and confidence.
                  </p>
                  <div className="btn_blk">
                    <Link href="" className="site_btn blackgreen">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="ed_options" className="padding-minus">
          <div className="contain">
            <div className="outer">
              <div className="flex">
                <div className="col1">
                  <h2>Understanding ED and Your Treatment Options</h2>
                </div>
                <div className="col2">
                  <p>
                    Erectile dysfunction (ED) is a common but treatable
                    condition that can impact quality of life. We offer a range
                    of FDA-approved medications and innovative therapies
                    tailored to your unique needs, helping you reclaim
                    confidence and intimacy safely and effectively.
                  </p>
                  <div class="btn_blk">
                    <a class="site_btn blank" href="/">
                      Request a Free Consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="ed_process">
          <div className="contain">
            <div className="text">
              <h2>How Our Treatment Process Works</h2>
              <p>
                Our approach to ED treatment is personalized, beginning with a
                consultation to understand your medical history and specific
                needs. Based on this, we design a plan with medications and
                dosages suited to you. Throughout the process, our team is here
                to provide support, monitor progress, and make adjustments as
                needed.
              </p>
            </div>
            <div className="flex">
              <div className="coll">
                <div className="inner">
                  <h4>Confidential Consultation</h4>
                  <p>
                    Meet with our specialists for a private consultation to
                    discuss your symptoms and goals.
                  </p>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <h4>Customized Treatment Plan</h4>
                  <p>
                    Receive a tailored plan that may include medication,
                    lifestyle adjustments, and ongoing support.
                  </p>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <h4>Continuous Support and Monitoring</h4>
                  <p>
                    egular check-ins and progress updates ensure your treatment
                    remains effective.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="ed_med_opt">
          <div className="contain">
            <div className="content_center">
              <h2>Our ED Medication Options</h2>
              <p>
                We offer a range of options to address various aspects of ED,
                ensuring that each treatment is safe, effective, and suited to
                your needs.
              </p>
            </div>
            <div className="flex">
              <div className="coll">
                <div className="icon">
                  <img src="/images/edo2.png" />
                </div>
                <h4>PDE5 Inhibitors</h4>
                <p>
                  These medications improve blood flow and are effective for
                  many men.
                </p>
              </div>
              <div className="coll">
                <div className="icon">
                  <img src="/images/edo3.png" />
                </div>
                <h4>Injection Therapy</h4>
                <p>
                  Administered as needed, this option is ideal for those who may
                  not respond to oral medications.
                </p>
              </div>
              <div className="coll">
                <div className="icon">
                  <img src="/images/edo1.png" />
                </div>
                <h4>Hormone Therapy</h4>
                <p>
                  For cases where hormone imbalance may be contributing to ED,
                  we provide safe and monitored hormone therapy options.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="approach">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <h2>Why Choose Us for ED Treatment?</h2>
                <p>
                  Our program is designed with your privacy, health, and results
                  in mind. We offer comprehensive support every step of the way,
                  from confidential consultations to ongoing progress
                  monitoring.
                </p>
                <div className="btn_blk">
                  <Link href="" className="site_btn blackgreen">
                    Start Your Journey Today
                  </Link>
                </div>
              </div>
              <div className="col2">
                <ul>
                  <li>
                    <h4>Personalized Care</h4>
                    <p>
                      Every treatment plan is customized to meet your unique
                      health needs.
                    </p>
                  </li>
                  <li>
                    <h4>Expert Guidance</h4>
                    <p>
                      Our team of specialists is highly experienced in men’s
                      health and ED treatment.
                    </p>
                  </li>
                  <li>
                    <h4>Confidential Support</h4>
                    <p>
                      We prioritize your privacy and provide discreet care
                      throughout your journey.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="weight_story" className="padding-minus ed_Story">
          <div className="contain">
            <div className="outer">
              <div className="text">
                <h2>Hear James’s Story</h2>
                <p className="italic">
                  "After struggling with ED for years, I finally found a
                  solution that works for me. The team provided a plan tailored
                  to my needs, and the support has been incredible. I feel more
                  confident and secure in my relationships."
                </p>
                <div className="btn_blk">
                  <Link href="" className="site_btn blackgreen">
                  Request a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="faq" >
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
