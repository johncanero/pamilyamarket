import React from 'react'

import Contact from '@/components/contact'

const page = () => {
  return (
    <div className ='flex flex-col min-h-screen items-center'>
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

      {/* Contact Component */ }
      <Contact />
    </div>
  )
}

export default page