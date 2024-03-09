import Image from "next/image";

export default function Home() {
  return (
    <div>
        <Image
          src="/images/logo/pamilyaMarketLogo.png"
          width={250}
          height={250}
          alt="pamilya-market-logo"
          className="mx-auto"
        />
    </div>
  );
}
