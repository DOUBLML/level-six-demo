"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Search } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";

const getProductIndex = (productId: string) => {
  const productIds = [
    "eclipse-bikini-bottom",
    "sunflare-reversible-bikini-bottom",
    "daisy-reversible-bikini-top",
    "cove-reversible-swim-shorts",
  ];
  return productIds.indexOf(productId) + 1;
};

export default function CheckoutPage() {
  const router = useRouter();
  const [productData, setProductData] = useState<any>(null);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("British Columbia");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("Canada");
  const [phone, setPhone] = useState("");
  const [discountCode, setDiscountCode] = useState("");
  const [emailOffers, setEmailOffers] = useState(true);
  const [useShippingAsBilling, setUseShippingAsBilling] = useState(true);
  const [deliveryMethod, setDeliveryMethod] = useState("ship");
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [billingFirstName, setBillingFirstName] = useState("");
  const [billingLastName, setBillingLastName] = useState("");
  const [billingCompany, setBillingCompany] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [billingApartment, setBillingApartment] = useState("");
  const [billingCity, setBillingCity] = useState("");
  const [billingProvince, setBillingProvince] = useState("British Columbia");
  const [billingPostalCode, setBillingPostalCode] = useState("");
  const [billingCountry, setBillingCountry] = useState("Canada");
  const [billingPhone, setBillingPhone] = useState("");

  useEffect(() => {
    // Get product data from localStorage
    const savedProduct = localStorage.getItem("checkoutProduct");
    if (savedProduct) {
      setProductData(JSON.parse(savedProduct));
    }
  }, []);

  const subtotal = productData?.price
    ? parseFloat(productData.price.replace("$", ""))
    : 32.5;
  const taxes = 3.91;
  const total = subtotal + taxes;

  const handleApplyDiscount = () => {
    console.log("Applying discount:", discountCode);
  };

  const handlePayNow = () => {
    // Navigate to success page
    router.push("/level-six-demo/success");
  };

  if (!productData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Loading checkout...
          </h2>
          <p className="text-gray-600">Preparing your order</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Checkout Form */}
          <div className="space-y-8">
            {/* Express Checkout */}
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Express checkout
              </h2>
              <div className="grid grid-cols-3 gap-3">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md">
                  <span className="font-semibold text-white">Shop</span>
                  <span className="ml-1 font-normal text-white">Pay</span>
                </Button>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded-md font-semibold">
                  PayPal
                </Button>
                <Button className="bg-black hover:bg-gray-800 text-white py-3 rounded-md">
                  <span className="mr-2">G</span>Pay
                </Button>
              </div>
              <div className="text-center my-6">
                <span className="text-gray-500 text-sm">OR</span>
              </div>
            </div>

            {/* Contact */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-900">Contact</h2>
                <button className="text-sm text-teal-700 underline hover:text-teal-800">
                  Log in
                </button>
              </div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mb-4"
              />
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="email-offers"
                  checked={emailOffers}
                  onCheckedChange={(checked) =>
                    setEmailOffers(checked as boolean)
                  }
                />
                <label htmlFor="email-offers" className="text-sm text-gray-600">
                  Email me with news and offers
                </label>
              </div>
            </div>

            {/* Delivery */}
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Delivery
              </h2>
              <div className="space-y-4">
                {/* Delivery Method Selection */}
                <div className="space-y-3">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id="ship"
                        name="delivery"
                        value="ship"
                        checked={deliveryMethod === "ship"}
                        onChange={(e) => setDeliveryMethod(e.target.value)}
                        className="w-4 h-4 text-teal-700"
                      />
                      <label htmlFor="ship" className="flex-1 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Ship</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id="pickup"
                        name="delivery"
                        value="pickup"
                        checked={deliveryMethod === "pickup"}
                        onChange={(e) => setDeliveryMethod(e.target.value)}
                        className="w-4 h-4 text-teal-700"
                      />
                      <label htmlFor="pickup" className="flex-1 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Pick up</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country/Region
                  </label>
                  <Select value={country} onValueChange={setCountry}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Canada">Canada</SelectItem>
                      <SelectItem value="United States">
                        United States
                      </SelectItem>
                      <SelectItem value="United Kingdom">
                        United Kingdom
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="First name (optional)"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <Input
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                <Input
                  placeholder="Company (optional)"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />

                <div className="relative">
                  <Input
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="pr-10"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>

                <Input
                  placeholder="Apartment, suite, etc. (optional)"
                  value={apartment}
                  onChange={(e) => setApartment(e.target.value)}
                />

                <div className="grid grid-cols-3 gap-4">
                  <Input
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <Select value={province} onValueChange={setProvince}>
                    <SelectTrigger>
                      <SelectValue placeholder="Province" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="British Columbia">
                        British Columbia
                      </SelectItem>
                      <SelectItem value="Alberta">Alberta</SelectItem>
                      <SelectItem value="Ontario">Ontario</SelectItem>
                      <SelectItem value="Quebec">Quebec</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    placeholder="Postal code"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>

                <Input
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              {/* Shipping Method */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">
                  Shipping method
                </h3>
                <div className="text-sm text-gray-500 p-4 bg-gray-50 rounded-lg">
                  Enter your shipping address to view available shipping
                  methods.
                </div>
              </div>
            </div>

            {/* Payment */}
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Payment
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                All transactions are secure and encrypted.
              </p>

              <div className="space-y-4">
                {/* Credit Card Option */}
                <div className="border rounded-lg">
                  <div className="p-4 border-b bg-blue-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          id="credit-card"
                          name="payment"
                          value="credit-card"
                          checked={paymentMethod === "credit-card"}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="w-4 h-4 text-teal-700"
                        />
                        <label htmlFor="credit-card" className="font-medium">
                          Credit card
                        </label>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                          VISA
                        </div>
                        <div className="w-8 h-5 bg-orange-500 rounded text-white text-xs flex items-center justify-center">
                          MC
                        </div>
                        <div className="w-8 h-5 bg-blue-400 rounded text-white text-xs flex items-center justify-center">
                          AE
                        </div>
                        <div className="w-8 h-5 bg-orange-600 rounded text-white text-xs flex items-center justify-center text-[8px]">
                          DIS
                        </div>
                        <span className="text-xs text-gray-500">+3</span>
                      </div>
                    </div>
                  </div>

                  {paymentMethod === "credit-card" && (
                    <div className="p-4 space-y-4">
                      <Input
                        placeholder="Card number"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <Input
                          placeholder="Expiration date (MM / YY)"
                          value={expirationDate}
                          onChange={(e) => setExpirationDate(e.target.value)}
                        />
                        <div className="relative">
                          <Input
                            placeholder="Security code"
                            value={securityCode}
                            onChange={(e) => setSecurityCode(e.target.value)}
                          />
                          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs">
                            ❓
                          </span>
                        </div>
                      </div>
                      <Input
                        placeholder="Name on card"
                        value={nameOnCard}
                        onChange={(e) => setNameOnCard(e.target.value)}
                      />

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="use-shipping"
                          checked={useShippingAsBilling}
                          onCheckedChange={(checked) =>
                            setUseShippingAsBilling(checked as boolean)
                          }
                        />
                        <label
                          htmlFor="use-shipping"
                          className="text-sm text-gray-600"
                        >
                          Use shipping address as billing address
                        </label>
                      </div>

                      {/* Billing Address */}
                      {!useShippingAsBilling && (
                        <div className="space-y-4 pt-4 border-t">
                          <h3 className="font-medium text-gray-900">
                            Billing address
                          </h3>

                          <Select
                            value={billingCountry}
                            onValueChange={setBillingCountry}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Country/Region" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Canada">Canada</SelectItem>
                              <SelectItem value="United States">
                                United States
                              </SelectItem>
                              <SelectItem value="United Kingdom">
                                United Kingdom
                              </SelectItem>
                            </SelectContent>
                          </Select>

                          <div className="grid grid-cols-2 gap-4">
                            <Input
                              placeholder="First name (optional)"
                              value={billingFirstName}
                              onChange={(e) =>
                                setBillingFirstName(e.target.value)
                              }
                            />
                            <Input
                              placeholder="Last name"
                              value={billingLastName}
                              onChange={(e) =>
                                setBillingLastName(e.target.value)
                              }
                            />
                          </div>

                          <Input
                            placeholder="Company (optional)"
                            value={billingCompany}
                            onChange={(e) => setBillingCompany(e.target.value)}
                          />

                          <div className="relative">
                            <Input
                              placeholder="Address"
                              value={billingAddress}
                              onChange={(e) =>
                                setBillingAddress(e.target.value)
                              }
                              className="pr-10"
                            />
                            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          </div>

                          <Input
                            placeholder="Apartment, suite, etc. (optional)"
                            value={billingApartment}
                            onChange={(e) =>
                              setBillingApartment(e.target.value)
                            }
                          />

                          <div className="grid grid-cols-3 gap-4">
                            <Input
                              placeholder="City"
                              value={billingCity}
                              onChange={(e) => setBillingCity(e.target.value)}
                            />
                            <Select
                              value={billingProvince}
                              onValueChange={setBillingProvince}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Province" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="British Columbia">
                                  British Columbia
                                </SelectItem>
                                <SelectItem value="Alberta">Alberta</SelectItem>
                                <SelectItem value="Ontario">Ontario</SelectItem>
                                <SelectItem value="Quebec">Quebec</SelectItem>
                              </SelectContent>
                            </Select>
                            <Input
                              placeholder="Postal code"
                              value={billingPostalCode}
                              onChange={(e) =>
                                setBillingPostalCode(e.target.value)
                              }
                            />
                          </div>

                          <Input
                            placeholder="Phone (optional)"
                            value={billingPhone}
                            onChange={(e) => setBillingPhone(e.target.value)}
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* PayPal Option */}
                <div className="border rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="paypal"
                      name="payment"
                      value="paypal"
                      checked={paymentMethod === "paypal"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-teal-700"
                    />
                    <label htmlFor="paypal" className="font-medium">
                      PayPal
                    </label>
                  </div>
                  <div className="text-blue-600 font-bold text-lg">PayPal</div>
                </div>

                {/* Sezzle Option */}
                <div className="border rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="sezzle"
                      name="payment"
                      value="sezzle"
                      checked={paymentMethod === "sezzle"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-teal-700"
                    />
                    <label htmlFor="sezzle" className="font-medium">
                      Buy Now, Pay Later with Sezzle
                    </label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Remember Me */}
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Remember me
              </h2>
              <div className="flex items-center space-x-2 mb-4">
                <Checkbox
                  id="save-info"
                  checked={rememberMe}
                  onCheckedChange={(checked) =>
                    setRememberMe(checked as boolean)
                  }
                />
                <label htmlFor="save-info" className="text-sm text-gray-600">
                  Save my information for a faster checkout with a Shop account
                </label>
              </div>

              {rememberMe && (
                <div className="space-y-4">
                  <Input
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">
                      Mobile phone number
                    </span>
                    <div className="flex items-center">
                      <Select defaultValue="+1">
                        <SelectTrigger className="w-16">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="+1">+1</SelectItem>
                          <SelectItem value="+44">+44</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center space-x-1 text-xs text-gray-500 mt-4">
                <span>Secure and encrypted</span>
                <div className="ml-auto">
                  <span className="font-bold">shop</span>
                </div>
              </div>
            </div>

            {/* Pay Now Button */}
            <Button
              onClick={handlePayNow}
              className="w-full py-4 text-lg font-medium text-white transition-all duration-200 hover:shadow-lg active:scale-95"
              style={{ backgroundColor: "#0d7377" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#0a5d61")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#0d7377")
              }
            >
              Pay now
            </Button>

            <div className="text-xs text-gray-500 text-center">
              Your info will be saved to a Shop account. By continuing, you
              agree to Shop's{" "}
              <button className="underline">Terms of Service</button> and
              acknowledge the{" "}
              <button className="underline">Privacy Policy</button>.
            </div>

            {/* Footer Links */}
            <div className="flex justify-center space-x-6 text-sm text-gray-500">
              <button className="underline">Refund policy</button>
              <button className="underline">Shipping</button>
              <button className="underline">Privacy policy</button>
              <button className="underline">Terms of service</button>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="space-y-6">
            {/* Product */}
            <div className="flex items-center space-x-4 p-4 border rounded-lg">
              <div className="relative w-16 h-16 bg-teal-100 rounded-lg overflow-hidden">
                <span className="absolute top-1 left-1 bg-red-600 text-white text-xs px-1 rounded">
                  1
                </span>
                <Image
                  src={`/p-${getProductIndex(productData.id)}.png`}
                  alt={productData.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">
                  {productData.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {productData.selectedColor}
                  {/* / DOUBL ID:{" "} */}
                  {/* {productData.doublId || "Not provided"} */}
                </p>
                <button className="text-sm text-teal-700 underline mt-1">
                  Modify
                </button>
              </div>
              <span className="font-medium">{productData.price}</span>
            </div>

            {/* Discount Code */}
            <div className="space-y-2">
              <div className="flex">
                <Input
                  placeholder="Discount code or gift card"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  className="flex-1 rounded-r-none"
                />
                <Button
                  onClick={handleApplyDiscount}
                  variant="outline"
                  className="rounded-l-none border-l-0 px-6 text-gray-600 border-gray-300 hover:bg-gray-50"
                >
                  Apply
                </Button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <button className="text-sm text-gray-600 underline">
                  Enter shipping address
                </button>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Estimated taxes</span>
                <span className="font-medium">${taxes.toFixed(2)}</span>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <div className="text-right">
                    <span className="text-sm text-gray-500 mr-2">CAD</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
