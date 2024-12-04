import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Featured_testimonials() {
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
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
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
    <>
      <div className="featued_testi">
        <Slider {...testi_slider}>
          <div className="item">
            <div className="inner">
              <div className="head">
                <div className="image">
                  <img src="/images/f_testi1.png" />
                </div>
                <div className="testi_footer">
                  <h4>John D.</h4>
                  <div className="stars">
                    <img src="images/star.svg" />
                    <img src="images/star.svg" />
                    <img src="images/star.svg" />
                    <img src="images/star.svg" />
                    <img src="images/star.svg" />
                  </div>
                </div>
              </div>
              <p>
                Working with the team has been a life-changing experience. My
                energy levels have never been higher, and I feel more motivated
                than ever.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="inner">
              <div className="head">
                <div className="image">
                  <img src="/images/f_testi1.png" />
                </div>
                <div className="testi_footer">
                  <h4>John D.</h4>
                  <div className="stars">
                    <img src="images/star.svg" />
                    <img src="images/star.svg" />
                    <img src="images/star.svg" />
                    <img src="images/star.svg" />
                    <img src="images/star.svg" />
                  </div>
                </div>
              </div>
              <p>
                Working with the team has been a life-changing experience. My
                energy levels have never been higher, and I feel more motivated
                than ever.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="inner">
              <div className="head">
                <div className="image">
                  <img src="/images/f_testi1.png" />
                </div>
                <div className="testi_footer">
                  <h4>John D.</h4>
                  <div className="stars">
                    <img src="images/star.svg" />
                    <img src="images/star.svg" />
                    <img src="images/star.svg" />
                    <img src="images/star.svg" />
                    <img src="images/star.svg" />
                  </div>
                </div>
              </div>
              <p>
                Working with the team has been a life-changing experience. My
                energy levels have never been higher, and I feel more motivated
                than ever.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="inner">
              <div className="head">
                <div className="image">
                  <img src="/images/f_testi1.png" />
                </div>
                <div className="testi_footer">
                  <h4>John D.</h4>
                  <div className="stars">
                    <img src="images/star.svg" />
                    <img src="images/star.svg" />
                    <img src="images/star.svg" />
                    <img src="images/star.svg" />
                    <img src="images/star.svg" />
                  </div>
                </div>
              </div>
              <p>
                Working with the team has been a life-changing experience. My
                energy levels have never been higher, and I feel more motivated
                than ever.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}
