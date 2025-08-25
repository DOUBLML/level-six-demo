"use client";

import Image from "next/image";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search, User, ShoppingBag, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isWomenDropdownOpen, setIsWomenDropdownOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-teal-700 text-white text-center py-2 text-sm">
        🍁 A Canadian Owned & Operated Company 🍁
      </div>

      {/* Navigation */}
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              {/* Level Six Logo Image */}
              <Image
                src="/level-six-demo/level-six-logo.png"
                alt="Level Six Logo"
                width={240}
                height={80}
                className="h-16 w-auto"
              />
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#"
                  className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium flex items-center"
                >
                  MEN
                  <ChevronDown className="ml-1 h-4 w-4" />
                </a>
                <div className="relative">
                  <button
                    onMouseEnter={() => setIsWomenDropdownOpen(true)}
                    onMouseLeave={() => setIsWomenDropdownOpen(false)}
                    className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium flex items-center"
                  >
                    WOMEN
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>

                  {/* Women Dropdown */}
                  {isWomenDropdownOpen && (
                    <div
                      className="absolute top-full left-0 mt-0 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                      style={{ width: "800px", left: "-200px" }}
                      onMouseEnter={() => setIsWomenDropdownOpen(true)}
                      onMouseLeave={() => setIsWomenDropdownOpen(false)}
                    >
                      <div className="px-6 py-6">
                        <div className="grid grid-cols-4 gap-6">
                          {/* Outerwear Column */}
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-4">
                              Outerwear
                            </h3>
                            <ul className="space-y-2">
                              <li>
                                <a
                                  href="#"
                                  className="text-sm text-gray-700 hover:text-gray-900"
                                >
                                  Base Layers
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-sm text-gray-700 hover:text-gray-900"
                                >
                                  Splash Tops
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-sm text-gray-700 hover:text-gray-900"
                                >
                                  Splash Pants
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-sm text-gray-700 hover:text-gray-900"
                                >
                                  Semi-Dry Tops
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-sm text-gray-700 hover:text-gray-900"
                                >
                                  Dry Tops
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-sm text-gray-700 hover:text-gray-900"
                                >
                                  Dry Pants
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-sm text-gray-700 hover:text-gray-900"
                                >
                                  Dry Suits
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-sm text-gray-700 hover:text-gray-900"
                                >
                                  Professional Rescue Suits
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-sm text-gray-700 hover:text-gray-900"
                                >
                                  Outerwear Repair & Replacement
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-sm text-gray-700 hover:text-gray-900"
                                >
                                  Freya Drysuit Design Feedback
                                </a>
                              </li>
                            </ul>
                          </div>

                          {/* Apparel Column */}
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-4">
                              Apparel
                            </h3>
                            <ul className="space-y-2">
                              <li>
                                <a
                                  href="#"
                                  className="text-sm text-gray-700 hover:text-gray-900"
                                >
                                  Sunguards
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-sm text-gray-700 hover:text-gray-900"
                                >
                                  Boardshorts
                                </a>
                              </li>
                              <li>
                                <Link
                                  href="/swimwear"
                                  className="text-sm text-gray-700 hover:text-gray-900"
                                >
                                  Swimwear
                                </Link>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-sm text-gray-700 hover:text-gray-900"
                                >
                                  T-Shirts & Hoodies
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-sm text-gray-700 hover:text-gray-900"
                                >
                                  Hats
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-sm text-gray-700 hover:text-gray-900"
                                >
                                  Learn More
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-sm text-gray-700 hover:text-gray-900"
                                >
                                  Summer Casting Call
                                </a>
                              </li>
                            </ul>
                          </div>

                          {/* Neoprene Column */}
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-4">
                              Neoprene
                            </h3>
                            <ul className="space-y-2">
                              <li>
                                <a
                                  href="#"
                                  className="text-sm text-gray-700 hover:text-gray-900"
                                >
                                  Tops
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-sm text-gray-700 hover:text-gray-900"
                                >
                                  Bottoms
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-sm text-gray-700 hover:text-gray-900"
                                >
                                  Neoprene Swimwear
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-sm text-gray-700 hover:text-gray-900"
                                >
                                  Wetsuits
                                </a>
                              </li>
                            </ul>
                          </div>

                          {/* Head, Hand & Footwear Column */}
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-4">
                              Head, Hand & Footwear
                            </h3>
                            <ul className="space-y-2">
                              <li>
                                <a
                                  href="#"
                                  className="text-sm text-gray-700 hover:text-gray-900"
                                >
                                  Footwear
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-sm text-gray-700 hover:text-gray-900"
                                >
                                  Gloves
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-sm text-gray-700 hover:text-gray-900"
                                >
                                  Headwear
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-sm text-gray-700 hover:text-gray-900"
                                >
                                  Mitts
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-sm text-gray-700 hover:text-gray-900"
                                >
                                  Pogies
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-sm text-gray-700 hover:text-gray-900"
                                >
                                  Socks
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <a
                  href="#"
                  className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium flex items-center"
                >
                  KIDS
                  <ChevronDown className="ml-1 h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium flex items-center"
                >
                  GEAR
                  <ChevronDown className="ml-1 h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium flex items-center"
                >
                  SALE
                  <ChevronDown className="ml-1 h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium flex items-center"
                >
                  SUSTAINABILITY+REPAIR
                  <ChevronDown className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-64 pl-4 pr-10"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <User className="h-6 w-6 text-gray-600 cursor-pointer" />
              <ShoppingBag className="h-6 w-6 text-gray-600 cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
