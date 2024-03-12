import React from 'react'
import type { Metadata } from "next";
import Image from 'next/image'


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
          <Image
              src="/images/location/post1-location-compressed.png"
              width={600}
              height={600}
              alt="pamilya-market-location"
              className="mx-auto max-w-xs my-16 md:max-w-full rounded-3xl"
          />
    </div>
  )
}

export default page