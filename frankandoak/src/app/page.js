"use client"
import Image from "next/image"
import Seondslider from "./Common/Seondslider"
import FeaturedCategories from "./Common/FeaturedCategories"
import Seasonmusthaves from "./Common/Season-must-haves"
import Fabricofsummer from "./Common/Fabricofsummer"

export default function Home() {
  return (
    <div>
      {/* <h1>welcome to wscube</h1> */}
      <Seondslider />
      <FeaturedCategories />
      <Seasonmusthaves />
      <Fabricofsummer />
    </div>
  )
}
