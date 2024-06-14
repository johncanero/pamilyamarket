import React from 'react'
import type { Metadata } from "next";
import Image from 'next/image'
import { LocationMap } from '@/components/LocationMap';


export const metadata: Metadata = {
  title: "Location | Pamilya Market",
  description: "Fairview's freshest! Nourish your family with quality meats, fish, veggies & more.",
  icons: {
    icon: '/images/logo/pamilyaMarketLogo.png',
    shortcut: '/images/logo/pamilyaMarketLogo.png',
  },
};


const page = () => {
  return (
    <div>
      {/* Location Post */}
      <Image
        src="/images/location/post1-location-compressed.png"
        width={600}
        height={600}
        alt="pamilya-market-location"
        className="mx-auto max-w-xs my-14 md:max-w-lg lg:max-w-full rounded-2xl lg:rounded-3xl"
      />

      {/* Vicinity Map */}
      <div className="overflow-hidden rounded-md">
        <Image
          src="/images/location/post2-vicinityMap-compressed.png"
          width={350}
          height={350}
          alt="pamilya-market-location"
          className="rounded-2xl mx-auto md:hidden lg:rounded-3xl"
        />

        <Image
          src="/images/location/post2-vicinityMap-compressed.png"
          width={550}
          height={550}
          alt="pamilya-market-location"
          className="rounded-2xl mx-auto hidden md:block lg:hidden lg:rounded-3xl"
        />
      </div>
      {/* Google Pin  */}
      <div className='flex justify-center mt-7 mb-14 mx-8'>        
        <LocationMap />
      </div>

      {/* Google Images */}
      <div className='md:flex md:flex-wrap mb-16 mx-8 lg:mx-44'>
        <Image
          src="/images/location/post3-streetView1-compressed.png"
          width={400}
          height={400}
          alt="pamilya-market-location"
          className="mx-auto max-w-xs my-10 lg:max-w-full rounded-2xl lg:rounded-3xl"
        />
        <Image
          src="/images/location/post3-streetView2-compressed.png"
          width={400}
          height={400}
          alt="pamilya-market-location"
          className="mx-auto max-w-xs my-10 lg:max-w-full rounded-2xl lg:rounded-3xl"
        />
        <Image
          src="/images/location/post3-streetView3-compressed.png"
          width={400}
          height={400}
          alt="pamilya-market-location"
          className="mx-auto max-w-xs my-10 lg:max-w-full rounded-2xl lg:rounded-3xl"
        />
        <Image
          src="/images/location/post3-streetView4-compressed.png"
          width={400}
          height={400}
          alt="pamilya-market-location"
          className="mx-auto max-w-xs my-10 lg:max-w-full rounded-2xl lg:rounded-3xl"
        />
        <Image
          src="/images/location/post3-streetView5-compressed.png"
          width={400}
          height={400}
          alt="pamilya-market-location"
          className="mx-auto max-w-xs my-10 lg:max-w-full rounded-2xl lg:rounded-3xl"
        />
      </div>
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
    </div>
  )
}

export default page