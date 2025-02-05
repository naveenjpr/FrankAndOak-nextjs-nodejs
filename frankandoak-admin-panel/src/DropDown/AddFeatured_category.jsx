import React, { useEffect, useState } from "react"
import Header from "../Common/Header"
import Dashboard from "../Middle-Section/Dashboard"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios, { toFormData } from "axios"
import { useNavigate, useParams } from "react-router"

export default function AddFeatured_category() {
  const [formsubmit, setformsubmit] = useState(false)
  let parsms = useParams()
  console.log(parsms.id)
  const [input, setinput] = useState({
    cloth_heading: "",
    cloth_sub_heading: "",
    cloth_price: "",
    imageUrl: "",
    cloth_status: "",
  })

  useEffect(() => {
    if (parsms.id !== undefined) {
      axios
        .post(
          "http://localhost:5000/api/backend/Featured_Categories/details/" +
            parsms.id
        )
        .then((result) => {
          console.log(result.data.data)
          setinput({
            cloth_heading: result.data.data.cloth_heading,
            cloth_sub_heading: result.data.data.cloth_sub_heading,
            cloth_price: result.data.data.price,
            imageUrl: result.data.data.imageUrl,
            cloth_status: result.data.data.status,
          })
        })
        .catch((error) => {
          toast.error("something went wrong")
        })
    }
  }, [])
  const navigate = useNavigate()

  let submitHandler = (event) => {
    event.preventDefault()

    if (event.target.cloth_status.value == 1) {
      var status = 1
    } else {
      var status = event.target.cloth_status.value
    }
    let form = new FormData(event.target)

    let dataSave = {
      cloth_heading: form.get("cloth_heading"),
      cloth_sub_heading: form.get("cloth_sub_heading"),
      price: form.get("cloth_price"),

      status: status,
    }

    if (form.get("imageUrl") != "") {
      dataSave.imageUrl = form.get("imageUrl")
    }
    if (parsms.id == undefined) {
      axios
        .post(
          "http://localhost:5000/api/backend/Featured_Categories/add",
          toFormData(dataSave)
        )
        .then((result) => {
          if (result.data.status === true) {
            toast.success(result.data.message)
            setformsubmit(true)
          } else {
            toast.error(result.data.error_message.message)
          }
        })
        .catch((error) => {
          console.log(error)
          toast.error("Something went wrong. Please try again.")
        })
    } else {
      dataSave.id = parsms.id
      axios
        .put(
          "http://localhost:5000/api/backend/Featured_Categories/update",
          toFormData(dataSave)
        )

        .then((result) => {
          if (result.data.status === true) {
            toast.success(result.data.message)
            setformsubmit(true)
          } else {
            toast.error(result.data.error_message.message)
          }
        })
        .catch((error) => {
          console.log(error)
          toast.error("Something went wrong. Please try again.")
        })
    }
  }
  useEffect(() => {
    if (formsubmit == true) {
      navigate("/Featured_category/ViewFeatured_category")
    }
  }, [formsubmit])

  let inputHander = (event) => {
    let data = { ...input }
    data[event.target.name] = event.target.value
    setinput(data)
  }

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
                Our best categories at their best prices ever{" "}
              </h1>
              <div className="bg-white p-[10px] rounded-[5px]">
                <form onSubmit={submitHandler} enctype="multipart/form-data">
                  <div className="">
                    <label className=" capitalize">cloth_heading</label>
                    <input
                      type="text"
                      name="cloth_heading"
                      onChange={inputHander}
                      value={input.cloth_heading}
                      className="w-[100%]  border border-[solid] border-[black] h-[50px] my-[10px]"
                    />
                  </div>
                  <div className="">
                    <label className=" capitalize">cloth_sub_heading</label>
                    <input
                      type="text"
                      name="cloth_sub_heading"
                      onChange={inputHander}
                      value={input.cloth_sub_heading}
                      className="w-[100%]  border border-[solid] border-[black] h-[50px] my-[10px]"
                    />
                  </div>
                  <div className="">
                    <label className="capitalize"> cloth_price</label>
                    <input
                      type="text"
                      name="cloth_price"
                      onChange={inputHander}
                      value={input.cloth_price}
                      className="w-[100%] h-[50px] border border-[solid] border-[black] overflow-hidden my-[10px]"
                    />
                  </div>
                  <div className="pb-[30px] border border-[solid] border-[black]">
                    <h1 className="pb-[13px]">cloth image</h1>
                    <div className="mb-[10px]  flex">
                      <input
                        type="file"
                        name="imageUrl"
                        className="border-[2px] border-[solid] w-[50%] h-[50px] rounded-[5px]"
                      />

                      <img src="" alt="" />
                    </div>
                  </div>
                  {/* <div className="">
                    <label className=""> Slider Description</label>
                    <textarea className="w-[100%] h-[90px] border border-[solid] border-[black] overflow-hidden my-[10px]"></textarea>
                  </div> */}
                  <div className="">
                    <label className=""> status type</label>
                    <div className="mt-[10px]">
                      <input
                        type="radio"
                        name="cloth_status"
                        value="1"
                        onChange={inputHander}
                        checked={input.cloth_status == 1 ? "checked" : ""}
                      />
                      <span className="px-[10px]">Active</span>
                      <input
                        type="radio"
                        name="cloth_status"
                        value="0"
                        onChange={inputHander}
                        checked={input.cloth_status == 0 ? "checked" : ""}
                      />
                      <span className="px-[10px]">Deactive</span>
                    </div>
                  </div>
                  <div className="mt-[50px] mb-[40px] flex gap-4">
                    {parsms.id == undefined ? (
                      <button className="text-white bg-[#4c1d95] table px-[15px] py-[5px] rounded-[15px]">
                        Submit
                      </button>
                    ) : (
                      <button className="text-white bg-[#4c1d95] table px-[15px] py-[5px] rounded-[15px]">
                        update
                      </button>
                    )}
                    <button className="text-white bg-[#4c1d95] table px-[15px] py-[5px] rounded-[15px]">
                      cancel
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
