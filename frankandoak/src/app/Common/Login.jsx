"use client";
import React, { useContext, useState } from "react";
import axios from "axios";

import Image from "next/image";
import { LoginContext } from "../Context/MainContext";
import cookies from "js-cookie";
import { useRouter } from "next/navigation"; // ✅ use this in Next.js App Router

export default function Login({ setloginModelStatus }) {
  let { tokenvalue, settokenvalue, setUserData } = useContext(LoginContext);
  let router = useRouter();

  console.log("tokenvalue", tokenvalue);
  // let baseUrl = process.env.NEXT_PUBLIC_API_URL;
  let handleSubmit = (event) => {
    event.preventDefault();

    let obj = {
      Email: event.target.Email.value,
      password: event.target.password.value,
    };
    axios
      .post(`http://localhost:5000/api/fronted/user/login`, obj, {
        headers: { Authorization: `Bearer ${tokenvalue}` },
      })
      .then((res) => {
        console.log("res", res.data);
        if (res.data.status) {
          cookies.set("token", res.data.token);
          settokenvalue(res.data.token);
          // Set user data if available in response
          if (res.data.user) {
            setUserData(res.data.user);
          }
          alert(res.data.msg);
          setloginModelStatus(false);
          router.push("/");
        } else {
          alert(res.data.msg);
        }
      })
      .catch((error) => {
        alert(error.response.data.msg);
      });
  };

  return (
    <div className="flex justify-center items-center px-4 py-12 min-h-screen bg-gray-50 sm:px-6 lg:px-8">
      <div className="space-y-8 w-full max-w-md">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black">Welcome back!</h2>
          <p className="mt-2 text-lg text-black">Log in to enjoy your perks</p>
        </div>

        {/* Perks Section */}
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center text-center">
            <div className="mb-2 w-8 h-8">
              <Image
                src="/download.svg"
                alt="Frank's Club"
                width={32}
                height={32}
              />
            </div>
            <p className="text-sm font-medium text-black">Frank's Club</p>
            <p className="text-xs text-gray-600">Earn points, get rewards</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-2 w-8 h-8">
              <Image
                src="/whichlist.svg"
                alt="Wishlist"
                width={32}
                height={32}
              />
            </div>
            <p className="text-sm font-medium text-black">Wishlist</p>
            <p className="text-xs text-gray-600">Save your favourites</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-2 w-8 h-8">
              <Image
                src="/earn.svg"
                alt="Early access"
                width={32}
                height={32}
              />
            </div>
            <p className="text-sm font-medium text-black">Early access</p>
            <p className="text-xs text-gray-600">Exclusive sale perks</p>
          </div>
        </div>

        {/* Login Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <input
                id="email-address"
                name="Email"
                autoComplete="email"
                className="block relative px-3 py-3 w-full placeholder-gray-500 text-gray-900 rounded-md border border-red-300 appearance-none focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="Email Address"
              />
            </div>
            <div className="relative">
              <input
                id="password"
                name="password"
                autoComplete="current-password"
                className="block relative px-3 py-3 pr-12 w-full placeholder-gray-500 text-gray-900 rounded-md border border-red-300 appearance-none focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="Password"
              />
              <button
                type="button"
                className="flex absolute inset-y-0 right-0 items-center pr-3 text-sm text-black"
              ></button>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="text-left">
            <a
              href="#"
              className="text-sm text-blue-600 underline hover:text-blue-800"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="flex relative justify-center px-4 py-3 w-full text-sm font-medium text-white bg-black rounded-md border border-transparent group hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {" "}
              login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
