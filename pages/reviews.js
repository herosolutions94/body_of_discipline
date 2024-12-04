import React from "react";
import Link from "next/link";
import Cta from "@/components/cta";

export default function Reviews() {
  return (
    <main>
      <section id="small_banner">
        <div className="contain">
          <div className="content">
            <h1>Our Journey to Empowering Wellness</h1>
            <p>Founded on a passion for health, driven by results.</p>
            <div className="btn_blk">
              <Link href="" className="site_btn blackgreen">
                Discover Our Approach
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="miss_visi">
        <div className="contain">
          <div className="content_center">
            <h2>The Beginning of Our Mission</h2>
            <p>
              Our journey began with a simple yet powerful goal: to make
              specialized health treatments accessible and effective for
              everyone. We saw firsthand how transformative personalized care
              can be, and we wanted to bring that level of care to people
              seeking real solutions for their health.
            </p>
          </div>
          <div className="flex">
            <div className="coll">
              <div className="inner">
                <h3>Our Mission</h3>
                <p>
                  To empower individuals to take control of their health and
                  well-being through science-backed, personalized care. Our
                  focus is on providing treatments that support long-term
                  wellness, improve quality of life, and address the unique
                  needs of each client."
                </p>
              </div>
            </div>
            <div className="coll">
              <div className="inner">
                <h3>Our Vision</h3>
                <p>
                  To be a trusted leader in health and wellness, where everyone
                  has access to safe, effective, and personalized care that
                  leads to meaningful results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="journey" className="padding-minus">
        <div className="contain">
          <div className="text">
            <h2>Our Journey So Far</h2>
            <p>
              From our humble beginnings to a growing team of professionals, our
              story has been one of commitment and growth. Along the way, we’ve
              continued to learn, innovate, and refine our services to bring our
              clients the best possible outcomes.
            </p>
          </div>
          <div className="flex">
            <div className="coll">
              <div className="inner">
                <h4>Year Founded</h4>
                <p>
                  Launched our first clinic with a focus on hormone therapy.
                </p>
              </div>
            </div>
            <div className="coll">
              <div className="inner">
                <h4>Expansion</h4>
                <p>
                  Expanded to include advanced peptide treatments and weight
                  management.
                </p>
              </div>
            </div>
            <div className="coll">
              <div className="inner">
                <h4>Client Successes</h4>
                <p>Helped over 1,000 clients achieve their health goals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testoright" className="work_app story_core">
        <div className="contain">
          <div className="outer">
            <div className="text">
              <div className="inn_txt">
                <h2>Our Core Values</h2>
                <p>
                  We’re guided by a set of values that define our approach to
                  wellness and our commitment to every client.
                </p>
              </div>
              <div className="btn_blk">
                <Link href="" className="site_btn blackgreen">
                  Start Your Journey Today
                </Link>
              </div>
            </div>

            <ul>
              <li>
                <h4>Integrity</h4>
                <p>We uphold the highest standards in all that we do.</p>
              </li>
              <li>
                <h4>Client-Centered Care</h4>
                <p>
                  Every client’s journey is unique, and we’re here to support
                  them every step of the way.
                </p>
              </li>

              <li>
                <h4>Innovation</h4>
                <p>
                  We constantly pursue advancements in health science to enhance
                  our treatments.
                </p>
              </li>

              <li>
                <h4>Compassion</h4>
                <p>
                  We understand that wellness is personal, and we approach every
                  relationship with empathy and care.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="future">
        <div className="contain">
          <div className="flex">
            <div className="col1">
              <h2>Looking Ahead to the Future</h2>
              <p>
                Our supplements are developed to work in harmony with your body,
                using potent ingredients that have been tested for their
                effectiveness. Each product is designed to help you address
                specific wellness needs safely and effectively.
              </p>

              <div className="btn_blk">
                <Link href="" className="site_btn">
                  Request a Consultation
                </Link>
              </div>
            </div>
            <div className="col2">
              <div className="image">
                <img src="/images/st1.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </main>
  );
}
