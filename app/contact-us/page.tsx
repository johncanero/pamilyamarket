/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <div className="flex flex-col min-h-screen lg:my-24 my-16 mx-8 md:mx-32">
            <div>
                <h1 className='text-amber-600 font-bold text-2xl lg:text-3xl text-center'>CONTACT US</h1>
            </div>

            <p className='text-center mt-12 font-light text-zinc-500 text-lg lg:text-xl'>We're here to help and value your feedback. How can we assist you? Let's connect.</p>

            {/* For support */}
            <div className='mt-8'>
                {/* Contact Form */}
                <div className='lg:flex'>
                    <p className='text-center text-zinc-800 font-normal text-lg lg:text-2xl'>For support regarding your Pamilya Market order or feedback in our public community market,</p>
                    <div className='flex justify-center'>
                        {/* Contact Form */}
                        <Link
                            // target="_blank"
                            rel="noopener noreferrer"
                            href="/contact-us/contact-form"
                        >
                            <p className="text-amber-600 text-lg lg:text-2xl ml-1 text-center underline hover:text-amber-700">click here</p>
                        </Link>
                        <p className='text-amber-600 text-lg lg:text-2xl'>.</p>
                    </div>
                </div>

                {/* Messenger */}
                <div className='lg:flex justify-center my-6'>
                    <p className='text-center text-zinc-500 font-light text-lg lg:text-xl'>or message us in Messenger, </p>
                    <div className='flex justify-center'>
                        {/* Messenger */}
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://m.me/pamilyamarketph"
                        >
                            <p className="text-amber-600 text-lg lg:text-xl ml-1 text-center underline hover:text-amber-700">click here</p>
                        </Link>
                        <p className='text-amber-600 text-lg lg:text-xl'>.</p>
                    </div>
                </div>
            </div>

            {/* https://medium.com/@abilsavio/email-contact-form-using-nextjs-app-router-60c29fe70644 */}
        </div>
    )
}

export default page