"use client"
import React, { useState } from 'react';
import { FaHeart, FaChevronRight, FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

export default function Address() {
    const [addresses, setAddresses] = useState([
        {
            id: 1,
            name: 'naveen saini',
            country: 'US',
            isDefault: true,
            fullAddress: '123 Main Street, New York, NY 10001, United States'
        }
    ]);

    const [showAddForm, setShowAddForm] = useState(false);
    const [newAddress, setNewAddress] = useState({
        name: '',
        country: '',
        address: '',
        city: '',
        state: '',
        zipCode: ''
    });

    const handleAddAddress = () => {
        if (newAddress.name && newAddress.country && newAddress.address) {
            const address = {
                id: Date.now(),
                name: newAddress.name,
                country: newAddress.country,
                isDefault: addresses.length === 0,
                fullAddress: `${newAddress.address}, ${newAddress.city}, ${newAddress.state} ${newAddress.zipCode}, ${newAddress.country}`
            };
            setAddresses([...addresses, address]);
            setNewAddress({ name: '', country: '', address: '', city: '', state: '', zipCode: '' });
            setShowAddForm(false);
        }
    };

    const handleDeleteAddress = (id) => {
        setAddresses(addresses.filter(addr => addr.id !== id));
    };

    const setDefaultAddress = (id) => {
        setAddresses(addresses.map(addr => ({
            ...addr,
            isDefault: addr.id === id
        })));
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
                            <span className="font-medium text-gray-700">Address book</span>
                        </div>

                        {/* Navigation Links */}
                        <nav className="space-y-2">
                            <a href="/account/order" className="block px-3 py-2 text-gray-700 rounded-md transition-colors hover:bg-gray-100">
                                Orders & returns
                            </a>
                            <a href="/account/address" className="block px-3 py-2 font-semibold text-gray-900 bg-gray-100 rounded-md">
                                Address book
                            </a>
                            <a href="/account" className="block px-3 py-2 text-gray-700 rounded-md transition-colors hover:bg-gray-100">
                                Account settings
                            </a>
                            <a href="/wishlist" className="block flex gap-2 items-center px-3 py-2 text-gray-700 rounded-md transition-colors hover:bg-gray-100">
                                Wishlist
                                <FaHeart className="text-sm text-red-500" />
                            </a>
                        </nav>
                    </div>

                    {/* Right Content Area */}
                    <div className="flex-1 p-8 bg-white rounded-lg shadow-sm">
                        {/* Address Book Section */}
                        <div>
                            <h1 className="mb-6 text-2xl font-bold text-gray-900">Address book</h1>

                            <div className="mb-6">
                                <h2 className="mb-2 text-lg font-semibold text-gray-900">My addresses</h2>
                                <hr className="border-gray-200" />
                            </div>

                            {/* Address Cards Grid */}
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                {/* Add New Address Card */}
                                <div className="p-6 text-center rounded-lg border-2 border-gray-300 border-dashed transition-colors cursor-pointer hover:border-gray-400"
                                    onClick={() => setShowAddForm(true)}>
                                    <div className="flex flex-col justify-center items-center h-full">
                                        <FaPlus className="mb-4 text-4xl text-gray-400" />
                                        <p className="text-lg font-medium text-gray-700">Add a new address</p>
                                    </div>
                                </div>

                                {/* Existing Address Cards */}
                                {addresses.map((address) => (
                                    <div key={address.id} className="relative p-6 rounded-lg border border-gray-200">
                                        {address.isDefault && (
                                            <div className="absolute top-4 right-4">
                                                <span className="px-2 py-1 text-xs font-medium text-teal-800 bg-teal-100 rounded-full">
                                                    Default shipping address
                                                </span>
                                            </div>
                                        )}

                                        <div className="mt-6">
                                            <h3 className="mb-2 font-semibold text-gray-900">{address.name}</h3>
                                            <p className="mb-4 text-sm text-gray-600">{address.fullAddress}</p>

                                            <div className="flex gap-2 mt-4">
                                                {!address.isDefault && (
                                                    <button
                                                        onClick={() => setDefaultAddress(address.id)}
                                                        className="text-sm text-blue-600 underline hover:text-blue-800"
                                                    >
                                                        Set as default
                                                    </button>
                                                )}
                                                <button className="flex gap-1 items-center text-sm text-gray-600 hover:text-gray-800">
                                                    <FaEdit className="text-xs" />
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteAddress(address.id)}
                                                    className="flex gap-1 items-center text-sm text-red-600 hover:text-red-800"
                                                >
                                                    <FaTrash className="text-xs" />
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Add Address Modal */}
                        {showAddForm && (
                            <div className="flex fixed inset-0 z-50 justify-center items-center bg-black bg-opacity-50">
                                <div className="p-6 mx-4 w-full max-w-md bg-white rounded-lg">
                                    <h3 className="mb-4 text-lg font-semibold">Add New Address</h3>

                                    <div className="space-y-4">
                                        <div>
                                            <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
                                            <input
                                                type="text"
                                                value={newAddress.name}
                                                onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
                                                className="px-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                                                placeholder="Enter full name"
                                            />
                                        </div>

                                        <div>
                                            <label className="block mb-1 text-sm font-medium text-gray-700">Address</label>
                                            <input
                                                type="text"
                                                value={newAddress.address}
                                                onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })}
                                                className="px-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                                                placeholder="Street address"
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block mb-1 text-sm font-medium text-gray-700">City</label>
                                                <input
                                                    type="text"
                                                    value={newAddress.city}
                                                    onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                                                    className="px-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                                                    placeholder="City"
                                                />
                                            </div>
                                            <div>
                                                <label className="block mb-1 text-sm font-medium text-gray-700">State</label>
                                                <input
                                                    type="text"
                                                    value={newAddress.state}
                                                    onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                                                    className="px-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                                                    placeholder="State"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block mb-1 text-sm font-medium text-gray-700">ZIP Code</label>
                                                <input
                                                    type="text"
                                                    value={newAddress.zipCode}
                                                    onChange={(e) => setNewAddress({ ...newAddress, zipCode: e.target.value })}
                                                    className="px-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                                                    placeholder="ZIP Code"
                                                />
                                            </div>
                                            <div>
                                                <label className="block mb-1 text-sm font-medium text-gray-700">Country</label>
                                                <select
                                                    value={newAddress.country}
                                                    onChange={(e) => setNewAddress({ ...newAddress, country: e.target.value })}
                                                    className="px-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                                                >
                                                    <option value="">Select Country</option>
                                                    <option value="US">United States</option>
                                                    <option value="CA">Canada</option>
                                                    <option value="UK">United Kingdom</option>
                                                    <option value="IN">India</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 mt-6">
                                        <button
                                            onClick={handleAddAddress}
                                            className="flex-1 px-4 py-2 text-white bg-black rounded-md transition-colors hover:bg-gray-800"
                                        >
                                            Add Address
                                        </button>
                                        <button
                                            onClick={() => setShowAddForm(false)}
                                            className="flex-1 px-4 py-2 text-gray-700 rounded-md border border-gray-300 transition-colors hover:bg-gray-50"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
