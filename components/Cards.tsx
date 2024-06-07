import React from 'react'

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"

const Cards = () => {
  return (
    <div>

          {/* Cards */}
          <div className="mb-12">
              {/* Location */}
              <div className="p-5 md:p-10 antialiased ">
                  <div
                      className=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto rounded-2xl group transform duration-500 hover:-translate-y-1">
                      <div className="lg:w-6/12  bg-amber-500 rounded-2xl lg:rounded-l-2xl lg:rounded-r-none">
                          {/* Location - Mobile*/}
                          <div className="cursor-pointer">
                              <Link
                                  // target="_blank"
                                  rel="noopener noreferrer"
                                  href="/location"
                              >
                                  <Image
                                      src="/images/home/card03Location.png"
                                      width={1600}
                                      height={1600}
                                      alt="location"
                                      className="rounded-t-2xl lg:hidden"
                                  />
                              </Link>
                          </div>

                          {/* Description */}
                          <div className="p-5 pb-10">
                              <h1 className="text-xl font-semibold text-white mt-4">
                                  Location
                              </h1>
                              <p className=" text-lg text-white mt-2 leading-relaxed">
                                  Discover the location of Pamilya Market
                              </p>
                          </div>

                          {/* Pamilya Market - logo */}
                          <div className="flex justify-center">
                              <Image
                                  src="/images/home/pamilyaMarketLogoWhite.png"
                                  width={200}
                                  height={200}
                                  alt="pamilya-market-logo"
                                  className="rounded-2xl hidden lg:block"
                              />
                          </div>

                          {/* Button */}
                          <div className="flex justify-center mt-4 mb-8">
                              <Link
                                  // target="_blank"
                                  rel="noopener noreferrer"
                                  href="/location"
                              >
                                  <Button className="text-lg rounded-full w-full py-8 px-14 font-semibold">Explore PamilyaMarket</Button>
                              </Link>
                          </div>
                      </div>

                      {/* Location - Desktop */}
                      <div className="cursor-pointer">
                          <Link
                              // target="_blank"
                              rel="noopener noreferrer"
                              href="/location"
                          >
                              <Image
                                  src="/images/home/card03Location.png"
                                  width={1600}
                                  height={1600}
                                  alt="location"
                                  className="rounded-r-2xl hidden lg:block"
                              />
                          </Link>
                      </div>
                  </div>
              </div>

              {/* Floor Plan */}
              <div className="p-5 md:p-10 antialiased ">
                  <div
                      className=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto rounded-2xl group transform duration-500 hover:-translate-y-1">
                      <div className="lg:w-6/12  bg-amber-500 rounded-2xl lg:rounded-l-2xl lg:rounded-r-none">
                          {/* Floor Plan - Mobile*/}
                          <div className="cursor-pointer">
                              <Link
                                  // target="_blank"
                                  rel="noopener noreferrer"
                                  href="/blueprint"
                              >
                                  <Image
                                      src="/images/home/card02floorPlan.png"
                                      width={1600}
                                      height={1600}
                                      alt="blueprint"
                                      className="rounded-t-2xl lg:hidden"
                                  />
                              </Link>
                          </div>

                          {/* Description */}
                          <div className="p-5 pb-10">
                              <h1 className="text-xl font-semibold text-white mt-4">
                                  Blueprint - Floor Plan
                              </h1>
                              <p className=" text-lg text-white mt-2 leading-relaxed">
                                  Navigate the spaces and areas of Pamilya Market
                              </p>
                          </div>

                          {/* Pamilya Market - logo */}
                          <div className="flex justify-center">
                              <Image
                                  src="/images/home/pamilyaMarketLogoWhite.png"
                                  width={200}
                                  height={200}
                                  alt="pamilya-market-logo"
                                  className="rounded-2xl hidden lg:block"
                              />
                          </div>

                          {/* Button */}
                          <div className="flex justify-center mt-4 mb-8">
                              <Link
                                  // target="_blank"
                                  rel="noopener noreferrer"
                                  href="/blueprint"
                              >
                                  <Button className="text-lg rounded-full py-8 px-16 font-semibold">Navigate Floor Plan</Button>
                              </Link>
                          </div>
                      </div>

                      {/* Floor Plan - Desktop */}
                      <div className="cursor-pointer">
                          <Link
                              // target="_blank"
                              rel="noopener noreferrer"
                              href="/blueprint"
                          >
                              <Image
                                  src="/images/home/card02floorPlan.png"
                                  width={1600}
                                  height={1600}
                                  alt="blueprint"
                                  className="rounded-r-2xl hidden lg:block"
                              />
                          </Link>
                      </div>
                  </div>
              </div>

              {/* Design */}
              <div className="p-5 md:p-10 antialiased ">
                  <div
                      className=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto rounded-2xl group transform duration-500 hover:-translate-y-1">
                      <div className="lg:w-6/12  bg-amber-500 rounded-2xl lg:rounded-l-2xl lg:rounded-r-none">
                          {/* Design - Mobile*/}
                          <div className="cursor-pointer">
                              <Link
                                  // target="_blank"
                                  rel="noopener noreferrer"
                                  href="/design"
                              >
                                  <Image
                                      src="/images/home/card04design-compressed.png"
                                      width={1600}
                                      height={1600}
                                      alt="design"
                                      className="rounded-t-2xl lg:hidden"
                                  />
                              </Link>
                          </div>

                          {/* Description */}
                          <div className="p-5 pb-10">
                              <h1 className="text-xl font-semibold text-white mt-4">
                                  Design
                              </h1>
                              <p className=" text-lg text-white mt-2 leading-relaxed">
                                  View the design of Pamilya Market
                              </p>
                          </div>

                          {/* Pamilya Market - logo */}
                          <div className="flex justify-center">
                              <Image
                                  src="/images/home/pamilyaMarketLogoWhite.png"
                                  width={200}
                                  height={200}
                                  alt="pamilya-market-logo"
                                  className="rounded-2xl hidden lg:block"
                              />
                          </div>

                          {/* Button */}
                          <div className="flex justify-center mt-4 mb-8">
                              <Link
                                  // target="_blank"
                                  rel="noopener noreferrer"
                                  href="/design"
                              >
                                  <Button className="text-lg rounded-full py-8 px-16 font-semibold">View Design</Button>
                              </Link>
                          </div>
                      </div>

                      {/* Floor Plan - Desktop */}
                      <div className="cursor-pointer">
                          <Link
                              // target="_blank"
                              rel="noopener noreferrer"
                              href="/design"
                          >
                              <Image
                                  src="/images/home/card04design-compressed.png"
                                  width={1600}
                                  height={1600}
                                  alt="blueprint"
                                  className="rounded-r-2xl hidden lg:block"
                              />
                          </Link>
                      </div>
                  </div>
              </div>

              {/* DTI Registration */}
              <div className="p-5 md:p-10 antialiased ">
                  <div
                      className=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto rounded-2xl group transform duration-500 hover:-translate-y-1">
                      <div className="lg:w-6/12  bg-amber-500 rounded-2xl lg:rounded-l-2xl lg:rounded-r-none">
                          {/* DTI Registration - Mobile*/}
                          <div className="cursor-pointer">
                              <Link
                                  // target="_blank"
                                  rel="noopener noreferrer"
                                  href="/registration"
                              >
                                  <Image
                                      src="/images/home/card01dtiRegistartion.png"
                                      width={1600}
                                      height={1600}
                                      alt="dti-registartion"
                                      className="rounded-t-2xl lg:hidden"
                                  />
                              </Link>
                          </div>

                          {/* Description */}
                          <div className="p-5 pb-10">
                              <h1 className="text-xl font-semibold text-white mt-4">
                                  DTI Registration - Pamilya Marketplace
                              </h1>
                              <p className=" text-lg text-white mt-2 leading-relaxed">
                                  Located in Fairview, Quezon City, NCR - National Capital Region, Second District
                              </p>
                          </div>

                          {/* Pamilya Market - logo */}
                          <div className="flex justify-center">
                              <Image
                                  src="/images/home/pamilyaMarketLogoWhite.png"
                                  width={200}
                                  height={200}
                                  alt="pamilya-market-logo"
                                  className="rounded-2xl hidden lg:block"
                              />
                          </div>

                          {/* Button */}
                          <div className="flex justify-center mt-4 mb-8">
                              <Link
                                  // target="_blank"
                                  rel="noopener noreferrer"
                                  href="/registration"
                              >
                                  <Button className="text-lg rounded-full py-8 px-20 font-semibold">See Registration</Button>
                              </Link>
                          </div>
                      </div>


                      {/* DTI Registration - Desktop*/}
                      <div className="cursor-pointer">
                          <Link
                              // target="_blank"
                              rel="noopener noreferrer"
                              href="/registration"
                          >
                              <Image
                                  src="/images/home/card01dtiRegistartion.png"
                                  width={1600}
                                  height={1600}
                                  alt="dti-registartion"
                                  className="rounded-r-2xl hidden lg:block"
                              />
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Cards