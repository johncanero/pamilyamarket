import React from 'react'
import type { Metadata } from "next";
import Image from 'next/image'

export const metadata: Metadata = {
    title: "Blueprint | Pamilya Market",
    description: "Fairview's freshest! Nourish your family with quality meats, fish, veggies & more.",
    icons: {
        icon: '/images/logo/pamilyaMarketLogo.png',
        shortcut: '/images/logo/pamilyaMarketLogo.png',
    },
};

const page = () => {
  return (
      <div className="flex flex-col min-h-screen">
  
      </div>
  )
}

export default page