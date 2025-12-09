"use client";
import React from "react";
import { FaHeart, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

export default function Order() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex gap-8">
                    {/* Left Sidebar */}
                    <div className="p-6 w-64 bg-white rounded-lg shadow-sm h-fit">
                        {/* Breadcrumb */}
                        <div className="mb-6 text-sm text-gray-500">
                            <span>Home</span>
                            <FaChevronRight className="inline mx-2 text-xs" />
                            <span>My account</span>
                            <FaChevronRight className="inline mx-2 text-xs" />
                            <span className="font-medium text-gray-700">Orders & returns</span>
                        </div>

                        {/* Navigation Links */}
                        <nav className="space-y-2">
                            <Link
                                href="/account/order"
                                className="block px-3 py-2 font-semibold text-gray-900 bg-gray-100 rounded-md"
                            >
                                Orders & returns
                            </Link>
                            <Link
                                href="/account/address"
                                className="block px-3 py-2 text-gray-700 rounded-md transition-colors hover:bg-gray-100"
                            >
                                Address book
                            </Link>
                            <Link
                                href="/account"
                                className="block px-3 py-2 text-gray-700 rounded-md transition-colors hover:bg-gray-100"
                            >
                                Account settings
                            </Link>
                            <Link
                                href="/wishlist"
                                className="block flex gap-2 items-center px-3 py-2 text-gray-700 rounded-md transition-colors hover:bg-gray-100"
                            >
                                Wishlist
                                <FaHeart className="text-sm text-red-500" />
                            </Link>
                        </nav>
                    </div>

                    {/* Right Content Area */}
                    <div className="flex-1 p-8 bg-white rounded-lg shadow-sm">
                        {/* Orders & Returns Section */}
                        <div className="py-12 text-center">
                            <h1 className="mb-4 text-2xl font-bold text-gray-900">Orders & returns</h1>

                            {/* Empty State */}
                            <div className="mb-8">
                                <p className="mb-6 text-lg text-gray-600">History Empty</p>

                                {/* Shop Now Button */}
                                <Link
                                    href="/"
                                    className="inline-block px-8 py-3 font-medium text-black rounded-md border-2 border-black transition-colors duration-300 hover:bg-black hover:text-white"
                                >
                                    Shop Now
                                </Link>
                            </div>

                            {/* Optional: Add some helpful text */}
                            <div className="mx-auto max-w-md text-sm text-gray-500">
                                <p>Start shopping to see your order history here. Track your purchases, returns, and delivery status all in one place.</p>
                            </div>
                        </div>

                        {/* Future: Order History Section (when orders exist) */}
                        {/* 
            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">Order #12345</h3>
                    <p className="text-sm text-gray-600">Placed on March 15, 2024</p>
                  </div>
                  <span className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
                    Delivered
                  </span>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-16 bg-gray-200 rounded"></div>
                  <div className="flex-1">
                    <p className="font-medium">Classic T-Shirt</p>
                    <p className="text-sm text-gray-600">Size: M | Color: Black</p>
                    <p className="text-sm text-gray-600">Quantity: 1</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">$29.99</p>
                    <button className="text-sm text-blue-600 underline">Return</button>
                  </div>
                </div>
              </div>
            </div>
            */}
                    </div>
                </div>
            </div>
        </div>
    );
}
