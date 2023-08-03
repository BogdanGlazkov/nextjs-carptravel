import React from "react";

export default function Hero() {
  return (
    <section className="hero md:py-[64px] lg:pt-[48px] lg:pb-[80px]">
      <div className="container md:flex md:gap-[48px] lg:gap-[281px]">
        <div className="md:hidden flex flex-col items-end mb-[24px]">
          <p className="text-[37px] font-thin uppercase">
            <span className="font-medium">7</span>
            Days
          </p>
          <p className="text-[12px] font-light uppercase">journey</p>
        </div>

        <div className="w-[280px] md:w-[426px] lg:w-[646px]">
          <h1 className="text-[40px] md:text-[67px] lg:text-[98px] mb-[24px] md:mb-[68px] lg:mb-[148px] uppercase">
            Uncover <span>Carpathian’s Secrets</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
