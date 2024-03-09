/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="bg-amber-600">
            <div className="mx-7 md:mx-24 lg:mx-60 my-8 flex justify-between">
                <p className="text-xs md:text-xl text-white">Experience Fairview's freshest.</p>
                <p className="text-xs md:text-xl text-white">Stay in Touch</p>
            </div>

            <div className="mx-7 md:mx-24 lg:mx-60 mt-4 mb-24 flex justify-between">
                <p className="text-xl md:text-3xl font-bold tracking-tighter text-white">Follow Pamilya Market</p>
                {/* Icons */}
                {/* All rights reserved */}
            </div>
            <footer className="my-4 text-sm text-center text-white md:block">
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