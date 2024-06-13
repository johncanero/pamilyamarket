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

      <div className="container px-6 md:px-12">
        <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
              {/* Contact Component */}
              <Contact />
            </div>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div className="flex flex-wrap">
                {/* Technical Support */}
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-orange-200 p-4 text-primary">
                        {/* Call Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                          stroke="currentColor" className="h-6 w-6">
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
                      <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
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
              </div>

            </div>


          </div>
        </div>
      </div>

    </div>
  )
}

export default page