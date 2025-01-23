import React from "react"
import febric from "../../../public/febric.webp"
import Image from "next/image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { FaStar } from "react-icons/fa"
import Link from "next/link"

export default function Fabricofsummer() {
  var settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    nextArrow: <SamplePrevArrow />,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          nextArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          nextArrow: false,
        },
      },
    ],
  }
  return (
    <>
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
                alt=""
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
                    src="https://www.frankandoak.com/cdn/shop/files/2220132-2AC.01.jpg?crop=center&height=420&v=1713383298&width=314"
                    alt=""
                    className="m-[10px] w-[100%] h-[100%]"
                  />
                </div>
                <div className="">
                  <img
                    src="https://www.frankandoak.com/cdn/shop/files/2310163-2AC.01.jpg?crop=center&height=420&v=1712674650&width=314"
                    alt=""
                    className="m-[10px] w-[100%] h-[100%]"
                  />
                </div>
                <div className="">
                  <img
                    src="https://www.frankandoak.com/cdn/shop/files/2510518-2AC.03.jpg?crop=center&height=420&v=1717595352&width=314"
                    alt=""
                    className="m-[10px] w-[100%] h-[100%]"
                  />
                </div>
                <div className="">
                  <img
                    src="https://www.frankandoak.com/cdn/shop/files/2510518-2AC.03.jpg?crop=center&height=420&v=1717595352&width=314"
                    alt=""
                    className="m-[10px] w-[100%] h-[100%]"
                  />
                </div>
                <div className="">
                  <img
                    src="https://www.frankandoak.com/cdn/shop/files/2510518-2AC.03.jpg?crop=center&height=420&v=1717595352&width=314"
                    alt=""
                    className="m-[10px] w-[100%] h-[100%]"
                  />
                </div>
                <div className="">
                  <img
                    src="https://www.frankandoak.com/cdn/shop/files/2510518-2AC.03.jpg?crop=center&height=420&v=1717595352&width=314"
                    alt=""
                    className="m-[10px] w-[100%] h-[100%]"
                  />
                </div>
                <div className="">
                  <img
                    src="https://www.frankandoak.com/cdn/shop/files/2510518-2AC.03.jpg?crop=center&height=420&v=1717595352&width=314"
                    alt=""
                    className="m-[10px] w-[100%] h-[100%]"
                  />
                </div>
                <div className="">
                  <img
                    src="https://www.frankandoak.com/cdn/shop/files/2510518-2AC.03.jpg?crop=center&height=420&v=1717595352&width=314"
                    alt=""
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

      <div className="w-[100%] mt-[100px]">
        <div className="w-[95%] mx-auto grid md:grid-cols-2 grid-cols-1 gap-[50px] items-center">
          <div className=" px-[10px] ">
            <div>
              <img
                src="https://www.frankandoak.com/cdn/shop/files/Linen-black_c5d56f93-2e8a-45b3-86c7-334eddbe51d2.jpg?crop=center&height=88&v=1717534878&width=88"
                alt=""
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
                    src="https://www.frankandoak.com/cdn/shop/files/1110731-5FR.01.jpg?crop=center&height=420&v=1712677198&width=314"
                    alt=""
                    className="m-[10px] w-[100%] h-[100%]"
                  />
                </div>
                <div className="">
                  <img
                    src="https://www.frankandoak.com/cdn/shop/files/1110709-017.01.jpg?crop=center&height=420&v=1712759468&width=314"
                    alt=""
                    className="m-[10px] w-[100%] h-[100%]"
                  />
                </div>
                <div className="">
                  <img
                    src="https://www.frankandoak.com/cdn/shop/files/1220149-625.01.jpg?crop=center&height=420&v=1711572753&width=314"
                    alt=""
                    className="m-[10px] w-[100%] h-[100%]"
                  />
                </div>
                <div className="">
                  <img
                    src="https://www.frankandoak.com/cdn/shop/files/2510518-2AC.03.jpg?crop=center&height=420&v=1717595352&width=314"
                    alt=""
                    className="m-[10px] w-[100%] h-[100%]"
                  />
                </div>
                <div className="">
                  <img
                    src="https://www.frankandoak.com/cdn/shop/files/2510518-2AC.03.jpg?crop=center&height=420&v=1717595352&width=314"
                    alt=""
                    className="m-[10px] w-[100%] h-[100%]"
                  />
                </div>
                <div className="">
                  <img
                    src="https://www.frankandoak.com/cdn/shop/files/2510518-2AC.03.jpg?crop=center&height=420&v=1717595352&width=314"
                    alt=""
                    className="m-[10px] w-[100%] h-[100%]"
                  />
                </div>
                <div className="">
                  <img
                    src="https://www.frankandoak.com/cdn/shop/files/2510518-2AC.03.jpg?crop=center&height=420&v=1717595352&width=314"
                    alt=""
                    className="m-[10px] w-[100%] h-[100%]"
                  />
                </div>
                <div className="">
                  <img
                    src="https://www.frankandoak.com/cdn/shop/files/2510518-2AC.03.jpg?crop=center&height=420&v=1717595352&width=314"
                    alt=""
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
          <div className="">
            <img
              src="https://www.frankandoak.com/cdn/shop/files/imgcol_e1104082-3e5b-4945-8e96-7f2aec101164_2160x.jpg?v=1713363824"
              className="w-[100%] h-[100%]"
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
      <div className="w-[100%]">
        <h3 className="text-center font-[500] md:text-[36px] text-[20px] text-black md:py-[50px] pt-[30px] pb-[10px]">
          You didn’t hear it from us
        </h3>
        <div className="grid md:grid-cols-2 grid-cols-1 px-[22px] md:gap-[0px] gap-[20px] ">
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
                  Very flattering cut, comfortable fabric and nice details. Wish
                  I had bought a few of these.
                </p>
              </div>
              <div>
                <p className="text-[14px] text-[#ccc] md:mt-[12px]">Amy H.</p>
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
                src="https://www.frankandoak.com/cdn/shop/files/2120364-4LR.01.jpg?crop=center&height=880&v=1715357630&width=672"
                className="w-[100%]"
                alt=""
              />
            </div>
          </div>
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
                  Very flattering cut, comfortable fabric and nice details. Wish
                  I had bought a few of these.
                </p>
              </div>
              <div>
                <p className="text-[14px] text-[#ccc] md:mt-[12px]">Amy H.</p>
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
                src="https://www.frankandoak.com/cdn/shop/files/2120364-4LR.01.jpg?crop=center&height=880&v=1715357630&width=672"
                className="w-[100%]"
                alt=""
              />
            </div>
          </div>
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
                <img
                  src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_2_900x.jpg?v=1712334213"
                  className="w-[100%] h-[280px]"
                  alt=""
                />
                <h5 className="absolute text-white bottom-[30px] left-[50%] translate-x-[-50%] w-[205px] text-[20px]  ">
                  Sustainable Practices
                </h5>
              </div>
              <div className="relative">
                <img
                  src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_2_900x.jpg?v=1712334213"
                  className="w-[100%] h-[280px]"
                  alt=""
                />
                <h5 className="absolute text-white bottom-[30px] left-[50%] translate-x-[-50%] w-[205px] text-[20px]  ">
                  Sustainable Practices
                </h5>
              </div>
              <div className="relative">
                <img
                  src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_2_900x.jpg?v=1712334213"
                  className="w-[100%] h-[280px]"
                  alt=""
                />
                <h5 className="absolute text-white bottom-[30px] left-[50%] translate-x-[-50%] w-[205px] text-[20px]  ">
                  Sustainable Practices
                </h5>
              </div>
              <div className="relative">
                <img
                  src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_2_900x.jpg?v=1712334213"
                  className="w-[100%] h-[280px]"
                  alt=""
                />
                <h5 className="absolute text-white bottom-[30px] left-[50%] translate-x-[-50%] w-[205px] text-[20px]  ">
                  Sustainable Practices
                </h5>
              </div>
            </div>
          </div>
        </div>
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
