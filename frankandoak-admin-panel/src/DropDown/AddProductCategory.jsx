import React from "react"
import Header from "../Common/Header"
import Dashboard from "../Middle-Section/Dashboard"

export default function AddProductCategory
() {
  const courses = [
    "",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Vue.js",
    "Angular",
    "Python",
    "Ruby on Rails",
    "Django",
  ]
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
              <h1 className="font-semibold text-[25px] pt-[20px] pb-[10px]">
                Add Video
              </h1>
              <div className="bg-white p-[10px] rounded-[5px]">
                <form>
                  <div className="">
                    <label className=""> Course Category</label>
                    <select className="w-[100%] h-[50px] border border-[solid] border-[black] overflow-hidden my-[10px]">
                      {courses.map((v, i) => {
                        console.log(v)

                        return <option>{v}</option>
                      })}
                    </select>
                  </div>
                  <div className="">
                    <label className=""> Video Topic</label>
                    <input
                      type="text"
                      className="w-[100%] h-[50px] border border-[solid] border-[black] overflow-hidden my-[10px]"
                    />
                  </div>
                  <div className="">
                    <label className=""> Video Link</label>
                    <input
                      type="text"
                      className="w-[100%] h-[50px] border border-[solid] border-[black] overflow-hidden my-[10px]"
                    />
                  </div>
                  <div className="">
                    <label className=""> Video status</label>
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
            <div className="h-[1px] bg-black w-[100%] my-[50px]">

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
