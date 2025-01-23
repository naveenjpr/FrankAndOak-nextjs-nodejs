import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FiRotateCcw } from "react-icons/fi"

import Slider from "react-slick"

import { MdLocalShipping } from "react-icons/md"
import Image from "next/image"

export default function Seondslider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <div className="w-[100%] content-auto h-[400px]  relative -z-[999]	">
        <div className=" flex flex-col justify-center items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
          <span className="md:text-[55px] text-[27px] text-white">
            A Mallorca Story
          </span>
          <span className="md:text-[34px] text-[17px] text-white my-[30px]">
            Summer 2024
          </span>
          <div className="flex gap-[20px] ">
            <button className="bg-white text-black md:px-[70px] px-[35px] py-[15px]">
              Women
            </button>
            <button className="bg-white text-black md:px-[70px] px-[35px] py-[15px]">
              men
            </button>
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-black ">
        <div className="md:w-[80%] w-[100%] md:px-[0px] px-[12px] mx-auto grid grid-cols-4 items-center justify-between py-[20px] text-white">
          <div className="flex items-center  ">
            <MdLocalShipping className="mr-[10px]" />

            <h5 className="text-white md:text-[15px] text-[8px]">Free Shipping over $79</h5>
          </div>
          <div className="flex items-center ">
            <FiRotateCcw className="mr-[10px]" />

            <h5 className="text-white md:text-[15px] text-[8px]">free returns </h5>
          </div>
          <div className="flex items-center ">
            <img
              src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/loyalty_logo_light.png?v=1672326811"
              alt="testing"
              width={15}
              height={15}
              className="mr-[10px]"
            />

            <h5 className="text-white md:text-[15px] text-[8px]">Earn Points</h5>
          </div>

          <div className="flex items-center ">
            <img
              src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/Sezzle.png?v=1704400405"
              alt="testing"
              className="w-[15px] h-[15px] mr-[14px]"
            />

            <h5 className="text-white md:text-[15px] text-[8px]">Buy Now,Pay Later</h5>
          </div>
        </div>
      </div>
    </>
  )
}
