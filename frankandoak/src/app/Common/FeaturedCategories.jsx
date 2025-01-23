import React from "react"
import { catimages, images } from "../Common/Myarray"
import Image from "next/image"
import dresses1 from "../../../public/dress_9094f9f3-19a3-47a9-bab6-ec506941f682_900x.webp"
import dresses2 from "../../../public/shirts_dd826432-9420-4a82-b2b3-965e50c84222_900x.webp"
import dresses3 from "../../../public/tops_900x.webp"
import dresses4 from "../../../public/shorts_900x.webp"
import dresses5 from "../../../public/PLP_thumbnail_image_area_f8bf1730-2a49-4d7e-a730-0c9f8c3e37e3_900x.webp"
import dresses6 from "../../../public/t-shirt_900x.webp"
export default function FeaturedCategories() {
  const categories = [
    {
      image: dresses1,
      description: "Womens Dresses",
    },
    {
      image: dresses2,
      description: "Mens Shirts & Polo Shirts",
    },
    {
      image: dresses3,
      description: "Womens T-Shirts & Tops",
    },
    {
      image: dresses4,
      description: "Mens Shorts",
    },
    {
      image: dresses5,
      description: "Womens Skirts & Shorts",
    },
    {
      image: dresses6,
      description: "Mens T-Shirts",
    },
  ]
  return (
    <>
      <div className="w-[100%] bg-white mb-[100px]">
        <h1 className="font-[500] ps-[30px] md:text-[30px] text-[20px] md:py-[50px] py-[35px]">
          Featured Categories
        </h1>
        <div className="grid lg:grid-cols-6 grid-cols-2  gap-[40px] md:px-[25px] px-[12px]">
          {categories.map((v, i) => {
            return (
              <div className="border " key={i}>
                <img
                  src={v.image.src}
                  alt="testing"
                  className="w-[100%] h-[100%]"
                />
                <p className="mt-[5px] md:text-[16px] text-[8px]">
                  {v.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
