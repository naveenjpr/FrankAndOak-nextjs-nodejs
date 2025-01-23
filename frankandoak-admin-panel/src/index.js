import React from "react"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ReactDOM from "react-dom/client"
import Home from "./Pages/Home"
import Dashboard from "./Middle-Section/Dashboard"
import AddTeam from "./DropDown/AddTeam"
import ViewTeam from "./DropDown/ViewTeam"
import ViewUser from "./DropDown/ViewUser"

import Viewsize from "./DropDown/ViewSize"
import AddSizeDetailss from "./DropDown/AddSizeDetails"
import AddProductCategory from "./DropDown/AddProductCategory"
import ViewProductCategory from "./DropDown/ViewProductCategory"
import ViewParentCategory from "./DropDown/ViewParentCategory"
import AddParentCategory from "./DropDown/AddParentCategory"
import ProductItems from "./DropDown/ProductItems"
import ProductDetails from "./DropDown/ProductDetails"
import StoryDetails from "./DropDown/StoryDetails"
import StoryView from "./DropDown/StoryView"
import SlidesDetails from "./DropDown/SlidesDetails"
import SlidesView from "./DropDown/SlidesView"
import ViewFeatured_category from "./DropDown/ViewFeatured_category"
import AddFeatured_category from "./DropDown/AddFeatured_category"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
  {
    path: "Featured_category/ViewFeatured_category",
    element: <ViewFeatured_category />,
  },
  {
    path: "Featured_category/AddFeatured_category/:id?",
    element: <AddFeatured_category />,
  },
  {
    path: "Parent-Category/ViewParentCategory",
    element: <ViewParentCategory />,
  },
  {
    path: "Parent-Category/AddParentCategory",
    element: <AddParentCategory />,
  },
  {
    path: "Product/ProductItems",
    element: <ProductItems />,
  },
  {
    path: "Product/ProductDetails",
    element: <ProductDetails />,
  },
  {
    path: "size/AddSizeDetailss",
    element: <AddSizeDetailss />,
  },
  {
    path: "size/Viewsize",
    element: <Viewsize />,
  },
  {
    path: "/AddTeam",
    element: <AddTeam />,
  },
  {
    path: "/ViewTeam",
    element: <ViewTeam />,
  },
  {
    path: "/ViewUser",
    element: <ViewUser />,
  },
  {
    path: "Product_Category/AddProductCategory",
    element: <AddProductCategory />,
  },
  {
    path: "Product_Category/ViewProductCategory",
    element: <ViewProductCategory />,
  },
  {
    path: "Story/Story-Details",
    element: <StoryDetails />,
  },
  {
    path: "Story/Story-View",
    element: <StoryView />,
  },
  {
    path: "Slider/Slider-Details",
    element: <SlidesDetails />,
  },
  {
    path: "Slider/Slider-View",
    element: <SlidesView />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
