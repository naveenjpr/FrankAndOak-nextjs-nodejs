import React from "react"
import Header from "../Common/Header"
import Dashboard from "../Middle-Section/Dashboard"

export default function AddSizeDetailss() {
  return (
    <>
      <Header />
      <div className="w-[100%]">
        <div className="flex">
          <div>
            <Dashboard />
          </div>
          <div className="w-[95%] mx-auto border-[2px] border-[solid] bg-[#deddf8] p-[10px]">
            <h1 className="capitalize font-bold">courses</h1>
            <form className="bg-white w-[98%] mx-auto p-[10px]">
              <div className="mb-[10px]">
                <label className="capitalize  ">Courses Name</label>
                <input
                  type="text"
                  className="w-[100%] border-[2px] mt-2 border-[solid] h-[40px]"
                />
              </div>
              <div className="mb-[10px]">
                <label className="capitalize  ">Courses Name</label>
                <input
                  type="text"
                  className="w-[100%] border-[2px] mt-2 border-[solid] h-[40px]"
                />
              </div>
              <div className="mb-[10px]">
                <label className="capitalize  ">Courses Name</label>
                <input
                  type="text"
                  className="w-[100%] border-[2px] mt-2 border-[solid] h-[40px]"
                />
              </div>
              <div className="mb-[10px]">
                <label className="capitalize  ">Courses Name</label>
                <textarea className="w-[100%] h-[150px] border-[2px] mt-2 border-[solid]"></textarea>
              </div>
              <div className="mb-[10px]">
                <label className="capitalize  ">Courses Image</label>
              </div>
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
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
