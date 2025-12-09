import React, { useState, useEffect } from "react";

export default function FeaturedCategories({ categoryimagepath, category }) {
  console.log("category", category);
  console.log("categoryimagepath", categoryimagepath);

  return (
    <>
      <div className="w-[100%] bg-white mb-[100px]">
        <h1 className="font-[500] ps-[30px] md:text-[30px] text-[20px] md:py-[50px] py-[35px]">
          Featured Categories
        </h1>
        <div className="grid lg:grid-cols-4 grid-cols-2  gap-[40px] md:px-[25px] px-[12px] cursor-pointer">
          {category.length > 0
            ? category.map((v, i) => (
                <div className="border" key={i}>
                  <img
                    src={`http://localhost:5000/${categoryimagepath}${v.catImage}`}
                    alt="testing"
                    className="w-[100%] h-[100%]"
                  />

                  <div className="flex gap-1">
                    {" "}
                    <p className=" md:text-[16px] text-[8px] font-medium">
                      {v.catName}
                    </p>
                    <p className=" md:text-[16px] text-[8px] font-medium">
                      {v.categoryDescription}
                    </p>{" "}
                  </div>
                </div>
              ))
            : "no data show"}
        </div>
      </div>
    </>
  );
}
