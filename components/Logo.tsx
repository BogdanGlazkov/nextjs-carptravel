"use client";

import Link from "next/link";
import Image from "next/image";

import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        className="cursor-pointer"
        src="/images/logo.svg"
        alt="Logo"
        width={61}
        height={33}
      />
    </Link>
  );
}
