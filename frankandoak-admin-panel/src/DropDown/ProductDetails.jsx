import React from "react"
import Header from "../Common/Header"
import Dashboard from "../Middle-Section/Dashboard"

export default function ProductDetails() {
  return (
    <>
      <Header />
      <div className="w-[100%]">
        <div className="flex">
          <div>
            <Dashboard />
          </div>
          <div className="w-[100%] bg-[#e0e7ff]">
            <div className="w-[95%] mx-auto  ">
              <h1 className="font-semibold text-[25px] pt-[20px] pb-[10px] capitalize">
                slider
              </h1>
              <div className="bg-white p-[10px] rounded-[5px]">
                <form>
                  <div className="">
                    <label className=" capitalize">slider heading</label>
                    <input
                      type="text"
                      className="w-[100%] border border-[solid] border-[black] h-[50px] my-[10px]"
                    />
                  </div>
                  <div className="">
                    <label className="capitalize"> slider sub-heading</label>
                    <input
                      type="text"
                      className="w-[100%] h-[50px] border border-[solid] border-[black] overflow-hidden my-[10px]"
                    />
                  </div>
                  <div className="pb-[30px]">
                    <h1 className="pb-[130px]">slider image</h1>
                    <div className="mb-[10px] flex">
                      <input
                        type="text"
                        className="border-[2px] border-[solid] w-[50%] h-[50px] rounded-[5px]"
                      />
                      <button className="bg-[blue] py-[10px] px-[30px] text-white rounded-[0px_15px_15px_0px]">
                        Upload
                      </button>
                      <img src="" alt="" />
                    </div>
                  </div>
                  <div className="">
                    <label className=""> Slider Description</label>
                    <textarea className="w-[100%] h-[90px] border border-[solid] border-[black] overflow-hidden my-[10px]"></textarea>
                  </div>
                  <div className="">
                    <label className=""> slider status</label>
                    <div className="mt-[10px]">
                      <input type="checkbox" />{" "}
                      <span className="px-[10px]">Active</span>
                      <input type="checkbox" />{" "}
                      <span className="px-[10px]">Deactive</span>
                    </div>
                  </div>
                  <div className="mt-[50px] mb-[40px]">
                    <button className="text-white bg-[#4c1d95] md:px-[50px] px-[10px] md:py-[15px] py-[5px] rounded-[15px]">
                      Submit
                    </button>
                    <button className="bg-[#f5f5f4] md:px-[40px] px-[10px] md:py-[15px] py-[5px] ms-[15px]">
                      Cancel
                    </button>
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
          </div>
        </div>
      </div>
    </>
  )
}
