import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div >
        <Image
          src="/images/logo/pamilyaMarketLogo.png"
          width={350}
          height={350}
          alt="pamilya-market-logo"
          className="mx-auto lg:mt-48 mt-44 max-w-xs md:max-w-full"
        />
      </div>
    </div>
  );
}
