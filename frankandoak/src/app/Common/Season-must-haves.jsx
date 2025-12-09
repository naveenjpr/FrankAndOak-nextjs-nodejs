"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Import Women's Images
import frontwomen1 from "../../../public/2220136-3AL.01_aa5e57c6-1091-426a-bf1a-fefdb8ae972a_900x.webp";
import frontwomen2 from "../../../public/2110351-4AC.01_450x.webp";
import frontwomen3 from "../../../public/2510521-3AL.01_450x.webp";
import frontwomen4 from "../../../public/2110353-3AL.01_450x.webp";
import frontwomen5 from "../../../public/2220097-4CV.01_4c570fea-27f8-45ac-8354-202bc56f21da_450x.webp";
import backwomen1 from "../../../public/mobile_07ed95de-6298-4061-b1bf-ef10e20312d7_1536x.webp";
import backwomen2 from "../../../public/2110351-4AC.02_450x.webp";
import backwomen3 from "../../../public/0C2A8900_450x.webp";
import backwomen4 from "../../../public/2110353-3AL.02_450x.webp";
import backwomen5 from "../../../public/2220136-3AL.01_aa5e57c6-1091-426a-bf1a-fefdb8ae972a_900x.webp";

export default function Seasonmusthaves() {
  const [data, setData] = useState([]); // डेटा स्टेट

  const [category, setCategory] = useState("women");
  const handleCategoryChange = (category) => setCategory(category);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const catimages = {
    women: [
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
    ],
    men: [
      {
        image1: frontwomen1,
        image2: backwomen1,
        para: "The Classic Cotton Shirt in Blue",
        price: "$110",
      },
      {
        image1: frontwomen1,
        image2: backwomen2,
        para: "The Tailored Wool Blazer in Charcoal",
        price: "$250",
      },
      {
        image1: frontwomen1,
        image2: backwomen3,
        para: "The Casual Denim Jacket in Dark Wash",
        price: "$180",
      },
      {
        image1: frontwomen1,
        image2: backwomen4,
        para: "The Relaxed Fit Linen Trousers in Beige",
        price: "$140",
      },
      {
        image1: frontwomen1,
        image2: backwomen5,
        para: "The Everyday Hoodie in Forest Green",
        price: "$90",
      },
    ],
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/fronted/Tapbing_Categories/view")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="w-full">
      <div className="flex justify-between px-5 mb-12">
        <h1 className="md:text-3xl text-lg font-semibold">
          Forecast: Sunny all day with up to 50% off* summer styles.
        </h1>
        <div className="flex justify-end md:text-3xl text-sm gap-4 font-semibold">
          <button
            onClick={() => handleCategoryChange("women")}
            className={`md:px-4 md:py-2 px-2 rounded ${
              category === "women"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            Women's
          </button>
          <button
            onClick={() => handleCategoryChange("men")}
            className={`md:px-4 md:py-2 px-2 rounded ${
              category === "men"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            Men's
          </button>
        </div>
      </div>

      <div className="w-[95%] mx-auto">
        <Slider {...settings}>
          {data.length > 0 ? (
            data.map((v, i) => (
              <div className="px-3 mx-2" key={i}>
                <div className="relative group overflow-hidden">
                  {/* Default Image */}
                  <img
                    src={`http://localhost:5000/uploads/Tabingcategory/${v.frontImage}`}
                    alt="Product"
                    width={500}
                    height={500}
                    className="transition-opacity duration-300"
                  />

                  {/* Hover Image */}
                  <img
                    src={`http://localhost:5000/uploads/Tabingcategory/${v.backImage}`}
                    alt="Product Hover"
                    width={500}
                    height={500}
                    className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  {/* Quick Add Button */}
                  <button className="bg-white w-[95%] left-2 h-[50px] text-black absolute bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Quick Add
                  </button>
                </div>

                <span className="bg-black text-white absolute right-1 top-1 p-1">
                  New
                </span>
                <div className="flex justify-between py-2 px-1">
                  <p className="text-base font-semibold">{v.price}</p>
                  <CiHeart className="text-xl" />
                </div>
                <div className="text-gray-400 px-1">1 color</div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No data available</p>
          )}
        </Slider>
      </div>
    </div>
  );
}
