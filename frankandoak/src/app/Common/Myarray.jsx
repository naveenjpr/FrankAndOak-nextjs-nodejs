import { FaRegUserCircle } from "react-icons/fa"
import { FaHeart } from "react-icons/fa"
import { CiShoppingCart } from "react-icons/ci"
import Image from "next/image"
import image1 from "../../../public/featureCate1.jpg"

import { CiSearch } from "react-icons/ci"

export const links = [
  { name: <img src="" alt="testing" />, link: "/" },
  {
    name: "Women",
    link: "/women",
    submenu: ["Dresses", "Tops", "Bottoms", "Accessories"],
  },
  {
    name: "Men",
    link: "/men",
    submenu: ["Shirts", "Pants", "Outerwear", "Accessories"],
  },
  { name: "Sale", link: "/sale", submenu: ["Women", "Men", "Accessories"] },
]
export const icons = [
  { id: 1, component: <CiSearch /> },
  { id: 2, component: <FaRegUserCircle /> },
  { id: 3, component: <FaHeart />,'submenuName':[{
    'subMenu':'Log in'
  }] },
  { id: 3, component: <CiShoppingCart /> },
]

export const categories1 = [
  "New In",
  "Best Sellers",
  "Linen, the fabric of summer",
  "The Originals",
  "Workwear",
  "Best of Instagram",
  "Gift Cards",
  "Sale",
]
export const categories2 = [
  "Shop All",
  "T-shirts & Tops",
  "Blouses & Shirts",
  "Dresses & Jumpsuits",
  "Skirts & Shorts",
  "Swimwear",
  "Matching Sets",
  "Sweaters & Cardigans",
  "Blazers & Overshirts",
  "Jackets & Coats",
]

export const categories3 = ["Shop All", "Caps & Hats", "Shoes & Boots", "Bags"]

export const categories4 = [
  "Shop All",
  "Tops",
  "Dresses",
  "Skirts",
  "Shorts",
  "Swimwear",
  "Pants",
  "Jackets",
]

export const categories5 = [
  "Shop All",
  "Tops",
  "Shirts",
  "Shorts",
  "Swimwear",
  "Pants",
  "Sweaters",
  "Jackets",
]



