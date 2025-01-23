import { IoIosArrowForward } from "react-icons/io"
import { FaBook } from "react-icons/fa"
import { LiaSlidersHSolid } from "react-icons/lia"
import { GiTeamDowngrade } from "react-icons/gi"
import { FaUsers } from "react-icons/fa6"

import { Link } from "react-router-dom"

import { FaVideo } from "react-icons/fa"

export default function Dashboard() {
  let MYdropDown = [
    {
      MenuName: "Feature_category",
      icon: <FaBook />,

      submenuName: [
        {
          submenu: "Add Featured_category",
          path: "/Featured_category/AddFeatured_category",
        },
        {
          submenu: "View Featured_category",
          path: "/Featured_category/ViewFeatured_category",
        },
      ],
    },
    {
      MenuName: "size",
      icon: <FaBook />,

      submenuName: [
        {
          submenu: "Size Details",
          path: "/size/AddSizeDetailss",
        },
        {
          submenu: "View Size",
          path: "/size/Viewsize",
        },
      ],
    },
    {
      MenuName: "Parent Category",
      icon: <FaVideo />,

      submenuName: [
        {
          submenu: "Add Category",
          path: "/Parent-Category/AddParentCategory",
        },
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
        {
          submenu: "Product Details",
          path: "/Product/ProductDetails",
        },
        {
          submenu: "Product items",
          path: "/Product/ProductItems",
        },
      ],
    },
    {
      MenuName: "Story",
      icon: <GiTeamDowngrade />,

      submenuName: [
        {
          submenu: "Story Details",
          path: "/Story/Story-Details",
        },
        {
          submenu: "Story View",
          path: "/Story/Story-View",
        },
      ],
    },
    {
      MenuName: "Order",
      icon: <GiTeamDowngrade />,

      submenuName: [
        {
          submenu: "",
          path: "",
        },
        {
          submenu: "",
          path: "",
        },
      ],
    },
    {
      MenuName: "Slider",
      icon: <FaUsers />,

      submenuName: [
        {
          submenu: "Slider Details",
          path: "/Slider/Slider-Details",
        },
        {
          submenu: "Slider View",
          path: "/Slider/Slider-View",
        },
      ],
    },
  ]
  

  return (
    <>
      <div className="w-[100%] bg-[#212631] min-h-full">
        <div className="md:w-[300px] w-[110px]    ">
          <p className="text-center text-[white] border-b-2 border-[white] py-2">
            Ecommerce Components
          </p>
          <div className="md:px-[20px] px-[10px] pt-[25px] h-screen overflow-y-scroll">
            <ul className="flex flex-col md:gap-[55px] gap-[35px] p-[2px]">
              {MYdropDown.map((v, i) => (
                <li
                  className="cursor-pointer flex md:justify-between items-center relative group hover:bg-[blue] px-3 py-2"
                  key={i}
                >
                  <div className="flex items-center justify-between text-[white] w-full">
                    <div className="flex items-center">
                      <span>{v.icon}</span>
                      <h5 className="ps-2 md:text-[16px] text-[14px] truncate">
                        {v.MenuName}
                      </h5>
                    </div>
                    <IoIosArrowForward />
                  </div>
                  {v.submenuName?.length > 0 && (
                    <ul className="max-h-[300px] overflow-y-auto w-[100%] cursor-pointer text-center text-white group-hover:bg-[blue] absolute top-[100%] scale-y-0 group-hover:scale-y-100 h-0 group-hover:h-auto origin-top duration-500">
                      {v.submenuName.map((submenuItem, submenuIndex) => (
                        <li
                          key={submenuIndex}
                          className="hover:text-[red] md:text-[16px] text-[12px] leading-[10px] py-2 px-3"
                        >
                          <Link to={submenuItem.path}>
                            {submenuItem.submenu}
                          </Link>
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
    </>
  )
}
