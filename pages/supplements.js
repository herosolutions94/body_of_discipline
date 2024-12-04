import React from "react";
import Link from "next/link";
import Cta from "@/components/cta";
import FAQ from "@/components/faq";

export default function Supplements() {
  return (
    <>
      <main>
        <section id="supplement">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <h2>Boost Your Health with High-Quality Supplements</h2>
                <p>
                  Discover our curated range of supplements designed to support
                  optimal wellness, energy, and vitality.
                </p>
                <div className="btn_blk">
                  <Link href="" className="site_btn ">
                    Request a Consultation
                  </Link>
                </div>
              </div>
              <div className="col2">
                <div className="image">
                  <img src="/images/supplements.png" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="supple_range">
          <div className="contain">
            <div className="content_center">
              <h2>Explore Our Supplement Range</h2>
              <p>
                Whether you’re looking to improve energy, support immunity, or
                optimize recovery, we have a solution for you.
              </p>
            </div>
            <div className="flex">
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="/images/sup1.png" />
                  </div>
                  <h4>Testosterone</h4>
                  <h5>Cyptionate - Injectable</h5>
                  <p>
                    This method is popular among men who want to feel more
                    confident and strong. It is a bold move to take control of
                    your hormone levels and can really improve your life.
                  </p>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="/images/sup2.png" />
                  </div>
                  <h4>HCG</h4>
                  <h5>SubQ Injectable</h5>
                  <p>
                    Utilized either in conjunction with testosterone or as a
                    standalone treatment, it serves to sustain fertility,
                    elevate natural testosterone levels, and safeguard
                    testicular size and function.
                  </p>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="/images/sup1.png" />
                  </div>
                  <h4>Testosterone</h4>
                  <h5>Oral Tablet</h5>
                  <p>
                    This method is popular among men who want to feel more
                    confident and strong. It is a bold move to take control of
                    your hormone levels and can really improve your life.
                  </p>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="/images/sup1.png" />
                  </div>
                  <h4>Testosterone</h4>
                  <h5>Cyptionate - Injectable</h5>
                  <p>
                    This method is popular among men who want to feel more
                    confident and strong. It is a bold move to take control of
                    your hormone levels and can really improve your life.
                  </p>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="/images/sup1.png" />
                  </div>
                  <h4>Testosterone</h4>
                  <h5>Cyptionate - Injectable</h5>
                  <p>
                    This method is popular among men who want to feel more
                    confident and strong. It is a bold move to take control of
                    your hormone levels and can really improve your life.
                  </p>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="/images/sup1.png" />
                  </div>
                  <h4>Testosterone</h4>
                  <h5>Cyptionate - Injectable</h5>
                  <p>
                    This method is popular among men who want to feel more
                    confident and strong. It is a bold move to take control of
                    your hormone levels and can really improve your life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="ed_med_opt" className="choose_supple">
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
                  <img src="/images/cs1.svg" />
                </div>
                <h4>High-Quality Ingredients</h4>
                <p>
                  Each supplement contains only the finest, most effective
                  ingredients to ensure purity and potency.
                </p>
              </div>
              <div className="coll">
                <div className="icon">
                  <img src="/images/cs2.svg" />
                </div>
                <h4>Clinically-Researched Formulas</h4>
                <p>
                  Our products are formulated based on the latest scientific
                  research to deliver real results.
                </p>
              </div>
              <div className="coll">
                <div className="icon">
                  <img src="/images/cs3.svg" />
                </div>
                <h4>Enhanced Bioavailability</h4>
                <p>
                  We use advanced formulations that maximize absorption, so your
                  body gets the full benefit of each dose.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="peptide"
          className=" spple_sicnece "
        >
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="image">
                  <img src="/images/science3.png" />
                </div>
              </div>
              <div className="col2">
                <h2>Science-Backed for Effective Results</h2>
                <p>
                  Our supplements are developed to work in harmony with your
                  body, using potent ingredients that have been tested for their
                  effectiveness. Each product is designed to help you address
                  specific wellness needs safely and effectively.
                </p>

                <div className="btn_blk">
                  <Link href="" className="site_btn">
                    Start Your Journey Today
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="work_labs" className="padding-minus suppe_intro">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="image1">
                  <img src="/images/hef.png" />
                </div>
              </div>
              <div className="col2">
                <h2>Hear Stefen’s Stroy</h2>
                <p>
                  "I’ve tried many supplements before, but these are on a whole
                  different level. The energy boost I feel is incredible, and I
                  can tell the quality is top-notch. I feel healthier and more
                  vibrant every day."
                </p>
                <div className="btn_blk">
                  <Link href="" className="site_btn color ">
                  Start Your Journey Today
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
