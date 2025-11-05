import React from 'react'
import { useState, useEffect } from 'react'
import { FaBoxOpen, FaUsers, FaShoppingCart, FaPlusCircle, FaEnvelopeOpenText } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function AdmineDashboard() {
    const [productCount, setProductCount] = useState(0);
    const [orderCount, setOrderCount] = useState(0);
    const [contactCount, setContactCount] = useState(0);

    // Fetch cart count
    const fetchProductCount = async () => {
        try {
            const res = await axios.get('http://localhost:4000/products');
            setProductCount(res.data.length);
        } catch (error) {
            console.error('Error fetching cart data:', error);
        }
    };

    const fetchOrderCount = async () => {
        try {
            const res = await axios.get('http://localhost:4000/orders');
            setOrderCount(res.data.length);
        } catch (error) {
            console.error('Error fetching cart data:', error);
        }
    };

     const fetchContactCount = async () => {
        try {
            const res = await axios.get('http://localhost:4000/contacts');
            setContactCount(res.data.length);
        } catch (error) {
            console.error('Error fetching cart data:', error);
        }
    };

    useEffect(() => {
        fetchProductCount();
        fetchOrderCount();
        fetchContactCount();

        const interval = setInterval(fetchProductCount, 3000,fetchOrderCount, 3000,fetchContactCount ,300);
        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-6">
                {/* Product Card */}
                <Link to="/adminelayout/manege-products">
                    <div className="bg-gradient-to-r from-blue-400 to-sky-500 shadow-2xl w-80 p-8 font-bold text-white rounded-2xl 
                  transform transition duration-300 hover:scale-105 hover:shadow-sky-500/50 hover:shadow-2xl">
                        <span className="text-2xl block mb-2"> Manage Products <FaBoxOpen className="inline-flex" /></span>
                        <hr className="border-white/50 mb-3" />
                        <p className="text-lg font-medium">Total Products : <span className="text-2xl font-bold">{productCount}</span></p>
                    </div>
                </Link>

                {/* Users Card */}
                <Link to="users">
                    <div className="bg-gradient-to-r from-yellow-400 to-amber-500 shadow-2xl w-80 p-8 font-bold text-white rounded-2xl 
                  transform transition duration-300 hover:scale-105 hover:shadow-amber-500/50 hover:shadow-2xl">
                        <span className="text-2xl block mb-2">Manage Users <FaUsers className="inline-flex" /></span>
                        <hr className="border-white/50 mb-3" />
                        <p className="text-lg font-medium">Total Users : <span className="text-2xl font-bold">50</span></p>
                    </div>
                </Link>


                {/* Orders Card */}
                <Link to="orders">
                    <div className="bg-gradient-to-r from-gray-500 to-gray-600 shadow-2xl w-80 p-8 font-bold text-white rounded-2xl 
                  transform transition duration-300 hover:scale-105 hover:shadow-gray-500/50 hover:shadow-2xl">
                        <span className="text-2xl block mb-2">Manage Orders <FaShoppingCart className="inline-flex" /></span>
                        <hr className="border-white/50 mb-3" />
                        <p className="text-lg font-medium">Total Orders : <span className="text-2xl font-bold">{orderCount}</span></p>
                    </div>
                </Link>

                {/* Add Products Card */}
                <Link to="add-products">
                    <div className="bg-gradient-to-r  from-gray-900 to-black shadow-2xl w-80 p-8 font-bold text-white rounded-2xl 
                  transform transition duration-300 hover:scale-105 hover:shadow-amber-500/50 hover:shadow-2xl">
                        <span className="text-2xl block mb-2">Add Products <FaPlusCircle className="inline-flex" /></span>
                        <hr className="border-white/50 mb-3" />
                        <p className="text-lg font-medium">Add New P<span className="text-2xl font-bold">Product</span></p>
                    </div>
                </Link>

                {/* Manage Contact Card */}
                <Link to="contacts">
                    <div className="bg-gradient-to-r  from-blue-400 to-blue-900 shadow-2xl w-80 p-8 font-bold text-white rounded-2xl 
                  transform transition duration-300 hover:scale-105 hover:shadow-amber-500/50 hover:shadow-2xl">
                        <span className="text-2xl block mb-2">Manage Contacts <FaEnvelopeOpenText className='inline-flex' /></span>
                        <hr className="border-white/50 mb-3" />
                        <p className="text-lg font-medium">View and Manage Contacts : {contactCount}<span className="text-2xl font-bold"></span></p>
                    </div>
                </Link>
            </div>

        </>
    )
}
