import React, { useEffect } from "react"
import Header from "../../Common/Header";
import Dashboard from "../../Middle-Section/Dashboard";
import { useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import { Link } from "react-router-dom"

export default function Viewtabingcategory() {
  

 



  return (
    <>
      <Header />
      <ToastContainer />
      <div className="w-[100%]">
        <div className="flex">
          <div>
            <Dashboard />
          </div>
          <div>
            hello
          </div>
          
        </div>
      </div>
    </>
  )
}
