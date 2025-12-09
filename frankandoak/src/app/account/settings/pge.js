"use client";
import React, { useState } from "react";
import { FaEdit, FaHeart, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

export default function SettingsPage() {
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState({
        firstName: "naveen",
        lastName: "saini",
        email: "yogeshsainijpr123@gmail.com",
        shopFor: "Men",
        preferredLanguage: "English"
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = () => {
        // Here you would typically save the data to your backend
        console.log('Saving user data:', userData);
        setIsEditing(false);
        // You can add a toast notification here
    };

    const handleCancel = () => {
        // Reset to original data
        setUserData({
            firstName: "naveen",
            lastName: "saini",
            email: "yogeshsainijpr123@gmail.com",
            shopFor: "Men",
            preferredLanguage: "English"
        });
        setIsEditing(false);
    };

    if (showChangePassword) {
        return (
            <ChangePassword onCancel={() => setShowChangePassword(false)} />
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <div className="flex">
                {/* Left Sidebar */}
                <div className="p-6 w-64 bg-gray-50 border-r border-gray-200">
                    <div className="mb-6">
                        <nav className="text-sm text-gray-600">
                            <div className="mb-4">
                                <span className="text-gray-400">Home</span>
                                <FaChevronRight className="inline mx-2 text-xs" />
                                <span className="text-gray-400">My account</span>
                                <FaChevronRight className="inline mx-2 text-xs" />
                                <span className="font-medium text-black">Account settings</span>
                            </div>
                        </nav>
                    </div>

                    <nav className="space-y-2">
                        <Link href="/account/order" className="block px-3 py-2 text-gray-700 rounded hover:bg-gray-100">
                            Orders & returns
                        </Link>
                        <Link href="/account/address" className="block px-3 py-2 text-gray-700 rounded hover:bg-gray-100">
                            Address book
                        </Link>
                        <Link href="/account/settings" className="block px-3 py-2 font-medium text-black bg-gray-200 rounded">
                            Account settings
                        </Link>
                        <Link href="/wishlist" className="flex items-center px-3 py-2 text-gray-700 rounded hover:bg-gray-100">
                            <FaHeart className="mr-2 text-red-500" />
                            Wishlist
                        </Link>
                    </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-8">
                    <div className="max-w-2xl">
                        {/* Account Settings Header */}
                        <div className="flex justify-between items-center mb-8">
                            <h1 className="text-3xl font-bold text-black">Account settings</h1>
                            {!isEditing && (
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="flex items-center px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                                >
                                    <FaEdit className="mr-2" />
                                    Edit
                                </button>
                            )}
                        </div>

                        {/* User Information Form */}
                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">
                                        First Name
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={userData.firstName}
                                            onChange={handleInputChange}
                                            className="px-3 py-2 w-full rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        />
                                    ) : (
                                        <p className="text-black">{userData.firstName}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">
                                        Last Name
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={userData.lastName}
                                            onChange={handleInputChange}
                                            className="px-3 py-2 w-full rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        />
                                    ) : (
                                        <p className="text-black">{userData.lastName}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-700">
                                    Email Address
                                </label>
                                {isEditing ? (
                                    <input
                                        type="email"
                                        name="email"
                                        value={userData.email}
                                        onChange={handleInputChange}
                                        className="px-3 py-2 w-full rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                ) : (
                                    <p className="text-black">{userData.email}</p>
                                )}
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">
                                        I shop for
                                    </label>
                                    {isEditing ? (
                                        <select
                                            name="shopFor"
                                            value={userData.shopFor}
                                            onChange={handleInputChange}
                                            className="px-3 py-2 w-full rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        >
                                            <option value="Men">Men</option>
                                            <option value="Women">Women</option>
                                            <option value="Both">Both</option>
                                        </select>
                                    ) : (
                                        <p className="text-black">{userData.shopFor}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">
                                        Preferred Language
                                    </label>
                                    {isEditing ? (
                                        <select
                                            name="preferredLanguage"
                                            value={userData.preferredLanguage}
                                            onChange={handleInputChange}
                                            className="px-3 py-2 w-full rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        >
                                            <option value="English">English</option>
                                            <option value="French">French</option>
                                            <option value="Spanish">Spanish</option>
                                        </select>
                                    ) : (
                                        <p className="text-black">{userData.preferredLanguage}</p>
                                    )}
                                </div>
                            </div>

                            {/* Edit Mode Buttons */}
                            {isEditing && (
                                <div className="flex justify-end pt-4 space-x-3">
                                    <button
                                        onClick={handleCancel}
                                        className="px-4 py-2 text-gray-600 bg-white rounded border border-gray-300 hover:bg-gray-50"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleSave}
                                        className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Password Section */}
                        <div className="pt-8 mt-12 border-t border-gray-200">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold text-black">Password</h2>
                                <button
                                    onClick={() => setShowChangePassword(true)}
                                    className="flex items-center px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                                >
                                    <FaEdit className="mr-2" />
                                    Edit
                                </button>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-700">
                                    Password:
                                </label>
                                <p className="text-black">**********</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Change Password Component
function ChangePassword({ onCancel }) {
    const [formData, setFormData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: ""
    });
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.newPassword !== formData.confirmNewPassword) {
            alert("New passwords don't match!");
            return;
        }

        setLoading(true);
        // Here you would call your change password API
        console.log('Changing password:', formData);

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            alert("Password changed successfully!");
            onCancel();
        }, 1000);
    };

    const handleCancel = () => {
        setFormData({
            currentPassword: "",
            newPassword: "",
            confirmNewPassword: ""
        });
        onCancel();
    };

    return (
        <div className="min-h-screen bg-white">
            <div className="p-8 mx-auto max-w-md">
                <div className="flex justify-between items-start mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">Password</h1>
                    <div className="flex space-x-3">
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded hover:bg-gray-50 font-medium"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                        >
                            {loading ? "Saving..." : "Save"}
                        </button>
                    </div>
                </div>

                <form className="space-y-6">
                    <div>
                        <label className="block mb-2 font-medium text-gray-800">Current Password</label>
                        <input
                            type="password"
                            name="currentPassword"
                            value={formData.currentPassword}
                            onChange={handleInputChange}
                            placeholder="Enter current password"
                            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-medium text-gray-800">New Password</label>
                        <input
                            type="password"
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleInputChange}
                            placeholder="Enter new password"
                            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-medium text-gray-800">Confirm New Password</label>
                        <input
                            type="password"
                            name="confirmNewPassword"
                            value={formData.confirmNewPassword}
                            onChange={handleInputChange}
                            placeholder="Confirm new password"
                            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
                            required
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
