"use client"
import React, { useState } from "react"
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

export default function page() {
  const [category, setCategory] = useState("men")
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
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
  return (
    <>
      {/* <div class="video__inner pos-center js-video hero-video-slide is-loaded"><ul class="video__controls js-controls absolute f jcs z10" data-showing-controls="false"><li class="video__btn js-toggle-play f aic pointer"><span class="video__btn__pause f aic" role="button" aria-label="Pause"><svg class="w1" viewBox="0 0 34 34"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-pause" x="0" y="0"></use></svg></span><span class="video__btn__play f aic" role="button" aria-label="Play"><svg class="w1" viewBox="0 0 34 34"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-play" x="0" y="0"></use></svg></span></li></ul><video class="video__el js-video" aria-label="Up to 50% off*" data-src="https://cdn.shopify.com/videos/c/o/v/6c828d2216314c7a8886b6e45d0050fa.mp4" autoplay="" loop="" preload="auto" playsinline="" src="https://cdn.shopify.com/videos/c/o/v/6c828d2216314c7a8886b6e45d0050fa.mp4" style="height: 100%; width: auto;"></video></div> */}
      <div className="w-full -z-[99] relative overflow-hidden ">
        <video
          class=" w-full h-[100%] scale-x-100 object-center

          origin-center "
          autoplay
          loop
          controls
        >
          <source
            src="https://cdn.shopify.com/videos/c/o/v/4c086d5147ea485495fbc749ada2b8d0.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
          {/* <div className=" flex flex-col justify-center items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
            <span className="md:text-[55px] text-[27px] text-white">
              A Mallorca Story
            </span>
            <span className="md:text-[34px] text-[17px] text-white my-[30px]">
              Summer 2024
            </span>
            <div className="flex items-center justify-center  ">
              <button className="bg-white text-black md:px-[70px] px-[35px] py-[15px] font-[600]">
                Shop Now
              </button>
            </div>
          </div> */}
        </video>
      </div>
      <div className="w-[100%] bg-black ">
        <div className="md:w-[80%] w-[100%] md:px-[0px] px-[12px] mx-auto grid grid-cols-4 items-center justify-between py-[20px] text-white">
          <div className="flex items-center  ">
            <MdLocalShipping className="mr-[10px]" />

            <h5 className="text-white md:text-[15px] text-[8px]">
              Free Shipping over $79
            </h5>
          </div>
          <div className="flex items-center ">
            <FiRotateCcw className="mr-[10px]" />

            <h5 className="text-white md:text-[15px] text-[8px]">
              free returns{" "}
            </h5>
          </div>
          <div className="flex items-center ">
            <img
              src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/loyalty_logo_light.png?v=1672326811"
              alt="testing"
              width={15}
              height={15}
              className="mr-[10px]"
            />

            <h5 className="text-white md:text-[15px] text-[8px]">
              Earn Points
            </h5>
          </div>

          <div className="flex items-center ">
            <img
              src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/Sezzle.png?v=1704400405"
              alt="testing"
              className="w-[15px] h-[15px] mr-[14px]"
            />

            <h5 className="text-white md:text-[15px] text-[8px]">
              Buy Now,Pay Later
            </h5>
          </div>
        </div>
      </div>
      {/* Featured Categories start */}
      <div className="w-[100%] bg-white mb-[100px]">
        <h1 className="font-[500] ps-[30px] md:text-[30px] text-[20px] md:py-[50px] py-[35px]">
          Featured Categories
        </h1>
        <div className="grid lg:grid-cols-4 grid-cols-2  gap-[30px] md:px-[25px] px-[12px]">
          <div className="border ">
            <Image src={image1} className="w-[100%] h-[100%]" />
            <p className="mt-[5px] md:text-[16px] text-[8px] font-[500]">
              T-Shirts & Tanks
            </p>
          </div>
          <div className="border ">
            <Image src={image2} className="w-[100%] h-[100%]" />
            <p className="mt-[5px] md:text-[16px] text-[8px] font-[500]">
              Shorts
            </p>
          </div>
          <div className="border ">
            <Image src={image3} className="w-[100%] h-[100%]" />
            <p className="mt-[5px] md:text-[16px] text-[8px] font-[500]">
              Polos
            </p>
          </div>
          <div className="border ">
            <Image src={image4} className="w-[100%] h-[100%]" />
            <p className="mt-[5px] md:text-[16px] text-[8px] font-[500]">
              Swimwear
            </p>
          </div>
        </div>
      </div>
      {/* Season's must-haves start */}
      <div className="w-[100%]">
        <div className="flex justify-between px-[20px] mb-[50px]">
          <h1 className="md:text-[35px] text-[16px] font-[600]">
            Season's must-haves
          </h1>
          <div className="flex justify-end md:text-[35px] text-[15px] gap-4 font-[600]">
            <button
              onClick={() => handleCategoryChange("men")}
              className={`md:px-4 md:py-2 md:mx-2 px-[5px] rounded ${
                category === "women"
                  ? "bg-blue-500 text-white text-[10px]"
                  : "bg-gray-200 text-black text-[10px]"
              }`}
            >
              men
            </button>
          </div>
        </div>
        {category == "men" ? (
          <div className="w-[95%] mx-auto ">
            <Slider {...settings}>
              {catimages.map((image, i) => {
                console.log(image.src1)
                return (
                  <>
                    <div className="border p-[2px] mx-[10px] relative" key={i}>
                      <div className="relative group duration-1000 ">
                        <Image
                          src={image.src1.src}
                          alt={image.alt}
                          width={image.width}
                          height={image.height}
                          className=""
                        />

                        <Image
                          src={image.src2.src}
                          alt={image.alt}
                          width={image.width}
                          height="100"
                          className="absolute top-0 scale-0 group-hover:scale-100 h-[100%] "
                        />
                        <button className="bg-white w-[95%] left-2 h-[50px] text-black absolute bottom-2 scale-0 group-hover:scale-100  ">
                          Quick Add
                        </button>
                      </div>
                      <span className="bg-black text-white absolute right-1 top-1 p-[3px] ">
                        New
                      </span>
                      <div className="flex justify-between py-[10px] ">
                        <p className="text-[15px] font-[600] w-[90%]">
                          {image.para}
                        </p>
                        <CiHeart className="text-[25px]" />
                      </div>
                      <div className="flex  ">{image.price}</div>
                      <div className="flex text-[#ccc] ">1 color</div>
                    </div>
                  </>
                )
              })}
            </Slider>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* Linen, the fabric of summer */}
      <div className="w-[100%] mt-[100px]">
        <div className="w-[95%] mx-auto grid md:grid-cols-2 grid-cols-1 gap-[50px] items-center">
          <div className="">
            <Image
              src={febric}
              className="w-[100%] h-[100%]"
              alt="Picture of the author"
            />
          </div>
          <div className=" px-[10px] ">
            <div>
              <img
                src="https://www.frankandoak.com/cdn/shop/files/Linen-black_c5d56f93-2e8a-45b3-86c7-334eddbe51d2.jpg?crop=center&height=88&v=1717534878&width=88"
                alt="testing"
                className="w-[50px] h-[50px] "
              />
            </div>

            <p className="text-[35px] font-[600] mt-[30px]">
              Linen, the fabric of summer
            </p>

            <p className="text-[24px] mt-[20px] font-[500] text-[#666]">
              Discover a natural material that creates easy-going and breezy
              styles.
            </p>

            <div className="slider-container py-[30px]">
              <Slider {...settings}>
                <div className="">
                  <img
                    src="https://www.frankandoak.com/cdn/shop/files/1220157-101.01.jpg?crop=center&height=420&v=1717430505&width=314"
                    alt="testing"
                    className="m-[10px] w-[100%] h-[100%]"
                  />
                </div>
                <div className="">
                  <img
                    src="https://www.frankandoak.com/cdn/shop/files/1120924-5FR.01.jpg?crop=center&height=420&v=1713473346&width=314"
                    alt="testing"
                    className="m-[10px] w-[100%] h-[100%]"
                  />
                </div>
                <div className="">
                  <img
                    src="https://www.frankandoak.com/cdn/shop/files/1120923-213.01.jpg?crop=center&height=420&v=1713451721&width=314"
                    alt="testing"
                    className="m-[10px] w-[100%] h-[100%]"
                  />
                </div>
                <div className="">
                  <img
                    src="https://www.frankandoak.com/cdn/shop/files/1110709-017.01.jpg?crop=center&height=420&v=1712759468&width=314"
                    alt="testing"
                    className="m-[10px] w-[100%] h-[100%]"
                  />
                </div>
                <div className="">
                  <img
                    src="https://www.frankandoak.com/cdn/shop/files/2510518-2AC.03.jpg?crop=center&height=420&v=1717595352&width=314"
                    alt="testing"
                    className="m-[10px] w-[100%] h-[100%]"
                  />
                </div>
                <div className="">
                  <img
                    src="https://www.frankandoak.com/cdn/shop/files/2510518-2AC.03.jpg?crop=center&height=420&v=1717595352&width=314"
                    alt="testing"
                    className="m-[10px] w-[100%] h-[100%]"
                  />
                </div>
                <div className="">
                  <img
                    src="https://www.frankandoak.com/cdn/shop/files/2510518-2AC.03.jpg?crop=center&height=420&v=1717595352&width=314"
                    alt="testing"
                    className="m-[10px] w-[100%] h-[100%]"
                  />
                </div>
                <div className="">
                  <img
                    src="https://www.frankandoak.com/cdn/shop/files/2510518-2AC.03.jpg?crop=center&height=420&v=1717595352&width=314"
                    alt="testing"
                    className="m-[10px] w-[100%] h-[100%]"
                  />
                </div>
              </Slider>
            </div>
            <div>
              <button className="text-[black] font-[500] relative">
                Shop now
                <span className="border-[2px] border-[solid] border-[black] w-[100%] absolute top-[100%] left-0"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* What others are saying*/}
      <div className="w-[100%]">
        <h3 className="text-center font-[500] md:text-[36px] text-[20px] text-black md:py-[50px] pt-[30px] pb-[10px]">
          What others are saying
        </h3>
        <div className="w-[95%] mx-auto ">
          <Slider {...settings2}>
            <div>
              <div className="grid grid-cols-2 md:px-[25px] items-center">
                <div>
                  <div className="flex gap-[10px]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div>
                    <p className="text-[12px] text-[#666] mt-[8px]">
                      Based on 60 reviews
                    </p>
                  </div>
                  <div>
                    <p className="md:text-[16px] text-[10px] text-[#000] md:mt-[20px] tracking-widest	font-[500]">
                      Very flattering cut, comfortable fabric and nice details.
                      Wish I had bought a few of these.
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px] text-[#ccc] md:mt-[12px]">
                      Amy H.
                    </p>
                  </div>
                  <div>
                    <button className="relative md:mt-[10px]">
                      <Link href={"/"} className="">
                        Shop now
                      </Link>
                      <span className="w-[100%] h-[2px] bg-black left-0 absolute top-[100%]"></span>
                    </button>
                  </div>
                </div>
                <div>
                  <img
                    src="https://www.frankandoak.com/cdn/shop/files/1110378-229.01.jpg?crop=center&height=880&v=1715195739&width=672"
                    className="w-[100%]"
                    alt="testing"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 md:px-[25px] items-center">
                <div>
                  <div className="flex gap-[10px]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div>
                    <p className="text-[12px] text-[#666] md:mt-[8px]">
                      Based on 60 reviews
                    </p>
                  </div>
                  <div>
                    <p className="md:text-[16px] text-[10px] text-[#000] md:mt-[20px] tracking-widest	font-[500]">
                      Very flattering cut, comfortable fabric and nice details.
                      Wish I had bought a few of these.
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px] text-[#ccc] md:mt-[12px]">
                      Amy H.
                    </p>
                  </div>
                  <div>
                    <button className="relative md:mt-[10px]">
                      <Link href={"/"} className="">
                        Shop now
                      </Link>
                      <span className="w-[100%] h-[2px] bg-black left-0 absolute top-[100%]"></span>
                    </button>
                  </div>
                </div>
                <div>
                  <img
                    src="https://www.frankandoak.com/cdn/shop/files/1210461-400.7839.jpg?crop=center&height=880&v=1707257398&width=672"
                    className="w-[100%]"
                    alt="testing"
                  />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <div className="w-[100%] mb-[60px] mt-[100px] ">
        <div className="w-[95%] mx-auto">
          <div className="grid md:grid-cols-2  grid-cols-1 items-center">
            <div className="md:p-[46px] p-[10px] flex md:flex-none  flex-col md:items-start items-center  justify-center  ">
              <div>
                <h4 className="md:text-[42px] text-[20px] md:mb-[40px] mb-[20px] text-[#000] font-[400]">
                  Inspire Better Living.
                </h4>
              </div>
              <div>
                <p className="md:text-[24px] text-[12px] md:mb-[36px] mb-[18px] text-[#666]">
                  Born in Canada, we are grounded on innovation, our community,
                  and respecting the planet we all call home.{" "}
                </p>
              </div>
              <div>
                <button className="text-[26px] mb-[36px] text-[#000] relative ">
                  <Link href={"/"} className="md:text-left text-center">
                    Who We Are
                  </Link>
                  <span className="w-[100%] h-[1px] bg-black absolute top-[100%] left-0"></span>
                </button>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-[20px]">
              <div className="relative">
                <Image
                  src={Tile}
                  className="w-[100%] h-[280px]"
                  alt="testing"
                />
                <h5 className="absolute text-white bottom-[30px] left-[50%] translate-x-[-50%] w-[205px] text-[20px]  ">
                  Sustainable Practices
                </h5>
              </div>
              <div className="relative">
                <Image
                  src={Tile2}
                  className="w-[100%] h-[280px]"
                  alt="testing"
                />
                <h5 className="absolute text-white bottom-[30px] left-[50%] translate-x-[-50%] w-[205px] text-[20px]  ">
                  Sustainable Practices
                </h5>
              </div>
              <div className="relative">
                <Image
                  src={Tile3}
                  className="w-[100%] h-[280px]"
                  alt="testing"
                />
                <h5 className="absolute text-white bottom-[30px] left-[50%] translate-x-[-50%] w-[205px] text-[20px]  ">
                  Sustainable Practices
                </h5>
              </div>
              <div className="relative">
                <Image
                  src={Tile4}
                  className="w-[100%] h-[280px]"
                  alt="testing"
                />
                <h5 className="absolute text-white bottom-[30px] left-[50%] translate-x-[-50%] w-[205px] text-[20px]  ">
                  Sustainable Practices
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-1 bg-black w-[200px] h-[50px] uppercase left-0.5 text-white rounded-full flex items-center justify-center">
        <span>Get extra 20% off</span>
      </div>
    </>
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  )
}
