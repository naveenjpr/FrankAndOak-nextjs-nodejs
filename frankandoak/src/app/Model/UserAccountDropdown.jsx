"use client";
import React, { useContext, useEffect, useRef } from "react";
import { LoginContext } from "../Context/MainContext";
import cookies from "js-cookie";
import { FaHeart, FaSignOutAlt } from "react-icons/fa";
import { MdAccountCircle, MdShoppingBag } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";

export default function UserAccountDropdown({
  isOpen,
  onClose,
  setLoginModalStatus,
}) {
  const { tokenvalue, settokenvalue, userData } = useContext(LoginContext);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleLogout = () => {
    cookies.remove("token");
    settokenvalue("");
    onClose();
    // Show login modal instead of reloading
    if (setLoginModalStatus) {
      setLoginModalStatus(true);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 top-full z-50 mt-2 w-64 bg-white rounded-lg border border-gray-200 shadow-lg"
    >
      {/* Header */}
      <div className="px-3 py-2 bg-gray-100 rounded-t-lg">
        <h3 className="text-sm font-bold text-black">My account</h3>
      </div>

      {/* User Info Section */}
      <div className="px-3 py-2 text-white bg-gray-800">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-semibold">
              Hi, {userData?.firstName || userData?.name || "User"}!
            </p>
            <p className="text-xs text-gray-300">
              Points: {userData?.points || 0}
            </p>
            <p className="text-xs text-gray-300">
              Tier: {userData?.tier || "Community"}
            </p>
          </div>
          <div className="text-lg">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 496 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="px-3 py-2">
        <Link
          href="/wishlist"
          className="flex items-center py-1.5 text-gray-700 transition-colors hover:text-black text-sm"
        >
          <FaHeart className="mr-2 text-sm text-gray-500" />
          <span>Wishlist</span>
        </Link>

        <Link
          href="/account/order"
          className="flex items-center py-1.5 text-gray-700 transition-colors hover:text-black text-sm"
        >
          <MdShoppingBag className="mr-2 text-sm text-gray-500" />
          <span>Orders & returns</span>
        </Link>

        <Link
          href="/account/address"
          className="flex items-center py-1.5 text-gray-700 transition-colors hover:text-black text-sm"
        >
          <IoLocationOutline className="mr-2 text-sm text-gray-500" />
          <span>Address book</span>
        </Link>

        <Link
          href="/account"
          className="flex items-center py-1.5 text-gray-700 transition-colors hover:text-black text-sm"
        >
          <MdAccountCircle className="mr-2 text-sm text-gray-500" />
          <span>Account settings</span>
        </Link>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Logout */}
      <div className="px-3 py-2">
        <button
          onClick={handleLogout}
          className="flex items-center py-1.5 text-gray-700 underline transition-colors hover:text-red-600 text-sm"
        >
          <FaSignOutAlt className="mr-2 text-sm text-gray-500" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
}
