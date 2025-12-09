"use client"
import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { CiHeart } from "react-icons/ci"
import febric from "../../../public/imgcol_e2e34bab-75dc-4e1c-aca4-0dfcb3d73f72_2160x.webp"
import { FiRotateCcw } from "react-icons/fi"
import { FaStar } from "react-icons/fa"

import image1 from "../../../public/PLP_thumbnail_image_area_04f49621-f7df-4d38-a463-da1c2ae75d8d_900x.webp"
import image2 from "../../../public/PLP_thumbnail_image_area-1_e7cf4f91-6e35-4cd2-b7ca-adf3a00f493a_900x.webp"
import image3 from "../../../public/PLP_thumbnail_image_area-2_cf905914-7091-4d5c-acd5-6269e9f7ce0d_900x.jpg"
import image4 from "../../../public/PLP_thumbnail_image_area-3_7d006346-aba7-44d1-ad7e-716f934c0401_900x.webp"

import Tile from "../../../public/Tile_desktop_2_900x.webp"
import Tile2 from "../../../public/story-design_900x (1).jpg"
import Tile3 from "../../../public/Tile_desktop_3_900x.jpg"
import Tile4 from "../../../public/story-partners_900x.webp"
import MenImage1 from "../../../public/1130347-5IN.01_450x.webp"
import MenImage2 from "../../../public/110728-2HC.01_450x.webp"
import MenImage3 from "../../../public/1220154-616.02_450x.webp"
import MenImage4 from "../../../public/1110378-229.01_450x.webp"
import secondMenImage1 from "../../../public/0C2A9560_450x (1).webp"
import secondMenImage2 from "../../../public/110728-2HC.02_450x.webp"
import secondMenImage3 from "../../../public/1220154-616.01_450x.webp"
import secondMenImage4 from "../../../public/1110378-229.02_450x.webp"

import { MdLocalShipping } from "react-icons/md"
import Slider from "react-slick"
import Link from "next/link"

