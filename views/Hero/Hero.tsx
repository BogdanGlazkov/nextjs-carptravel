import React from "react";
import Button from "@/components/Button";

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
          <h1 className="text-[40px] md:text-[67px] lg:text-[98px] mb-[24px] md:mb-[68px] lg:mb-[148px] uppercase tracking-[-1.6px] md:tracking-[-2.68px] lg:tracking-[-3.92px]">
            Uncover <span className="font-thin">Carpathian’s Secrets</span>
          </h1>
          <p className="text-[10px] md:text-[14px] lg:text-[16px] font-extralight leading-[16px] lg:leading-[24px] md:tracking-[1.26px] lg:tracking-[1.44px] max-w-[157px] md:max-w-[265px] lg:max-w-[608px] mb-[24px]">
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
          </p>
        </div>

        <div>
          <div className="hidden md:flex md:flex-col md:items-end md:mb-[56px] lg:mb-[181px]">
            <p className="text-[67px] lg:text-[98px] font-thin tracking-[8.71px] uppercase">
              <span className="font-medium">7</span>
              Days
            </p>
            <p className="lg:text-[16px] font-light tracking-[25.9px] lg:tracking-[36.48px] uppercase">
              journey
            </p>
          </div>
          <p className="font-extralight md:text-[16px] lg:text-[18px] leading-[20px] lg:leading-[24px] mb-[24px] md:mb-[28px]">
            We offer you unforgettable trips to the most beautiful parts of the
            Carpathians. Enjoy stunning views, exciting expeditions, and the
            best service!
          </p>
          <Button>Join now</Button>
        </div>
      </div>
    </section>
  );
}
