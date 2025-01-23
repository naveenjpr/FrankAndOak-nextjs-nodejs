import React from "react"
import Header from "../Common/Header"
import Dashboard from "../Middle-Section/Dashboard"

export default function ViewProductCategory() {
  return (
    <>
      <Header />
      <div className="w-[100%]">
        <div className="flex">
          <div>
            <Dashboard />
          </div>
          <div className="bg-[#d8d8ef] w-[100%]  ">
            <div className="w-[95%]   mx-auto">
              <div className="flex md:flex-row flex-col justify-between  md:max-w-[95%]  mt-[60px]">
                <h1 className="capitalize font-bold md:text-[25px] text-[25px] md:text-left text-center">
                  welcome to view course table
                </h1>
                <div className="border rounded overflow-hidden flex md:flex-row flex-col">
                  <input
                    type="text"
                    className="md:px-4 px-[0px] py-2 max-w-[400px]"
                    placeholder="Search..."
                  />
                  <button className="flex items-center md:bg-none bg-[blue] justify-center py-[10px] md:px-4 px-[0px] border-l">
                    <svg
                      className="h-4 w-4 text-[red]"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                    </svg>
                  </button>
                </div>
              </div>

              <button className="border border-[solid] mt-[20px] mb-[40px] border-[blue] rounded-[20px]  py-[6px] px-[12px]">
                All Courses Video
              </button>
              <div className="p-[10px] bg-white rounded-[10px] ">
                <div className="flex lg:flex-row flex-col w-[100%] bg-white ">
                  <div className="border border-[solid] border-[black] basis-[10%] py-[20px]">
                    <h1 className="text-center">S.no</h1>
                  </div>
                  <div className="border border-[solid] border-[black] basis-[25%] py-[20px] col-span-1">
                    <h1 className="capitalize text-center">courses Category</h1>
                  </div>
                  <div className="border border-[solid] border-[black] py-[20px] md:px-[10px] px-[0px] col-span-1">
                    <div className="flex justify-center items-center px-[10px]">
                      <button className="bg-[pink] text-white px-[6px] py-[2px]">
                        Delete
                      </button>
                      <input type="checkbox" name="" id="" />
                    </div>
                  </div>
                  <div className="border border-[solid] border-[black] basis-[20%] py-[20px]">
                    <h1 className="text-center">Video Topic</h1>
                  </div>
                  <div className="border border-[solid] border-[black] basis-[17%] py-[20px] col-span-1">
                    <h1 className="text-center">Video Link</h1>
                  </div>

                  <div className="border border-[solid] border-[black] basis-[10%] py-[20px]">
                    <h1 className="text-center">Status</h1>
                  </div>
                  <div className="border border-[solid] border-[black] basis-[10%] py-[20px]">
                    <h1 className="text-center">Action</h1>
                  </div>
                </div>
                <div className="border border-[solid] border-[black] w-[100%] ">
                  <h1 className="text-center">No data found in Api</h1>
                </div>
              </div>
            </div>
            <div className="h-[1px] bg-black mt-[50px]"></div>
            <div className=" flex justify-between w-[90%] mx-auto py-[20px] text-[10px] md:text-[16px] ">
              <div className="capitalize">
                Copyright 2024
                <span className="text-[blue]">Premium tailwindcss admin template from wscubeTech.</span>
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
