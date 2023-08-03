import React from "react";
import Logo from "@/components/Logo";
import NavBar from "../../components/NavBar";

export default function Header() {
  return (
    <header className="py-[36px] px-[20px] md:pt-[24px] md:pb-[64px] md:px-[32px] lg:pb-[48px] lg:px-[104px]">
      <div className="container">
        <div className="flex items-center justify-between">
          <Logo />
          <NavBar />
        </div>
      </div>
    </header>
  );
}
