"use client";
import React, { useEffect, useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import flage from "../../../public/cart.png";
import SlickSlider from "./SlickSlider";
import logo from "../../../public/logo .png";
import Dreses from "../../../public/dreses.png";
import Tops from "../../../public/tops.png";
import shorts from "../../../public/shorts.png";
import tshirt from "../../../public/tshirt.png";
import menssale from "../../../public/menssale.png";
import first from "../../../public/first.png";
import second from "../../../public/second.png";
import third from "../../../public/third.png";
import four from "../../../public/four.png";
import five from "../../../public/five.png";
import six from "../../../public/six.png";
import womansale from "../../../public/womansale.png";
import { FaGoogle } from "react-icons/fa";

import {
  categories1,
  categories2,
  categories3,
  categories4,
  categories5,
  icons,
  links,
  menuItems,
} from "./Myarray";
import Link from "next/link";

import { usePathname, useRouter } from "next/navigation";
import Model from "../Model/Model";
import Sign_up from "../Model/Sign_up";
import UserAccountDropdown from "../Model/UserAccountDropdown";
import { useContext } from "react";
import { LoginContext } from "../Context/MainContext";
import axios from "axios";

export default function Header() {
  const [show, setshow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  let [loginModelStatus, setloginModelStatus] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const pathname = usePathname();
  const router = useRouter();
  const { tokenvalue } = useContext(LoginContext);

  let Dropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleNavbar = () => {
    setshow(!show);
  };

  let modalshow = (v, i) => {
    if (i == 1) {
      // Search icon - do nothing or implement search functionality
    } else if (i == 2) {
      // User icon - check if logged in
      if (tokenvalue) {
        // User is logged in - show dropdown
        setUserDropdownOpen(!userDropdownOpen);
      } else {
        // User is not logged in - show login modal
        setloginModelStatus(true);
      }
    } else if (i == 3) {
      router.push("/wishlist");
      setMobileMenuOpen(false); // Close mobile menu on navigation
    } else if (i == 4) {
      router.push("/cart");
      setMobileMenuOpen(false); // Close mobile menu on navigation
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveDropdown(null); // Reset dropdowns when toggling menu
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuOpen &&
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".mobile-menu-button")
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="w-full">
        {loginModelStatus && (
          <Model
            setloginModelStatus={setloginModelStatus}
            loginModelStatus={loginModelStatus}
          />
        )}

        {/* top black area start */}
        <div className="hidden w-full bg-black md:block">
          <div className="w-[95%] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[78%_auto] justify-center items-center text-white py-2 md:py-[10px]">
              <div className="mx-2 md:mx-[20px]">
                <SlickSlider />
              </div>
              <div className="border border-solid border-[#4c2985] flex items-center ms-2 md:ms-[20px] px-3 md:px-[20px]">
                <img
                  src="/cart.png"
                  className="w-8 h-6 md:w-[40px] md:h-[30px] pr-2 md:pr-[10px]"
                  alt="currency"
                />
                <p className="uppercase text-xs md:text-[15px]">$ usd</p>
                <ul className="px-1 md:px-[5px] relative">
                  <li
                    onClick={Dropdown}
                    className="absolute top-[-5px] cursor-pointer"
                  >
                    <FaChevronDown className="text-xs md:text-[15px]" />
                    {isOpen == true ? (
                      <ul className="absolute left-0 top-full bg-white text-black mt-1 shadow-lg z-50 min-w-[100px]">
                        <li className="p-2 hover:bg-gray-100">
                          <img
                            src={flage}
                            className="w-8 h-6 md:w-[40px] md:h-[30px]"
                            alt="flag"
                          />
                        </li>
                        <li className="p-2 hover:bg-gray-100">
                          <img
                            src={flage}
                            className="w-8 h-6 md:w-[40px] md:h-[30px]"
                            alt="flag"
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

        {/* Main Header */}
        <div className="w-full bg-slate-50">
          <div className="flex justify-between items-center px-3 md:px-[12px] py-2 md:py-0 relative">
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-2xl mobile-menu-button"
              >
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            {/* Logo */}
            <div className="flex-1 md:flex-none">
              <Link href="/">
                <img
                  src="/logo .png"
                  alt="Logo"
                  className="w-24 h-auto md:w-[120px] md:h-[35px] mx-auto md:mx-0"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="flex-1 hidden md:block">
              <ul className="flex items-center justify-center gap-6 md:gap-[40px] font-medium">
                <li className="group py-3 md:py-[12px] cursor-pointer">
                  <Link href="/women">
                    <span
                      className={`font-bold text-sm md:text-base
                       ${pathname === "/women" ? "text-[red]" : "text-gray-800"}
                        `}
                    >
                      Women
                    </span>
                  </Link>
                  <div className="absolute left-0 z-50 hidden w-full h-auto duration-300 origin-top bg-white shadow-lg group-hover:block top-full">
                    <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-[60%_auto] pb-[10px]">
                      <div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                          <div>
                            <h1 className="font-medium pt-4 md:pt-[18px]">
                              Featured
                            </h1>
                            <ul className="pt-3 md:pt-[15px]">
                              {categories1.map((v, i) => (
                                <li
                                  key={i}
                                  className="font-medium text-xs md:text-[14px] pb-1 md:pb-[5px] hover:text-red-500"
                                >
                                  {v}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h1 className="pt-4 md:pt-[18px]">Clothing</h1>
                            <ul className="pt-3 md:pt-[15px]">
                              {categories2.map((v, i) => (
                                <li
                                  className="font-medium text-xs md:text-[14px] pb-1 md:pb-[5px] hover:text-red-500"
                                  key={i}
                                >
                                  {v}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h1 className="pt-4 md:pt-[18px]">Accessories</h1>
                            <ul className="pt-3 md:pt-[15px]">
                              {categories3.map((v, i) => (
                                <li
                                  className="font-medium text-xs md:text-[14px] pb-1 md:pb-[5px] hover:text-red-500"
                                  key={i}
                                >
                                  {v}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <img
                              src={Dreses}
                              className="w-full max-h-[400px] object-cover"
                              alt="Dresses"
                            />
                          </div>
                          <div>
                            <img
                              src={Tops}
                              className="w-full max-h-[400px] object-cover"
                              alt="Tops"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="group py-3 md:py-[12px] cursor-pointer">
                  <Link href="/men">
                    <span
                      className={`font-bold text-sm md:text-base
                       ${pathname === "/men" ? "text-[red]" : "text-gray-800"}
                        `}
                    >
                      Men
                    </span>
                  </Link>
                  <div className="absolute left-0 z-50 hidden w-full h-auto duration-300 origin-top bg-white shadow-lg group-hover:block top-full">
                    <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-[60%_auto] pb-[10px]">
                      <div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                          <div>
                            <h1 className="pt-4 md:pt-[18px]">Featured</h1>
                            <ul className="pt-3 md:pt-[15px]">
                              {categories1.map((v, i) => (
                                <li
                                  className="font-medium text-xs md:text-[14px] pb-1 md:pb-[5px] hover:text-red-500"
                                  key={i}
                                >
                                  {v}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h1 className="pt-4 md:pt-[18px]">Clothing</h1>
                            <ul className="pt-3 md:pt-[15px]">
                              {categories2.map((v, i) => (
                                <li
                                  className="font-medium text-xs md:text-[14px] pb-1 md:pb-[5px] hover:text-red-500"
                                  key={i}
                                >
                                  {v}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h1 className="pt-4 md:pt-[18px]">Accessories</h1>
                            <ul className="pt-3 md:pt-[15px]">
                              {categories3.map((v, i) => (
                                <li
                                  className="font-medium text-xs md:text-[14px] pb-1 md:pb-[5px] hover:text-red-500"
                                  key={i}
                                >
                                  {v}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <img
                              src={shorts}
                              className="w-full max-h-[400px] object-cover"
                              alt="Shorts"
                            />
                          </div>
                          <div>
                            <img
                              src={tshirt}
                              className="w-full max-h-[400px] object-cover"
                              alt="T-Shirt"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="group py-3 md:py-[12px] cursor-pointer">
                  <Link href="/Sale">
                    <span
                      className={`font-bold text-sm md:text-base
                       ${pathname === "/Sale" ? "text-[red]" : "text-gray-800"}
                        `}
                    >
                      Sale
                    </span>
                  </Link>
                  <div className="w-full bg-white min-h-[400px] hidden group-hover:block duration-300 origin-top absolute left-0 top-full z-50 shadow-lg">
                    <div className="w-[95%] mx-auto pb-[10px]">
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                        <div>
                          <h1 className="pt-4 md:pt-[18px]">Women's Sale</h1>
                          <ul className="pt-3 md:pt-[15px]">
                            {categories4.map((v, i) => (
                              <li
                                className="font-medium text-xs md:text-[14px] pb-1 md:pb-[5px] hover:text-red-500"
                                key={i}
                              >
                                {v}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h1 className="pt-4 md:pt-[18px]">Men's Sale</h1>
                          <ul className="pt-3 md:pt-[15px]">
                            {categories5.map((v, i) => (
                              <li
                                className="font-medium text-xs md:text-[14px] pb-1 md:pb-[5px] hover:text-red-500"
                                key={i}
                              >
                                {v}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="md:mr-[25px]">
                          <img
                            src={menssale}
                            className="w-full max-h-[350px] object-cover"
                            alt="Men's Sale"
                          />
                        </div>
                        <div>
                          <img
                            src={womansale}
                            className="w-full max-h-[350px] object-cover"
                            alt="Women's Sale"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="group py-3 md:py-[12px] cursor-pointer">
                  <Link href="/our-story">
                    <span
                      className={`font-bold text-sm md:text-base
                       ${
                         pathname === "/our-story"
                           ? "text-[red]"
                           : "text-gray-800"
                       }
                        `}
                    >
                      Our Story
                    </span>
                  </Link>
                  <div className="w-full bg-white min-h-[400px] hidden group-hover:block duration-300 origin-top absolute left-0 top-full z-50 shadow-lg">
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-[30px] justify-between px-3 md:px-[12px] pb-[10px]">
                      <div className="border-2 border-solid">
                        <img
                          src={first}
                          className="w-full h-[150px] md:h-[300px] object-cover"
                          alt="Story 1"
                        />
                      </div>
                      <div className="border-2 border-solid">
                        <img
                          src={second}
                          className="w-full h-[150px] md:h-[300px] object-cover"
                          alt="Story 2"
                        />
                      </div>
                      <div className="hidden border-2 border-solid md:block">
                        <img
                          src={third}
                          className="w-full h-[300px] object-cover"
                          alt="Story 3"
                        />
                      </div>
                      <div className="hidden border-2 border-solid md:block">
                        <img
                          src={four}
                          className="w-full h-[300px] object-cover"
                          alt="Story 4"
                        />
                      </div>
                      <div className="hidden border-2 border-solid md:block">
                        <img
                          src={five}
                          className="w-full h-[300px] object-cover"
                          alt="Story 5"
                        />
                      </div>
                      <div className="hidden border-2 border-solid md:block">
                        <img
                          src={six}
                          className="w-full h-[300px] object-cover"
                          alt="Story 6"
                        />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Icons Section */}
            <div className="flex items-center">
              <ul className="flex items-center font-bold text-xl md:text-[30px]">
                {icons.map((v, i) => (
                  <li
                    key={i}
                    className="pl-3 md:pl-0 md:pr-[30px] cursor-pointer relative"
                    onClick={() => modalshow(v, i)}
                  >
                    <div className="text-xl md:text-2xl">{v.component}</div>
                    {/* User Account Dropdown - only show if user is logged in */}
                    {i === 1 && tokenvalue && (
                      <UserAccountDropdown
                        isOpen={userDropdownOpen}
                        onClose={() => setUserDropdownOpen(false)}
                        setLoginModalStatus={setloginModelStatus}
                      />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="fixed top-0 left-0 z-50 w-full h-full pt-16 overflow-y-auto bg-white shadow-lg md:hidden mobile-menu">
            <div className="p-4">
              {/* Mobile Currency Selector */}
              <div className="p-3 mb-6 bg-gray-100 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src="/cart.png"
                      className="w-8 h-6 mr-3"
                      alt="currency"
                    />
                    <p className="text-sm uppercase">$ usd</p>
                  </div>
                  <FaChevronDown className="text-gray-600" />
                </div>
              </div>

              {/* Mobile Menu Items */}
              <ul className="space-y-1">
                <li className="py-3 border-b">
                  <Link
                    href="/women"
                    className={`block font-bold text-lg ${
                      pathname === "/women" ? "text-[red]" : ""
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Women
                  </Link>
                  <button
                    onClick={() => toggleDropdown("women")}
                    className="flex items-center mt-1 text-sm text-gray-600"
                  >
                    Categories{" "}
                    <FaChevronDown
                      className={`ml-1 transition-transform ${
                        activeDropdown === "women" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === "women" && (
                    <div className="mt-2 ml-4 space-y-2">
                      <div>
                        <h3 className="font-medium text-gray-700">Featured</h3>
                        <ul className="mt-1 space-y-1">
                          {categories1.slice(0, 3).map((v, i) => (
                            <li key={i} className="text-sm text-gray-600">
                              {v}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>

                <li className="py-3 border-b">
                  <Link
                    href="/men"
                    className={`block font-bold text-lg ${
                      pathname === "/men" ? "text-[red]" : ""
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Men
                  </Link>
                  <button
                    onClick={() => toggleDropdown("men")}
                    className="flex items-center mt-1 text-sm text-gray-600"
                  >
                    Categories{" "}
                    <FaChevronDown
                      className={`ml-1 transition-transform ${
                        activeDropdown === "men" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === "men" && (
                    <div className="mt-2 ml-4 space-y-2">
                      <div>
                        <h3 className="font-medium text-gray-700">Clothing</h3>
                        <ul className="mt-1 space-y-1">
                          {categories2.slice(0, 3).map((v, i) => (
                            <li key={i} className="text-sm text-gray-600">
                              {v}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>

                <li className="py-3 border-b">
                  <Link
                    href="/Sale"
                    className={`block font-bold text-lg ${
                      pathname === "/Sale" ? "text-[red]" : ""
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sale
                  </Link>
                  <button
                    onClick={() => toggleDropdown("sale")}
                    className="flex items-center mt-1 text-sm text-gray-600"
                  >
                    View Sale Categories{" "}
                    <FaChevronDown
                      className={`ml-1 transition-transform ${
                        activeDropdown === "sale" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === "sale" && (
                    <div className="grid grid-cols-2 gap-4 mt-2 ml-4">
                      <div>
                        <h3 className="font-medium text-gray-700">Women's</h3>
                        <ul className="mt-1 space-y-1">
                          {categories4.slice(0, 3).map((v, i) => (
                            <li key={i} className="text-sm text-gray-600">
                              {v}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-700">Men's</h3>
                        <ul className="mt-1 space-y-1">
                          {categories5.slice(0, 3).map((v, i) => (
                            <li key={i} className="text-sm text-gray-600">
                              {v}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>

                <li className="py-3 border-b">
                  <Link
                    href="/our-story"
                    className={`block font-bold text-lg ${
                      pathname === "/our-story" ? "text-[red]" : ""
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Our Story
                  </Link>
                </li>

                {/* Mobile Auth Links */}
                <li className="py-3 border-b">
                  {tokenvalue ? (
                    <div className="space-y-2">
                      <button
                        onClick={() => {
                          setUserDropdownOpen(!userDropdownOpen);
                          setMobileMenuOpen(false);
                        }}
                        className="block text-lg font-bold text-gray-800"
                      >
                        My Account
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setloginModelStatus(true);
                        setMobileMenuOpen(false);
                      }}
                      className="block text-lg font-bold text-gray-800"
                    >
                      Login / Sign Up
                    </button>
                  )}
                </li>

                {/* Additional Mobile Links */}
                <li className="py-3">
                  <Link
                    href="/wishlist"
                    className="flex items-center text-lg font-bold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="mr-2">❤️</span> Wishlist
                  </Link>
                </li>
                <li className="py-3">
                  <Link
                    href="/cart"
                    className="flex items-center text-lg font-bold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="mr-2">🛒</span> Shopping Cart
                  </Link>
                </li>
              </ul>

              {/* Mobile Contact Info */}
              <div className="pt-6 mt-8 border-t">
                <p className="text-sm text-center text-gray-600">
                  Need help? Contact us: support@example.com
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </header>
    </>
  );
}
