"use client";
import { useState } from "react";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";

export default function Offers() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="relative" id="services">
      <ul></ul>
    </section>
  );
}
