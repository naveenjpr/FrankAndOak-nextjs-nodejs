import React, { useEffect, useState } from "react"
import Header from "../../Common/Header";
import Dashboard from "../../Middle-Section/Dashboard";
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios, { toFormData } from "axios"
import { useNavigate, useParams } from "react-router"

export default function Addtabingcatrgory() {
  return (
    <>
      <Header />
      <ToastContainer />

      <div className="w-[100%]">
        <div className="flex">
          <div>
            <Dashboard />
          </div>
          <div className="w-[100%] bg-[#e0e7ff]">
            <div className="w-[95%] mx-auto  ">
              <h1 className="font-semibold text-[25px] pt-[20px] pb-[10px] capitalize">
                Our best
                <span className="text-[orange] mx-2">
                  Add tabing Categories
                </span>
                at their best prices ever
              </h1>
              <div className="bg-white p-[10px] rounded-[5px]">
                <form enctype="multipart/form-data">
                  <div className="">
                    <label className=" capitalize">category</label>
                    <input
                      type="text"
                      name="category"
                      // onChange={inputHander}
                      // value={input.cloth_heading}
                      className="w-[100%]  border border-[solid] border-[black] h-[50px] my-[10px]"
                    />
                  </div>
                  <div className="">
                    <label className=" capitalize">color</label>
                    <input
                      type="text"
                      name="color"
                      // onChange={inputHander}
                      // value={input.cloth_heading}
                      className="w-[100%]  border border-[solid] border-[black] h-[50px] my-[10px]"
                    />
                  </div>
                  <div className="">
                    <label className=" capitalize">size</label>
                    <input
                      type="text"
                      name="size"
                      // onChange={inputHander}
                      // value={input.cloth_heading}
                      className="w-[100%]  border border-[solid] border-[black] h-[50px] my-[10px]"
                    />
                  </div>
                  <div className="">
                    <label className=" capitalize">frontImage</label>
                    <input
                      type="text"
                      name="frontImage"
                      // onChange={inputHander}
                      // value={input.cloth_heading}
                      className="w-[100%]  border border-[solid] border-[black] h-[50px] my-[10px]"
                    />
                  </div>
                  <div className="">
                    <label className=" capitalize">backImage</label>
                    <input
                      type="text"
                      name="backImage"
                      // onChange={inputHander}
                      // value={input.cloth_heading}
                      className="w-[100%]  border border-[solid] border-[black] h-[50px] my-[10px]"
                    />
                  </div>

                  <div className="">
                    <label className=" capitalize">price</label>
                    <input
                      type="text"
                      name="price"
                      // onChange={inputHander}
                      // value={input.cloth_heading}
                      className="w-[100%]  border border-[solid] border-[black] h-[50px] my-[10px]"
                    />
                  </div>
                  <div className="">
                    <label className=" capitalize">status</label>
                    <input
                      type="text"
                      name="status"
                      // onChange={inputHander}
                      // value={input.cloth_heading}
                      className="w-[100%]  border border-[solid] border-[black] h-[50px] my-[10px]"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="h-[1px] bg-black w-[100%] my-[50px]"></div>
            <div className=" flex justify-between w-[90%] mx-auto py-[20px] text-[10px] md:text-[16px] ">
              <div className="capitalize">
                Copyright 2024
                <span className="text-[blue]">
                  Premium tailwindcss admin template from wscubeTech.
                </span>
                Allright reserved
              </div>
              <div>Hand-crafted & made with</div>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  )
}
