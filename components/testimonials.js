import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const testi_slider = {
    // speed: 20000,
    // cssEase: 'linear',
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 0,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
    <>
      <Slider {...testi_slider}>
        <div className="item">
          <div className="inner">
            <div className="image">
              <img src="/images/t1.png" />
            </div>

            <div className="text">
              <p>
                Thanks to their testosterone therapy, I feel more energized and
                confident than ever.
              </p>
              <div className="testi_footer">
                <div className="stars">
                  <img src="images/star.svg" />
                  <img src="images/star.svg" />
                  <img src="images/star.svg" />
                  <img src="images/star.svg" />
                  <img src="images/star.svg" />
                </div>
                <h4>John D.</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="inner">
            <div className="image">
            <img src="/images/t2.png" />

            </div>

            <div className="text">
              <p>
                Thanks to their testosterone therapy, I feel more energized and
                confident than ever.
              </p>
              <div className="testi_footer">
                <div className="stars">
                  <img src="images/star.svg" />
                  <img src="images/star.svg" />
                  <img src="images/star.svg" />
                  <img src="images/star.svg" />
                  <img src="images/star.svg" />
                </div>
                <h4>John D.</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="inner">
            <div className="image">
            <img src="/images/t1.png" />

            </div>

            <div className="text">
              <p>
                Thanks to their testosterone therapy, I feel more energized and
                confident than ever.
              </p>
              <div className="testi_footer">
                <div className="stars">
                  <img src="images/star.svg" />
                  <img src="images/star.svg" />
                  <img src="images/star.svg" />
                  <img src="images/star.svg" />
                  <img src="images/star.svg" />
                </div>
                <h4>John D.</h4>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
}
