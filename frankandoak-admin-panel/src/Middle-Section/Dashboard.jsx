import { useState } from "react"
import { IoIosArrowForward } from "react-icons/io"
import { FaBook } from "react-icons/fa"
import { LiaSlidersHSolid } from "react-icons/lia"
import { GiTeamDowngrade } from "react-icons/gi"
import { FaUsers } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { FaVideo } from "react-icons/fa"

export default function Dashboard() {
  const [openMenu, setOpenMenu] = useState(null) // Track open menu

  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index) // Toggle menu on click
  }

  const MYdropDown = [
    {
      MenuName: "Feature Category",
      icon: <FaBook />,
      submenuName: [
        {
          submenu: "Add Featured Category",
          path: "/Featured_category/AddFeatured_category",
        },
        {
          submenu: "View Featured Category",
          path: "/Featured_category/ViewFeatured_category",
        },
      ],
    },
    {
      MenuName: "Size",
      icon: <FaBook />,
      submenuName: [
        { submenu: "Size Details", path: "/size/AddSizeDetails" },
        { submenu: "View Size", path: "/size/Viewsize" },
      ],
    },
    {
      MenuName: "Parent Category",
      icon: <FaVideo />,
      submenuName: [
        { submenu: "Add Category", path: "/Parent-Category/AddParentCategory" },
        {
          submenu: "View Category",
          path: "/Parent-Category/ViewParentCategory",
        },
      ],
    },
    {
      MenuName: "Product Category",
      icon: <LiaSlidersHSolid />,
      submenuName: [
        {
          submenu: "Add Product Category",
          path: "/Product_Category/AddProductCategory",
        },
        {
          submenu: "View Product Category",
          path: "/Product_Category/ViewProductCategory",
        },
      ],
    },
    {
      MenuName: "Product",
      icon: <LiaSlidersHSolid />,
      submenuName: [
        { submenu: "Product Details", path: "/Product/ProductDetails" },
        { submenu: "Product Items", path: "/Product/ProductItems" },
      ],
    },
    {
      MenuName: "Story",
      icon: <GiTeamDowngrade />,
      submenuName: [
        { submenu: "Story Details", path: "/Story/Story-Details" },
        { submenu: "Story View", path: "/Story/Story-View" },
      ],
    },
    {
      MenuName: "Slider",
      icon: <FaUsers />,
      submenuName: [
        { submenu: "Slider Details", path: "/Slider/Slider-Details" },
        { submenu: "Slider View", path: "/Slider/Slider-View" },
      ],
    },
  ]

  return (
    <div className="w-[100%] bg-[#212631] min-h-full">
      <div className="md:w-[300px] w-[110px]">
        <p className="text-center text-white border-b-2 border-white py-2">
          Ecommerce Components
        </p>
        <div className="md:px-[20px] px-[10px] pt-[25px] h-screen overflow-y-scroll">
          <ul className="flex flex-col md:gap-[15px] gap-[10px] p-[2px]">
            {MYdropDown.map((v, i) => (
              <li key={i} className="cursor-pointer flex flex-col relative">
                {/* Main Menu Item */}
                <div
                  className="flex justify-between items-center text-white hover:bg-blue-600 px-3 py-2 rounded transition"
                  onClick={() => toggleMenu(i)}
                >
                  <div className="flex items-center gap-2">
                    <span>{v.icon}</span>
                    <h5 className="md:text-[16px] text-[14px] truncate">
                      {v.MenuName}
                    </h5>
                  </div>
                  {/* Arrow icon rotates when submenu is open */}
                  <IoIosArrowForward
                    className={`transition-transform ${
                      openMenu === i ? "rotate-90" : ""
                    }`}
                  />
                </div>

                {/* Submenu Items - Only show if menu is open */}
                {openMenu === i && (
                  <ul className="bg-blue-700 text-white py-2 px-3 space-y-2">
                    {v.submenuName.map((submenuItem, submenuIndex) => (
                      <li
                        key={submenuIndex}
                        className="hover:text-red-400 transition"
                      >
                        <Link to={submenuItem.path}>{submenuItem.submenu}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
