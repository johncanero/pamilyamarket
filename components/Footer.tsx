import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <div>
            <footer className="my-4 text-sm text-center text-gray-500 md:block">
                <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/pamilyamarketph"
                >

                    <span className=" font-semibold text-gray-900 dark:text-gray-100 mr-1">
                        Pamilya Market 
                    </span>
                </Link> 
                &copy; {new Date().getFullYear()} All Rights Reserved
            </footer>
        </div>
    );
}

export default Footer;