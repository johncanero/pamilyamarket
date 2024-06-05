/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
    return (
        <div className="bg-amber-600">
            <div className="mx-7 md:mx-24 lg:mx-60 my-8 flex justify-between">
                <p className="text-xs md:text-xl text-white">Experience Fairview's freshest.</p>
                <p className="text-xs md:text-xl text-white">Stay in Touch</p>
            </div>

            <div className="mx-7 md:mx-24 lg:mx-60 mt-4 mb-24 flex justify-between">
                <p className="text-xl md:text-3xl font-bold tracking-tighter text-white">Follow Pamilya Market</p>
                <div className="flex gap-x-4 md:gap-x-5">
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.facebook.com/pamilyamarketph"
                    >
                        <FaFacebookF size={24} className="text-white hover:text-opacity-70" />
                    </Link>

                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/pamilyamarket/"
                    >
                        <TiSocialInstagram size={28} className="text-white hover:text-opacity-70" />
                    </Link>
                </div>
            </div>

            {/* All rights reserved */}
            <footer className="my-4 text-base text-center text-white md:block">
                <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/pamilyamarketph"
                >

                    <span className=" font-semibold text-white mr-1">
                        Pamilya Market
                    </span>
                </Link>
                &copy; {new Date().getFullYear()} All rights reserved.
            </footer>
        </div>
    );
}

export default Footer;