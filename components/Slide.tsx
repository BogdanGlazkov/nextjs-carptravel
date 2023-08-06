import React from "react";
import Image from "next/image";
import { ISlideProps } from "../types/interfaces";

export default function Slide(slide: ISlideProps) {
  const { bg_image, date, image, subtitle, descr } = slide;

  const getPrefix = (src: string) => {
    if (window.innerWidth < 768) return src;
    return window.innerWidth > 1280
      ? src.replace(".jpg", "-lg.jpg")
      : src.replace(".jpg", "-md.jpg");
  };

  return (
    <div className="relative keen-slider__slide py-[54px] md:py-[64px] lg:py-[104px]">
      <Image
        className="absolute top-0 left-0 bottom-0 right-0 -z-10 object-cover object-center"
        src={getPrefix(bg_image.src)}
        alt={bg_image.alt}
        fill
        quality={100}
        sizes="100vw"
      />
      <div className="container">
        <div className="mb:[14px] md:mb[40px] lg:mb[20px] md:flex md:gap-[170px] lg:gap-[162px] md:items-center">
          <h2 className="title xs:mb-[24px]">
            <span className="font-thin">WE </span>OFFER
          </h2>
          <p className="text-[43px] md:text-[67px] lg:text-[98px] font-thin text-end">
            {date.day}
            <span className="text-white/20">{date.month}</span>
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between md:gap-[20px] lg:gap-[332px]">
          <Image
            className="w-full h-auto md:w-[463px] md:h-[370px] lg:w-[608px] lg:h-[434px] mb-[12px] md:mb-0 object-cover object-center"
            src={getPrefix(image.src)}
            alt={image.alt}
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className="w-full flex flex-col gap-[224px] md:gap-[34px] lg:justify-between mdOnly:mt-[197px]">
            <p className="text-[12px] text-end md:text-start font-extralight tracking-[2.4px]">
              {subtitle}
            </p>
            <p className="flex-grow text-[14px] md:text-[13px] lg:text-[18px] font-extralight leading-[20px] lg:leading-[24px] lg:max-w-[293px] md:text-justify">
              {descr}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
