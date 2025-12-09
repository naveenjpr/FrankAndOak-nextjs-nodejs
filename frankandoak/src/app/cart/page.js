"use client";
import React from "react";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Shopping Cart</h1>
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">Your cart is empty</p>
          <p className="text-gray-500 mt-2">Start shopping to add items to your cart!</p>
        </div>
      </div>
    </div>
  );
} 