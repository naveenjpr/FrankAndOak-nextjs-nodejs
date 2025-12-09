"use client"
import Image from "next/image"
import Seondslider from "./Common/Seondslider"
import FeaturedCategories from "./Common/FeaturedCategories"
import Seasonmusthaves from "./Common/Season-must-haves"
import Fabricofsummer from "./Common/Fabricofsummer"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Home() {
  let [category, setcategory] = useState([]);
  let [categoryimagepath, setcategoryimagepath] = useState("");

  useEffect(() => {
    axios
      .post("http://localhost:5000/api/fronted/category/view")
      .then((res) => {
        setcategory(res.data.data);
        setcategoryimagepath(res.data.imagepath);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {/* <h1>welcome to wscube</h1> */}
      <Seondslider />
      <FeaturedCategories categoryimagepath={categoryimagepath} category={category} />
      <Seasonmusthaves />
      <Fabricofsummer />
    </div>
  )
}
