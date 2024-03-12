import React from 'react'
import Image from 'next/image'

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