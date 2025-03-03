import React from "react"
import { CiDeliveryTruck } from "react-icons/ci"
import footerlogo from "../../../public/footerlogo.png"
import Image from "next/image"
import { CiInstagram } from "react-icons/ci"
import { LuFacebook } from "react-icons/lu"
import { FaTwitter } from "react-icons/fa"
import { FaPinterestP } from "react-icons/fa"
import { CiMail } from "react-icons/ci"
import { FaLinkedinIn } from "react-icons/fa"
import certified from "../../../public/certified.png"

export default function Footer() {
  return (
    <div className="w-[100%] bg-[#000]  text-white">
      <div className="w-[93%] mx-auto  md:gap-0 gap-[30px]  grid md:grid-cols-4 grid-cols-2 py-[50px] ">
        <div className="flex flex-col items-center text-center ">
          <img
            src="https://www.frankandoak.com/cdn/shop/files/Shipping-black_2_40x.png?v=1657555435"
            alt="testing"
            className="w-[50px] h-[40px] "
          />
          <div className="md:py-[15px] md:text-[20px] text-[10px] py-[5px]">
            Free Shipping
          </div>
          <div className="md:text-[14px] text-[12px]">On orders over $79.</div>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            src="https://www.frankandoak.com/cdn/shop/files/Returns-black_6defe504-0961-4e6b-9c71-70f44686eaa1_40x.png?v=1668024666"
            alt="testing"
            className="w-[50px] h-[40px] "
          />
          <div className="md:py-[15px] md:text-[20px] text-[10px] py-[5px]">
            Free Returns
          </div>
          <div className="md:text-[14px] text-[12px]">
            Only keep what you love.
          </div>
        </div>
        <div className="flex flex-col items-center text-center ">
          <img
            src="https://www.frankandoak.com/cdn/shop/files/loyalty_logo_light_40x.png?v=1672328644"
            alt="testing"
            className="w-[50px] h-[40px] "
          />
          <div className="md:py-[15px] md:text-[20px] text-[10px] py-[5px]">
            Frank Rewards
          </div>
          <div className="md:text-[14px] text-[12px]">
            Earn points and get rewards.
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            src="https://www.frankandoak.com/cdn/shop/files/Sezzle_40x.png?v=1704401097"
            alt="testing"
            className="w-[50px] h-[40px] "
          />
          <div className="md:py-[15px] md:text-[20px] text-[10px] py-[5px]">
            Buy Now, Pay Later
          </div>
          <div className="md:text-[14px] text-[12px]">
            Select Klarna at checkout.
          </div>
        </div>
      </div>

      <div className="w-[93%] mx-auto  md:gap-10 gap-[30px]  grid md:grid-cols-6 grid-cols-2 py-[50px] ">
        <div className="">
          <Image
            src={footerlogo}
            className="w-[80%] h-[40%] mb-[10px]"
            alt="testing"
          />
          <div className="flex gap-[20px] flex-wrap">
            <CiInstagram className="w-[24px] h-[28px]" />
            <LuFacebook className="w-[24px] h-[28px]" />
            <FaTwitter className="w-[24px] h-[28px]" />
            <FaPinterestP className="w-[24px] h-[28px]" />
            <CiMail className="w-[24px] h-[28px]" />
            <FaLinkedinIn className="w-[24px] h-[28px]" />
          </div>
          <div className="mt-[28px]">
            <Image
              src={certified}
              className="w-[40px] h-[67px] mb-[10px]"
              alt="testing"
            />
          </div>
        </div>
        <div className=" flex flex-col">
          <h4 className="text-[20px] font-[400] mb-[24px]">Our Story</h4>
          <ul className=" flex flex-col ">
            <li className="text-[14px] mb-[16px]">Who we are</li>
            <li className="text-[14px] mb-[16px]">Sustainable practices</li>
            <li className="text-[14px] mb-[16px]">Design Ideology</li>
            <li className="text-[14px] mb-[16px]">Fabrics</li>
            <li className="text-[14px] mb-[16px]">Circular denim™</li>
            <li className="text-[14px] mb-[16px]">Partners and factories</li>
          </ul>
        </div>
        <div className=" flex flex-col">
          <h4 className="text-[20px] font-[400] mb-[24px]">Discover</h4>
          <ul className="flex flex-col ">
            <li className="text-[14px] mb-[16px]">Gift Cards</li>
            <li className="text-[14px] mb-[16px]">Frank Rewards</li>
            <li className="text-[14px] mb-[16px]">Give $15, Get $15</li>
            <li className="text-[14px] mb-[16px]">Affiliate</li>
            <li className="text-[14px] mb-[16px]">Work with us</li>
            <li className="text-[14px] mb-[16px]">Our Stores</li>
          </ul>
        </div>
        <div className=" flex flex-col">
          <h4 className="text-[20px] font-[400] mb-[24px]">Customer Care</h4>
          <ul className="flex flex-col ">
            <li className="text-[14px] mb-[16px]">Shipping Information</li>
            <li className="text-[14px] mb-[16px]">Returns & Exchanges</li>
            <li className="text-[14px] mb-[16px]">Coupon Codes</li>
            <li className="text-[14px] mb-[16px]">F.A.Q.</li>
            <li className="text-[14px] mb-[16px]">Terms & Conditions</li>
            <li className="text-[14px] mb-[16px]">Refund Policy</li>
            <li className="text-[14px] mb-[16px]">Privacy policy</li>
            <li className="text-[14px] mb-[16px]">Accessibility Statement</li>
            <li className="text-[14px] mb-[16px]">Customer Data Requests</li>
          </ul>
        </div>
        <div className="col-span-2 text-[20px] font-[400] mb-[24px] flex flex-col">
          <h4 className="text-[20px] font-[400] mb-[24px]">Stay in touch</h4>
          <p className="text-[12px] mb-[16px]">
            Join our newsletter and stay in the know about new collections,
            outfit inspiration, sales, and more.
          </p>
          <form className="">
            <input
              type="text"
              placeholder="Email"
              className="w-[100%] border-[1px] border-[solid] border-[#7d8281] placeholder:ps-[20px] placeholder:text-white bg-[#1f2322] h-[50px] mb-[20px]"
            />
            <input
              type="text"
              placeholder="First Name"
              className="w-[100%] border-[1px] border-[solid] border-[#7d8281] placeholder:ps-[20px] placeholder:text-white bg-[#1f2322] h-[50px]"
            />
            <div className="py-[20px]">
              <fieldset className="flex gap-[20px] text-[15px]">
                <span className="">
                  <label className="">I shop for</label>
                </span>
                <span className="">
                  <input
                    className=""
                    type="radio"
                    id="iShopForWomen"
                    name="iShopFor"
                    value="women"
                  />
                  <label className="" >
                    Women
                  </label>
                </span>
                <span className="">
                  <input
                    className=""
                    type="radio"
                    id="iShopForMen"
                    name="iShopFor"
                    value="men"
                  />
                  <label className="">Men</label>
                </span>
                <span className="">
                  <input
                    className=""
                    type="radio"
                    id="iShopForAll"
                    name="iShopFor"
                    value="both"
                  />
                  <label className="" >
                    All
                  </label>
                </span>
              </fieldset>
            </div>
            <button
              className="w-[100%] text-[14px] py-[13px] text-center border-[2px] border-[solid] border-white"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="w-[93%] mx-auto">
        <ul className="text-[14px] pb-[60px]">
          <li className="">© Frank And Oak 2024 , All Rights Reserved.</li>
        </ul>
      </div>
    </div>
  )
}
