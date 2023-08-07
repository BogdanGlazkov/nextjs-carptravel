"use client";

import { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import data from "@/data/offers.json";
import Slide from "@/components/Slide";
import { ISlideProps } from "../../types/interfaces";

export default function Offers() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanseRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
  });

  return (
    <section className="relative" id="services">
      <ul className="keen-slider" ref={sliderRef}>
        {data.slides.map((slide: ISlideProps) => (
          <li key={slide.id}>
            <Slide {...slide} />
          </li>
        ))}
      </ul>

      {loaded && instanseRef.current ? (
        <div className="absolute top-[calc(50%+85px)] left-[7%] md:top-[180px] md:left-[calc(50%+130px)] lg:top-[244px] lg:left-[calc(50%+85px)] flex flex-col items-start gap-[16px] lg:gap-[24px] max-w-[211px] lg:max-w-[455px] z-10">
          {data.buttons.map((button, idx) => (
            <button
              className={`${
                currentSlide === idx
                  ? "text-white font-medium dotted flex items-center gap-[8px]"
                  : " text-white/50"
              } uppercase text-left text-[20px] md:text-[22px] lg:text-[28px] leading-[0.8] font-extralight cursor-pointer`}
              key={idx}
              onClick={() => instanseRef.current?.moveToIdx(idx)}
            >
              {button}
            </button>
          ))}
        </div>
      ) : null}
    </section>
  );
}
