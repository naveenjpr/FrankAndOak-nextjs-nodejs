import React, { useEffect } from "react"
import Header from "../Common/Header"
import Dashboard from "../Middle-Section/Dashboard"
import { useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import { Link } from "react-router-dom"

export default function ViewFeatured_category() {
  const [viewparentCategory, setviewparentCategory] = useState([])
  const [statuschange, setstatuschange] = useState(false)
  const [myimageupload, setmyimageupload] = useState()
  

  let Featured_category = () => {
    axios
      .post("http://localhost:5000/api/backend/Featured_Categories/view")

      .then((result) => {
        // return console.log(result.data)
        if (result.data.status == true) {
          setmyimageupload(result.data.imagePath)
          setviewparentCategory(result.data.data)
        } else {
          setviewparentCategory([])
        }
      })

      .catch((error) => {
        // console.log("api not working " + error)
      })
  }
  let prostatuschange = (id, status) => {
    let data = {
      id: id,
      status: !status,
    }
    axios
      .put(
        "http://localhost:5000/api/backend/Featured_Categories/change-status",
        data
      )

      .then((result) => {
        if (result.data.status == true) {
          // console.log(result.data)
          setstatuschange(!statuschange)
          toast.success("status change")
        } else {
          toast.error("somethig went worng")
        }
      })

      .catch((error) => {
        // console.log("api not working " + error)
      })
  }

  let deleteCourse = (id) => {
    let data = {
      id: id,
    }
    axios
      .post(
        "http://localhost:5000/api/backend/Featured_Categories/delete",
        data
      )

      .then((result) => {
        if (result.data.status == true) {
          // console.log(result.data)
          setstatuschange(!statuschange)
        } else {
          toast.error(result.data.message)
        }
      })

      .catch((error) => {
        toast.error("Something went wrong")
      })
  }

  let [courseIds, setCourseIds] = useState([])

  const multiple_select = (id) => {
    if (!id) {
      console.error("Invalid ID provided for selection.")
      return
    }
    setCourseIds(
      (prevIds) =>
        prevIds.includes(id)
          ? prevIds.filter((course_id) => course_id !== id) // Remove if exists
          : [...prevIds, id] // Add if not exists
    )
  }

  const multipleDeleteCourse = () => {
    if (courseIds.length === 0) {
      toast.error("No courses selected for deletion.")
      return
    }
    if (!window.confirm("Are you sure you want to delete selected courses?")) {
      return
    }

    let data = { ids: courseIds }
    axios
      .post(
        "http://localhost:5000/api/backend/Featured_Categories/multiple-delete",
        data
      )
      .then((result) => {
        if (result.data.status) {
          toast.success(result.data.message)
          setstatuschange((prev) => !prev)
          setCourseIds("")
        } else {
          toast.error(result.data.message)
        }
      })
      .catch((error) => {
        toast.error("Something went wrong")
        console.log(error)
      })
  }

  const selectAll = (isSelected) => {
    if (!viewparentCategory) return
    if (isSelected) {
      const allIds = viewparentCategory.map((item) => item._id)
      setCourseIds(allIds)
      toast.success(`${allIds.length} courses selected`)
    } else {
      setCourseIds([])
      toast.info("All courses deselected")
    }
  }

  useEffect(() => {
    Featured_category()
  }, [statuschange])

  return (
    <>
      <Header />
      <ToastContainer />
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
                      <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 1 0 1 0 0-12 6 6 0 0 0 0 12z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-[10px] bg-white rounded-[10px] ">
                <div className="p-6 bg-gray-50 min-h-screen">
                  <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg">
                    <div className="overflow-x-auto max-h-screen overflow-y-scroll ">
                      <button
                        className={`${
                          courseIds.length === 0
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-blue-700 hover:bg-blue-800"
                        } text-white px-2 py-1 rounded mb-2`}
                        onClick={multipleDeleteCourse}
                        disabled={courseIds.length === 0}
                      >
                        multi delete
                      </button>
                      <table className="max-w-full text-center border-collapse  ">
                        <thead className="sticky top-0 z-50 bg-gray-200  ">
                          <tr>
                            <th></th>
                            <th className="border-[black] border-2 py-3 px-1 text-sm font-medium text-[black]">
                              s.no
                            </th>
                            <th className="border-[black] border-2 py-3 px-1 text-sm font-medium text-[black]">
                              cloth_heading
                            </th>
                            <th className="border-[black] border-2 py-3 px-1 text-sm font-medium text-[black]">
                              cloth_sub_heading
                            </th>
                            <th className="border-[black] border-2 py-3 px-1 text-sm font-medium text-[black]">
                              price
                            </th>
                            <th className="border-[black] border-2 py-3 px-1 text-sm font-medium text-[black]">
                              image
                            </th>
                            <th className="border-[black] border-2 py-3 px-1 text-sm font-medium text-[black]">
                              status
                            </th>
                            <th className="border-[black] border-2 py-3 px-1 text-sm font-medium text-[black]">
                              Edit || Delete
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {viewparentCategory &&
                          viewparentCategory.length > 0 ? (
                            viewparentCategory.map((v, i) => {
                              console.log(v.imageUrl)
                              return (
                                <tr
                                  key={i}
                                  className="hover:bg-gray-100 h-[50px]"
                                >
                                  <td className="border-[black] px-1 border py-4 text-sm text-gray-900">
                                    <input
                                      type="checkbox"
                                      checked={
                                        courseIds.includes(v._id)
                                          ? "checked"
                                          : ""
                                      }
                                      onChange={() => multiple_select(v._id)}
                                    />
                                  </td>
                                  <td className="border-[black] px-1 border py-4 text-sm text-gray-900">
                                    {i + 1}
                                  </td>
                                  <td className="border-[black] px-1 border py-4 text-sm text-gray-900">
                                    {v.cloth_heading || "N/A"}
                                  </td>
                                  <td className="border-[black] px-1 border py-4 text-sm text-gray-900">
                                    {v.cloth_sub_heading || "N/A"}
                                  </td>
                                  <td className="border-[black] px-1 border py-4 text-sm text-gray-900">
                                    {v.price || "N/A"}
                                  </td>
                                  <td className="border-[black] px-1 border py-4 text-sm text-gray-900">
                                  
                                    <img
                                      src={myimageupload + v.imageUrl}
                                      className="w-[100px] h-[100px] "
                                    />
                                    
                                  </td>
                                  <td className="border-[black] px-1 border py-4 text-sm text-gray-900">
                                    {v.status ? (
                                      <button
                                        className="text-white bg-blue-700 hover:bg-blue-800 px-2 py-1 rounded"
                                        onClick={() =>
                                          prostatuschange(v._id, v.status)
                                        }
                                      >
                                        Active
                                      </button>
                                    ) : (
                                      <button
                                        className="text-white bg-red-700 px-2 py-1 rounded"
                                        onClick={() =>
                                          prostatuschange(v._id, v.status)
                                        }
                                      >
                                        Deactive
                                      </button>
                                    )}
                                  </td>
                                  <td className="border-[black] px-1 border py-4 text-sm text-gray-900">
                                    <Link
                                      to={`/Featured_category/AddFeatured_category/${v._id}`}
                                    >
                                      <button className="text-white bg-black p-2 rounded">
                                        Edit
                                      </button>
                                    </Link>

                                    <button
                                      className="text-white bg-black p-2 ml-2 rounded"
                                      onClick={() => deleteCourse(v._id)}
                                    >
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              )
                            })
                          ) : (
                            <tr>
                              <td colSpan={7} className="py-4 text-gray-500">
                                No data available
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[1px] bg-black mt-[50px]"></div>
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
