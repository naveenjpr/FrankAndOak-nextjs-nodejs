import React, { useEffect, useState } from "react"
import Header from "../../Common/Header"
import Dashboard from "../../Middle-Section/Dashboard"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios, { toFormData } from "axios"
import { Navigate, useNavigate, useParams } from "react-router"

export default function Addtabingcatrgory() {
  const [formsubmit, setformsubmit] = useState(false)
  const navigate = useNavigate()
  let parsms = useParams()

  const [editUser, seteditUser] = useState({
    category: "",
    color: "",
    frontImage: "",
    backImage: "",

    price: "",
    size: "",
    status: 1,
    _id: "",
  })
  console.log(editUser)
  let handleSubmit = (e) => {
    if (e.target.status.value == 1) {
      var status = 1
    } else {
      var status = e.target.status.value
    }
    let form = new FormData(e.target)

    let dataSave = {
      category: e.target.category.value,
      color: e.target.color.value,
      size: e.target.size.value,
      // frontImage: e.target.frontImage.value,
      // backImage: e.target.backImage.value,
      price: e.target.price.value,
      status: status ?? 1,
    }
    if (form.get("frontImage") != "") {
      dataSave.frontImage = form.get("frontImage")
    }
    if (form.get("backImage") != "") {
      dataSave.backImage = form.get("backImage") // Corrected to backImage
    }

    if (parsms.id == undefined) {
      axios
        .post(
          "http://localhost:5000/api/backend/Tapbing_Categories/add",
          toFormData(dataSave)
        )
        .then((result) => {
          if (result.data.status === true) {
            console.log(result.data)
            toast.success(result.data.message)
            setformsubmit(true)

            // Navigate directly after success
            // navigate("/Tabing_Category/View_Tabing_Category")
          } else {
            toast.error(result.data.error_message.message)
          }
          //
        })
        .catch((error) => {
          console.log(error)
          toast.error("Something went wrong. Please try again.")
        })
    } else {
      dataSave.id = parsms.id

      axios
        .put(
          "http://localhost:5000/api/backend/Tapbing_Categories/update",
          toFormData(dataSave)
        )
        .then((result) => {
          if (result.data.status === true) {
            toast.success(result.data.message)
            setformsubmit(true)

            // Navigate directly after success
            navigate("/Tabing_Category/View_Tabing_Category")
          } else {
            toast.error(result.data.error_message.message)
          }
          //
        })
        .catch((error) => {
          console.log(error)
          toast.error("Something went wrong. Please try again.")
        })
    }

    e.preventDefault()
  }

  useEffect(() => {
    if (parsms.id != undefined) {
      axios
        .post(
          "http://localhost:5000/api/backend/Tapbing_Categories/details/" +
            parsms.id
        )
        .then((result) => {
          seteditUser({
            category: result.data.data.category,
            color: result.data.data.color,
            frontImage: result.data.data.frontImage,
            backImage: result.data.data.backImage,

            price: result.data.data.price,
            size: result.data.data.size,
            status: result.data.data.status ?? 1,
            // _id: result.data.data.item._id,
          })
        })
        .catch((error) => {
          toast.error("Failed to fetch category details.")
          console.error("Error fetching category details:", error)
        })
    }
  }, [parsms.id])

  useEffect(() => {
    if (formsubmit == true) {
      navigate("/Tabing_Category/View_Tabing_Category")
    }
  }, [formsubmit, navigate])

  let inputHandler = (event) => {
    const { name, value, type } = event.target

    if (type === "file") {
      const file = event.target.files?.[0] // ✅ Use optional chaining to avoid errors
      if (file) {
        seteditUser((prev) => ({
          ...prev,
          [name]: file, // ✅ Dynamically update frontImage or backImage
        }))
      }
    } else {
      seteditUser((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  return (
    <>
      <Header />
      <ToastContainer />
      <div className="w-[100%] ">
        <div className="flex">
          <div className="">
            <Dashboard />
          </div>
          <div className="w-full bg-[#e0e7ff]">
            <div className="w-[100%] mx-auto">
              <h1 className="font-semibold text-[25px] pt-[20px] pb-[10px] capitalize">
                Add
                <span className="text-[orange] mx-2">Tabbing Category</span>
              </h1>
              <div className="bg-white p-[10px] rounded-[5px]">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  {/* Category */}
                  <label className="capitalize">Category</label>
                  <select
                    name="category"
                    onChange={inputHandler}
                    value={editUser.category || ""}
                    className="w-full border border-black h-[50px] my-[10px]"
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                  </select>
                  {/* Color */}
                  <label className="capitalize">Color</label>
                  <select
                    name="color"
                    className="w-full border border-black h-[50px] my-[10px] px-2"
                    onChange={inputHandler}
                    value={editUser.color || ""}
                  >
                    <option value="">Select Color</option>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Green">Green</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Pink">Pink</option>
                    <option value="Gray">Gray</option>
                    <option value="Brown">Brown</option>
                    <option value="Purple">Purple</option>
                    <option value="Orange">Orange</option>
                  </select>

                  {/* Size */}
                  <label className="capitalize">Size</label>
                  <select
                    name="size"
                    onChange={inputHandler}
                    value={editUser.size || ""}
                    className="w-full border border-black h-[50px] my-[10px] px-2"
                  >
                    <option value="">Select Size</option>
                    <option value="S">Small (S)</option>
                    <option value="M">Medium (M)</option>
                    <option value="L">Large (L)</option>
                    <option value="XL">Extra Large (XL)</option>
                    <option value="XXL">Double Extra Large (XXL)</option>
                  </select>

                  {/* Front Image */}
                  <label className="capitalize">Front Image</label>
                  <div className="flex items-center justify-between">
                    <input
                      type="file"
                      name="frontImage"
                      onChange={inputHandler} // ✅ फाइल बदलने पर प्रीव्यू अपडेट होगा
                      className="w-[80%] border border-black h-[50px] my-[10px]"
                    />

                    <img
                      src={
                        editUser.frontImage
                          ? typeof editUser.frontImage === "string"
                            ? `http://localhost:5000/uploads/Tabingcategory/${editUser.frontImage}`
                            : URL.createObjectURL(editUser.frontImage) // ✅ नई अपलोड की गई इमेज तुरंत दिखेगी
                          : "https://via.placeholder.com/50" // ✅ डिफ़ॉल्ट इमेज
                      }
                      alt="Front Preview"
                      className="h-[50px] w-[20%] object-cover"
                    />
                  </div>
                  {/* Back Image */}
                  <label className="capitalize">Back Image</label>

                  <div className="flex items-center justify-between">
                    <input
                      type="file"
                      name="backImage"
                      onChange={inputHandler} // ✅ फाइल बदलने पर प्रीव्यू अपडेट होगा
                      className="w-full border border-black h-[50px] my-[10px]"
                    />

                    <img
                      src={
                        editUser.backImage
                          ? typeof editUser.backImage === "string"
                            ? `http://localhost:5000/uploads/Tabingcategory/${editUser.backImage}`
                            : URL.createObjectURL(editUser.backImage) // ✅ नई अपलोड की गई इमेज तुरंत दिखेगी
                          : "https://via.placeholder.com/50" // ✅ डिफ़ॉल्ट इमेज
                      }
                      alt="Front Preview"
                      className="h-[50px] w-[20%] object-cover"
                    />
                  </div>

                  {/* Price */}
                  <label className="capitalize">Price</label>
                  <input
                    type="text"
                    name="price"
                    onChange={inputHandler}
                    value={editUser.price || ""}
                    className="w-full border border-black h-[50px] my-[10px]"
                  />

                  {/* Status */}
                  <label className="capitalize">Status Type</label>

                  <div className="flex items-center">
                    <label className="mr-4 flex items-center">
                      <input
                        type="radio"
                        name="status"
                        value="1"
                        checked={
                          editUser.status === 1 || editUser.status === "1"
                        }
                        onChange={(e) => inputHandler(e)}
                        className="mr-2"
                      />
                      <span>Active</span>
                    </label>

                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="status"
                        value="0"
                        checked={
                          editUser.status === 0 || editUser.status === "0"
                        }
                        onChange={(e) => inputHandler(e)}
                        className="mr-2"
                      />
                      <span>Inactive</span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  {parsms.id == undefined ? (
                    <button className="text-white bg-[#4c1d95] table px-[15px] py-[5px] rounded-[15px]">
                      Submit
                    </button>
                  ) : (
                    <button className="text-white bg-[#4c1d95] table px-[15px] py-[5px] rounded-[15px]">
                      update
                    </button>
                  )}
                </form>
              </div>
            </div>

            <div className="h-[1px] bg-black w-full my-[50px]"></div>

            {/* Footer */}
            <div className="flex justify-between w-[90%] mx-auto py-[20px] text-[10px] md:text-[16px]">
              <div className="capitalize">
                Copyright 2024
                <span className="text-[blue]">
                  Premium TailwindCSS admin template from WsCubeTech.
                </span>
                All rights reserved.
              </div>
              <div>Hand-crafted & made with ❤️</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
