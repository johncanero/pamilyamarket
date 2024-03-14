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

      {/* Vicinity Map Images */}
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
      <div className='md:flex md:flex-wrap my-14 mx-8'>
        <Image
          src="/images/location/post3-streetView1-compressed.png"
          width={600}
          height={600}
          alt="pamilya-market-location"
          className="mx-auto max-w-xs my-7 lg:max-w-full rounded-2xl lg:rounded-3xl"
        />
        <Image
          src="/images/location/post3-streetView2-compressed.png"
          width={600}
          height={600}
          alt="pamilya-market-location"
          className="mx-auto max-w-xs my-7 lg:max-w-full rounded-2xl lg:rounded-3xl"
        />
        <Image
          src="/images/location/post3-streetView3-compressed.png"
          width={600}
          height={600}
          alt="pamilya-market-location"
          className="mx-auto max-w-xs my-7 lg:max-w-full rounded-2xl lg:rounded-3xl"
        />
        <Image
          src="/images/location/post3-streetView4-compressed.png"
          width={600}
          height={600}
          alt="pamilya-market-location"
          className="mx-auto max-w-xs my-7 lg:max-w-full rounded-2xl lg:rounded-3xl"
        />
        {/* <Image
          src="/images/location/post3-streetView5-compressed.png"
          width={600}
          height={600}
          alt="pamilya-market-location"
          className="mx-auto max-w-xs my-7 lg:max-w-full rounded-2xl lg:rounded-3xl"
        /> */}
      </div>
    </div>
  )
}

export default page