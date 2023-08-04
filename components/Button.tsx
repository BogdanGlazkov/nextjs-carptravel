"use client";

import { ReactNode } from "react";
import { Link } from "react-scroll";

export default function Button({ children }: { children: ReactNode }) {
  return (
    <Link
      className="btn relative w-full flex justify-center items-center text-[18px] lg:text-[32px] font-bold py-[14px] bg-white/5 hover:bg-white/20 uppercase cursor-pointer"
      to="contact"
      smooth={true}
      spy={true}
      hashSpy={true}
      duration={600}
      isDynamic={true}
    >
      <span>{children}</span>
    </Link>
  );
}