export default function Page() {
  const [category, setCategory] = useState("men")
  const [isClient, setIsClient] = useState(false)
  const [slickMounted, setSlickMounted] = useState(false)
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

  const catimages = [
    {
      src1: MenImage1,
      width: 450,
      height: 300,
      alt: "Slide 1",
      src2: secondMenImage1,
      para: "The Open Back Poplin Maxi Dress in Sepia",
      price: "$130",
    },
    {
      src1: MenImage2,
      width: 450,
      height: 300,
      alt: "Slide 1",
      src2: secondMenImage2,
      para: "The Open Back Poplin Maxi Dress in Sepia",
      price: "$130",
    },
    {
      src1: MenImage3,
      width: 450,
      height: 300,
      alt: "Slide 1",
      src2: secondMenImage3,
      para: "The Open Back Poplin Maxi Dress in Sepia",
      price: "$130",
    },
    {
      src1: MenImage4,
      width: 450,
      height: 300,
      alt: "Slide 1",
      src2: secondMenImage4,
      para: "The Open Back Poplin Maxi Dress in Sepia",
      price: "$130",
    },
  ]

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (isClient) {
      setSlickMounted(true)
    }
  }, [isClient])

  return (
    <>
      <div className="w-full -z-[99] relative overflow-hidden">
        {isClient ? (
          <video
            ref={videoRef}
            className="w-full h-[100%] scale-x-100 object-center origin-center"
            autoPlay // ✅ FIXED: Changed from autoplay to autoPlay
            muted
            loop
            playsInline
          // Removed controls to prevent hydration error
          >
            <source
              src="https://cdn.shopify.com/videos/c/o/v/4c086d5147ea485495fbc749ada2b8d0.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        ) : (
          // Fallback for server-side rendering
          <div className="w-full h-[600px] bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <p className="mb-4 text-gray-500">Loading video...</p>
              <div className="flex flex-col items-center gap-4">
                <div className="flex gap-2">
                  <button className="px-8 py-3 text-sm font-semibold text-black bg-white">
                    A Mallorca Story
                  </button>
                </div>
                <p className="text-lg text-white">Summer 2024</p>
                <button className="px-8 py-3 font-semibold text-black bg-white">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Overlay Content */}
        <div className="absolute w-full px-4 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <h1 className="text-white md:text-[55px] text-[27px] font-bold mb-2">
            A Mallorca Story
          </h1>
          <p className="text-white md:text-[34px] text-[17px] mb-6 md:mb-8">
            Summer 2024
          </p>
          <button className="bg-white text-black md:px-[70px] px-[35px] py-[15px] font-semibold hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>
      </div>

      <div className="w-[100%] bg-black">
        <div className="md:w-[80%] w-[100%] md:px-[0px] px-[12px] mx-auto grid grid-cols-2 md:grid-cols-4 items-center justify-between py-[20px] text-white gap-4 md:gap-0">
          <div className="flex items-center">
            <MdLocalShipping className="mr-[10px]" />
            <h5 className="text-white md:text-[15px] text-[10px]">
              Free Shipping over $79
            </h5>
          </div>
          <div className="flex items-center">
            <FiRotateCcw className="mr-[10px]" />
            <h5 className="text-white md:text-[15px] text-[10px]">
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
            <h5 className="text-white md:text-[15px] text-[10px]">
              Earn Points
            </h5>
          </div>
          <div className="flex items-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/Sezzle.png?v=1704400405"
              alt="Sezzle"
              className="w-[15px] h-[15px] mr-[14px]"
            />
            <h5 className="text-white md:text-[15px] text-[10px]">
              Buy Now,Pay Later
            </h5>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="w-[100%] bg-white mb-[100px]">
        <h1 className="font-[500] ps-[30px] md:text-[30px] text-[20px] md:py-[50px] py-[35px]">
          Featured Categories
        </h1>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-[20px] md:gap-[30px] md:px-[25px] px-[12px]">
          <div className="overflow-hidden border rounded-lg">
            <Image
              src={image1}
              alt="T-Shirts & Tanks"
              className="w-[100%] h-auto"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <p className="mt-[5px] md:text-[16px] text-[12px] font-[500] p-3">
              T-Shirts & Tanks
            </p>
          </div>
          <div className="overflow-hidden border rounded-lg">
            <Image
              src={image2}
              alt="Shorts"
              className="w-[100%] h-auto"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <p className="mt-[5px] md:text-[16px] text-[12px] font-[500] p-3">
              Shorts
            </p>
          </div>
          <div className="overflow-hidden border rounded-lg">
            <Image
              src={image3}
              alt="Polos"
              className="w-[100%] h-auto"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <p className="mt-[5px] md:text-[16px] text-[12px] font-[500] p-3">
              Polos
            </p>
          </div>
          <div className="overflow-hidden border rounded-lg">
            <Image
              src={image4}
              alt="Swimwear"
              className="w-[100%] h-auto"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <p className="mt-[5px] md:text-[16px] text-[12px] font-[500] p-3">
              Swimwear
            </p>
          </div>
        </div>
      </div>

      {/* Season's must-haves */}
      <div className="w-[100%]">
        <div className="flex flex-col md:flex-row justify-between px-[20px] mb-[50px] gap-4">
          <h1 className="md:text-[35px] text-[24px] font-[600] text-center md:text-left">
            Season's must-haves
          </h1>
          <div className="flex justify-center md:justify-end md:text-[35px] text-[15px] gap-4 font-[600]">
            <button
              onClick={() => handleCategoryChange("men")}
              className={`md:px-4 px-3 py-2 rounded text-sm md:text-base ${category === "men"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
                }`}
            >
              Men
            </button>
          </div>
        </div>

        {category === "men" && slickMounted && (
          <div className="w-[95%] mx-auto">
            <Slider {...settings}>
              {catimages.map((image, i) => (
                <div className="relative p-2 mx-2 overflow-hidden border rounded-lg" key={i}>
                  <div className="relative duration-500 group">
                    <Image
                      src={image.src1}
                      alt={image.alt}
                      width={450}
                      height={300}
                      className="w-full h-auto"
                    />
                    <Image
                      src={image.src2}
                      alt={image.alt}
                      width={450}
                      height={300}
                      className="absolute top-0 left-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    />
                    <button className="bg-white w-[95%] left-2 h-[50px] text-black absolute bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                      Quick Add
                    </button>
                  </div>
                  <span className="absolute p-1 px-2 text-xs text-white bg-black rounded right-3 top-3">
                    New
                  </span>
                  <div className="flex justify-between py-3">
                    <p className="text-[15px] font-[600] w-[90%] truncate">
                      {image.para}
                    </p>
                    <CiHeart className="text-[25px] cursor-pointer hover:text-red-500" />
                  </div>
                  <div className="flex text-lg font-bold">{image.price}</div>
                  <div className="flex text-[#999] text-sm mt-1">1 color</div>
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>

      {/* Linen, the fabric of summer */}
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
                      src="https://www.frankandoak.com/cdn/shop/files/1220157-101.01.jpg?crop=center&height=420&v=1717430505&width=314"
                      alt="Linen product"
                      className="m-[10px] w-full h-auto"
                    />
                  </div>
                  <div>
                    <img
                      src="https://www.frankandoak.com/cdn/shop/files/1120924-5FR.01.jpg?crop=center&height=420&v=1713473346&width=314"
                      alt="Linen product"
                      className="m-[10px] w-full h-auto"
                    />
                  </div>
                  <div>
                    <img
                      src="https://www.frankandoak.com/cdn/shop/files/1120923-213.01.jpg?crop=center&height=420&v=1713451721&width=314"
                      alt="Linen product"
                      className="m-[10px] w-full h-auto"
                    />
                  </div>
                  <div>
                    <img
                      src="https://www.frankandoak.com/cdn/shop/files/1110709-017.01.jpg?crop=center&height=420&v=1712759468&width=314"
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

      {/* What others are saying */}
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
                      src="https://www.frankandoak.com/cdn/shop/files/1110378-229.01.jpg?crop=center&height=880&v=1715195739&width=672"
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
                      src="https://www.frankandoak.com/cdn/shop/files/1210461-400.7839.jpg?crop=center&height=880&v=1707257398&width=672"
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
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={Tile}
                  className="w-full h-[200px] md:h-[280px] object-cover"
                  alt="Sustainable practice"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <h5 className="absolute text-white bottom-[20px] left-[50%] translate-x-[-50%] w-[205px] text-[16px] md:text-[20px] text-center">
                  Sustainable Practices
                </h5>
              </div>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={Tile2}
                  className="w-full h-[200px] md:h-[280px] object-cover"
                  alt="Story design"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <h5 className="absolute text-white bottom-[20px] left-[50%] translate-x-[-50%] w-[205px] text-[16px] md:text-[20px] text-center">
                  Story Design
                </h5>
              </div>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={Tile3}
                  className="w-full h-[200px] md:h-[280px] object-cover"
                  alt="Tile design"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <h5 className="absolute text-white bottom-[20px] left-[50%] translate-x-[-50%] w-[205px] text-[16px] md:text-[20px] text-center">
                  Sustainable Materials
                </h5>
              </div>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={Tile4}
                  className="w-full h-[200px] md:h-[280px] object-cover"
                  alt="Story partners"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <h5 className="absolute text-white bottom-[20px] left-[50%] translate-x-[-50%] w-[205px] text-[16px] md:text-[20px] text-center">
                  Story Partners
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed bottom banner */}
      {isClient && (
        <div className="fixed bottom-4 left-4 bg-black w-[180px] md:w-[200px] h-[40px] md:h-[50px] uppercase text-white rounded-full flex items-center justify-center text-xs md:text-sm hover:scale-105 transition-transform cursor-pointer z-50">
          <span>Get extra 20% off</span>
        </div>
      )}
    </>
  )
}