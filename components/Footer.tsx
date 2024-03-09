import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <div>
            {/* All rights reserved */}
            <footer className="my-4 text-sm text-center text-gray-500 md:block">
                <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/pamilyamarketph"
                >

                    <span className=" font-semibold bg-gradient-to-r from-red-400 via-amber-500 to-yellow-500 inline-block text-transparent bg-clip-text mr-1">
                        Pamilya Market 
                    </span>
                </Link> 
                &copy; {new Date().getFullYear()} All rights reserved.
            </footer>
        </div>
    );
}

export default Footer;