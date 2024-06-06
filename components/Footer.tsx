/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
    return (
        <div className="bg-amber-600">
            {/* Pages - Desktop */}
            <div className="pt-10 lg:px-60 lg:flex lg:justify-between hidden ">
                {/* Pages */}
                <div>
                    {/* Home */}
                    <Link
                        // target="_blank"
                        rel="noopener noreferrer"
                        href="/"
                        className="lg:text-3xl font-bold text-white hover:underline hover:opacity-50"
                    >
                        Home
                    </Link>

                    <br></br>
                    <br></br>

                    {/* Location */}
                    <Link
                        // target="_blank"
                        rel="noopener noreferrer"
                        href="/location"
                        className="lg:text-3xl font-bold text-white hover:underline hover:opacity-50"
                    >
                        Location
                    </Link>

                    <br></br>
                    <br></br>

                    {/* Blueprint */}
                    <Link
                        // target="_blank"
                        rel="noopener noreferrer"
                        href="/blueprint"
                        className="lg:text-3xl font-bold text-white hover:underline hover:opacity-50"
                    >
                        Blueprint
                    </Link>

                    <br></br>
                    <br></br>

                    {/* Design */}
                    <Link
                        // target="_blank"
                        rel="noopener noreferrer"
                        href="/design"
                        className="lg:text-3xl font-bold text-white hover:underline hover:opacity-50"
                    >
                        Design
                    </Link>

                    <br></br>
                    <br></br>

                    {/* Registration */}
                    <Link
                        // target="_blank"
                        rel="noopener noreferrer"
                        href="/registration"
                        className="lg:text-3xl font-bold text-white hover:underline hover:opacity-50"
                    >
                        Registration
                    </Link>
                </div>

                {/* Other Pages */}
                <div>
                    {/* About Pamilya Market */}
                    <Link
                        // target="_blank"
                        rel="noopener noreferrer"
                        href="/"
                        className="text-white text-lg hover:underline hover:opacity-50"
                    >
                        About Pamilya Market
                    </Link>

                    <br></br>
                    <br></br>

                    {/* Beliefs */}
                    <Link
                        // target="_blank"
                        rel="noopener noreferrer"
                        href="/"
                        className="text-white text-lg hover:underline hover:opacity-50"
                    >
                        Beliefs
                    </Link>

                    <br></br>
                    <br></br>

                    {/* Customer Care */}
                    <Link
                        // target="_blank"
                        rel="noopener noreferrer"
                        href="/"
                        className="text-white text-lg hover:underline hover:opacity-50"
                    >
                        Customer Care
                    </Link>

                    <br></br>
                    <br></br>

                    {/* Popular Links */}
                    <Link
                        // target="_blank"
                        rel="noopener noreferrer"
                        href="/"
                        className="text-white text-lg hover:underline hover:opacity-50"
                    >
                        Popular Links
                    </Link>

                    <br></br>
                    <br></br>

                    {/* Accessibility */}
                    <Link
                        // target="_blank"
                        rel="noopener noreferrer"
                        href="/"
                        className="text-white text-lg hover:underline hover:opacity-50"
                    >
                        Accessibility
                    </Link>

                </div>

                {/* Other Pages */}
                <div>
                    {/* About Pamilya Market */}
                    <Link
                        // target="_blank"
                        rel="noopener noreferrer"
                        href="/"
                        className="text-white text-lg hover:underline hover:opacity-50"
                    >
                        Terms of Use
                    </Link>

                    <br></br>
                    <br></br>

                    {/* Your Privacy */}
                    <Link
                        // target="_blank"
                        rel="noopener noreferrer"
                        href="/"
                        className="text-white text-lg hover:underline hover:opacity-50"
                    >
                        Your Privacy
                    </Link>


                </div>
            </div>

            {/* Pages - Mobile & Tablet */}
            <div className="pt-10 block px-7 md:px-24 lg:hidden">
                {/* Pages */}
                <div className="flex justify-between">
                    {/* Home - Location - Blueprint */}
                    <div>
                        {/* Home */}
                        <Link
                            // target="_blank"
                            rel="noopener noreferrer"
                            href="/"
                            className="text-3xl font-bold text-white hover:underline hover:opacity-50"
                        >
                            Home
                        </Link>

                        <br></br>
                        <br></br>
                        <br></br>

                        {/* Location */}
                        <Link
                            // target="_blank"
                            rel="noopener noreferrer"
                            href="/location"
                            className="text-3xl font-bold text-white hover:underline hover:opacity-50"
                        >
                            Location
                        </Link>

                        <br></br>
                        <br></br>
                        <br></br>

                        {/* Blueprint */}
                        <Link
                            // target="_blank"
                            rel="noopener noreferrer"
                            href="/blueprint"
                            className="text-3xl font-bold mt-16 text-white hover:underline hover:opacity-50"
                        >
                            Blueprint
                        </Link>
                    </div>

                    {/* Design - Registration */}
                    <div>
                        {/* Design */}
                        <Link
                            // target="_blank"
                            rel="noopener noreferrer"
                            href="/design"
                            className="text-3xl font-bold text-white hover:underline hover:opacity-50"
                        >
                            Design
                        </Link>

                        <br></br>
                        <br></br>
                        <br></br>

                        {/* Registration */}
                        <Link
                            // target="_blank"
                            rel="noopener noreferrer"
                            href="/registration"
                            className="text-3xl font-bold text-white hover:underline hover:opacity-50"
                        >
                            Registration
                        </Link>
                    </div>
                </div>

                <div className="my-12">
                    <hr className="border-amber-500"></hr>
                </div>


                {/* Other Pages */}
                <div className="flex justify-between">
                    <div>
                        <div>
                            {/* About Pamilya Market */}
                            <Link
                                // target="_blank"
                                rel="noopener noreferrer"
                                href="/"
                                className="text-white text-lg hover:underline hover:opacity-50"
                            >
                                About Pamilya Market
                            </Link>

                            <br></br>
                            <br></br>

                            {/* Beliefs */}
                            <Link
                                // target="_blank"
                                rel="noopener noreferrer"
                                href="/"
                                className="text-white text-lg hover:underline hover:opacity-50"
                            >
                                Beliefs
                            </Link>

                            <br></br>
                            <br></br>

                            {/* Customer Care */}
                            <Link
                                // target="_blank"
                                rel="noopener noreferrer"
                                href="/"
                                className="text-white text-lg hover:underline hover:opacity-50"
                            >
                                Customer Care
                            </Link>

                            <br></br>
                            <br></br>

                            {/* Popular Links */}
                            <Link
                                // target="_blank"
                                rel="noopener noreferrer"
                                href="/"
                                className="text-white text-lg hover:underline hover:opacity-50"
                            >
                                Popular Links
                            </Link>

                            <br></br>
                            <br></br>

                            {/* Accessibility */}
                            <Link
                                // target="_blank"
                                rel="noopener noreferrer"
                                href="/"
                                className="text-white text-lg hover:underline hover:opacity-50"
                            >
                                Accessibility
                            </Link>
                        </div>




                    </div>

                    <div>
                        {/* About Pamilya Market */}
                        <Link
                            // target="_blank"
                            rel="noopener noreferrer"
                            href="/"
                            className="text-white text-lg hover:underline hover:opacity-50"
                        >
                            Terms of Use
                        </Link>

                        <br></br>
                        <br></br>


                        {/* Your Privacy */}
                        <Link
                            // target="_blank"
                            rel="noopener noreferrer"
                            href="/"
                            className="text-white text-lg hover:underline hover:opacity-50"
                        >
                            Your Privacy
                        </Link>
                    </div>
                </div>
            </div>
            
            {/* Horizontal Line */}
            <div className="lg:my-16 my-12 px-7 md:px-24 lg:px-60">
                <hr className="border-amber-500"></hr>
            </div>

            {/* Experience & Stay In Touch - Desktop & Tablet  */}
            <div className="hidden md:block">
                {/* Experience Fairview's Freshest */}
                <div className="my-8 mt-0 px-7 md:px-24 lg:px-60 flex justify-between">
                    <p className="text-xs md:text-xl text-white">Experience Fairview's freshest.</p>
                    <p className="text-xs md:text-xl text-white">Stay in Touch</p>
                </div>

                {/* Follow Pamilya Market */}
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
            </div>

            {/* Experience & Stay In Touch - Mobile  */}
            <div className="md:hidden block mx-7">
                {/* Experience Fairview's Freshest */}
                <div>
                    <p className="text-base text-white">Experience Fairview's freshest.</p>
                    <p className="text-3xl font-bold tracking-tighter mt-4 text-white">Follow Pamilya Market</p>
                </div>
                
                {/* Stay in Touch */}
                <div className="mt-20">
                    <p className="text-base text-white">Stay in Touch</p>
                    <div className="flex gap-x-7 mt-8">
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

            </div>

            {/* Horizontal Line */}
            <div className="lg:my-16 my-12 px-7 md:px-24 lg:px-60">
                <hr className="border-amber-500"></hr>
            </div>

            {/* All rights reserved */}
            <footer className="my-4 text-base px-7 md:px-24 lg:px-60 text-white md:block">
                {/* <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/pamilyamarketph"
                >
                </Link> */}

                &copy; {new Date().getFullYear()}
                <span className=" font-semibold text-white mx-1">
                    Pamilya Market.
                </span>

                All rights reserved.
            </footer>
        </div>
    );
}

export default Footer;