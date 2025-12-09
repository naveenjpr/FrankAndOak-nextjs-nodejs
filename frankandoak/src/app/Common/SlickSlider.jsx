import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SlickSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <h3 className="text-center font-bold text-[12px] text-yellow-400">
            Enjoy summer in beachwear styles that are all about freedom and
            comfort. Shop Women Shop Men
          </h3>
        </div>
        <div>
          <h3 className="text-center font-bold text-[12px] text-yellow-400">
            Enjoy summer in beachwear styles that are all about freedom and
            comfort. Shop Women Shop Men
          </h3>
        </div>
        <div>
          <h3 className="text-center font-bold text-[12px] text-yellow-400">
            Enjoy summer in beachwear styles that are all about freedom and
            comfort. Shop Women Shop Men
          </h3>
        </div>
        <div>
          <h3 className="text-center font-bold text-[12px] text-yellow-400">
            Enjoy summer in beachwear styles that are all about freedom and
            comfort. Shop Women Shop Men
          </h3>
        </div>
        <div>
          <h3 className="text-center font-bold text-[12px] text-yellow-400">
            Enjoy summer in beachwear styles that are all about freedom and
            comfort. Shop Women Shop Men
          </h3>
        </div>
        <div>
          <h3 className="text-center font-bold text-[12px] text-yellow-400">
            Enjoy summer in beachwear styles that are all about freedom and
            comfort. Shop Women Shop Men
          </h3>
        </div>
      </Slider>
    </>
  );
}
