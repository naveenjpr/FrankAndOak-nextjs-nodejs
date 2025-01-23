import React, { useState } from "react"
import { IoReorderThreeOutline } from "react-icons/io5"
import { Link } from "react-router-dom"
import logo from "../Images/logo512.png"

export default function Header() {
  let Mylink = [{ navbarlink: "Home", to: "/" }]
  return (
    <>
      <header className="w-[100%]  shadow-md shadow-[#ccc] ">
        <div className="max-w-[95%] mx-auto py-[10px] ">
          <div className="flex justify-between items-center">
            <div className="w-[300px]  ">
              <div className="flex justify-between items-center">
                <div>
                  <Link to="/">
                    <img src={logo} alt="testing" className="w-[100px]" />
                  </Link>
                </div>

                <IoReorderThreeOutline className="w-[70px] h-[30px]" />
              </div>
            </div>
            <div className="w-[230px]  ">
              <div className="flex justify-around items-center">
                <div className=" font-bold">
                  <h1>Login</h1>
                </div>

                <div className=" font-bold capitalize">my Profile</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
