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
    </section>
  );
}
