"use client"
import Image from "next/image"
import { CiHeart } from "react-icons/ci"
import seasons1 from "../../../public/seasons1.jpg"
import seasons2 from "../../../public/seasonovarlay1.jpg"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useState } from "react"
import frontwomen1 from "../../../public/2220136-3AL.01_aa5e57c6-1091-426a-bf1a-fefdb8ae972a_900x.webp"
import frontwomen2 from "../../../public/2110351-4AC.01_450x.webp"
import frontwomen3 from "../../../public/2510521-3AL.01_450x.webp"
import frontwomen4 from "../../../public/2110353-3AL.01_450x.webp"
import frontwomen5 from "../../../public/2220097-4CV.01_4c570fea-27f8-45ac-8354-202bc56f21da_450x.webp"
import backwomen1 from "../../../public/mobile_07ed95de-6298-4061-b1bf-ef10e20312d7_1536x.webp"
import backwomen2 from "../../../public/2110351-4AC.02_450x.webp"
import backwomen3 from "../../../public/0C2A8900_450x.webp"
import backwomen4 from "../../../public/2110353-3AL.02_450x.webp"
import backwomen5 from "../../../public/2220136-3AL.01_aa5e57c6-1091-426a-bf1a-fefdb8ae972a_900x.webp"
import Slider from "react-slick"

export default function Seasonmusthaves() {
  const [category, setCategory] = useState("women")
  const handleCategoryChange = (category) => {
    setCategory(category)
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  }
  const catimages = [
    {
      image1: frontwomen1,
      image2: backwomen1,
      para: "The Open Back Poplin Maxi Dress in Sepia",
      price: "$130",
    },
    {
      image1: frontwomen2,
      image2: backwomen2,
      para: "The Knit Sweater Vest in White",
      price: "$130",
    },
    {
      image1: frontwomen3,
      image2: backwomen3,
      para: "The Pinafore Linen Dress in Black",
      price: "$130",
    },
    {
      image1: frontwomen4,
      image2: backwomen4,
      para: "The Open Back Poplin Maxi Dress in Sepia",
      price: "$130",
    },
    {
      image1: frontwomen5,
      image2: backwomen5,
      para: "The Open Back Poplin Maxi Dress in Sepia",
      price: "$130",
    },
  ]
  //   console.log(catimages[0].image1)
  return (
    <div className="w-[100%]">
      <div className="flex justify-between px-[20px] mb-[50px]">
        <h1 className="md:text-[35px] text-[16px] font-[600]">
          Forecast: Sunny all day with up to 50% off* summer styles.
        </h1>
        <div className="flex justify-end md:text-[35px] text-[15px] gap-4 font-[600]">
          <button
            onClick={() => handleCategoryChange("women")}
            className={`md:px-4 md:py-2 md:mx-2 px-[5px] rounded ${
              category === "women"
                ? "bg-blue-500 text-white text-[10px]"
                : "bg-gray-200 text-black text-[10px]"
            }`}
          >
            Women's
          </button>
          <button
            onClick={() => handleCategoryChange("men")}
            className={`md:px-4 md:py-2 md:mx-2 px-[5px] rounded ${
              category === "men"
                ? "bg-blue-500 text-white text-[10px]"
                : "bg-gray-200 text-black text-[10px]"
            }`}
          >
            Men's
          </button>
        </div>
      </div>
      {category == "women" ? (
        <div className="w-[95%] mx-auto ">
          <Slider {...settings}>
            {catimages.map((v, i) => {
              return (
                <div className="px-[11px] mx-[10px]">
                  <div className=" relative group duration-500 ">
                    <img
                      src={v.image1.src}
                      alt="testing"
                      className="h-[100%] w-[100%]"
                    />

                    <img
                      src={v.image2.src}
                      alt="tseting"
                      className="absolute top-0 scale-0 group-hover:scale-100 h-[100%] w-[100%]"
                    />
                    <button className="bg-white w-[95%] left-2 h-[50px] text-black absolute bottom-2 scale-0 group-hover:scale-100  ">
                      Quick Add
                    </button>
                  </div>
                  <span className="bg-black text-white absolute right-1 top-1 p-[3px] ">
                    New
                  </span>
                  <div className="flex justify-between py-[10px] px-[5px] ">
                    <p className="text-[15px] font-[600]  w-[90%]">{v.para}</p>
                    <CiHeart className="text-[25px]" />
                  </div>
                  <div className="flex px-[5px]  ">{v.price}</div>
                  <div className="flex text-[#ccc] px-[5px]  ">1 color</div>
                </div>
              )
            })}
          </Slider>
        </div>
      ) : (
        <div className="w-[95%] mx-auto ">
          <Slider {...settings}>
            {catimages.map((v, i) => {
              return (
                <div className="px-[11px] mx-[10px]">
                  <div className=" relative group duration-500 ">
                    <img
                      src={v.image1.src}
                      alt="testing"
                      className="h-[100%] w-[100%]"
                    />

                    <img
                      src={v.image2.src}
                      alt="tseting"
                      className="absolute top-0 scale-0 group-hover:scale-100 h-[100%] w-[100%]"
                    />
                    <button className="bg-white w-[95%] left-2 h-[50px] text-black absolute bottom-2 scale-0 group-hover:scale-100  ">
                      Quick Add
                    </button>
                  </div>
                  <span className="bg-black text-white absolute right-1 top-1 p-[3px] ">
                    New
                  </span>
                  <div className="flex justify-between py-[10px] px-[5px]  ">
                    <p className="text-[15px] font-[600] w-[90%]">{v.para}</p>
                    <CiHeart className="text-[25px]" />
                  </div>
                  <div className="flex px-[5px]   ">{v.price}</div>
                  <div className="flex px-[5px]  text-[#ccc] ">1 color</div>
                </div>
              )
            })}
          </Slider>
        </div>
      )}
    </div>
  )
}
