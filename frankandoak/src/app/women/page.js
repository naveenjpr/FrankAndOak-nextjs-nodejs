"use client"
import React, { useEffect, useState, useRef } from "react"
import Image from "next/image"

import "slick-carousel/slick/slick-theme.css"
import { CiHeart } from "react-icons/ci"
import febric from "../../../public/febric.webp"
import { FiRotateCcw } from "react-icons/fi"
import { FaStar } from "react-icons/fa"

import image1 from "../../../public/seasons1.jpg"
import image2 from "../../../public/2220134-4AC.01_d8bf22a2-314e-4a66-9e3c-274d57874c37_900x.webp"
import image3 from "../../../public/2220136-3AL.01_aa5e57c6-1091-426a-bf1a-fefdb8ae972a_900x.webp"
import image4 from "../../../public/2130279-012.01_d82a01e5-1580-4bd2-9d9a-44d91f1dd240_900x.webp"
import seasonwomenfirst1 from "../../../public/2510521-3AL.01_450x.webp"
import seasonwomenfirst2 from "../../../public/2110351-4AC.01_450x.webp"
import seasonwomenfirst3 from "../../../public/2110353-3AL.01_450x.webp"
import seasonwomenfirst4 from "../../../public/2220097-4CV.01_4c570fea-27f8-45ac-8354-202bc56f21da_450x.webp"
import seasonwomenback1 from "../../../public/0C2A8900_450x.webp"
import seasonwomenback2 from "../../../public/2110351-4AC.02_450x.webp"
import seasonwomenback3 from "../../../public/2110353-3AL.02_450x.webp"
import seasonwomenback4 from "../../../public/2510521-3AL.01_450x.webp"

import { MdLocalShipping } from "react-icons/md"
import Slider from "react-slick"
import Link from "next/link"
import axios from "axios"

