import React from "react";
import Link from "next/link";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  const benefitslider = {
    // speed: 20000,
    // cssEase: 'linear',
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 0,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
     
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false ,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          initialSlide: 1,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
  return (
    <div>
      <section id="banner">
        <div className="contain">
          <div className="content_center">
            <h1>Rediscover Your Vitality and Health</h1>
            <p>
              Empowering men to lead stronger, healthier lives with cutting-edge
              therapies.
            </p>
            <div className="btn_blk">
              <Link href="" className="site_btn">
                Request a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="partner">
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
      <section id="blackbox">
        <div className="contain">
          <div className="outer">
            <div className="text">
              <h2>
                Trt Erectile Dysfucntion Post Cycle Therapy Infertility Peptides
                Weight Loss
              </h2>
              <p>Life Without Limits</p>
              <div className="btn_blk">
                <Link href="" className="site_btn blackgreen">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="image">
              <img src="/images/men.png" />
            </div>
          </div>
        </div>
      </section>
      <section id="medicines">
        <div className="contain">
          <div className="flex">
            <div className="coll">
              <div className="inner">
                <div className="image">
                  <img src="/images/m1.png" />
                </div>
                <div className="text">
                  <h4>Testosterone Therapy</h4>
                  <p>
                    Boost energy, focus, and vitality with our specialized
                    testosterone therapy.
                  </p>
                </div>
              </div>
            </div>
            <div className="coll">
              <div className="inner">
                <div className="image">
                  <img src="/images/m2.png" />
                </div>
                <div className="text">
                  <h4>Advanced Peptides</h4>
                  <p>
                    Discover the benefits of peptide therapy to support muscle
                    growth, recovery, and overall wellness.
                  </p>
                </div>
              </div>
            </div>
            <div className="coll">
              <div className="inner">
                <div className="image">
                  <img src="/images/m3.png" />
                </div>
                <div className="text">
                  <h4>Weight Loss</h4>
                  <p>
                    Personalized weight loss plans to help you reach and
                    maintain a healthy weight.
                  </p>
                </div>
              </div>
            </div>
            <div className="coll">
              <div className="inner">
                <div className="image">
                  <img src="/images/m4.png" />
                </div>
                <div className="text">
                  <h4>ED Medications</h4>
                  <p>
                    Effective treatments for improved sexual health and
                    confidence.
                  </p>
                </div>
              </div>
            </div>
            <div className="coll">
              <div className="inner">
                <div className="image">
                  <img src="/images/m5.png" />
                </div>
                <div className="text">
                  <h4>Supplements</h4>
                  <p>Tailored supplements to support your health journey.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="works">
        <div className="contain">
          <div className="outer">
            <div className="text">
              <h2>How It Works</h2>
              <p>
                Getting started with us is simple. Here’s how our process works
              </p>
            </div>
            <div className="btn_blk">
              <Link href="" className="site_btn blackgreen">
                Learn More About Our Process
              </Link>
            </div>
          </div>
          <div className="flex">
            <div className="coll">
              <div className="inner">
                <h4>Book Your Consultation</h4>
                <p>
                  Schedule a free consultation to discuss your health goals.
                </p>
                <div className="number">01</div>
              </div>
            </div>
            <div className="coll">
              <div className="inner">
                <h4>Health Assessment</h4>
                <p>
                  We assess your health to create a personalized plan that fits
                  your needs.
                </p>
                <div className="number">02</div>
              </div>
            </div>
            <div className="coll">
              <div className="inner">
                <h4>Begin Your Journey</h4>
                <p>
                  Start your customized plan and achieve your health goals with
                  our support.
                </p>
                <div className="number">03</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="therapy">
        <div className="contain">
          <div className="flex">
            <div className="col1">
              <div className="image">
                <img src="/images/men2.png" />
              </div>
            </div>
            <div className="col2">
              <div className="inner">
                <h2>Peptide Therapies</h2>
                <p>
                  Peptide therapies play a pivotal role in elevating the body’s
                  innate growth hormone levels, which in turn unlocks a spectrum
                  of benefits.
                </p>
                <p>
                  These benefits encompass improved post-exercise recovery,
                  expedited wound healing, effective weight management,
                  heightened energy levels, enhanced physical performance, and
                  optimized muscle repair.
                </p>
                <p>
                  Discover how peptide therapies can empower your journey toward
                  better health and well-being.
                </p>
                <ul>
                  <li>Cjc 1295</li>
                  <li>Ipamorelin</li>
                  <li>Semaglutide</li>
                  <li>Tesamorelin</li>
                  <li>Sermorelin</li>
                  <li>Aod 9604</li>
                  <li>Bpc 157</li>
                </ul>
                <div className="btn_blk">
                  <Link href="" className="site_btn color">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="benefit">
        <div className="contain">
          <div className="outer">
            <h2>Key Benefits of Testosterone Therapy</h2>
          </div>
          <Slider {...benefitslider}>
            <div className="item">
              <div className="inner">
                <h4>
                  Muscle Development, Size Enhancement, and Increased Strength
                </h4>
                <p>
                  Testosterone Replacement Therapy (TRT) leads to a
                  dosage-dependent augmentation in muscle volume, primarily
                  achieved through muscle fiber hypertrophy.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="inner">
                <h4>Fat Reduction and Waistline Slimming</h4>
                <p>
                  Testosterone is recognized for its role in regulating
                  carbohydrate, protein, and fat metabolism. In men with low
                  testosterone levels, testosterone replacement therapy (TRT)
                  has demonstrated its ability to achieve enduring weight loss.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="inner">
                <h4>Enhanced Concentration and Cognitive Function</h4>
                <p>
                  For individuals with Low-T, testosterone replacement therapy
                  can enhance executive function and cognitive abilities. Low
                  natural testosterone levels are linked to a heightened risk of
                  Alzheimer’s disease and mild cognitive impairment as men age.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      <section id="services">
        <div className="contain">
          <div className="content_center">
            <h2>Science Behind Our Services</h2>
            <p>
              We believe in evidence-backed therapies to help you achieve
              sustainable results. Here’s a look at the science behind our
              approach.
            </p>
          </div>
          <div className="flex">
            <div className="coll">
              <div className="image">
                <img src="/images/s1.png" />
                <div className="text">
                  <h4>The Benefits of Testosterone Therapy</h4>
                  <p>Enhance energy, focus, and overall wellness.</p>
                </div>
              </div>
            </div>
            <div className="coll">
              <div className="image">
                <img src="/images/s2.png" />
                <div className="text">
                  <h4>How Peptides Work</h4>
                  <p>
                    Support muscle growth, recovery, and cellular health
                    naturally.
                  </p>
                </div>
              </div>
            </div>
            <div className="coll">
              <div className="image">
                <img src="/images/s3.png" />
                <div className="text">
                  <h4>Why Supplements Matter</h4>
                  <p>Customized supplements to target specific health needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testi">
        <div className="contain">
          <div className="outer">
            <div className="text">
              <h2>What Our Clients Are Saying</h2>
              <p>
                See how our treatments have helped others achieve their health
                goals.
              </p>
            </div>
          </div>
          <Testimonials />
        </div>
      </section>
      <section id="greenbg">
        <div className="contain">
          <div className="outer">
            <div className="content_center">
              <h2>Affordable Plans for Every Lifestyle</h2>
              <p>
                Choose a plan that suits your needs and lifestyle. We’re
                committed to offering competitive, transparent pricing.
              </p>
              <div className="btn_blk">
                <Link href="" className="site_btn blank">
                  Request a Free Consultation
                </Link>
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
              Our team of experienced healthcare providers is here to guide you
              every step of the way.
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
                Leslie Henry, a founding member of PureRx.co, brings a wealth of
                experience and passion to her role as Practice Manager. With
                years of dedicated service in the field of Health & Wellness,
                Leslie is committed to ensuring that every aspect of PureRx.co
                runs seamlessly and efficiently.
              </p>
              <p>
                Leslie’s journey in the healthcare industry began early in her
                career, where she quickly became known for her unwavering
                dedication to patient care. Her extensive background in Health &
                Wellness has equipped her with a deep understanding of the
                unique challenges and opportunities in this field.
              </p>
              <div className="btn_blk">
                <Link href="" className="site_btn blackgreen">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="health">
        <div className="contain">
          <div className="content_center">
            <h2>Your Health Guide</h2>
            <p>
              Stay informed with expert health tips, lifestyle advice, and
              wellness guides tailored for you.
            </p>
          </div>
          <div className="flex">
            <div className="coll">
              <div className="image">
                <img src="/images/h1.png" />
                <div className="text">
                  <h4>5 Myths About Testosterone Therapy</h4>
                </div>
              </div>
            </div>
            <div className="coll">
              <div className="image">
                <img src="/images/h2.png" />
                <div className="text">
                  <h4>Top 10 Benefits of Peptide Therapy</h4>
                </div>
              </div>
            </div>
            <div className="coll">
              <div className="image">
                <img src="/images/h3.png" />
                <div className="text">
                  <h4>Simple Tips for Effective Weight Loss</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  <Cta />
    </div>
  );
}
