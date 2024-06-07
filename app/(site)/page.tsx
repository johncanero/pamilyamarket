'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"

import Cards from "@/components/Cards";

const hover = {
  variantA: { scale: 1 },
  variantB: { scale: 1.25 }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Pamilya Market Logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        variants={hover}
        whileHover={"variantB"}
      >
        <Image
          src="/images/logo/pamilyaMarketLogo.png"
          width={350}
          height={350}
          alt="pamilya-market-logo"
          className="mx-auto lg:my-28 my-16 max-w-xs md:max-w-full"
        />
      </motion.div>

      {/* Cards */}
      <Cards />
    </div >
  );
}
