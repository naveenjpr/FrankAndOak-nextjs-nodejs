"use client"
import React, { useState } from "react"
import { FaChevronDown } from "react-icons/fa"
import flage from "../../../public/cart.png"
import SlickSlider from "./SlickSlider"
import logo from "../../../public/logo .png"
import Dreses from "../../../public/dreses.png"
import Tops from "../../../public/tops.png"
import shorts from "../../../public/shorts.png"
import tshirt from "../../../public/tshirt.png"
import menssale from "../../../public/menssale.png"
import first from "../../../public/first.png"
import second from "../../../public/second.png"
import third from "../../../public/third.png"
import four from "../../../public/four.png"
import five from "../../../public/five.png"
import six from "../../../public/six.png"
import womansale from "../../../public/womansale.png"
import { FaGoogle } from "react-icons/fa"

import {
  categories1,
  categories2,
  categories3,
  categories4,
  categories5,
  icons,
  links,
  menuItems,
} from "./Myarray"
import Link from "next/link"
import { FaFacebookF } from "react-icons/fa"

import loginlogo from "../../../public/loginlogo.png"
import Login from "./Login"
import { usePathname } from "next/navigation"

export default function Header() {
  const [show, setshow] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [loginmodal, setloginmodal] = useState(false)

  const pathname = usePathname()

  let Dropdown = () => {
    setIsOpen(!isOpen)
  }

  const toggleNavbar = () => {
    setshow(!show)
  }
  let modalshow = (v, i) => {
    if (i == 1) {
      setloginmodal(!loginmodal)
      // alert("hello")
    }
  }
  return (
    <>
      <header className="w-[100%] md:block hidden	">
        {/* top black area start */}
        <div className="bg-black w-[100%] ">
          <div className="w-[95%]  mx-auto">
            <div className="grid grid-cols-[78%_auto] justify-center items-center text-white py-[10px]">
              <div className=" mx-[20px] ">
                <SlickSlider />
              </div>
              <div className="border border-[solid] border-[#4c2985] flex  items-center ms-[20px] px-[20px] ">
                <img
                  src={flage}
                  className="w-[40px] h-[30px] pr-[10px]"
                  alt="testing"
                />
                <p className="uppercase text-[15px]">$ usd</p>
                <ul className="px-[5px] relative">
                  <li onClick={Dropdown} className="absolute top-[-5px] ">
                    <FaChevronDown className="text-[15px] " />
                    {isOpen == true ? (
                      <ul>
                        <li>
                          <img
                            src={flage}
                            className="w-[40px] h-[30px] pr-[10px]"
                            alt="testing"
                          />
                        </li>
                        <li>
                          <img
                            src={flage}
                            className="w-[40px] h-[30px] pr-[10px]"
                            alt="testing"
                          />
                        </li>
                      </ul>
                    ) : (
                      ""
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* top black area End */}

        <div className="w-[100%] bg-slate-50 ">
          <div className="grid grid-cols-[50%_35%]  justify-between px-[12px] relative items-center">
            <div className="">
              <ul className="flex items-center justify-around       ">
                <li
                  className={
                    pathname === "/" ? "text-white bg-[blue]" : "text-gray-200"
                  }
                >
                  <Link href="/">
                    <img
                      src={logo} // Path to your img
                      alt="Description of img"
                      className="w-[120px] h-[35px]"
                    />
                  </Link>
                </li>
                <li className="group py-[12px] cursor-pointer ">
                  <Link href="/women">
                    <span
                      className={`font-[700]
                       ${pathname === "/women" ? "text-[red]" : ""}
                        `}
                    >
                      Women
                    </span>
                  </Link>
                  <div className="w-[100%]  bg-white h-auto  hidden group-hover:block duration-300 origin-top   absolute left-0 top-[100%]">
                    <div className=" w-[95%] mx-auto grid grid-cols-[60%_auto] pb-[10px]">
                      <div className="">
                        <div className="grid grid-cols-3">
                          <div>
                            <h1 className="font-[500] pt-[18px]">Featured</h1>

                            <ul className="pt-[15px]">
                              {categories1.map((v, i) => (
                                <li
                                  key={i}
                                  className="font-[500] text-[14px] pb-[5px]"
                                >
                                  {v}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h1 className="pt-[18px]">Clothing</h1>
                            <ul className="pt-[15px]">
                              {categories2.map((v, i) => (
                                <li
                                  className="font-[500] text-[14px] pb-[5px]"
                                  key={i}
                                >
                                  {v}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h1 className="pt-[18px]">Accessories</h1>
                            <ul className="pt-[15px]">
                              {categories3.map((v, i) => (
                                <li
                                  className="font-[500] text-[14px] pb-[5px]"
                                  key={i}
                                >
                                  {v}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="grid grid-cols-2 justify-between">
                          <div className="">
                            <img
                              src={Dreses}
                              className="w-[100%] max-h-[400px]"
                            />
                          </div>
                          <div className="">
                            <img
                              src={Tops}
                              className="w-[100%] max-h-[400px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="group py-[12px] cursor-pointer">
                  <h2 className="font-[700] ">
                    <Link
                      href="/men"
                      className={`font-[700]
                       ${pathname === "/men" ? "text-[red]" : ""}
                        `}
                    >
                      Men
                    </Link>
                  </h2>
                  <div className="w-[100%]   bg-white h-auto  hidden group-hover:block duration-300 origin-top   absolute left-0 top-[100%]">
                    <div className=" w-[95%] mx-auto grid grid-cols-[60%_auto] pb-[10px]">
                      <div className="">
                        <div className="grid grid-cols-3">
                          <div>
                            <h1 className="pt-[18px]">Featured</h1>
                            <ul className="pt-[15px]">
                              {categories1.map((v, i) => (
                                <li
                                  className="font-[500] text-[14px] pb-[5px]"
                                  key={i}
                                >
                                  {v}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h1 className="pt-[18px]">Clothing</h1>
                            <ul className="pt-[15px]">
                              {categories2.map((v, i) => (
                                <li
                                  className="font-[500] text-[14px] pb-[5px]"
                                  key={i}
                                >
                                  {v}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h1 className="pt-[18px]">Accessories</h1>
                            <ul className="pt-[15px]">
                              {categories3.map((v, i) => (
                                <li
                                  className="font-[500] text-[14px] pb-[5px]"
                                  key={i}
                                >
                                  {v}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="grid grid-cols-2 justify-between gap-2">
                          <div className="">
                            <img
                              src={shorts}
                              className="w-[100%] max-h-[400px]"
                            />
                          </div>
                          <div className="">
                            <img
                              src={tshirt}
                              className="w-[100%] max-h-[400px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="group py-[12px] cursor-pointer">
                  <Link href="/Sale">
                    <span
                      className={`font-[700]
                       ${pathname === "/Sale" ? "text-[red]" : ""}
                        `}
                    >
                      Sale
                    </span>
                  </Link>

                  <div className="w-[100%] bg-white  min-h-[400px] hidden group-hover:block duration-300 origin-top   absolute left-0 top-[100%]">
                    <div className=" w-[95%] mx-auto grid grid-cols-1 pb-[10px]">
                      <div className="">
                        <div className="grid grid-cols-4 justify-between">
                          <div>
                            <h1 className="pt-[18px]">Women's Sale</h1>

                            <ul className="pt-[15px]">
                              {categories4.map((v, i) => (
                                <li
                                  className="font-[500] text-[14px] pb-[5px]"
                                  key={i}
                                >
                                  {v}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h1 className="pt-[18px]">Men's Sale</h1>
                            <ul className="pt-[15px]">
                              {categories5.map((v, i) => (
                                <li
                                  className="font-[500] text-[14px] pb-[5px]"
                                  key={i}
                                >
                                  {v}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mr-[25px]">
                            <img
                              src={menssale}
                              className="w-[100%] max-h-[350px]"
                              alt="testing"
                            />
                          </div>
                          <div className="">
                            <img
                              src={womansale}
                              className="w-[100%] max-h-[350px]"
                              alt="testing"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className=" group py-[12px] cursor-pointer">
                  {" "}
                  <h2 className="font-[700] ">
                    <Link
                      href="/our-story"
                      className={`font-[700]
                       ${pathname === "/our-story" ? "text-[red]" : ""}
                        `}
                    >
                      Our Story
                    </Link>
                  </h2>
                  <div className="w-[100%] bg-white min-h-[400px]  hidden group-hover:block duration-300 origin-top   absolute left-0 top-[100%]">
                    <div className="grid grid-cols-6 gap-[30px] justify-between px-[12px] pb-[10px]">
                      <div className="border-[2px] border-[solid]">
                        <img src={first} className="w-[100%] h-[300px]" />
                      </div>
                      <div className="border-[2px] border-[solid]">
                        <img src={second} className="w-[100%] h-[300px]" />
                      </div>
                      <div className="border-[2px] border-[solid]">
                        <img src={third} className="w-[100%] h-[300px]" />
                      </div>
                      <div className="border-[2px] border-[solid]">
                        <img src={four} className="w-[100%] h-[300px]" />
                      </div>
                      <div className="border-[2px] border-[solid]">
                        <img src={five} className="w-[100%] h-[300px]" />
                      </div>
                      <div className="border-[2px] border-[solid]">
                        <img src={six} className="w-[100%] h-[300px]" />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="">
              <ul className="flex justify-end font-[600] text-[30px]">
                {icons.map((v, i) => (
                  <li
                    key={i} // ✅ Add key here
                    className="pr-[30px] cursor-pointer"
                    onClick={() => modalshow(v, i)}
                  >
                    {v.component}
                  </li>
                ))}
              </ul>

              <div
                className={`w-[700px] duration-500 bg-white h-[500px] fixed left-[50%] top-[-1000px] translate-x-[-50%] translate-y-[-50%] z-[999] ${
                  loginmodal == true ? "top-[50%]" : ""
                } `}
              >
                <div className="w-[100%] h-[100%] overflow-auto px-[12px] relative">
                  <span
                    className="absolute right-0 top-0 text-[25px] cursor-pointer hover:text-[red]"
                    onClick={() => setloginmodal(!loginmodal)}
                  >
                    x
                  </span>
                  <p className="text-[26px] text-center font-[400]">
                    Welcome Back
                  </p>
                  <p className="mt-[10px] text-[16px] font-[400] text-center">
                    Log in to get access to your member perks.
                  </p>
                  <div className="grid grid-cols-3 py-[30px]">
                    <div className="flex flex-col items-center leading-[25px]">
                      <div>
                        <img src={loginlogo} className="w-[30px] h-[30px]" />
                      </div>
                      <div className="font-[500] text-[12px]">
                        Frank Rewards
                      </div>
                      <div className="font-[400] text-[12px]">
                        Earn points. Get rewarded.
                      </div>
                    </div>
                    <div className="flex flex-col items-center leading-[25px]">
                      <div>
                        <img src={loginlogo} className="w-[30px] h-[30px]" />
                      </div>
                      <div className="font-[500] text-[12px]">
                        Frank Rewards
                      </div>
                      <div className="font-[400] text-[12px]">
                        Earn points. Get rewarded.
                      </div>
                    </div>
                    <div className="flex flex-col items-center leading-[25px]">
                      <div>
                        <img src={loginlogo} className="w-[30px] h-[30px]" />
                      </div>
                      <div className="font-[500] text-[12px]">
                        Frank Rewards
                      </div>
                      <div className="font-[400] text-[12px]">
                        Earn points. Get rewarded.
                      </div>
                    </div>
                  </div>
                  {/* login logic start */}
                  <Login />
                  {/* login logic end */}

                  <p className="text-center py-[30px] font-[400]">
                    Social login
                  </p>
                  <div className="grid grid-cols-2 justify-between items-center gap-[20px] px-[12px]">
                    <div className="border-[2px] border-[solid] border-black flex justify-between items-center text-[#000000]">
                      <div className="px-[12px]">
                        <FaFacebookF />
                      </div>
                      <div className="px-[12px] font-[500] py-[15px]">
                        Sign in with Facebook
                      </div>
                    </div>

                    <div className="border-[2px] border-[solid] border-black flex justify-between items-center text-[#000000]">
                      <div className="px-[12px]">
                        <FaGoogle />
                      </div>
                      <div className="px-[12px] font-[500] py-[15px]">
                        Sign in with Google
                      </div>
                    </div>
                  </div>
                  <p className="text-center py-[30px] font-[400]">
                    Create an account
                  </p>
                  <p className="flex justify-center items-center pb-[30px]">
                    Don't have an account? &nbsp;{" "}
                    <button className=" relative">
                      Sign up
                      <span className="absolute top-[100%] h-[1px] bg-black left-0 w-[100%] "></span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* mobile header */}
    </>
  )
}
