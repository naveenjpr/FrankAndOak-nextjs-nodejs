"use client"
import React, { useState } from "react"
import Image from "next/image"
import { CiHeart } from "react-icons/ci"

import seasons1 from "../../../public/seasons1.jpg"
import seasons2 from "../../../public/seasonovarlay1.jpg"
import seasonsmen1 from "../../../public/1130347-5IN.01_450x.webp"
import seasonsmen2 from "../../../public/110728-2HC.01_450x.webp"
import seasonsmen3 from "../../../public/1220154-616.01_450x.webp"
import seasonsmen4 from "../../../public/1110378-229.01_450x.webp"
import seasonsmenabck1 from "../../../public/0C2A9560_450x.webp"
import seasonsmenabck2 from "../../../public/110728-2HC.02_450x.webp"
import seasonsmenabck3 from "../../../public/1220154-616.02_450x (1).webp"
import seasonsmenabck4 from "../../../public/1110378-229.02_450x.webp"
import dresses1 from "../../../public/dress_9094f9f3-19a3-47a9-bab6-ec506941f682_900x.webp"
import dresses2 from "../../../public/shirts_dd826432-9420-4a82-b2b3-965e50c84222_900x.webp"
import dresses3 from "../../../public/tops_900x.webp"
import dresses4 from "../../../public/shorts_900x.webp"
import dresses5 from "../../../public/PLP_thumbnail_image_area_f8bf1730-2a49-4d7e-a730-0c9f8c3e37e3_900x.webp"
import dresses6 from "../../../public/t-shirt_900x.webp"

export default function page() {
  const [category, setCategory] = useState("women")
  const handleCategoryChange = (category) => {
    setCategory(category)
  }
  const catimages = [
    {
      image1: seasons1,
      image2: seasons2,
      para: "The Open Back Poplin Maxi Dress in Sepia",
      price: "$130",
    },
    {
      image1: seasons1,
      image2: seasons2,
      para: "The Knit Sweater Vest in White",
      price: "$130",
    },
    {
      image1: seasons1,
      image2: seasons2,
      para: "The Pinafore Linen Dress in Black",
      price: "$130",
    },
    {
      image1: seasons1,
      image2: seasons2,
      para: "The Open Back Poplin Maxi Dress in Sepia",
      price: "$130",
    },
  ]
  const catimages2 = [
    {
      image1: seasonsmen1,
      image2: seasonsmenabck1,
      para: "The Open Back Poplin Maxi Dress in Sepia",
      price: "$130",
    },
    {
      image1: seasonsmen2,
      image2: seasonsmenabck2,
      para: "The Knit Sweater Vest in White",
      price: "$130",
    },
    {
      image1: seasonsmen3,
      image2: seasonsmenabck3,
      para: "The Pinafore Linen Dress in Black",
      price: "$130",
    },
    {
      image1: seasonsmen4,
      image2: seasonsmenabck4,
      para: "The Open Back Poplin Maxi Dress in Sepia",
      price: "$130",
    },
  ]
  const categories = [
    {
      image: dresses1,
      description: "Womens Dresses",
    },
    {
      image: dresses2,
      description: "Mens Shirts & Polo Shirts",
    },
    {
      image: dresses3,
      description: "Womens T-Shirts & Tops",
    },
    {
      image: dresses4,
      description: "Mens Shorts",
    },
    {
      image: dresses5,
      description: "Womens Skirts & Shorts",
    },
    {
      image: dresses6,
      description: "Mens T-Shirts",
    },
  ]

  return (
    <>
      <div className="w-full  relative -z-[99] overflow-hidden">
        <video
          class=" w-full h-full  scale-x-100 object-center "
          autoplay
          muted
          loop
          controls
        >
          <source
            src="https://cdn.shopify.com/videos/c/o/v/6c828d2216314c7a8886b6e45d0050fa.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute z-10 md:top-[10px] md:left-[70px] left-[50%] top-[50%] md:translate-x-[0%] md:translate-y-[0%] translate-x-[-50%] translate-y-[-50%]">
          <ul className="   mx-auto flex flex-col justify-between md:items-start items-center ">
            <li className="font-[600] md:text-[44px] text-[15px] ">Dive in</li>
            <li className="font-[900] md:text-[88px] text-[15px]">
              THE SUMMER SALE
            </li>
            <li className="font-[600] md:text-[64px] text-[15px] mb-[20px] ">
              Up to 50% off*
            </li>
            <li className="flex gap-[20px]">
              <button className="bg-white md:w-[200px] w-[100px] md:py-[10px]">
                Women
              </button>
              <button className="bg-white md:w-[200px] w-[100px] md:py-[10px]">
                Men
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/*    Featured Categories start */}
      <div className="w-[100%] bg-white mb-[100px]">
        <h1 className="font-[500] ps-[30px] md:text-[30px] text-[20px] md:py-[50px] py-[35px]">
          Featured Categories
        </h1>
        <div className="grid lg:grid-cols-6 grid-cols-2  gap-[40px] md:px-[25px] px-[12px]">
          {categories.map((v, i) => {
            return (
              <div className="border " key={i}>
                <img
                  src={v.image.src}
                  alt="testing"
                  className="w-[100%] h-[100%]"
                />
                <p className="mt-[5px] md:text-[16px] text-[8px]">
                  {v.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
      {/*    Featured Categories end */}

      {/*           Forecast: Sunny all day with up to 50% off* summer styles. start
       */}
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
          <div className="grid md:grid-cols-4 grid-cols-2 md:px-[25px] px-[12px] gap-[20px]">
            {catimages.map((v, i) => {
              console.log(v)
              return (
                <div className="border relative group p-[2px]" key={i}>
                  <img src={v.image1.src} className="w-[100%] max-h-[100%]" />
                  <img
                    src={v.image2.src}
                    className="w-[100%] max-h-[100%] absolute top-0 hidden group-hover:block duration-200"
                  />
                  <span className="bg-black text-white absolute right-1 top-1 p-[3px] ">
                    New
                  </span>
                  <div className="flex justify-between py-[10px] ">
                    <p className="text-[15px] font-[600] w-[90%]">{v.para}</p>
                    <CiHeart className="text-[25px]" />
                  </div>
                  <div className="flex  ">{v.price}</div>
                  <div className="flex text-[#ccc] ">1 color</div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="grid grid-cols-4 px-[25px] gap-[20px]">
            {catimages2.map((v, i) => {
              return (
                <>
                  <div className="border relative group" key={i}>
                    <img
                      src={v.image1.src}
                      alt="testing"
                      className="w-[100%] h-[100%]"
                    />
                    <img
                      src={v.image2.src}
                      alt="testing"
                      className="w-[100%] h-[100%] absolute top-0 hidden group-hover:block duration-200"
                    />
                  </div>
                </>
              )
            })}
          </div>
        )}
      </div>
      {/*           Forecast: Sunny all day with up to 50% off* summer styles. End
       */}

       
    </>
  )
}