export default function Page() {
  const baseurl = "http://localhost:5000/"
  const [category, setCategory] = useState("women")
  const [isClient, setIsClient] = useState(false)
  const videoRef = useRef(null)

  const handleCategoryChange = (category) => {
    setCategory(category)
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const [productFeatured, setProductFeatured] = useState([])
  const [imageproduct, setimageproduct] = useState("")

  useEffect(() => {
    setIsClient(true)

    axios.post(`${baseurl}api/fronted/product/productFeatured`).then((res) => {
      setProductFeatured(res.data.data)
      setimageproduct(res.data.imagepath)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  // Initialize slick slider only on client side
  const [slickMounted, setSlickMounted] = useState(false)

  useEffect(() => {
    if (isClient) {
      // Dynamically import slick-carousel on client side only
      import("slick-carousel/slick/slick.css")
      setSlickMounted(true)
    }
  }, [isClient])

  return (
    <>
      <div className="w-full -z-[99] relative overflow-hidden">
        {isClient ? (
          <video
            ref={videoRef}
            className="object-center w-full h-full scale-x-100"
            autoPlay
            muted
            loop
            playsInline
          // Removed controls={true} to prevent hydration mismatch
          >
            <source
              src="https://cdn.shopify.com/videos/c/o/v/6c828d2216314c7a8886b6e45d0050fa.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        ) : (
          // Fallback image for server-side rendering
          <div className="w-full h-[600px] bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">Loading video...</p>
          </div>
        )}
        <div className="absolute z-10 md:top-[10px] md:left-[70px] left-[50%] top-[50%] md:translate-x-[0%] md:translate-y-[0%] translate-x-[-50%] translate-y-[-50%]">
          <ul className="flex flex-col items-center justify-between mx-auto md:items-start">
            <li className="font-[600] md:text-[44px] text-[15px] ">Dive in</li>
            <li className="font-[900] md:text-[88px] text-[15px]">
              THE SUMMER SALE
            </li>
            <li className="font-[600] md:text-[64px] text-[15px] mb-[20px] ">
              Up to 50% off*
            </li>
            <li className="flex gap-[20px]">
              <button className="bg-white md:w-[200px] w-[100px] md:py-[10px] py-[5px] text-xs md:text-base">
                Women
              </button>
              <button className="bg-white md:w-[200px] w-[100px] md:py-[10px] py-[5px] text-xs md:text-base">
                Men
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-[100%] bg-black ">
        <div className="md:w-[80%] w-[100%] md:px-[0px] px-[12px] mx-auto grid grid-cols-2 md:grid-cols-4 items-center justify-between py-[20px] text-white gap-4 md:gap-0">
          <div className="flex items-center">
            <MdLocalShipping className="mr-[10px]" />
            <h5 className="text-white md:text-[15px] text-[8px]">
              Free Shipping over $79
            </h5>
          </div>
          <div className="flex items-center">
            <FiRotateCcw className="mr-[10px]" />
            <h5 className="text-white md:text-[15px] text-[8px]">
              free returns
            </h5>
          </div>
          <div className="flex items-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/loyalty_logo_light.png?v=1672326811"
              alt="Loyalty Logo"
              width={15}
              height={15}
              className="mr-[10px]"
            />
            <h5 className="text-white md:text-[15px] text-[8px]">
              Earn Points
            </h5>
          </div>
          <div className="flex items-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/Sezzle.png?v=1704400405"
              alt="Sezzle"
              className="w-[15px] h-[15px] mr-[14px]"
            />
            <h5 className="text-white md:text-[15px] text-[8px]">
              Buy Now,Pay Later
            </h5>
          </div>
        </div>
      </div>

      <div className="w-[100%] bg-white mb-[100px]">
        <h1 className="font-[500] ps-[30px] md:text-[30px] text-[20px] md:py-[50px] py-[35px]">
          Featured Categories
        </h1>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-[20px] md:gap-[30px] md:px-[25px] px-[12px]">
          <div className="border">
            <Image
              src={image1}
              alt="Dresses"
              className="w-[100%] h-auto"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <p className="mt-[5px] md:text-[16px] text-[10px] font-[500] p-2">
              Dresses
            </p>
          </div>
          <div className="border">
            <Image
              src={image2}
              alt="Shorts & Skirts"
              className="w-[100%] h-auto"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <p className="mt-[5px] md:text-[16px] text-[10px] font-[500] p-2">
              Shorts & Skirts
            </p>
          </div>
          <div className="border">
            <Image
              src={image3}
              alt="Matching Sets"
              className="w-[100%] h-auto"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <p className="mt-[5px] md:text-[16px] text-[10px] font-[500] p-2">
              Matching Sets
            </p>
          </div>
          <div className="border">
            <Image
              src={image4}
              alt="T-Shirts & Tops"
              className="w-[100%] h-auto"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <p className="mt-[5px] md:text-[16px] text-[10px] font-[500] p-2">
              T-Shirts & Tops
            </p>
          </div>
        </div>
      </div>

      {/* Season's must-haves */}
      <div className="w-[100%]">
        <div className="flex flex-col md:flex-row justify-between px-[20px] mb-[50px] gap-4">
          <h1 className="md:text-[35px] text-[20px] font-[600] text-center md:text-left">
            Season's must-haves, now at 25% off*.
          </h1>
          <div className="flex justify-center md:justify-end md:text-[35px] text-[15px] gap-4 font-[600]">
            <button
              onClick={() => handleCategoryChange("women")}
              className={`md:px-4 px-3 py-2 rounded ${category === "women"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
                }`}
            >
              Women's
            </button>
          </div>
        </div>

        {category == "women" && (
          <div className="w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
            {productFeatured.map((v, i) => {
              return (
                <div className="overflow-hidden border border-gray-300 rounded-lg" key={i}>
                  <div className="p-2 mx-2">
                    <div className="relative duration-500 group">
                      <img
                        src={`${baseurl}${imageproduct}${v.productImage}`}
                        alt={v.productName}
                        className="w-full h-auto"
                      />
                      <img
                        src={`${baseurl}${imageproduct}${v.productAnimationImage}`}
                        alt={v.productName}
                        className="absolute top-0 left-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                      />
                      <button className="bg-white w-[95%] left-2 h-[50px] text-black absolute bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Quick Add
                      </button>
                    </div>

                    <span className="absolute p-1 px-2 text-xs text-white bg-black rounded right-3 top-3">
                      New
                    </span>

                    <div className="flex justify-between py-[10px]">
                      <p className="text-[15px] font-[600] w-[90%] truncate">
                        {v.productName}
                      </p>
                      <CiHeart className="text-[25px] cursor-pointer" />
                    </div>

                    <div className="flex text-lg font-bold">${v.productPrice}</div>

                    {Array.isArray(v.productColors) && v.productColors.length > 0 ? (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {v.productColors.map((color) => (
                          <span
                            key={color._id}
                            className="px-2 py-1 text-xs text-gray-700 border border-gray-300 rounded"
                          >
                            {color.colorName}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <div className="flex text-[#ccc]">{v.productColor}</div>
                    )}

                    {Array.isArray(v.productSize) && v.productSize.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {v.productSize.map((size) => (
                          <span
                            key={size._id}
                            className="px-2 py-1 text-xs text-gray-700 border border-gray-300 rounded"
                          >
                            {size.sizeName}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Linen fabric section */}
      <div className="w-[100%] mt-[100px]">
        <div className="w-[95%] mx-auto grid md:grid-cols-2 grid-cols-1 gap-[50px] items-center">
          <div>
            <Image
              src={febric}
              className="w-[100%] h-auto"
              alt="Linen fabric"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="px-[10px]">
            <div>
              <img
                src="https://www.frankandoak.com/cdn/shop/files/Linen-black_c5d56f93-2e8a-45b3-86c7-334eddbe51d2.jpg?crop=center&height=88&v=1717534878&width=88"
                alt="Linen logo"
                className="w-[50px] h-[50px]"
              />
            </div>

            <p className="text-[28px] md:text-[35px] font-[600] mt-[30px]">
              Linen, the fabric of summer
            </p>

            <p className="text-[18px] md:text-[24px] mt-[20px] font-[500] text-[#666]">
              Discover a natural material that creates easy-going and breezy styles.
            </p>

            {slickMounted ? (
              <div className="slider-container py-[30px]">
                <Slider {...settings}>
                  <div>
                    <img
                      src="https://www.frankandoak.com/cdn/shop/files/2220132-2AC.01.jpg?crop=center&height=420&v=1713383298&width=314"
                      alt="Linen product"
                      className="m-[10px] w-full h-auto"
                    />
                  </div>
                  <div>
                    <img
                      src="https://www.frankandoak.com/cdn/shop/files/2310163-2AC.01.jpg?crop=center&height=420&v=1712674650&width=314"
                      alt="Linen product"
                      className="m-[10px] w-full h-auto"
                    />
                  </div>
                  <div>
                    <img
                      src="https://www.frankandoak.com/cdn/shop/files/2510518-2AC.03.jpg?crop=center&height=420&v=1717595352&width=314"
                      alt="Linen product"
                      className="m-[10px] w-full h-auto"
                    />
                  </div>
                  <div>
                    <img
                      src="https://www.frankandoak.com/cdn/shop/files/2510518-2AC.03.jpg?crop=center&height=420&v=1717595352&width=314"
                      alt="Linen product"
                      className="m-[10px] w-full h-auto"
                    />
                  </div>
                </Slider>
              </div>
            ) : (
              <div className="py-[30px] grid grid-cols-2 gap-4">
                <div>Loading slider...</div>
              </div>
            )}

            <div>
              <button className="text-black font-[500] relative pb-1 hover:opacity-80 transition-opacity">
                Shop now
                <span className="absolute bottom-0 left-0 w-full border-b-2 border-black"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews section */}
      <div className="w-[100%]">
        <h3 className="text-center font-[500] md:text-[36px] text-[24px] text-black md:py-[50px] pt-[30px] pb-[10px]">
          What others are saying
        </h3>

        {slickMounted ? (
          <div className="w-[95%] mx-auto">
            <Slider {...settings2}>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 md:px-[25px] items-center gap-8">
                  <div>
                    <div className="flex gap-[10px] text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <div>
                      <p className="text-[12px] text-[#666] mt-[8px]">
                        Based on 60 reviews
                      </p>
                    </div>
                    <div>
                      <p className="md:text-[16px] text-[14px] text-[#000] md:mt-[20px] mt-[10px] tracking-wider font-[500]">
                        Very flattering cut, comfortable fabric and nice details.
                        Wish I had bought a few of these.
                      </p>
                    </div>
                    <div>
                      <p className="text-[14px] text-[#ccc] md:mt-[12px] mt-[8px]">
                        Amy H.
                      </p>
                    </div>
                    <div>
                      <button className="relative md:mt-[10px] mt-[5px]">
                        <Link href={"/"} className="hover:opacity-80">
                          Shop now
                        </Link>
                        <span className="w-full h-[1px] bg-black left-0 absolute top-[100%]"></span>
                      </button>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://www.frankandoak.com/cdn/shop/files/2120364-4LR.01.jpg?crop=center&height=880&v=1715357630&width=672"
                      className="w-full h-auto"
                      alt="Review product"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 md:px-[25px] items-center gap-8">
                  <div>
                    <div className="flex gap-[10px] text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <div>
                      <p className="text-[12px] text-[#666] md:mt-[8px]">
                        Based on 60 reviews
                      </p>
                    </div>
                    <div>
                      <p className="md:text-[16px] text-[14px] text-[#000] md:mt-[20px] mt-[10px] tracking-wider font-[500]">
                        Very flattering cut, comfortable fabric and nice details.
                        Wish I had bought a few of these.
                      </p>
                    </div>
                    <div>
                      <p className="text-[14px] text-[#ccc] md:mt-[12px] mt-[8px]">
                        Amy H.
                      </p>
                    </div>
                    <div>
                      <button className="relative md:mt-[10px] mt-[5px]">
                        <Link href={"/"} className="hover:opacity-80">
                          Shop now
                        </Link>
                        <span className="w-full h-[1px] bg-black left-0 absolute top-[100%]"></span>
                      </button>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://www.frankandoak.com/cdn/shop/files/2220097-4CV.01_4c570fea-27f8-45ac-8354-202bc56f21da.jpg?crop=center&height=880&v=1713375346&width=672"
                      className="w-full h-auto"
                      alt="Review product"
                    />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        ) : (
          <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
            <div>Loading reviews...</div>
          </div>
        )}
      </div>

      {/* Company story section */}
      <div className="w-[100%] mb-[60px] mt-[100px]">
        <div className="w-[95%] mx-auto">
          <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
            <div className="md:p-[46px] p-[10px] flex flex-col items-center md:items-start justify-center">
              <div>
                <h4 className="md:text-[42px] text-[28px] md:mb-[40px] mb-[20px] text-[#000] font-[400] text-center md:text-left">
                  Inspire Better Living.
                </h4>
              </div>
              <div>
                <p className="md:text-[24px] text-[16px] md:mb-[36px] mb-[18px] text-[#666] text-center md:text-left">
                  Born in Canada, we are grounded on innovation, our community,
                  and respecting the planet we all call home.
                </p>
              </div>
              <div>
                <button className="text-[20px] md:text-[26px] mb-[36px] text-[#000] relative hover:opacity-80">
                  <Link href={"/"} className="text-center md:text-left">
                    Who We Are
                  </Link>
                  <span className="w-full h-[1px] bg-black absolute top-[100%] left-0"></span>
                </button>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-[20px]">
              {[...Array(4)].map((_, i) => (
                <div className="relative" key={i}>
                  <img
                    src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_2_900x.jpg?v=1712334213"
                    className="w-full h-[200px] md:h-[280px] object-cover"
                    alt="Sustainable practice"
                  />
                  <h5 className="absolute text-white bottom-[20px] left-[50%] translate-x-[-50%] w-[205px] text-[16px] md:text-[20px] text-center">
                    Sustainable Practices
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fixed bottom banner */}
      {isClient && (
        <div className="fixed bottom-4 left-4 bg-black w-[180px] md:w-[200px] h-[40px] md:h-[50px] uppercase text-white rounded-full flex items-center justify-center text-xs md:text-sm hover:scale-105 transition-transform cursor-pointer">
          <span>Get extra 20% off</span>
        </div>
      )}
    </>
  )
}