// app/page.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Search, User, ShoppingBag, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function LevelSixHomepage() {
  const [isWomenDropdownOpen, setIsWomenDropdownOpen] = useState(false);

  const trendingProducts = [
    {
      id: "eclipse-rover-dry-suit",
      name: "Eclipse Rover Dry Suit",
      price: "$899.00",
      originalPrice: null,
      badge: "Best Seller",
      colors: ["#FF6B35", "#000000", "#2F4F4F"],
      image: "bg-orange-100",
    },
    {
      id: "aurora-semi-dry-wetsuit",
      name: "Aurora Semi-Dry Wetsuit",
      price: "$475.00",
      originalPrice: null,
      badge: "Popular",
      colors: ["#000000", "#FF6B35", "#2F4F4F"],
      image: "bg-slate-800",
    },
    {
      id: "storm-neoprene-kayak-jacket",
      name: "Storm Neoprene Kayak Jacket",
      price: "$285.00",
      originalPrice: null,
      badge: "New",
      colors: ["#FF6B35", "#000000"],
      image: "bg-orange-200",
    },
    {
      id: "thermal-base-layer-top",
      name: "Thermal Base Layer Top",
      price: "$95.00",
      originalPrice: null,
      badge: "Essential",
      colors: ["#000000", "#2F4F4F"],
      image: "bg-slate-100",
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
              <div className="w-8 h-8 bg-teal-700 rounded mr-3"></div>
              <h1 className="text-2xl font-bold text-black">LEVEL SIX</h1>
            </div>

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

      {/* Hero Section */}
      <section className="relative h-[600px] bg-gray-100 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/level-six-hero.jpg"
            alt="Level Six Hero - Kayaker in action"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold text-black mb-4">
                GEAR UP FOR <em className="italic">ADVENTURE</em>
              </h1>
              <p className="text-white mb-8 text-lg">
                Professional-grade water sports equipment for every adventure
              </p>
              <div className="space-x-4">
                <Button className="bg-teal-700 text-white hover:bg-teal-800 px-8 py-3">
                  SHOP NOW
                </Button>
                <Button
                  variant="outline"
                  className="border-black text-black hover:bg-b hover:bg-gray-300 px-8 py-3"
                >
                  LEARN MORE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            POPULAR CATEGORIES
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: "All Dry Suits", image: "pc-1.jpg" },
              { name: "All Dry Tops", image: "pc-2.jpg" },
              { name: "Neoprene Sprayskirts", image: "pc-3.jpg" },
              { name: "Rescue Equipment", image: "pc-4.jpg" },
              { name: "All PFD's", image: "pc-5.jpg" },
              { name: "Inflatable Boards", image: "pc-6.jpg" },
            ].map((category, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="w-32 h-32 bg-teal-100 rounded-lg mb-4 mx-auto overflow-hidden">
                  <Image
                    src={`/${category.image}`}
                    alt={category.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                    quality={100}
                    priority
                    unoptimized
                  />
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-teal-700">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">TRENDING NOW</h2>
            <Button
              variant="outline"
              className="border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white"
            >
              VIEW ALL
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingProducts.map((product) => (
              <Card
                key={product.id}
                className="group cursor-pointer border-0 shadow-sm hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <div
                    className={`relative ${product.image} h-80 rounded-t-lg overflow-hidden`}
                  >
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-teal-700 hover:bg-teal-800 text-white">
                        {product.badge}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center">
                      <span className="text-gray-600">Product Image</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center space-x-1 mb-2">
                      {product.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-4 h-4 rounded-full border border-gray-300"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <h3 className="font-medium text-gray-900 mb-2 group-hover:text-teal-700">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-semibold text-gray-900">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
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
