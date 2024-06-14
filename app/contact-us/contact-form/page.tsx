import React from 'react'
import Link from 'next/link'

import Contact from '@/components/contact'

const page = () => {
  return (
    <div className='flex flex-col min-h-screen items-center mb-32'>
      {/* Google Maps */}
      <div id="map" className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.2295261507816!2d121.06072541091176!3d14.699608074585264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b1dd3343495d%3A0xd4a83e448732ebe7!2sPamilya%20Market!5e0!3m2!1sen!2sus!4v1718303939663!5m2!1sen!2sus"
          loading="lazy"
          className='w-screen border-0'
          width="600" height="450"
          allowFullScreen
          referrerPolicy='no-referrer-when-downgrade'
        >
        </iframe>
      </div>

      {/* Contact Us */}
      <div className="container px-6 md:px-12">
        <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[72px] backdrop-blur-[30px]">
          <h1 className='text-center pb-16 text-2xl text-amber-600 font-bold'>Contact Us</h1>
          <div className="flex flex-wrap">
            {/* Contact Component */}
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
              <Contact />
            </div>

            {/* Information */}
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div className="flex flex-wrap">
                {/* Technical Support */}
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-orange-200 p-4 text-primary">
                        {/* Call Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                          stroke="currentColor" className="h-7 w-7">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                        </svg>
                      </div>
                    </div>

                    {/* Technical Support */}
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold ">
                        Technical support
                      </p>
                      <p className="text-sm text-neutral-500">
                        pamilyamarketph@gmail.com
                      </p>
                      {/* Messenger */}
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://m.me/pamilyamarketph"
                      >
                        <p className="text-amber-600 text-sm underline hover:text-amber-700">http://m.me/pamilyamarketph</p>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                  <div className="flex items-start">
                    <div className="srink-0">
                      <div className="inline-block rounded-md bg-orange-200 p-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                          stroke="currentColor" className="w-7 h-7">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold ">
                        Address
                      </p>
                      <p className="text-sm text-neutral-500">
                        Lot 9N, Dahlia Avenue corner Iris Street, Barangay Fairview,<br></br>
                        Quezon City, Philippines <br></br>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Facebook */}
                <div
                  className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                  <div className="align-start flex">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-orange-200 p-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='w-7 h-7' viewBox="0 0 26 26">
                          <path d="M 21.125 0 L 4.875 0 C 2.183594 0 0 2.183594 0 4.875 L 0 21.125 C 0 23.816406 2.183594 26 4.875 26 L 21.125 26 C 23.816406 26 26 23.816406 26 21.125 L 26 4.875 C 26 2.183594 23.816406 0 21.125 0 Z M 20.464844 14.003906 L 18.03125 14.003906 L 18.03125 23.007813 L 13.96875 23.007813 L 13.96875 14.003906 L 12.390625 14.003906 L 12.390625 10.96875 L 13.96875 10.96875 L 13.96875 9.035156 C 13.96875 6.503906 15.019531 5 18.007813 5 L 21.03125 5 L 21.03125 8.023438 L 19.273438 8.023438 C 18.113281 8.023438 18.035156 8.453125 18.035156 9.265625 L 18.03125 10.96875 L 20.796875 10.96875 Z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold ">Facebook</p>
                      <p className="text-neutral-500"> Pamilya Market</p>
                      {/* Facebook */}
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.facebook.com/pamilyamarketph"
                      >
                        <p className="text-amber-600 underline text-sm hover:text-amber-700">facebook.com/pamilyamarketph</p>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Instagram */}
                <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                  <div className="align-start flex">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-orange-200 p-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='w-7 h-7' viewBox="0 0 24 24">
                          <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold ">Instagram</p>
                      <p className="text-neutral-500"> pamilyamarket
                      </p>
                      {/* Instagram */}
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/pamilyamarket"
                      >
                        <p className="text-amber-600 underline text-sm hover:text-amber-700">instagram.com/pamilyamarket</p>
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default page