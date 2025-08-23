"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Search,
  User,
  ShoppingBag,
  ChevronDown,
  Filter,
  Grid3X3,
  List,
} from "lucide-react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SwimwearPage() {
  const [isWomenDropdownOpen, setIsWomenDropdownOpen] = useState(false);
  const [viewMode, setViewMode] = useState("grid");

  const swimwearProducts = [
    {
      id: "eclipse-bikini-bottom",
      name: "Eclipse Bikini Bottom",
      price: "$32.50",
      originalPrice: "$65.00",
      badge: "SALE",
      colors: ["#1a365d", "#2d3748"],
      image: "bg-blue-900",
      isOnSale: true,
      discount: "50% off",
    },
    {
      id: "sunflare-reversible-bikini-bottom",
      name: "Sunflare Reversible Bikini Bottom",
      price: "$35.00",
      originalPrice: "$70.00",
      badge: "SALE",
      colors: ["#87ceeb", "#4682b4"],
      image: "bg-sky-300",
      isOnSale: true,
      discount: "50% off",
    },
    {
      id: "daisy-reversible-bikini-top",
      name: "Daisy Reversible Bikini Top",
      price: "$37.50",
      originalPrice: "$75.00",
      badge: "SALE",
      colors: ["#87ceeb", "#4682b4"],
      image: "bg-sky-200",
      isOnSale: true,
      discount: "50% off",
    },
    {
      id: "cove-reversible-swim-shorts",
      name: "Cove Reversible Swim Shorts",
      price: "$40.00",
      originalPrice: "$80.00",
      badge: "SALE",
      colors: ["#663399", "#8b5a96"],
      image: "bg-purple-300",
      isOnSale: true,
      discount: "50% off",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-teal-700 text-white text-center py-2 text-sm">
        🍁 A Canadian Owned & Operated Company 🍁
      </div>

      {/* Navigation */}
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-teal-700 rounded mr-3"></div>
                  <h1 className="text-2xl font-bold text-black">LEVEL SIX</h1>
                </div>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#"
                  className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium"
                >
                  MEN
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
                      className="absolute top-full left-0 mt-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                      onMouseEnter={() => setIsWomenDropdownOpen(true)}
                      onMouseLeave={() => setIsWomenDropdownOpen(false)}
                    >
                      <div className="py-1">
                        <Link
                          href="/swimwear"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                          Swimwear
                        </Link>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                          Dry Suits
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                          Wetsuits
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                          Accessories
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                <a
                  href="#"
                  className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium"
                >
                  KIDS
                </a>
                <a
                  href="#"
                  className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium"
                >
                  GEAR
                </a>
                <a
                  href="#"
                  className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium"
                >
                  SALE
                </a>
                <a
                  href="#"
                  className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium"
                >
                  SUSTAINABILITY+REPAIR
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

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
          <span>/</span>
          <Link href="#" className="hover:text-gray-900">
            Collections
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Swimwear</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-blue-400 to-teal-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-sky-300 via-teal-400 to-blue-500 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-6xl font-bold mb-4">SWIMWEAR</h1>
              <p className="text-xl opacity-90">
                Professional water sports swimwear collection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Sort */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4" />
              <span className="text-sm font-medium">Availability</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Price</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Product type</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Size</span>
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">4 products</span>
            <Select defaultValue="price-low-high">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-low-high">
                  Price, low to high
                </SelectItem>
                <SelectItem value="price-high-low">
                  Price, high to low
                </SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="bestselling">Best selling</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center space-x-1">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="p-2"
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="p-2"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {swimwearProducts.map((product) => (
            <Card
              key={product.id}
              className="group cursor-pointer border-0 shadow-sm hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-0">
                <div
                  className={`relative ${product.image} h-96 rounded-t-lg overflow-hidden`}
                >
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-red-600 hover:bg-red-700 text-white">
                      {product.badge}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center">
                    <span className="text-gray-600 text-lg">Product Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-gray-900 mb-2 group-hover:text-teal-700 text-lg">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-xl font-semibold text-gray-900">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <>
                        <span className="text-lg text-gray-500 line-through">
                          {product.originalPrice}
                        </span>
                        <span className="text-sm text-red-600 font-medium">
                          {product.discount}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center space-x-1">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-5 h-5 rounded-full border-2 border-gray-300"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-teal-700 rounded mr-3"></div>
                <h3 className="text-xl font-bold">LEVEL SIX</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Professional water sports equipment designed for adventure
                seekers and professionals worldwide.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">SHOP</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Men
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Women
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Kids
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Gear
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">SUPPORT</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Size Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Warranty
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">COMPANY</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Press
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>
              &copy; 2025 Level Six. All rights reserved. | Made in Canada 🍁
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
