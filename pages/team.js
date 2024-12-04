import React from "react";
import Link from "next/link";
import Cta from "@/components/cta";

export default function Team() {
  return (
    <>
      <main>
        <section id="experts">
          <div className="contain">
            <div className="text">
              <h2>Meet the Experts Behind Your Care</h2>
              <p>
                Our team of specialists is dedicated to helping you achieve your
                best health.
              </p>
            </div>
            <div className="flex">
              <div className="col1">
                <h2>Our Commitment to Your Wellness</h2>
                <p>
                  Our team consists of highly trained medical professionals,
                  health experts, and wellness advocates. Together, we bring
                  decades of experience and a shared passion for guiding our
                  clients on their health journeys with evidence-based care and
                  personalized attention.
                </p>
                <div className="btn_blk">
                  <Link href="" className="site_btn">
                    Start Your Consultation
                  </Link>
                </div>
              </div>
              <div className="col2">
                <div className="image">
                  <img src="/images/team_pg1.png" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="expert">
          <div className="contain">
            <div className="text">
              <h2>Meet the Expert</h2>
              <p>
                Our team of experienced healthcare providers is here to guide
                you every step of the way.
              </p>
            </div>
            <div className="flex">
              <div className="col1">
                <div className="image">
                  <img src="/images/team.png" />
                </div>
              </div>
              <div className="col2">
                <div className="title">Practice Manager</div>
                <h3>Leslie Henry</h3>
                <h6>Health and Wellness Coach</h6>
                <p>
                  Leslie Henry, a founding member of PureRx.co, brings a wealth
                  of experience and passion to her role as Practice Manager.
                  With years of dedicated service in the field of Health &
                  Wellness, Leslie is committed to ensuring that every aspect of
                  PureRx.co runs seamlessly and efficiently.
                </p>
                <p>
                  Leslie’s journey in the healthcare industry began early in her
                  career, where she quickly became known for her unwavering
                  dedication to patient care. Her extensive background in Health
                  & Wellness has equipped her with a deep understanding of the
                  unique challenges and opportunities in this field.
                </p>
                <div className="btn_blk">
                  <Link href="" className="site_btn blackgreen">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="text2">
              <p>
                As a founding member of PureRx.co, Leslie played a pivotal role
                in shaping the vision and values that guide the practice today.
                Her commitment to providing the highest standard of care,
                combined with her exceptional leadership skills, make her an
                indispensable asset to our team.
              </p>
              <p>
                Beyond her professional achievements, Leslie is known for her
                warmth and approachability. Patients and colleagues alike
                appreciate her willingness to go above and beyond to ensure
                their needs are met. She firmly believes that personalized care
                and open communication are at the heart of every successful
                patient-provider relationship.
              </p>
              <p>
                Beyond her professional achievements, Leslie is known for her
                warmth and approachability. Patients and colleagues alike
                appreciate her willingness to go above and beyond to ensure
                their needs are met. She firmly believes that personalized care
                and open communication are at the heart of every successful
                patient-provider relationship.
              </p>
              <p>
                In her free time, Leslie enjoys staying active, exploring new
                wellness trends, and spending quality time with her family. Her
                personal commitment to health and well-being mirrors her
                professional dedication to helping others achieve their optimal
                health.
              </p>
              <p>
                Leslie Henry’s leadership and expertise are integral to
                PureRx.co’s mission of empowering individuals to lead healthier,
                more fulfilling lives through tailored wellness solutions. Her
                passion for Health & Wellness, combined with her exceptional
                organizational skills, make her an invaluable part of the
                PureRx.co team.
              </p>
            </div>
          </div>
        </section>
        <section id="ed_options" className=" ">
          <div className="contain">
            <div className="outer">
              <div className="flex">
                <div className="col1">
                  <h2>Our Approach to Care</h2>
                  <p>Compassion, Expertise, Personalized Care, Integrity</p>
                </div>
                <div className="col2">
                  <p>
                    Our team is united by a commitment to integrity, compassion,
                    and a personalized approach to every client’s health
                    journey. We believe in partnering with you to achieve
                    results and celebrate your successes.
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
        <section id="meet_team">
          <div className="contain">
            <div className="content_center">
              <h2>Meet Our Team</h2>
            </div>
            <div className="flex">
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="/images/mt1.png" />
                  </div>
                  <h5>
                    {" "}
                    <strong>Dr. John Doe, MD -</strong> Chief Medical Officer
                  </h5>
                  <p>
                    Dr. Doe combines years of clinical expertise with a
                    client-focused approach, ensuring each treatment is safe,
                    effective, and customized to individual health goals.
                  </p>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="/images/mt2.png" />
                  </div>
                  <h5>
                    <strong>Dr. John Doe, MD -</strong> Chief Medical Officer
                  </h5>
                  <p>
                    Dr. Doe combines years of clinical expertise with a
                    client-focused approach, ensuring each treatment is safe,
                    effective, and customized to individual health goals.
                  </p>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="/images/mt3.png" />
                  </div>
                  <h5>
                    <strong>Dr. John Doe, MD -</strong> Chief Medical Officer
                  </h5>
                  <p>
                    Dr. Doe combines years of clinical expertise with a
                    client-focused approach, ensuring each treatment is safe,
                    effective, and customized to individual health goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        < Cta />
      </main>
    </>
  );
}
