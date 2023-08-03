import React from "react";
import { Link } from "react-scroll";
import data from "@/data/navigation.json";
import { INavigate } from "@/types/interfaces";

export default function Navigation({ onClick }: INavigate) {
  return (
    <nav>
      <ul className="flex flex-col md:flex-row gap-[48px] md:gap-[24px] lg:gap-[56px] items-center justify-center max-w-[386px] lg:max-w-[514px]">
        {data.map((item) => (
          <li key={item.id}>
            <Link
              className="text-[18px] md:text-[14px] border-b border-b-transparent duration-300 hover:border-b-white focus:border-b-white cursor-pointer"
              to={item.link}
              smooth={true}
              spy={true}
              hashSpy={true}
              duration={600}
              onClick={onClick}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
