"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaHeart, FaEdit, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

export default function AccountSettings() {
    const [isEditingAccount, setIsEditingAccount] = useState(false);
    const [isEditingPassword, setIsEditingPassword] = useState(false);

    // Mock user data - replace with actual user data from your backend
    const [userData, setUserData] = useState({
        firstName: 'naveen',
        lastName: 'saini',
        email: 'yogeshsainijpr123@gmail.com',
        gender: 'Men',
        language: 'English'
    });

    const [password, setPassword] = useState('*********');

    const handleAccountSave = () => {
        // Add your save logic here
        setIsEditingAccount(false);
    };

    const handlePasswordSave = () => {
        // Add your password change logic here
        setIsEditingPassword(false);
    };

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
                            <span className="font-medium text-gray-700">Account settings</span>
                        </div>

                        {/* Navigation Links */}
                        <nav className="space-y-2">
                            <Link href="/account/order" className="block px-3 py-2 text-gray-700 rounded-md transition-colors hover:bg-gray-100">
                                Orders & returns
                            </Link>
                            <Link href="/account/address" className="block px-3 py-2 text-gray-700 rounded-md transition-colors hover:bg-gray-100">
                                Address book
                            </Link>
                            <Link href="/account/settings" className="block px-3 py-2 font-semibold text-gray-900 bg-gray-100 rounded-md">
                                Account settings
                            </Link>
                            <Link href="/wishlist" className="block flex gap-2 items-center px-3 py-2 text-gray-700 rounded-md transition-colors hover:bg-gray-100">
                                Wishlist
                                <FaHeart className="text-sm text-red-500" />
                            </Link>
                        </nav>
                    </div>

                    {/* Right Content Area */}
                    <div className="flex-1 p-8 bg-white rounded-lg shadow-sm">
                        {/* Account Settings Section */}
                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-6">
                                <h1 className="text-2xl font-bold text-gray-900">Account settings</h1>
                                {!isEditingAccount ? (
                                    <button
                                        onClick={() => setIsEditingAccount(true)}
                                        className="flex gap-1 items-center text-sm text-blue-600 underline transition-colors hover:text-blue-800"
                                    >
                                        <FaEdit className="text-xs" />
                                        Edit
                                    </button>
                                ) : (
                                    <div className="flex gap-2">
                                        <button
                                            onClick={handleAccountSave}
                                            className="px-4 py-2 text-sm text-white bg-black rounded-md transition-colors hover:bg-gray-800"
                                        >
                                            Save
                                        </button>
                                        <button
                                            onClick={() => setIsEditingAccount(false)}
                                            className="px-4 py-2 text-sm text-gray-700 rounded-md border border-gray-300 transition-colors hover:bg-gray-50"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-4">
                                {isEditingAccount ? (
                                    // Edit Form
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block mb-1 text-sm font-medium text-gray-700">First Name</label>
                                            <input
                                                type="text"
                                                value={userData.firstName}
                                                onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
                                                className="px-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                                            />
                                        </div>
                                        <div>
                                            <label className="block mb-1 text-sm font-medium text-gray-700">Last Name</label>
                                            <input
                                                type="text"
                                                value={userData.lastName}
                                                onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                                                className="px-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            <label className="block mb-1 text-sm font-medium text-gray-700">Email Address</label>
                                            <input
                                                type="email"
                                                value={userData.email}
                                                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                                                className="px-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                                            />
                                        </div>
                                        <div>
                                            <label className="block mb-1 text-sm font-medium text-gray-700">I shop for</label>
                                            <select
                                                value={userData.gender}
                                                onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
                                                className="px-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                                            >
                                                <option value="Men">Men</option>
                                                <option value="Women">Women</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block mb-1 text-sm font-medium text-gray-700">Preferred Language</label>
                                            <select
                                                value={userData.language}
                                                onChange={(e) => setUserData({ ...userData, language: e.target.value })}
                                                className="px-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                                            >
                                                <option value="English">English</option>
                                                <option value="French">French</option>
                                                <option value="Spanish">Spanish</option>
                                            </select>
                                        </div>
                                    </div>
                                ) : (
                                    // Display Mode
                                    <div className="space-y-3">
                                        <div className="flex justify-between py-2 border-b border-gray-100">
                                            <span className="text-gray-600">First Name:</span>
                                            <span className="font-medium">{userData.firstName}</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-100">
                                            <span className="text-gray-600">Last Name:</span>
                                            <span className="font-medium">{userData.lastName}</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-100">
                                            <span className="text-gray-600">Email Address:</span>
                                            <span className="font-medium">{userData.email}</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-100">
                                            <span className="text-gray-600">I shop for:</span>
                                            <span className="font-medium">{userData.gender}</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-100">
                                            <span className="text-gray-600">Preferred Language:</span>
                                            <span className="font-medium">{userData.language}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Password Section */}
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">Password</h2>
                                {!isEditingPassword ? (
                                    <button
                                        onClick={() => setIsEditingPassword(true)}
                                        className="flex gap-1 items-center text-sm text-blue-600 underline transition-colors hover:text-blue-800"
                                    >
                                        <FaEdit className="text-xs" />
                                        Edit
                                    </button>
                                ) : (
                                    <div className="flex gap-2">
                                        <button
                                            onClick={handlePasswordSave}
                                            className="px-4 py-2 text-sm text-white bg-black rounded-md transition-colors hover:bg-gray-800"
                                        >
                                            Save
                                        </button>
                                        <button
                                            onClick={() => setIsEditingPassword(false)}
                                            className="px-4 py-2 text-sm text-gray-700 rounded-md border border-gray-300 transition-colors hover:bg-gray-50"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div>
                                {isEditingPassword ? (
                                    // Password Edit Form
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block mb-1 text-sm font-medium text-gray-700">Current Password</label>
                                            <input
                                                type="password"
                                                className="px-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                                                placeholder="Enter current password"
                                            />
                                        </div>
                                        <div>
                                            <label className="block mb-1 text-sm font-medium text-gray-700">New Password</label>
                                            <input
                                                type="password"
                                                className="px-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                                                placeholder="Enter new password"
                                            />
                                        </div>
                                        <div>
                                            <label className="block mb-1 text-sm font-medium text-gray-700">Confirm New Password</label>
                                            <input
                                                type="password"
                                                className="px-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                                                placeholder="Confirm new password"
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    // Password Display
                                    <div className="flex justify-between py-2 border-b border-gray-100">
                                        <span className="text-gray-600">Password:</span>
                                        <span className="font-medium">{password}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
