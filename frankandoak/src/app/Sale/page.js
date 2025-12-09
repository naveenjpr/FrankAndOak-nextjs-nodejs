"use client"
import React, { useState, useEffect } from "react"
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

export default function Page() {
  const [category, setCategory] = useState("women")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

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
      <div className="w-full relative -z-[99] overflow-hidden">
        {isClient ? (
          <video
            className="object-center w-full h-full scale-x-100"
            autoPlay // ✅ FIXED: Changed from autoplay to autoPlay
            muted
            loop
            playsInline
          // Removed controls to prevent hydration error
          >
            <source
              src="https://cdn.shopify.com/videos/c/o/v/6c828d2216314c7a8886b6e45d0050fa.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="w-full h-[500px] bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col items-center justify-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">THE SUMMER SALE</h1>
            <p className="mb-8 text-2xl md:text-4xl">Up to 50% off*</p>
            <div className="flex flex-col gap-4 md:flex-row">
              <button className="px-6 py-3 font-semibold text-black bg-white hover:bg-gray-100">
                Shop Women's
              </button>
              <button className="px-6 py-3 font-semibold text-black bg-white hover:bg-gray-100">
                Shop Men's
              </button>
            </div>
          </div>
        )}

        <div className="absolute z-10 md:top-[10px] md:left-[70px] left-[50%] top-[50%] md:translate-x-[0%] md:translate-y-[0%] translate-x-[-50%] translate-y-[-50%] w-full px-4">
          <ul className="flex flex-col items-center justify-between mx-auto text-center md:items-start md:text-left">
            <li className="font-[600] md:text-[44px] text-[24px] ">Dive in</li>
            <li className="font-[900] md:text-[88px] text-[32px] md:text-[48px] lg:text-[88px]">
              THE SUMMER SALE
            </li>
            <li className="font-[600] md:text-[64px] text-[24px] md:text-[36px] lg:text-[64px] mb-[20px]">
              Up to 50% off*
            </li>
            <li className="flex flex-col md:flex-row gap-[20px] mt-4">
              <button
                onClick={() => handleCategoryChange("women")}
                className="bg-white md:w-[200px] w-[180px] py-[10px] px-4 text-sm md:text-base font-semibold hover:bg-gray-100 transition-colors"
              >
                Women's Sale
              </button>
              <button
                onClick={() => handleCategoryChange("men")}
                className="bg-white md:w-[200px] w-[180px] py-[10px] px-4 text-sm md:text-base font-semibold hover:bg-gray-100 transition-colors"
              >
                Men's Sale
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Featured Categories start */}
      <div className="w-[100%] bg-white mb-[100px]">
        <h1 className="font-[500] ps-[30px] md:text-[30px] text-[20px] md:py-[50px] py-[35px]">
          Featured Categories
        </h1>
        <div className="grid lg:grid-cols-6 grid-cols-2 gap-[20px] md:gap-[40px] md:px-[25px] px-[12px]">
          {categories.map((v, i) => {
            return (
              <div className="overflow-hidden transition-shadow border rounded-lg hover:shadow-lg" key={i}>
                <Image
                  src={v.image}
                  alt={v.description}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 16vw"
                />
                <div className="p-3">
                  <p className="mt-[5px] md:text-[16px] text-[12px] font-[500]">
                    {v.description}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-red-600 md:text-sm">
                    Shop Sale →
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {/* Featured Categories end */}

      {/* Forecast: Sunny all day with up to 50% off* summer styles. start */}
      <div className="w-[100%]">
        <div className="flex flex-col md:flex-row justify-between px-[20px] mb-[50px] gap-4">
          <h1 className="md:text-[35px] text-[20px] font-[600] text-center md:text-left">
            Forecast: Sunny all day with up to 50% off* summer styles.
          </h1>
          <div className="flex justify-center md:justify-end md:text-[35px] text-[15px] gap-4 font-[600]">
            <button
              onClick={() => handleCategoryChange("women")}
              className={`md:px-4 px-3 py-2 rounded text-sm md:text-base ${category === "women"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
                }`}
            >
              Women's
            </button>
            <button
              onClick={() => handleCategoryChange("men")}
              className={`md:px-4 px-3 py-2 rounded text-sm md:text-base ${category === "men"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
                }`}
            >
              Men's
            </button>
          </div>
        </div>

        {category === "women" ? (
          <div className="grid md:grid-cols-4 grid-cols-2 md:px-[25px] px-[12px] gap-[20px]">
            {catimages.map((v, i) => {
              return (
                <div className="border relative group p-[2px] rounded-lg overflow-hidden hover:shadow-lg transition-shadow" key={i}>
                  <Image
                    src={v.image1}
                    alt={v.para}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <Image
                    src={v.image2}
                    alt={v.para}
                    className="absolute top-0 left-0 w-full h-auto transition-opacity duration-200 opacity-0 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <span className="absolute p-1 px-2 text-xs text-white bg-black rounded right-2 top-2">
                    New
                  </span>
                  <div className="flex justify-between py-[10px] px-2">
                    <p className="text-[14px] md:text-[15px] font-[600] w-[85%] truncate">
                      {v.para}
                    </p>
                    <CiHeart className="text-[20px] md:text-[25px] cursor-pointer hover:text-red-500" />
                  </div>
                  <div className="flex px-2 pb-2 text-lg font-bold">{v.price}</div>
                  <div className="flex text-[#999] text-sm px-2 pb-3">1 color</div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 px-[12px] md:px-[25px] gap-[20px]">
            {catimages2.map((v, i) => {
              return (
                <div className="relative overflow-hidden transition-shadow border rounded-lg group hover:shadow-lg" key={i}>
                  <Image
                    src={v.image1}
                    alt={v.para}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <Image
                    src={v.image2}
                    alt={v.para}
                    className="absolute top-0 left-0 w-full h-auto transition-opacity duration-200 opacity-0 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="p-3">
                    <div className="flex justify-between py-[10px]">
                      <p className="text-[14px] md:text-[15px] font-[600] w-[85%] truncate">
                        {v.para}
                      </p>
                      <CiHeart className="text-[20px] md:text-[25px] cursor-pointer hover:text-red-500" />
                    </div>
                    <div className="flex text-lg font-bold">{v.price}</div>
                    <div className="flex text-[#999] text-sm mt-1">1 color</div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
      {/* Forecast: Sunny all day with up to 50% off* summer styles. End */}

      {/* Additional Sale Banner */}
      <div className="w-[100%] bg-black text-white py-16 mt-16">
        <div className="w-[95%] mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Don't Miss Out On The Sale
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg md:text-xl">
            Limited time only. Shop now before your favorite styles sell out!
          </p>
          <div className="flex flex-col justify-center gap-4 md:flex-row">
            <button className="px-8 py-3 text-lg font-semibold text-black transition-colors bg-white hover:bg-gray-200">
              View All Women's Sale
            </button>
            <button className="px-8 py-3 text-lg font-semibold text-white transition-colors bg-transparent border-2 border-white hover:bg-white hover:text-black">
              View All Men's Sale
            </button>
          </div>
        </div>
      </div>

      {/* Sale Ending Soon Banner */}
      {isClient && (
        <div className="fixed z-50 px-6 py-3 text-white bg-red-600 rounded-lg shadow-lg bottom-4 right-4 animate-pulse">
          <div className="flex items-center gap-2">
            <span className="font-bold">🔥 SALE ENDS SOON!</span>
            <span className="text-sm">Limited time offer</span>
          </div>
        </div>
      )}
    </>
  )
}