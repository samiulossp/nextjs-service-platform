"use client";

import Image from "next/image";
import { useState } from "react";
import Logo from "@/components/ui/Image/Logo";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto lg:px-8 sm:px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo  */}
                    <div class="flex-shrink-0">
                        <a href="#" className="">
                            <Logo className="w-32 sm:w-40 md:w-48"/>
                        </a>
                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-gray-700 hover:text-blue-600">
                            Home
                        </a>
                        <a href="#" className="text-gray-700 hover:text-blue-600">
                            About
                        </a>
                        <a href="#" className="text-gray-700 hover:text-blue-600">
                            Services
                        </a>
                        <a href="#" className="text-gray-700 hover:text-blue-600">
                            Contact
                        </a>
                        <a href="#" className="text-gray-700 hover:text-blue-600">
                            Login
                        </a>
                    </div>
                    {/* Mobile Button */}
                    <button
                        type="button"
                        className="md:hidden text-gray-700"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        Mobile Menu
                    </button>
                    {/* Mobile Menu */}
                    <div className={`${isOpen ? "block" : "hidden"} md:hidden pb-4`}>
                        <a className="block py-2 text-gray-700 hover:text-blue-600">Home</a>
                        <a className="block py-2 text-gray-700 hover:text-blue-600">
                            About
                        </a>
                        <a className="block py-2 text-gray-700 hover:text-blue-600">
                            Services
                        </a>
                        <a className="block py-2 text-gray-700 hover:text-blue-600">
                            Contact
                        </a>
                        <a className="block py-2 text-gray-700 hover:text-blue-600">
                            Login
                        </a>
                    </div>
                </div>
            </div>
             
        </nav>
    );
}
