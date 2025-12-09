"use client";
import React from "react";

export default function WishlistPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Wishlist</h1>
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">Your wishlist is empty</p>
          <p className="text-gray-500 mt-2">Start adding items to your wishlist!</p>
        </div>
      </div>
    </div>
  );
}
