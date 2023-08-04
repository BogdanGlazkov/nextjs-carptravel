import React from "react";
import Image from "next/image";
import { ISlideProps } from "../types/interfaces";

export default function Slide(slide: ISlideProps) {
  const { bg_image, date, image, subtitle, descr } = slide;
  return (
    <div className="relative keen-slider__slide py-[54px] md:py-[64px] lg:py-[104px]">
      <Image
        className="absolute top-0 left-0 bottom-0 right-0 -z-10 object-cover object-center"
        src={bg_image.src}
        alt={bg_image.alt}
        fill
        quality={100}
        sizes="100vw"
      />
      <div className="container">
        <div className="mb:[14px] md:mb[40px] lg:mb[20px] md:flex md:justify-between md:items-center">
          <h2 className="title xs:mb-[24px]">
            <span className="font-thin">WE </span>OFFER
          </h2>
          <p className="text-[43px] md:text-[67px] lg:text-[98px] font-thin text-end">
            {date.day}
            <span className="text-white/20">{date.month}</span>
          </p>
        </div>

        <div>
          <Image
            className="w-full md:w-[463px] md:h-[370px] lg:w-[608px] lg:h-[434px] mb-[12px] md:mb-0 object-cover object-center"
            src={image.src}
            alt={image.alt}
            width={280}
            height={214}
          />
          <div>
            <p className="text-[12px] text-end md:text-start font-extralight tracking-[2.4px] mb-[224px] md:mb-[34px] lg:mb-[244px]">
              {subtitle}
            </p>
            <p className="text-[14px] md:text-[13px] lg:text-[18px] font-extralight leading-[20px] lg:leading-[24px] lg:max-w-[293px] md:text-justify">
              {descr}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
