import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="w-[61px] h-[33px] cursor-pointer">
      <Link href="/">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={61}
          height={33}
          aria-label="CarpTravel logo"
        />
      </Link>
    </div>
  );
}
