"use client";

import Image from "next/image";
import { useState, use, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronDown,
  ArrowLeft,
  Star,
  Plus,
  Search,
  Minus,
  ArrowDown,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";

// Product data
const productData = {
  "eclipse-bikini-bottom": {
    id: "eclipse-bikini-bottom",
    name: "Eclipse Bikini Bottom",
    price: "$32.50",
    originalPrice: "$65.00",
    badge: "SALE",
    colors: [
      { name: "Smoke Blue", value: "#87ceeb", isSelected: true },
      { name: "Navy", value: "#1a365d" },
    ],
    mainImage: "/level-six-demo/p-1.png",
    additionalImages: [
      "/level-six-demo/p-1-1.png",
      "/level-six-demo/p-1-2.png",
      "/level-six-demo/p-1-3.png",
    ],
    discount: "50% off",
    description: "The perfect blend of style and comfort for water activities.",
    features: ["Quick-dry fabric", "Chlorine resistant", "UPF 50+ protection"],
    inStock: true,
    stockLevel: "low", // low, medium, high
    stockCount: 2,
  },
  "sunflare-reversible-bikini-bottom": {
    id: "sunflare-reversible-bikini-bottom",
    name: "Sunflare Reversible Bikini Bottom",
    price: "$35.00",
    originalPrice: "$70.00",
    badge: "SALE",
    colors: [
      { name: "Sky Blue", value: "#87ceeb", isSelected: true },
      { name: "Steel Blue", value: "#4682b4" },
    ],
    mainImage: "/level-six-demo/p-2.png",
    additionalImages: [
      "/level-six-demo/p-2-1.png",
      "/level-six-demo/p-2-2.png",
      "/level-six-demo/p-2-3.png",
    ],
    discount: "50% off",
    description: "Reversible design for versatile styling options.",
    features: ["Reversible design", "Quick-dry fabric", "Saltwater resistant"],
    inStock: true,
    stockLevel: "high",
    stockCount: 15,
  },
  "daisy-reversible-bikini-top": {
    id: "daisy-reversible-bikini-top",
    name: "Daisy Reversible Bikini Top",
    price: "$37.50",
    originalPrice: "$75.00",
    badge: "SALE",
    colors: [
      { name: "Sky Blue", value: "#87ceeb", isSelected: true },
      { name: "Steel Blue", value: "#4682b4" },
    ],
    mainImage: "/level-six-demo/p-3.png",
    additionalImages: [
      "/level-six-demo/p-3-1.png",
      "/level-six-demo/p-3-2.png",
      "/level-six-demo/p-3-3.png",
    ],
    discount: "50% off",
    description: "Flattering bikini top with adjustable straps.",
    features: ["Adjustable straps", "Removable padding", "Quick-dry fabric"],
    inStock: true,
    stockLevel: "medium",
    stockCount: 8,
  },
  "cove-reversible-swim-shorts": {
    id: "cove-reversible-swim-shorts",
    name: "Cove Reversible Swim Shorts",
    price: "$40.00",
    originalPrice: "$80.00",
    badge: "SALE",
    colors: [
      { name: "Purple", value: "#663399", isSelected: true },
      { name: "Lavender", value: "#8b5a96" },
    ],
    mainImage: "/level-six-demo/p-4.png",
    additionalImages: [
      "/level-six-demo/p-4-1.png",
      "/level-six-demo/p-4-2.png",
      "/level-six-demo/p-4-3.png",
    ],
    discount: "50% off",
    description: "Comfortable swim shorts with reversible design.",
    features: ["Reversible design", "Elastic waistband", "Quick-dry fabric"],
    inStock: true,
    stockLevel: "medium",
    stockCount: 6,
  },
};

const allProducts = Object.values(productData);

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const router = useRouter();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("S");
  const [quantity, setQuantity] = useState(1);
  const [doublIdOption, setDoublIdOption] = useState("input");
  const [doublId, setDoublId] = useState("");

  const product = productData[resolvedParams.id as keyof typeof productData];

  if (!product) {
    return <div>Product not found</div>;
  }

  const allImages = [product.mainImage, ...product.additionalImages];
  const otherProducts = allProducts
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const getStockMessage = () => {
    if (product.stockLevel === "low") {
      return `Low stock - ${product.stockCount} items left`;
    }
    return null;
  };

  useEffect(() => {
    // Check for generated DOUBL ID from localStorage
    const generatedId = localStorage.getItem("generatedDoublId");
    if (generatedId) {
      setDoublId(generatedId);
      setDoublIdOption("input");
      // Clear the stored ID
      localStorage.removeItem("generatedDoublId");
    }
  }, []);

  const handleApplyId = () => {
    if (!doublId.trim()) return;

    // Save product data to localStorage for checkout
    const checkoutData = {
      id: resolvedParams.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      selectedColor:
        product.colors[selectedColor]?.name || product.colors[0]?.name,
      selectedSize: selectedSize || "S",
      doublId: doublId,
      quantity: quantity,
    };

    localStorage.setItem("checkoutProduct", JSON.stringify(checkoutData));

    // Navigate to checkout
    router.push("/checkout");
  };

  const handleScanNow = () => {
    // Save current product info and navigate to generate DOUBL ID
    const productInfo = {
      id: resolvedParams.id,
      name: product.name,
      returnUrl: window.location.pathname,
    };
    localStorage.setItem("productInfo", JSON.stringify(productInfo));
    router.push("/generate-doubl-id");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

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
          <Link href="/swimwear" className="hover:text-gray-900">
            Swimwear
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Images */}
          <div>
            <div className="flex gap-4">
              {/* Thumbnail column */}
              <div className="flex flex-col space-y-4">
                {allImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`w-20 h-20 border-2 rounded-lg overflow-hidden ${
                      selectedImageIndex === index
                        ? "border-teal-700"
                        : "border-gray-200"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main image */}
              <div className="flex-1">
                <div className="relative aspect-square bg-teal-50 rounded-lg overflow-hidden">
                  <Image
                    src={allImages[selectedImageIndex]}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {/* Reviews */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-gray-300" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">0 reviews</span>
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Color</h3>
              <div className="flex items-center space-x-3">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`px-4 py-2 border rounded-md text-sm ${
                      selectedColor === index
                        ? "border-gray-900 bg-gray-100"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {color.name}
                  </button>
                ))}
              </div>
            </div>

            {/* DOUBL Fit ID Section */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">
                How would you like to proceed?
              </h3>

              <Select value={doublIdOption} onValueChange={setDoublIdOption}>
                <SelectTrigger className="w-full mb-4">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="input">Input DOUBL ID</SelectItem>
                  <SelectItem value="no-doubl-id">
                    I don't have a DOUBL ID
                  </SelectItem>
                </SelectContent>
              </Select>

              {doublIdOption === "input" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Enter your DOUBL ID
                    </label>
                    <Input
                      type="text"
                      placeholder="e.g., AB12-34CD-5678"
                      value={doublId}
                      onChange={(e) => setDoublId(e.target.value)}
                      className="w-full"
                    />
                    <p className="text-sm text-gray-600 mt-1">
                      Your encrypted fit profile; you'll confirm size at
                      checkout.
                    </p>
                  </div>
                  <Button
                    onClick={handleApplyId}
                    className="w-full text-white transition-all duration-200 hover:shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                    style={{ backgroundColor: "#0d7377" }}
                    disabled={!doublId}
                    onMouseEnter={(e) => {
                      if (!e.currentTarget.disabled) {
                        e.currentTarget.style.backgroundColor = "#0a5d61";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!e.currentTarget.disabled) {
                        e.currentTarget.style.backgroundColor = "#0d7377";
                      }
                    }}
                  >
                    Apply ID
                  </Button>
                </div>
              )}

              {doublIdOption === "no-doubl-id" && (
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Don't have a DOUBL ID yet? Create one in under 60 seconds.
                  </p>
                  <div className="flex gap-3">
                    <Button
                      onClick={handleScanNow}
                      className="text-white flex-1 transition-all duration-200 hover:shadow-lg active:scale-95"
                      style={{ backgroundColor: "#0d7377" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#0a5d61";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#0d7377";
                      }}
                    >
                      SCAN NOW
                    </Button>
                    <Button
                      variant="outline"
                      className="text-gray-700 border-gray-300 hover:bg-gray-50 transition-all duration-200 hover:shadow-md active:scale-95 hover:border-gray-400"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#f9fafb";
                        e.currentTarget.style.borderColor = "#9ca3af";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.borderColor = "#d1d5db";
                      }}
                    >
                      What is DOUBL ID?
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Quantity Selection */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">
                Quantity
              </h3>
              <div className="flex items-center border rounded-lg w-32">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-4 py-2 border-x flex-1 text-center">
                  {quantity}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-gray-900">
                {product.price}
              </span>
              <span className="text-xl text-gray-500 line-through">
                {product.originalPrice}
              </span>
              <span className="text-sm text-red-600 font-medium">
                Save {product.discount}
              </span>
            </div>

            {/* Stock Status */}
            {getStockMessage() && (
              <div className="flex items-center space-x-2 text-sm text-orange-600">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>{getStockMessage()}</span>
              </div>
            )}

            {/* Shipping Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
                <span>Free Shipping Over $150</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full border border-gray-400"></div>
                <span>Hassle Free Returns</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full border border-gray-400"></div>
                <span>Carbon Offset Shipping</span>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              <Link href="#" className="underline">
                Shipping
              </Link>{" "}
              calculated at checkout.
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <Button
                className="w-full text-white py-3 text-lg font-medium"
                style={{ backgroundColor: "#0d7377" }}
              >
                Add to cart
              </Button>

              <Button
                className="w-full text-white py-3"
                style={{ backgroundColor: "#6366f1" }}
              >
                Buy with ShopPay
              </Button>

              <button className="w-full text-sm text-gray-600 hover:text-gray-900 underline">
                More payment options
              </button>
            </div>

            {/* Buy it Locally */}
            <Button
              className="w-full text-white py-3"
              style={{ backgroundColor: "#0d7377" }}
            >
              Buy it locally
            </Button>

            <div className="flex items-center space-x-2 text-sm">
              <div className="w-4 h-4 text-green-600">✓</div>
              <span>
                Pickup available at <strong>Level Six Headquarters</strong>
              </span>
            </div>
            <div className="text-sm text-gray-600 ml-6">
              Usually ready in 24 hours
            </div>
            <div className="ml-6">
              <button className="text-sm text-gray-600 hover:text-gray-900 underline">
                View store information
              </button>
            </div>
          </div>
        </div>

        {/* Product Details Sections */}
        <div className="mt-16 space-y-4">
          {/* Description */}
          <div className="border-b border-gray-200">
            <button className="w-full flex items-center justify-between py-4 text-left">
              <span className="text-lg font-medium">Description</span>
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>

          {/* Model Info */}
          <div className="border-b border-gray-200">
            <button className="w-full flex items-center justify-between py-4 text-left">
              <span className="text-lg font-medium">Model Info</span>
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>

          {/* Shipping Information */}
          <div className="border-b border-gray-200">
            <button className="w-full flex items-center justify-between py-4 text-left">
              <span className="text-lg font-medium">Shipping information</span>
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>

          {/* Find a Local Retailer */}
          <div className="border-b border-gray-200">
            <button className="w-full flex items-center justify-between py-4 text-left">
              <span className="text-lg font-medium">Find a Local Retailer</span>
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            CUSTOMER REVIEWS
          </h2>

          <div className="flex items-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-gray-900">0</div>
              <div className="text-sm text-gray-600">/ 5</div>
              <div className="text-sm text-gray-600 mt-2">0 reviews</div>
            </div>

            <div className="flex-1 space-y-2">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center space-x-3">
                  <span className="text-sm">{stars} ★</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded"></div>
                  <span className="text-sm text-gray-600">0%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-8">
            <div className="flex space-x-1">
              <Button
                variant="outline"
                size="sm"
                className="border-b-2 border-teal-700"
              >
                Reviews <span className="ml-1 text-xs">0</span>
              </Button>
              <Button variant="ghost" size="sm">
                Questions <span className="ml-1 text-xs">0</span>
              </Button>
            </div>
            <div className="ml-auto flex space-x-2">
              <Button className="bg-teal-700 hover:bg-teal-800 text-white">
                Ask a question
              </Button>
              <Button className="bg-teal-700 hover:bg-teal-800 text-white">
                Write a review
              </Button>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            YOU MAY ALSO LIKE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProducts.map((otherProduct) => (
              <Link
                key={otherProduct.id}
                href={`/swimwear/products/${otherProduct.id}`}
              >
                <Card className="group cursor-pointer border-0 shadow-sm hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative aspect-square bg-teal-50 rounded-lg overflow-hidden">
                      <div className="absolute top-3 left-3 z-10">
                        <Badge className="bg-red-600 text-white">SALE</Badge>
                      </div>
                      <div className="absolute top-3 right-3 z-10">
                        <Button variant="ghost" size="sm" className="p-1">
                          <Search className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="p-1 ml-1">
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <Image
                        src={otherProduct.mainImage}
                        alt={otherProduct.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900 mb-2 group-hover:text-teal-700">
                        {otherProduct.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-semibold text-gray-900">
                          {otherProduct.price}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          {otherProduct.originalPrice}
                        </span>
                        <span className="text-sm text-red-600 font-medium">
                          {otherProduct.discount}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Back to Swimwear */}
        <div className="mt-16 text-center">
          <Link href="/swimwear">
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3">
              ← Back to Swimwear
            </Button>
          </Link>
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
