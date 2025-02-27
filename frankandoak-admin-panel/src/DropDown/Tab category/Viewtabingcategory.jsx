import React, { useEffect } from "react"
import Header from "../../Common/Header"
import Dashboard from "../../Middle-Section/Dashboard"
import { useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import { Link } from "react-router-dom"
import { MdDelete } from "react-icons/md"
import { CiEdit } from "react-icons/ci"

export default function Viewtabingcategory() {
  const [dataview, setdataviewview] = useState([])
  const [statuschange, setstatuschange] = useState(false)
  const [ImagePath, setImagePath] = useState()
  let tabview = () => {
    axios
      .post("http://localhost:5000/api/backend/Tapbing_Categories/view")
      .then((result) => {
        setImagePath(result.data.imagePath)
        setdataviewview(result.data.data)
      })
      .catch((error) => {
        console.log(error)
        toast.error("Something went wrong. Please try again.")
      })
  }

  let tabing_status = (id, status) => {
    let data = {
      id: id,
      status: !status,
    }
    axios
      .put(
        "http://localhost:5000/api/backend/Tapbing_Categories/change-status",
        data
      )
      .then((result) => {
        setstatuschange(!statuschange)
        tabview()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  let deleteid = async (id) => {
    try {
      const result = await axios.delete(
        `http://localhost:5000/api/backend/Tapbing_Categories/delete/${id}`
      )
      tabview()
    } catch (error) {
      console.error("Error deleting record:", error)
    }
  }

  useEffect(() => {
    tabview()
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
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              {/* Table Head */}
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="p-3 border">s.no</th>
                  <th className="p-3 border">Category</th>
                  <th className="p-3 border">Color</th>
                  <th className="p-3 border">Size</th>
                  <th className="p-3 border">Front Image</th>
                  <th className="p-3 border">Back Image</th>
                  <th className="p-3 border">Price </th>
                  <th className="p-3 border">Status</th>
                  <th className="p-3 border">delete || edit</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {dataview.length > 0
                  ? dataview.map((item, index) => {
                      console.log(item)
                      return (
                        <>
                          <tr
                            key={index}
                            className="bg-white text-center border"
                          >
                            <td className="p-3 border">{index + 1}</td>
                            <td className="p-3 border">{item.category}</td>
                            <td className="p-3 border">{item.color}</td>
                            <td className="p-3 border">{item.size}</td>
                            <td className="p-3 border">
                              <img
                                src={`${ImagePath}${item.frontImage}`}
                                alt="Front"
                                className="w-12 h-12 mx-auto"
                              />
                            </td>
                            <td className="p-3 border">
                              <img
                                src={ImagePath + item.backImage}
                                alt="Back"
                                className="w-12 h-12 mx-auto"
                              />
                            </td>
                            <td className="p-3 border">${item.price}</td>
                            <td className="p-3 border cursor-pointer">
                              {item.status == 1 ? (
                                <span
                                  className="text-green-600 font-semibold"
                                  onClick={() =>
                                    tabing_status(item._id, item.status)
                                  }
                                >
                                  Active
                                </span>
                              ) : (
                                <span
                                  className="text-red-600 font-semibold"
                                  onClick={() =>
                                    tabing_status(item._id, item.status)
                                  }
                                >
                                  Inactive
                                </span>
                              )}
                            </td>
                            <td className="p-3 border">
                              <button>
                                <MdDelete
                                  className="text-red-600 text-[25px]"
                                  onClick={() => deleteid(item._id)}
                                />
                              </button>
                              {/* edit case */}
                              <Link
                                to={`/Tabing_Category/Add_Tabing_Category/${item._id}`}
                              >
                                <button>
                                  <CiEdit className="text-green-500 text-[25px]" />
                                </button>
                              </Link>
                            </td>
                          </tr>
                        </>
                      )
                    })
                  : ""}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
